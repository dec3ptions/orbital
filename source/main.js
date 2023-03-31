/*

    "░█▀▀▄ ░█▀▀▀ ░█▀▀█ █▀▀█ ░█▀▀█ ▀▀█▀▀ ▀█▀ ▀▄░▄▀ ░█▄─░█ ░█▀▀▀█ 　 ░█─░█ ▀▄░▄▀ ░█▀▀█ \n" +
    "░█─░█ ░█▀▀▀ ░█─── ──▀▄ ░█▄▄█ ─░█── ░█─ ─░█── ░█░█░█ ─▀▀▀▄▄ 　 ░█▀▀█ ─░█── ░█▀▀▄ \n" +
    "░█▄▄▀ ░█▄▄▄ ░█▄▄█ █▄▄█ ░█─── ─░█── ▄█▄ ▄▀░▀▄ ░█──▀█ ░█▄▄▄█ 　 ░█─░█ ▄▀░▀▄ ░█▄▄█ "

*/

document.body.insertAdjacentHTML('beforeEnd',
    '<div class="screen" id="screen_exploits" style="visibility: visible;"><div class="main_menu_row"><div class="button main_menu_btn" id="exploits_btn" style="color:#7600ff; background:#000000">DEC3PTIXNS HXB</div></div></div>' +
    '<div class="screen" id="screen_exploits_buttons" style="visibility: visible; display: none;"><h1 style="color:#7600ff">DEC3PTIXNS HXB</h1>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">GET DAGGERS<h1>' +
    '<div class="button" id="exploits_getDaggers_specific_btn" style="color:#7600ff; background:#000000; font-size:15px" padding="30px 15px">SPECIFIC</div>' +
    '<div class="button" id="exploits_getDaggers_rapidSpecific_btn" style="color:#7600ff; background:#000000; font-size:15px">{RAPID} SPECIFIC</div>' +
    '<div class="button" id="exploits_getDaggers_instaLevel_btn" style="color:#7600ff; background:#000000; font-size:15px">LEVEL</div>' +
    '<div class="button" id="exploits_getDaggers_rapidLevel_btn" style="color:#7600ff; background:#000000; font-size:15px">{RAPID} LEVEL</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">EQUIP DAGGERS<h1>' +
    '<div class="button" id="exploits_equipDaggers_equipDagger_btn" style="color:#7600ff; background:#000000; font-size:15px">DAGGER</div>' +
    '<div class="button" id="exploits_equipDaggers_equipLoadout_btn" style="color:#7600ff; background:#000000; font-size:15px">LOADOUT</div>' +
    '<div class="button" id="exploits_equipDaggers_equipRandom_btn" style="color:#7600ff; background:#000000; font-size:15px">RANDOM</div>' +
    '<div class="button" id="exploits_equipDaggers_equipUnobtainable_btn" style="color:#7600ff; background:#000000; font-size:15px">UNOBTAINABLE</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">UPGRADES<h1>' +
    '<div class="button" id="exploits_upgrades_infUpgrades_btn" style="color:#7600ff; background:#000000; font-size:15px">INFINITE</div>' +
    '<div class="button" id="exploits_upgrades_freeUpgrades_btn" style="color:#7600ff; background:#000000; font-size:15px">FREE</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">XP<h1>' +
    '<div class="button" id="exploits_xp_set_btn" style="color:#7600ff; background:#000000; font-size:15px">SET</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">DAILY GIFTS<h1>' +
    '<div class="button" id="exploits_dailyGift_instaGift_btn" style="color:#7600ff; background:#000000; font-size:15px">INSTANT</div>' +
    '<div class="button" id="exploits_dailyGift_rapidGift_btn" style="color:#7600ff; background:#000000; font-size:15px">RAPID</div>' +

    '<h1 style="color: rgb(118 0 255); font-size: 18px">LEVELS<h1>' +
    '<div class="button" id="exploits_levels_play_btn" style="color:#7600ff; background:#000000; font-size:15px">PLAY</div>' +
    '<div class="button" id="exploits_levels_complete_btn" style="color:#7600ff; background:#000000; font-size:15px">COMPLETE</div>' +
    '<div class="button" id="exploits_levels_unlock_btn" style="color:#7600ff; background:#000000; font-size:15px">UNLOCK</div>' +

    '</div>');



// EMBEDDING

state_blueprint.push({
    id: "dec3ptions",
    on_focus: () => {
        $("#screen_exploits_buttons").show();
        $("#exploits_btn").hide()
    },
    on_blur: () => {
        $("#screen_exploits_buttons").hide();
        $("#exploits_btn").show()
    }
});



// MAIN

$("#exploits_btn").click(function() {
    state.set("dec3ptions")
});



// FUNCTIONALITY

$("#exploits_upgrades_infUpgrades_btn").click(function() {
    setInterval(function infUpgrades() {
        upgrades.damage = 999;
        upgrades.health = 999;
        upgrades.speed = 99;
        upgrades.spin = 999
    }, 250)
});

$("#exploits_upgrades_freeUpgrades_btn").click(function() {
    upgrade_blueprint['damage'].costs = [0, 0, 0, 0, 0, 0, 0, 0];
    upgrade_blueprint['health'].costs = [0, 0, 0, 0, 0, 0, 0, 0];
    upgrade_blueprint['speed'].costs = [0, 0, 0, 0, 0, 0, 0, 0];
    upgrade_blueprint['spin'].costs = [0, 0, 0, 0, 0, 0, 0, 0]
});

