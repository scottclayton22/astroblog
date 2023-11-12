import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://beatblog.netlify.app", // replace this with your deployed domain
  author: "Scott Clayton",
  desc: "Helpful resources for modern day music production. Made by beatmakers for beatmakers",
  title: "Beatmaker Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
