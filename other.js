// Config2
const getConfig = async (url) => { const response = await fetch(url); const data = await response.json(); return data; }; const dec3ptions_config = await getConfig("https://raw.githubusercontent.com/dec3ptions/orbital/hacks/config.json");

console.log(dec3ptions_config);
console.log(dec3ptions_config['1_rapidLevelbased'])

// Get specific daggers
var weapon_id_choice = String(prompt("Input the weapon id")); var weapon_amt_coice = Number(prompt("How many do you want")); var n = await sync.async_get("w_"+weapon_id_choice) || 0; sync.async_set("w_"+weapon_id_choice, n+weapon_amt_coice); dagger_selection.init();

// Get rapid specific daggers
var rapid_weapon_id_choice = String(prompt("Input the weapon id")); setInterval(async () => { var n = await sync.async_get("w_"+rapid_weapon_id_choice) || 0; await sync.async_set("w_"+rapid_weapon_id_choice, n+1); await dagger_selection.init(); }, 10);