$("#exploits_dailyGift_instaGift_btn").click(function() {
    daily_gift.open();
    console.clear();
    console.log('Opened!')
});

$("#exploits_dailyGift_rapidGift_btn").click(function() {
    setInterval(function dailyRewards() {
        daily_gift.open();
        console.clear();
        console.log('Opened!')
    }, 20)
});

var option_xp_get = "";
let choice_XP_GET_xp = prompt("What should your XP be set to?", option_xp_get);
if (choice_XP_GET_xp == null || choice_XP_GET_xp == "") {
    return
} else {
    option_xp_get = choice_XP_GET_xp
};
sync.async_set("xp", Number(upgrades.xp) + Number(choice_XP_GET_xp));
upgrades.init();

var option_equipDaggers_equipDagger = ""
$("#exploits_equipDaggers_equipDagger_btn").click(function() {

    var option_equipDaggers_equipDagger = "";
    let choice_EQUIP_DAGGERS_DAGGER_weapon_id = prompt("Which weapon (in weaponList) to equip.", option_equipDaggers_equipDagger);
    if (choice_EQUIP_DAGGERS_DAGGER_weapon_id == null || choice_EQUIP_DAGGERS_DAGGER_weapon_id == "") {
        return
    } else {
        option_equipDaggers_equipDagger = choice_EQUIP_DAGGERS_DAGGER_weapon_id
    };

    dagger_selection.equip_dagger(option_equipDaggers_equipDagger);
});

var option_equipDaggers_equipLoadout = ""
$("#exploits_equipDaggers_equipLoadout_btn").click(function() {

    var option_equipDaggers_equipLoadout = "";
    let choice_EQUIP_DAGGERS_LOADOUT_weapon_id = prompt("Which weapon (in weaponList) to equip 4 times.", option_equipDaggers_equipLoadout);
    if (choice_EQUIP_DAGGERS_LOADOUT_weapon_id == null || choice_EQUIP_DAGGERS_LOADOUT_weapon_id == "") {
        return
    } else {
        option_equipDaggers_equipLoadout = choice_EQUIP_DAGGERS_LOADOUT_weapon_id
    };

    dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);
    dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);
    dagger_selection.equip_dagger(option_equipDaggers_equipLoadout);
    dagger_selection.equip_dagger(option_equipDaggers_equipLoadout)
});

$("#exploits_getDaggers_instaLevel_btn").click(function() {
    dagger_selection.reward_level_clear();
    console.clear();
    console.log('Opened!');
});

$("#exploits_getDaggers_rapidLevel_btn").click(function() {
    setInterval(function dailyRewards() {
        dagger_selection.reward_level_clear();
        console.clear();
        console.log('Opened!');
    }, 20);
});

var option_getDaggers_specific = ""
$("#exploits_getDaggers_specific_btn").click(async function() {
    var option_getDaggers_specific = "";
    let choice_GET_DAGGERS_specific_weapon_ids = prompt("Which weapon (in weaponList) to receive.", option_getDaggers_specific);
    if (choice_GET_DAGGERS_specific_weapon_ids == null || choice_GET_DAGGERS_specific_weapon_ids == "") {
        return
    } else {
        option_getDaggers_specific = [choice_GET_DAGGERS_specific_weapon_ids]
    };
    let w_index = Math.floor(Math.random() * option_getDaggers_specific.length);
    var weapon_id = option_getDaggers_specific;

    var n = sync.async_get("w_" + option_getDaggers_specific) || 0;
    sync.async_set("w_" + option_getDaggers_specific, n + 1);
    dagger_selection.unlocked.push({
        id: option_getDaggers_specific,
        n: n + 1
    });
    dagger_selection.init()
});

var option_getDaggers_rapidSpecific = ""
$("#exploits_getDaggers_rapidSpecific_btn").click(async function() {
    var option_getDaggers_rapidSpecific = "";
    let choice_GET_DAGGERS_rapidSpecific_weapon_ids = prompt("Which weapon (in weaponList) do you want to receive?", option_getDaggers_rapidSpecific);
    if (choice_GET_DAGGERS_rapidSpecific_weapon_ids == null || choice_GET_DAGGERS_rapidSpecific_weapon_ids == "") {
        return
    } else {
        option_getDaggers_rapidSpecific = [choice_GET_DAGGERS_rapidSpecific_weapon_ids]
    };
    setInterval(async function specificRapid() {
        let w_index = Math.floor(Math.random() * option_getDaggers_rapidSpecific.length);
        var weapon_id = option_getDaggers_rapidSpecific[Math.floor(Math.random() * option_getDaggers_rapidSpecific.length)];
        var n = sync.async_get("w_" + weapon_id) || 0;
        var index = -1;
        var count = 0;
        for (let unlocked_dagger of dagger_selection.unlocked) {
            if (unlocked_dagger.id == weapon_id) {
                index = count;
                break;
            };
            count += 1;
        };
        sync.async_set("w_" + weapon_id, n + 1);
        dagger_selection.unlocked.push({
            id: weapon_id,
            n: n + 1
        });
        dagger_selection.init();
    }, 20)
});
