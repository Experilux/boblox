const config = {
    maintenance: false,
    name: "Boblox",
    motto: "Powering Copyright!",
    social_media:{
        twitter:"https://twitter.com/experilux",
        discord:"",
        guilded:"",
        youtube:"https://youtube.com/c/experilux",
    },
    forums:{
        postRate: 1, // one post every 15 seconds

        categories:{
            General:{
                name: "General",
                desc: "Just a general place",
            },
            OffTopic:{
                name: "Off Topic",
                desc: "Just off place",
            },
            Market:{
                name: "Marketplace",
                desc: "WHAT?! IS THAT BIG CHUNGUS?!",
            },
            Poggers:{
                name: "this is pog",
                desc: "how",
            },

           
            ///////////////////
            
            ////////////////////////////
        }

    },
    avatar:{
        type: "roundy"
    },

    currency: {
        currency: "Bobux",
        currencyIcon: "https://ibb.co/Ld0PRJg",
        starterCurrency: 50, // Starter Currency

    },
    memberShip:{
        memberShipExtraCurrency: 100, // Money per day for plus
        noMembershipExtraCurrency: 20, // Money per day for no plus
        membershipName: "Plus", // Membership name

    },
    bootsrapTheme: "flatly", // https://bootswatch.com/

    site_icon: "https://ibb.co/683j1bn",

    jwt_Key: "$2y$12$GRde9J1RNDBe2vwtgsXR7OeSurIhUw8Ah0BDvOuYmERXKXSQ/WBBW", // Write random crap here and then encrypt it on this website https://bcrypt-generator.com/, after that paste what you got here.
    jwt_Key2: "$2y$12$ya9kwKVU/5Q9OkmyxbbY.OHJVGIvoc.nT7SSDGoT/6fDAv0SqVt2q", // Write random crap here and then encrypt it on this website https://bcrypt-generator.com/, after that paste what you got here.



}
module.exports = config;
