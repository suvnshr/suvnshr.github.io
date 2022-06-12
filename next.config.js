const debug = process.env.NODE_ENV !== "production";

const githubUsername = "suvnshr"; 

module.exports = {
  assetPrefix: !debug ? `https://${githubUsername}.github.io/` : '',
}