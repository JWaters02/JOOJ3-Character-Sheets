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
    getAttrs(["speed_val","speed_dice","speed_mod"], function(v) {
        let value = v.speed_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            speed_dice: dicevals[index],
            speed_mod: modvals[index]
        });
    });
});

on("change:range_val", function(eventInfo) {
    getAttrs(["range_val","range_dice","range_mod"], function(v) {
        let value = v.range_val;
        let index = rankvals.indexOf(value);
        setAttrs({
            range_dice: dicevals[index],
            range_mod: modvals[index]
        });
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
on("change:toughness_val", function(eventInfo) {
    getAttrs(["toughness_val","toughness_dice"], function(v) {
        let value = v.toughness_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            toughness_dice: dicevals2[index],
        });
    });
});

on("change:brawns_val", function(eventInfo) {
    getAttrs(["brawns_val","brawns_dice"], function(v) {
        let value = v.brawns_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            brawns_dice: dicevals2[index],
        });
    });
});

on("change:agility_val", function(eventInfo) {
    getAttrs(["agility_val","agility_dice"], function(v) {
        let value = v.agility_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            agility_dice: dicevals2[index],
        });
    });
});

on("change:deftness_val", function(eventInfo) {
    getAttrs(["deftness_val","deftness_dice"], function(v) {
        let value = v.deftness_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            deftness_dice: dicevals2[index],
        });
    });
});

on("change:charm_val", function(eventInfo) {
    getAttrs(["charm_val","charm_dice"], function(v) {
        let value = v.charm_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            charm_dice: dicevals2[index],
        });
    });
});

on("change:intellect_val", function(eventInfo) {
    getAttrs(["intellect_val","intellect_dice"], function(v) {
        let value = v.intellect_val;
        let index = rankvals2.indexOf(value);
        setAttrs({
            intellect_dice: dicevals2[index],
        });
    });
});