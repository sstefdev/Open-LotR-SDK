const fs = require("fs");

function readFileSync() {
  return fs.readFileSync("./.env", { encoding: "utf-8" });
}

function parseEnvFile(envFileContent) {
  const envConfig = {};
  const lines = envFileContent.toString().split("\n");
  for (const line of lines) {
    const [key, value] = line.split("=");
    envConfig[key.trim()] = value.trim();
  }
  return envConfig;
}

function loadEnv() {
  const envFileContent = readFileSync();
  const envConfig = parseEnvFile(envFileContent);
  Object.entries(envConfig).forEach(([key, value]) => {
    process.env[key] = value;
  });
}

module.exports = { loadEnv };
