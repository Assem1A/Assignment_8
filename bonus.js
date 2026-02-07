
var romanToInt = function (s) {
    let sum = 0;
    const a = new Map();
    a.set("I", 1);
    a.set("V", 5);
    a.set("X", 10);
    a.set("L", 50);
    a.set("C", 100);
    a.set("D", 500);
    a.set("M", 1000);
    let j = s.length
    a.set("p", 0);

    s = s + "p"
    for (let i = 0; i < j; i++) {

        if (a.get(s[i + 1]) > a.get(s[i])) {
            sum += -a.get(s[i]);
        }
        else {
            sum += a.get(s[i]);
        }
    }
    return sum
};
//accepted on leetcode