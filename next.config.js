const debug = process.env.NODE_ENV !== "production";

const githubUsername = "suvansh-rana"; 

module.exports = {
  assetPrefix: !debug ? `https://${githubUsername}.github.io/` : '',
}