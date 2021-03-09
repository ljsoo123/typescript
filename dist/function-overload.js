let constellations = [
    { name: "Capricorn", month: 1 },
    { name: "Aqurius", month: 2 },
    { name: "Pisces", month: 3 },
    { name: "Aries", month: 4 },
    { name: "Taurus", month: 5 },
    { name: "Gemini", month: 6 },
    { name: "Cancer", month: 7 },
    { name: "Leo", month: 8 },
    { name: "Virgo", month: 9 },
    { name: "Libra", month: 10 },
    { name: "Scorpio", month: 11 },
    { name: "Sagittarius", month: 12 },
];
function pick(x) {
    if (typeof x === "object") {
        if (x.month === undefined && x.name !== undefined) {
            for (let constellation of constellations) {
                if (x.name === constellation.name) {
                    return constellation.month;
                }
            }
            return -1;
        }
        else if (x.month !== undefined && x.name === undefined) {
            if (x.month < 1 || x.month > 12) {
                return -1;
            }
            else {
                return constellations[x.month - 1].name;
            }
        }
        else {
            return -1;
        }
    }
    else if (typeof x === "number") {
        if (x > 0 && x < 13) {
            return x - 1;
        }
        else {
            return -1;
        }
    }
    else {
        return -1;
    }
}
console.log(pick({ month: 0 }));
console.log(pick({ month: 5 }));
console.log(pick({ name: "Taurus" }));
console.log(constellations[pick(5)]);
