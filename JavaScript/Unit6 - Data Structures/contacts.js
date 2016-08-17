var friends = {
    bill: {
        firstName: "bill",
        lastName: "gates",
        number: 2156888144,
        address: ["USA"]
    },
    steve: {
        firstName: "steve",
        lastName: "jobs",
        number: 2156444596,
        address: ["USA"],
    },
};

var search = function (name) {
    for (var firstName in friends) {
        if (friends.steve.firstName === "steve") {
            console.log(friends.steve);
            return friends.steve;
        } else {
            console.log("didnt find a name");
        }
    }
};