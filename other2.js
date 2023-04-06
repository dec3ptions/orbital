//
const key = sync.key("xp");
const val = 999999999;
var saveObject = {[key]: val};;

chrome.storage.local.set(saveObject, function(){
    webext.record_set(key, val);
});

