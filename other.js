var config2 = {};
async function getConfig() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/dec3ptions/orbital/hacks/config.json');
    const data = await response.json();
    config2 = data;
    console.log(config2);
    return config2;
  } catch (error) {
    console.error(error);
  }
}
(async function() {
  await getConfig();
  console.log(config2);
})();