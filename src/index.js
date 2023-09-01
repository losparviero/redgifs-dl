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

async function main() {
  const userInput = await input.text("Enter Redgifs link to download:");
  const match = userInput.match(regex);

  if (match) {
    const gifId = match[1];
    fs.writeFileSync("redgif.mp4", await getGif(gifId));
  } else {
    console.log("Not a valid RedGifs link.");
  }
}

main();
