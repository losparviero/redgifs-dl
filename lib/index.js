#!/usr/bin/env node

/*!
 * Redgifs-dl
 * Copyright (c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license AGPL-3.0
 */

"use strict";

const puppeteer = require("puppeteer");

async function download(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url);
  const videoElement = await page.$("video");
  const videoSrc = await videoElement.evaluate((el) => el.getAttribute("src"));
  await browser.close();
  return videoSrc;
}

module.exports = { download };
