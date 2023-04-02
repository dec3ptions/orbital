// Variables
const getConfig = async (url) => { const response = await fetch(url); const data = await response.json(); return data; }; const dec3ptions_config = await getConfig("https://raw.githubusercontent.com/dec3ptions/orbital/hacks/config.json");

const dec3ptions_blueprint = [
  
  { "id": "dec3ptions_1_specific", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_specific.js", "function": async function() { var weapon_id_choice = String(prompt("Which weapon, in the weapon list, do you want to get?")); var weapon_amt_coice = Number(prompt("How many do you want to get?")); var n = await sync.async_get("w_"+weapon_id_choice) || 0; sync.async_set("w_"+weapon_id_choice, n+weapon_amt_coice); dagger_selection.init() } },
  { "id": "dec3ptions_1_rapidSpecific", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_rapidSpecific.js", "function": async function() { var rapid_weapon_id_choice = String(prompt("Which weapon, in the weapon list, do you want to get?")); setInterval(async () => { var n = await sync.async_get("w_"+rapid_weapon_id_choice) || 0; await sync.async_set("w_"+rapid_weapon_id_choice, n+1); await dagger_selection.init(); }, 10) } },
  { "id": "dec3ptions_1_levelbased", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_levelbased.js", "function": function() { dagger_selection.reward_level_clear();console.clear();console.log('Opened!'); } },
  { "id": "dec3ptions_1_rapidLevelbased", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_rapidLevelbased.js", "function": function() { setInterval(function dailyRewards() {dagger_selection.reward_level_clear();console.clear();console.log('Opened!');}, 20); } },
  { "id": "dec3ptions_1_999x", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_1_999x.js", "function": function() { var daggers = [{"id": "starter_sword"}, {"id": "spear1"}, {"id": "kitchen_knife"}, {"id": "spear2"}, {"id": "bullet"}, {"id": "banana"}, {"id": "short_dagger"}, {"id": "katana"}, {"id": "cool1"}, {"id": "pixel1"}, {"id": "diaknife"}, {"id": "carrotknife"}, {"id": "axe"}, {"id": "battle_axe"}, {"id": "claw"}, {"id": "eye_piercer"}, {"id": "long_axe"}, {"id": "mace"}, {"id": "rocket"}, {"id": "staff"}, {"id": "wolverine"}, {"id": "longsword"}, {"id": "broom"}, {"id": "speedsword"}, {"id": "shield"}, {"id": "pendulum"}, {"id": "slow_pendulum"}, {"id": "long_pendulum"}, {"id": "butterfly"}, {"id": "lol_fist"}, {"id": "superfast"}, {"id": "tiny_fast_dagger"}, {"id": "wearable"}];for (let i = 0; i < daggers.length; i++) {sync.async_set("w_"+daggers[i].id, 999);};dagger_selection.init(); } },

  { "id": "dec3ptions_2_dagger", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_2_dagger.js", "function": function() { var option_equipDaggers_equipDagger = "";let choice_EQUIP_DAGGERS_DAGGER_weapon_id = prompt("Which weapon (in weaponList) to equip.", option_equipDaggers_equipDagger);if (choice_EQUIP_DAGGERS_DAGGER_weapon_id == null || choice_EQUIP_DAGGERS_DAGGER_weapon_id == "") {return} else {option_equipDaggers_equipDagger = choice_EQUIP_DAGGERS_DAGGER_weapon_id};dagger_selection.equip_dagger(option_equipDaggers_equipDagger); } },
  { "id": "dec3ptions_2_loadout", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_2_loadout.js", "function": function() { var option_equipDaggers_equipLoadout = "";let choice_EQUIP_DAGGERS_LOADOUT_weapon_id = prompt("Which weapon (in weaponList) to equip 4 times.", option_equipDaggers_equipLoadout);if (choice_EQUIP_DAGGERS_LOADOUT_weapon_id == null || choice_EQUIP_DAGGERS_LOADOUT_weapon_id == "") {return} else {option_equipDaggers_equipLoadout = choice_EQUIP_DAGGERS_LOADOUT_weapon_id};dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);dagger_selection.equip_dagger(option_equipDaggers_equipLoadout); } },
  { "id": "dec3ptions_2_random", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_2_random.js", "function": function() { var int = Math.floor(Math.random() * 33) + 1; var daggers = [{"id":"starter_sword"},{"id":"spear1"},{"id":"kitchen_knife"},{"id":"spear2"},{"id":"bullet"},{"id":"banana"},{"id":"short_dagger"},{"id":"katana"},{"id":"cool1"},{"id":"pixel1"},{"id":"diaknife"},{"id":"carrotknife"},{"id":"axe"},{"id":"battle_axe"},{"id":"claw"},{"id":"eye_piercer"},{"id":"long_axe"},{"id":"mace"},{"id":"rocket"},{"id":"staff"},{"id":"wolverine"},{"id":"longsword"},{"id":"broom"},{"id":"speedsword"},{"id":"shield"},{"id":"pendulum"},{"id":"slow_pendulum"},{"id":"long_pendulum"},{"id":"butterfly"},{"id":"lol_fist"},{"id":"superfast"},{"id":"tiny_fast_dagger"},{"id":"wearable"}]; dagger_selection.equip_dagger(daggers[int].id); dagger_selection.init() } },
  { "id": "dec3ptions_2_unequipall", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_2_unequipall.js", "function": function() { for (let i = 0; i < 4; i++) {dagger_selection.unequip_dagger(dagger_selection.equipped[dagger_selection.equipped.length - 1]);};dagger_selection.init(); } },

  { "id": "dec3ptions_3_infinite", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_3_infinite.js", "function": function() { setInterval(function infUpgrades() {upgrades.damage = 999;upgrades.health = 999;upgrades.speed = 99;upgrades.spin = 999}, 250); } },
  { "id": "dec3ptions_3_free", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_3_free.js", "function": function() { upgrade_blueprint['damage'].costs = [0, 0, 0, 0, 0, 0, 0, 0];upgrade_blueprint['health'].costs = [0, 0, 0, 0, 0, 0, 0, 0];upgrade_blueprint['speed'].costs = [0, 0, 0, 0, 0, 0, 0, 0];upgrade_blueprint['spin'].costs = [0, 0, 0, 0, 0, 0, 0, 0]; upgrades.init(); } },

  { "id": "dec3ptions_4_set", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_4_set.js", "function": function() { var option_xp_set = "";let choice_XP_SET_xp = prompt("What should your XP be set to?", option_xp_set);if (choice_XP_SET_xp == null || choice_XP_SET_xp == "") {return} else {option_xp_set = choice_XP_SET_xp};sync.async_set("xp", choice_XP_SET_xp);upgrades.init(); } },
  { "id": "dec3ptions_4_get", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_4_get.js", "function": function() { var option_xp_get = "";let choice_XP_GET_xp = prompt("What should your XP be set to?", option_xp_get);if (choice_XP_GET_xp == null || choice_XP_GET_xp == "") {return} else {option_xp_get = choice_XP_GET_xp};sync.async_set("xp", Number(upgrades.xp) + Number(choice_XP_GET_xp));upgrades.init(); } },

  { "id": "dec3ptions_5_instant", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_5_instant.js", "function": function() { daily_gift.open();console.clear();console.log('Opened!'); } },
  { "id": "dec3ptions_5_infinite", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_5_infinite.js", "function": function() { setInterval(function dailyRewards() { daily_gift.open();console.clear();console.log('Opened!'); }, 10); } },
  { "id": "dec3ptions_5_custom", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_5_custom.js", "function": function() { alert("This has not been programmed in yet."); } },

  { "id": "dec3ptions_6_play", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_6_play.js", "function": function() { var option_levels_play = "";let choice_LEVELS_play = prompt("Which level do you want to play?", option_levels_play);if (choice_LEVELS_play == null || choice_LEVELS_play == "") {return} else {option_levels_play = [choice_LEVELS_play]};state.set("playing", {map_id: map_info[option_levels_play - 1].id}); } },

  { "id": "dec3ptions_7_weaponlist", "source": "https://raw.githubusercontent.com/dec3ptixns/orb/main/functions/dec3ptions_7_weaponlist.js", "function": function() { alert('starter_sword\nspear1\nkitchen_knife\nspear2\nbullet\nbanana\nshort_dagger\nkatana\ncool1\npixel1\ndiaknife\ncarrotknife\naxe\nbattle_axe\nclaw\neye_piercer\nlong_axe\nmace\nrocket\nstaff\nwolverine\nlongsword\nbroom\nspeedsword\nshield\npendulum\nslow_pendulum\nlong_pendulum\nbutterfly\nlol_fist\nsuperfast\ntiny_fast_dagger\nwearable\n'); } }

];

document.getElementById('screen_main_menu').insertAdjacentHTML('beforeend', '<div class="main_menu_row2"><div id="dec3ptions_btn" class="button">Dec3ptions</div></div>');
document.body.insertAdjacentHTML('beforeend', '<div class="screen" id="screen_dec3ptions" style="visibility: visible; display: none;"></div>')

state_blueprint.push({ id: 'dec3ptions', on_focus: function() { $("#screen_dec3ptions").show(); $("#dec3ptions_btn").hide() }, on_blur: function() { $("#screen_dec3ptions").hide(); $("#dec3ptions_btn").show() } });
for (let i = 0; i < dec3ptions_blueprint.length; i++) { $('#'+dec3ptions_blueprint[i].id).click(function() { dec3ptions_blueprint[i].function(); }); console.log(dec3ptions_blueprint[i]); };
$("#dec3ptions_btn").click(function() { state.set("dec3ptions") })

document.addEventListener('keydown', function(event) { if (event.key === 'q' || event.key === 'Q') { const mainMenuRow2 = document.querySelector('.main_menu_row2'); if (mainMenuRow2) { mainMenuRow2.style.display = mainMenuRow2.style.display === 'none' ? 'block' : 'none'; } } });

document.getElementById('screen_dec3ptions').insertAdjacentHTML('beforeEnd',
  '<h1>GET DAGGERS<h1>' +
  '<div class="button" id="dec3ptions_1_specific">Specific</div>' +
  '<div class="button" id="dec3ptions_1_rapidSpecific">{RAPID} Specific</div>' +
  '<div class="button" id="dec3ptions_1_levelbased">Level</div>' +
  '<div class="button" id="dec3ptions_1_rapidLevelbased">{RAPID} Level</div>' +
  '<div class="button" id="dec3ptions_1_999x">999X</div>' +

  '<h1>EQUIP DAGGERS<h1>' +
  '<div class="button" id="dec3ptions_2_dagger">Dagger</div>' +
  '<div class="button" id="dec3ptions_2_loadout">Loudout</div>' +
  '<div class="button" id="dec3ptions_2_random">Random</div>' +
  '<div class="button" id="dec3ptions_2_unequipall" >Unequip All</div>' +

  '<h1>UPGRADES<h1>' +
  '<div class="button" id="dec3ptions_3_infinite" >Infinite</div>' +
  '<div class="button" id="dec3ptions_3_free" >Free</div>' +

  '<h1>XP<h1>' +
  '<div class="button" id="dec3ptions_4_set" >Set</div>' +
  '<div class="button" id="dec3ptions_4_get" >Get</div>' +

  '<h1>DAILY GIFTS<h1>' +
  '<div class="button" id="dec3ptions_5_instant" >Instant</div>' +
  '<div class="button" id="dec3ptions_5_infinite" >Infinite</div>' +
  '<div class="button" id="dec3ptions_5_custom" >Custom</div>' +

  '<h1>LEVELS<h1>' +
  '<div class="button" id="dec3ptions_6_play" >Play</div>' +

  '<h1>OTHER / INFO<h1>' +
  '<div class="button" id="dec3ptions_7_weaponlist" >Weapon list</div>' +

'</div>');

