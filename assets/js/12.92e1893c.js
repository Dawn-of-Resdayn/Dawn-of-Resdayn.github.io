(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,t,a){"use strict";a.r(t);var l=a(45),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rolls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rolls"}},[e._v("#")]),e._v(" Rolls")]),e._v(" "),a("p",[e._v('We use a custom roll system tailored towards roleplay instead of a "random" or "mechanical" roll system. Our roll system relies on skill set by the player on a per character basis, instead of relying on character skills built into the game. This is to avoid people grinding to get their skills to high level just so they can "roll" other players whom are trying to have a good RP experience.'),a("br"),e._v("\nOur rolling system is kind of similar to D&D rolls, as in it's a "),a("code",[e._v("d20")]),e._v(" based die with bonuses based on your skill level and critical hits. So, if you have played D&D before this system mechanic's will probably seem slightly familiar to you."),a("br"),e._v("\nAny further questions you have about the rolling system, please feel free to ask on our Discord.")]),e._v(" "),a("p",[e._v("You can roll an attribute an attribute by doing "),a("code",[e._v("/roll attr <attribute>")]),e._v(". Example: "),a("code",[e._v("/roll attr strength")]),e._v(" will roll a d20 die for the strength attribute."),a("br"),e._v("\nYou can do a skill roll by doing "),a("code",[e._v("/roll skill <skill>")]),e._v(". Example: "),a("code",[e._v("/roll skill armorer")]),e._v(" will roll a d20 die for your armorer skill.")]),e._v(" "),a("h2",{attrs:{id:"leveling-and-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leveling-and-points"}},[e._v("#")]),e._v(" Leveling and Points")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("To have your skills reset please make a ticket in our Discord. Only staff can reset your skills.")])]),e._v(" "),a("p",[e._v("When you create a new character you will be given "),a("code",[e._v("80")]),e._v(" points to put into whatever skill you want. A DM can give you more points for good behavior, or simply play time.\\")]),e._v(" "),a("p",[e._v("The max level for a skill is "),a("code",[e._v("100")]),e._v(", and every "),a("code",[e._v("15")]),e._v(" points in a skill equals a "),a("code",[e._v("+1")]),e._v(" to your roll. Example: Player a has 25 points in his Hand to Hand combat, so when he does "),a("code",[e._v("/roll skill handtohand")]),e._v(", he will roll a d20 with a +2 to his roll.")]),e._v(" "),a("p",[e._v("Doing "),a("code",[e._v("/skills")]),e._v(" will bring up your character sheet with your skill levels."),a("br"),e._v("\nYou can level your skills by doing "),a("code",[e._v("/levelskill <skill> <points>")]),e._v(". Example: "),a("code",[e._v("/levelskill handtohand 75")]),e._v(" will put 75 of your available points into your handtohand skill.")]),e._v(" "),a("h2",{attrs:{id:"skills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skills"}},[e._v("#")]),e._v(" Skills")]),e._v(" "),a("p",[e._v("Here is a list of available skills you can level with your points. Leveling each skill will have a direct affect on your attribute rolls, "),a("a",{attrs:{href:"https://en.uesp.net/wiki/Morrowind:Skills",target:"_blank",rel:"noopener noreferrer"}},[e._v("these are what skills will effect what attribute"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("block,\nalchemy\nrestoration\nconjuration\nmarksman\nhandtohand\nshortblade\nheavyarmor\nbluntweapon\nalteration\nenchant\nsneak\nlightarmor\nathletics\narmorer\nspeechcraft\naxe\nsecurity\nacrobatics\ndestruction\nlongblade\nillusion\nmysticism\nspear\nmediumarmor\nmercantile\nunarmored\nendurance - This will affect your RP Health.\n")])])]),a("h2",{attrs:{id:"combat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#combat"}},[e._v("#")]),e._v(" Combat")]),e._v(" "),a("p",[e._v("Combat rolling will be similar to how combat is in D&D, aka a turn based combat. To decide who goes first in a combat setting, everyone has to roll a d20 for initiative "),a("code",[e._v("/roll d20")]),e._v(". Whoever gets the highest roll gets to make the first attack.")]),e._v(" "),a("p",[e._v("When dealing with RP based combat you have to roll one of the combat skills. It is up to you to keep track of your RP health. We're trusting our players not to lie about their RP health, but keep in mind "),a("strong",[e._v("anyone")]),e._v(" can view your skills and your RP health so lying will result DMs getting involved.")]),e._v(" "),a("h4",{attrs:{id:"example-combat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-combat"}},[e._v("#")]),e._v(" Example Combat")]),e._v(" "),a("p",[e._v("There's two players, "),a("em",[e._v("player 1")]),e._v(" and "),a("em",[e._v("player 2")]),e._v(". Both players roll a d20 for initiative "),a("code",[e._v("/roll d20")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Player 1 rolls a 3\nPlayer 2 rolls a 15\n")])])]),a("p",[a("em",[e._v("Player 2")]),e._v(" in that scenario gets to roll first, and "),a("em",[e._v("player 1")]),e._v(" gets to roll second.")]),e._v(" "),a("h4",{attrs:{id:"criticals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#criticals"}},[e._v("#")]),e._v(" Criticals")]),e._v(" "),a("p",[e._v("Each combat roll has a "),a("code",[e._v("5%")]),e._v(" static chance of getting a critical. Getting a critical will result in a "),a("code",[e._v("+3")]),e._v(" to your combat roll. Below is a list of skills that can be affected by critical hits.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("handtohand\naxe\nlongblade\nbluntweapon\nshortblade\nmarksman\n")])])]),a("h4",{attrs:{id:"critical-failures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#critical-failures"}},[e._v("#")]),e._v(" Critical Failures")]),e._v(" "),a("p",[e._v("If you end up rolling a "),a("code",[e._v("1")]),e._v(" for your roll, your roll will be "),a("strong",[e._v("+0")]),e._v(" bonus no matter your skill/attribute level is.")]),e._v(" "),a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[e._v("#")]),e._v(" Attributes")]),e._v(" "),a("p",[e._v("Your skill level will directly affect your attribute rolls. The calculations for how your attribute bonus is determined by your "),a("a",{attrs:{href:"https://en.uesp.net/wiki/Morrowind:Skills",target:"_blank",rel:"noopener noreferrer"}},[e._v("skill levels"),a("OutboundLink")],1),e._v("."),a("br"),e._v("\nThis is the math formula that is used for those math people out there. "),a("code",[e._v("(skill level + skill level + skill level + skill level)/25")])]),e._v(" "),a("h2",{attrs:{id:"rpr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpr"}},[e._v("#")]),e._v(" RPR")]),e._v(" "),a("p",[e._v("If you are curious of how the RPR system we have works then please visit our "),a("a",{attrs:{href:"https://dor.winterfang.com/ingame/rpr.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RPR"),a("OutboundLink")],1),e._v(" page. "),a("strong",[e._v("Keep in mind the RPR system will have 0 impact on rolls and your RP health.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);