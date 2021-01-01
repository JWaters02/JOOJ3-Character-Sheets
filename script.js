var getSectionIDsOrdered = function(sectionName, callback) {
    'use strict';
    getAttrs([`_reporder_${sectionName}`], function (v) {
        getSectionIDs(sectionName, function (idArray) {
            let reporderArray = v[`_reporder_${sectionName}`] ? v[`_reporder_${sectionName}`].toLowerCase().split(',') : [],
                ids = [...new Set(reporderArray.filter(x => idArray.includes(x)).concat(idArray))];
            callback(ids);
        });
    });
};

// Stand mods
let rankvals = ["E","D","C","B","A","S"]
let dicevals = ["2d6","2d8","2d10","2d12","2d14","2d20"];
let modvals = ["-2","0","+2","+4","+6","+12"];
let speed = ["20ft", "30ft", "50ft", "75ft", "100ft","150ft"];
let range = ["10ft", "25ft", "50ft", "100ft", "200ft","400ft"];
on("change:power_val", function(eventInfo) {
    getAttrs(["power_val","power_dice","power_mod"], function(v) {
        let value = v.power_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            power_dice: dicevals[index],
            power_mod: modvals[index]
        });
    });
});

on("change:speed_val", function(eventInfo) {
    getAttrs(["speed_val","speed_dice","speed_mod","speed_stat"], function(v) {
        let value = v.speed_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            speed_dice: dicevals[index],
            speed_mod: modvals[index],
            speed_stat: speed[index]
        });
        document.getElementById("stand-speed").innerHTML = "Speed: " + speed_stat + "ft/turn";
    });
});

on("change:range_val", function(eventInfo) {
    getAttrs(["range_val","range_dice","range_mod","range_stat"], function(v) {
        let value = v.range_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            range_dice: dicevals[index],
            range_mod: modvals[index],
            range_stat: range[index]
        });
        document.getElementById("stand-range").innerHTML = "Ramge " + range[index] + "ft";
    });
});

on("change:durability_val", function(eventInfo) {
    getAttrs(["durability_val","durability_dice","durability_mod"], function(v) {
        let value = v.durability_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            durability_dice: dicevals[index],
            durability_mod: modvals[index]
        });
    });
});

on("change:precision_val", function(eventInfo) {
    getAttrs(["precision_val","precision_dice","precision_mod"], function(v) {
        let value = v.precision_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            precision_dice: dicevals[index],
            precision_mod: modvals[index]
        });
    });
});

on("change:learning_val", function(eventInfo) {
    getAttrs(["learning_val","learning_dice","learning_mod"], function(v) {
        let value = v.learning_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            learning_dice: dicevals[index],
            learning_mod: modvals[index]
        });
    });
});


// Character Stats
let rankvals2 = ["E","D","C","B","A","S"]
let dicevals2 = ["1d6","2d6k1","2d6","3d6k2","3d6","4d6k3"];
let hpvals = ["HP: 10", "HP: 15", "HP: 20", "HP: 25", "HP: 30", "HP: 35"];
let carryvals = ["Carry Weight: 15kg", "Carry Weight: 25kg", "Carry Weight: 35kg", "Carry Weight: 45kg", "Carry Weight: 55kg", "Carry Weight: 65kg"];
let rangevals = ["Move Speed: 20ft", "Move Speed: 30ft", "Move Speed: 40ft", "Move Speed: 50ft", "Move Speed: 60ft", "Move Speed: 70ft"];
let deftnessvals = ["Quickdraws: 1", "Quickdraws: 2", "Quickdraws: 3", "Quickdraws: 4", "Quickdraws: 5", "Quickdraws: 6"];
let charmvals = ["Favours: 1", "Favours: 2", "Favours: 3", "Favours: 4", "Favours: 5", "Favours: 6"];
let intellectvals = ["Rerolls: 1", "Rerolls: 2", "Rerolls: 3", "Rerolls: 4", "Rerolls: 5", "Rerolls: 6"];
on("change:toughness_val", function(eventInfo) {
    getAttrs(["toughness_val","toughness_dice","toughness_stat"], function(v) {
        let value = v.toughness_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            toughness_dice: dicevals2[index],
            toughness_stat: hpvals[index]
        });
        document.getElementById("user-hp").innerHTML = "Max HP: " + hpvals[index];
    });
});

on("change:brawns_val", function(eventInfo) {
    getAttrs(["brawns_val","brawns_dice","brawns_stat"], function(v) {
        let value = v.brawns_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            brawns_dice: dicevals2[index],
            brawns_stat: carryvals[index]
        });
        document.getElementById("user-carry").innerHTML = "Carry Weight: " + carryvals[index] + "kg";
    });
});

on("change:agility_val", function(eventInfo) {
    getAttrs(["agility_val","agility_dice","agility_stat"], function(v) {
        let value = v.agility_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            agility_dice: dicevals2[index],
            agility_stat: rangevals[index]
        });
        document.getElementById("user-range").innerHTML = "Range " + rangevals[index] + "ft";
    });
});

on("change:deftness_val", function(eventInfo) {
    getAttrs(["deftness_val","deftness_dice","deftness_stat"], function(v) {
        let value = v.deftness_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            deftness_dice: dicevals2[index],
            deftness_stat: deftnessvals[index]
        });
        document.getElementById("user-deftness").innerHTML = "Quickdraws: " + deftnessvals[index];
    });
});

on("change:charm_val", function(eventInfo) {
    getAttrs(["charm_val","charm_dice","charm_stat"], function(v) {
        let value = v.charm_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            charm_dice: dicevals2[index],
            charm_stat: charmvals[index]
        });
        document.getElementById("user-charm").innerHTML = "Favours: " + charmvals[index];
    });
});

on("change:intellect_val", function(eventInfo) {
    getAttrs(["intellect_val","intellect_dice","intellect_stat"], function(v) {
        let value = v.intellect_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            intellect_dice: dicevals2[index],
            intellect_stat: intellectvals[index]
        });
        document.getElementById("user-reroll").innerHTML = "Rerolls: " + intellectvals[index];
    });
});