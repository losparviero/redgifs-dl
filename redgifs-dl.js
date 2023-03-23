#!/usr/bin/env node

/*!
 * Redgifs-dl
 * Copyright (c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

const input = require("input");
const { download } = require("./lib/index");

async function getLink() {
  let url;

  // Input

  do {
    url = await input.text("Enter Redgifs link:", { default: null });
    if (url == null) {
      console.log("Enter a valid Redgifs link.");
    } else if (
      !url.match(/^(https?:\/\/)?(www\.)?redgifs\.com\/watch\/([a-zA-Z0-9]+)$/i)
    ) {
      console.log("Enter a valid Redgifs link.");
      url = null;
    }
  } while (url == null);
  return url;
}

async function getDownload() {
  try {
    const url = await getLink();
    const downloadLink = await download(url);
    console.log(downloadLink);
  } catch (error) {
    console.error(error);
  }
}

getDownload();
