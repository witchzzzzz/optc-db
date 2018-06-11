window.effects = {

    // always use unique IDs, and don't ever change an ID once you've set it
    // IDs must always be greater than 0
    // last ID used: 46
    // Use p.type instead of p.unit.type here

    'Baroque Works (pre-v4.0)': {
        description: 'Stats of non-Fighter units reduced by 90%',
        thumb: 462,
        id: 1, // don't change this
        atk: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Fighter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; }
    },

    'Baroque Works': {
        description: 'ATK of non-Fighter, non-Booster, non-Evolver units reduced by 90%',
        thumb: 462,
        id: 2, // don't change this
        atk: function(p) { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Prisoner Crocodile (pre-v4.0)': {
        description: 'Stats of non-Striker units reduced by 90%',
        thumb: 510,
        id: 3, // don't change this
        atk: function(p) { return !p.class.has('Striker') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Striker') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Striker') ? 0.1 : 1; }
    },

    'Prisoner Crocodile': {
        description: 'Stats of non-Striker, non-Booster, non-Evolver units reduced by 90%',
        thumb: 510,
        id: 4, // don't change this
        atk: function(p) { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Jailer Domino (pre-v4.0)': {
        description: 'Stats of non-Shooter units reduced by 90%',
        thumb: 538,
        id: 5, // don't change this
        atk: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Shooter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; }
    },

    'Jailer Domino': {
        description: 'Stats of non-Shooter, non-Booster, non-Evolver units reduced by 90%',
        thumb: 538,
        id: 6, // don't change this
        atk: function(p) { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Chief Guard Sadi-chan (pre-v4.0)': {
        description: 'Stats of non-Slasher units reduced by 90%',
        thumb: 550,
        id: 7, // don't change this
        atk: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Slasher') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; }
    },

    'Chief Guard Sadi-chan': {
        description: 'Stats of non-Slasher, non-Booster, non-Evolver units reduced by 90%',
        thumb: 550,
        id: 8, // don't change this
        atk: function(p) { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Warriors of Shandia': {
        // Note: The debuff is applied to normal attacks but not to specials
        description: 'Stats of characters whose homeland is not a sky island reduced by 20%',
        thumb: 583,
        id: 9, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584, 780, 781 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        }
    },

    'Warriors of Shandia, Last Round': {
        // Note: The debuff is applied to normal attacks but not to specials
        // Note 2: The 50% reduction is applied to enemy's defense as well, for whatever reason
        description: 'Stats of characters whose homeland is not a sky island reduced by 20%, ATK of PSY characters reduced by 50%',
        thumb: 583,
        id: 10, // don't change this
        atk: function(p) {
            var result = window.effects['Warriors of Shandia'].atk(p);
            return (p.type == 'PSY' ? 0.5 : 1) * result;
        },
        hp: function(p) { return window.effects['Warriors of Shandia'].hp(p); },
        rcv: function(p) { return window.effects['Warriors of Shandia'].rcv(p); },
    },

    'Gan Fall': {
        description: 'Stats of non-Free Spirit, non-Booster, non-Evolver units reduced by 90%',
        thumb: 713,
        id: 11, // don't change this
        atk: function(p) { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Orb amplification (1.05x)': {
        description: 'Orb effects amplified by 1.05x',
        thumb: 768,
        id: 12, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.05 : (p.orb == 0.5 ? 20/21 : 1); }
    },

    'Orb amplification (1.10x)': {
        description: 'Orb effects amplified by 1.10x',
        thumb: 415,
        id: 13, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); }
    },

    'Chain multiplier limiter (2.0x)': {
        description: 'Limits chain multiplier to 2.0x',
        thumb: 772,
        id: 14, // don't change this
        chainLimiter: function() { return 2.0; }
    },

    'Nightmare Luffy, 2nd stage': {
        description: 'Limits chain multiplier to 2.0x, nullifies the first 11 hits in the chain',
        thumb: 795,
        id: 15, // don't change this
        comboShield: 11,
        chainLimiter: function() { return 2.0; }
    },

    'Attack reduction (50%)': {
        description: 'ATK of all units reduced by 50%',
        thumb: 546,
        id: 16, // don't change this
        atk: function(p) { return 0.5; }
    },

    'Attack reduction (70%)': {
        description: 'ATK of all units reduced by 70%',
        thumb: 765,
        id: 17, // don't change this
        atk: function(p) { return 0.3; }
    },

    'Kuma': {
        description: 'Damage of STR and DEX characters nullified',
        thumb: 836,
        id: 18,  // don't change this
        atk: function(p) { return p.type == 'STR' || p.type == 'DEX' ? 0 : 1; }
    },

    'Shu (Expert)': {
        description: 'Attack of Slasher units reduced by 50%',
        thumb: 773,
        id: 19, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.5 : 1; }
    },

    'Shu (Master)': {
        description: 'Attack of Slasher units reduced by 70%',
        thumb: 773,
        id: 20, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.3 : 1; }
    },

    'Attack reduction (20%)': {
        description: 'ATK of all units reduced by 20%',
        thumb: 567,
        id: 21, // don't change this
        atk: function(p) { return 0.8; }
    },

    'Hit barrier (26 hits)': {
        description: 'Nullifies the first 26 hits in the chain',
        thumb: 375,
        id: 22, // don't change this
        comboShield: 26
    },

    'There\'s the G!': {
        description: 'Activates [G] orb support even when Lao-G is not in the team',
        thumb: 880,
        id: 23, // don't change this
        gOrbsEnabled: true
    },
    
    'Coliseum Franky': {
        description: 'Activates [G] orb Support, boosts Orbs by 1.5x',
        thumb: 560,
        id: 24, // don't change this
        orb: function(p) { return (p.orb == 2.0 || p.orb == 'g') ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); },
        gOrbsEnabled: true
    },

    'Coliseum Killer': {
        description: 'ATK of all units reduced by 95%',
        thumb: 1043,
        id: 25, // don't change this
        atk: function(p) { return 0.05; }
    },
    
    'Coliseum Cricket': {
        description: 'Fixed threshold barrier (200,000)',
        thumb: 428,
        id: 26,
        barrierThreshold: 200000,
        barrierReduction: 0.99
    },
    
    'Sabo Raid Boss': {
        description: 'Reduces Chain By Half',
        thumb: 1047,
        id: 27,
        chainModifier: function(p) { return 0.5 ; }
    },
    
    'Pirate Ship Competition! \"Dead End\" Opens!': {
        description: 'STR/DEX/QCK ATK 1.6x. INT/PSY HP 2x',
        thumb: 1072,
        id: 28,
        atk: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 1.6 : 1; },
        hp: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 1 : 2.0; }
        
    },
    
    '1.25x Orb Boost': {
        description: 'Used by Christmas Law in Saga Coliseum',
        thumb: 856,
        id: 29,
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 20/25 : 1); }
    },
    
    '700k Damage Treshold Barrier': {
        description: 'Used by Saga. You cannot do more that 700k damage in one hit',
        thumb: 1089,
        id: 30,
        barrierThreshold: 700000,
        barrierReduction: 0.99
    },
    
    'Dr. Indigo & Scarlet! Fortnight': {
        //OLD description: 'Boosts ATK of Driven and Powerhouse characters by 2x, other classes get .5x ATK. Boosts HP of Slasher and Fighter characters by 2x, other classes get .5x HP.',
        description: 'Boosts ATK of Driven characters by 2x and boosts HP for Powerhouse characters by 2x.',
        thumb: 1095,
        id: 31,
        atk: function(p) { 
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Driven')) { boost1 = 2.0}
                            if(p.class.has('Powerhouse')) { boost2 = 2.0}
                            if(!(p.class.has('Driven')&&p.class.has('Powerhouse')) && p.class.constructor === Array){
                            if(!p.class.has('Driven')){ boost3 = 0.5}
                            if(!p.class.has('Powerhouse')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Driven') || p.class.has('Powerhouse'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/ 
                            return p.class.has('Driven') ? 2 : 1;
                        },
        hp: function(p) {
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Fighter')) { boost1 = 2.0}
                            if(p.class.has('Slasher')) { boost2 = 2.0}
                            if(!(p.class.has('Fighter')&&p.class.has('Slasher')) && p.class.constructor === Array){
                            if(!p.class.has('Fighter')){ boost3 = 0.5}
                            if(!p.class.has('Slasher')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Fighter') || p.class.has('Slasher'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/
                            return p.class.has('Powerhouse') ? 2 : 1;
                        }
    },
    
    'Coliseum Tashigi': {
        description: '25 hit barrier and 2x chain limit',
        thumb: 783,
        id: 32,
        comboShield: 25,
        chainLimiter: function() { return 2.0; }
    },
    
    'Robin and Nami\'s Secret Undercover Investigation': {
        description: 'Boosts ATK of Cerebral and Free Spirit characters by 2x, other classes get .5x ATK. Boosts HP of Striker and Shooter characters by 2x, other classes get .5x HP.',
        thumb: 1112,
        id: 33,
        atk: function(p) { 
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Cerebral')) { boost1 = 2.0}
                            if(p.class.has('Free Spirit')) { boost2 = 2.0}
                            if(!(p.class.has('Cerebral')&&p.class.has('Free Spirit')) && p.class.constructor === Array){
                            if(!p.class.has('Cerebral')){ boost3 = 0.5}
                            if(!p.class.has('Free Spirit')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Cerebral') || p.class.has('Free Spirit'))){ boost5 = 0.5}
                            }
                            //console.log(boost1+" "+boost2+" "+boost3+" "+boost4+" "+boost5)
                            return 1*boost1*boost2*boost3*boost4*boost5; 
                        },
        hp: function(p) {
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Striker')) { boost1 = 2.0}
                            if(p.class.has('Shooter')) { boost2 = 2.0}
                            if(!(p.class.has('Striker')&&p.class.has('Shooter')) && p.class.constructor === Array){
                            if(!p.class.has('Striker')){ boost3 = 0.5}
                            if(!p.class.has('Shooter')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Striker') || p.class.has('Shooter'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;
                        }
    },
    
    'Gild Tesoro - 40 Stamina': {
        description: 'Boosts the Orbs and ATK of all characters by 1.1x',
        thumb: 1162,
        id: 34,
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); },
        atk: function(p) { return 1.1; }
    },
    
    'Gild Tesoro - 60 Stamina': {
        description: 'Boosts the Orbs and ATK of all characters by 1.2x',
        thumb: 1163,
        id: 35,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.2; }
    },
    
    'World Pirates - Boa Stage 1': {
        description: 'Boosts the ATK of characters with 30 cost or less by 1.5x',
        thumb: 865,
        id: 36,
        atk: function(p) { return p.cost <= 30 ? 1.5 : 1; }
    },
    
    'Aokiji Neo - Striker Raid Boss': {
        description: 'Reduces Chain By 90%',
        thumb: 1668,
        id: 37,
        chainModifier: function(p) { return 0.1 ; }
    },

    'Doflamingo Neo - Fighter Raid Boss': {
        description: 'Reduces Damage taken by 30%',
        thumb: 1623,
        id: 38, // don't change this
        atk: function(p) { return .7 ; },
    },

    'Doflamingo Neo [GLOBAL] - Fighter Raid Boss': {
        description: 'Reduces Damage taken by 50%',
        thumb: 1623,
        id: 39, // don't change this
        atk: function(p) { return .5 ; },
    },

    'Doflamingo Neo [GLOBAL] - Striker Raid Boss': {
        description: 'Halves Chain Multiplier.',
        thumb: 1623,
        id: 40, // don't change this
        chainModifier: function(p) { return 0.5 ; }
    },
    
    'Sabo Neo - Fighter Raid Boss': {
        description: 'Boosts Orbs of all characters by 1.2x, ATK by 1.3x and Reduces Chain by Half.',
        thumb: 1727,
        id: 41,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.3; },
        chainModifier: function(p) { return 0.5 ; }
    },

    'Kyros Colisuem - Chain multiplier limiter (1.5x)': {
        description: 'Limits chain multiplier to 1.5x',
        thumb: 1667,
        id: 42, // don't change this
        chainLimiter: function() { return 1.5; }
    },

    'Treasure Map [Global]': {
        description: 'Boost stats of boosted characters',
        thumb: 1916,
        id: 43, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 1912, 1914, 1885, 1910 ].indexOf(id) != -1) boost = 2.5;
            if([ 4, 8, 12, 16, 20, 22, 709, 739, 896, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551, 1921, 1922, 1928, 1883, 1889, 1900, 1804, 1806, 1849, 1851, 1887, 1895, 1902, 1904, 1906, 1908, 1926, 1899, 1143, 1145, 1943, 1842, 1844, 1855, 1857, 1808, 1853 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 1912, 1914, 1885, 1910 ].indexOf(id) != -1) boost = 2.5;
            if([ 4, 8, 12, 16, 20, 22, 709, 739, 896, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551, 1921, 1922, 1928, 1883, 1889, 1900, 1804, 1806, 1849, 1851, 1887, 1895, 1902, 1904, 1906, 1908, 1926, 1899, 1143, 1145, 1943, 1842, 1844, 1855, 1857, 1808, 1853 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 1912, 1914, 1885, 1910 ].indexOf(id) != -1) boost = 2.5;
            if([ 4, 8, 12, 16, 20, 22, 709, 739, 896, 1387, 1388, 1389, 1446, 1447, 1448, 1549, 1550, 1551, 1921, 1922, 1928, 1883, 1889, 1900, 1804, 1806, 1849, 1851, 1887, 1895, 1902, 1904, 1906, 1908, 1926, 1899, 1143, 1145, 1943, 1842, 1844, 1855, 1857, 1808, 1853 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
	},

    'Treasure Map [Japan]': {
        description: 'Boost stats of many charactersx',
        thumb: null,
        id: 44, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 0 ].indexOf(id) != -1) boost = 2.5;
            if([ 2109, 1413, 1764, 1610, 1910, 2023, 2074, 2076, 2099, 1976, 2017, 2111, 1298, 1518, 1943, 2015, 2033, 2070, 2097, 1037, 1547, 1597, 1766, 1947, 1980, 1982, 2091, 2092, 2093, 2094, 2095, 1916, 2064 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 0 ].indexOf(id) != -1) boost = 2.5;
            if([ 2109, 1413, 1764, 1610, 1910, 2023, 2074, 2076, 2099, 1976, 2017, 2111, 1298, 1518, 1943, 2015, 2033, 2070, 2097, 1037, 1547, 1597, 1766, 1947, 1980, 1982, 2091, 2092, 2093, 2094, 2095, 1916, 2064 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 0 ].indexOf(id) != -1) boost = 2.5;
            if([ 2109, 1413, 1764, 1610, 1910, 2023, 2074, 2076, 2099, 1976, 2017, 2111, 1298, 1518, 1943, 2015, 2033, 2070, 2097, 1037, 1547, 1597, 1766, 1947, 1980, 1982, 2091, 2092, 2093, 2094, 2095, 1916, 2064 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
    },
    
    '3 Ranking Missions - Shanks, Tony Tony Chopper and Jinbe': {
        description: 'Stats of certain units boosted',
        thumb: 1700,
        id: 45, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
    },
	
	'Akainu Neo': {//Remove this eventually
        description: 'Certain units boosted',
        thumb: 1826,
        id: 46, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 1740 && id < 1745) ||
                    [ 1620, 1621, 1664, 1665, 1720, 1721, 1769, 1770, 1777, 1778, 1823, 1824 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 1740 && id < 1745) ||
                    [ 1620, 1621, 1664, 1665, 1720, 1721, 1769, 1770, 1777, 1778, 1823, 1824 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 1740 && id < 1745) ||
                    [ 1620, 1621, 1664, 1665, 1720, 1721, 1769, 1770, 1777, 1778, 1823, 1824 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        }, 
	},
    
    'Blitz Battle! The Three Admirals': {
        description: 'Lot of units boosted',
        thumb: 1314,
        id: 47, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        }, 
    },
    
    'Blitz Battle! Straw Hat Pirates': {
        description: 'Lot of units boosted',
        thumb: 1404,
        id: 48, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
    },
    
    'Kizaru Neo [GLOBAL] - Free Spirit/Striker': {
        description: 'Chain multiplier reduced.',
        thumb: 1780,
        id: 49,
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Striker': {
        description: 'Chain multiplier halved.',
        thumb: 1780,
        id: 50,
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Powerhouse': {
        description: 'Chain multiplier locked at 1.1x after revive.',
        thumb: 1780,
        id: 51,
        chainLimiter: function() { return 1.1; } //Chain locked at 1.1x
    },
    
    'Strawhats 20th Anniversary Mission': {
        description: 'Stats of Strawhats boosted, 1.75x ATK, 1.75x HP, 1.5x RCV and Cooldown reduced by 7 turns at the start of the island.',
        thumb: 1753,
        id: 52,
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    'Rainbow Orbs': {
        description: 'Activates [RAINBOW] orb support even when Shirahoshi is not in the team',
        thumb: 1472,
        id: 53, // don't change this
        rainbowOrbsEnabled: true
    },
    
    'Blitz Battle! Doflamingo Family': {
        description: 'Lot of units boosted',
        thumb: 870,
        id: 54, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;
            if (matching) boost *= 1.5;
            return matching ? boost : 1;
        },
        hp: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            /*if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;*/
            if (matching) boost *= 1.5;
            return boost;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            /*if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;*/
            if (matching) boost *= 1.5;
            return boost;
        }, 
    },

    'Orb amplification (1.75x)': {
        description: 'Orb effects amplified by 1.75x',
        thumb: 1961,
        id: 55, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
    },

    '0.5x Chain Boost - Zoro Sanji Change Action': {
        description: 'Chain Boosted by 0.5x',
        thumb: 2000,
        id: 56, // don't change this
        chainAddition: function(p) { return 0.5 }
    },
    
    'Encourage the Soul': {
        description: 'Stats of Strawhats boosted, 1.5x ATK, 1.5x HP, 1.5x RCV and Cooldown reduced by 9 turns at the start of the island.',
        thumb: 1547,
        id: 57, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    '3 Ranking Missions - Ganfor, Mihawk and Blackbeard': {
        description: 'Stats of certain characters boosted.',
        thumb: 447,
        id: 58, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
    },
    
    'STR Orbs Beneficial': {
        description: 'Activates [STR] orb beneficial effects for all characters',
        thumb: 1313,
        id: 59, // don't change this
        strOrbsEnabled: true
    },
};
