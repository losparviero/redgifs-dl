#!/usr/bin/env node

/*!
 * Redgifs-dl
 * Copyright (c) 2023 to present.
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

import input from "input";
import fs from "fs";
import { getGif } from "redgif";
const regex = /https:\/\/www\.redgifs\.com\/watch\/(\w+)/;

let continueChoice = true;
while (continueChoice) {
  const userInput = await input.text("Enter Redgifs link to download:");
  const match = userInput.match(regex);

  if (match) {
    const gifId = match[1];
    console.log("Downloading");
    fs.writeFileSync(`${gifId}.mp4`, await getGif(gifId));
    console.log(`${gifId}.mp4 saved to ${process.cwd()}`);
  } else {
    console.log("Not a valid RedGifs link.");
  }

  continueChoice = await input.confirm("Do you want to download another?");
  if (!continueChoice) {
    break;
  }
}
process.exit();
