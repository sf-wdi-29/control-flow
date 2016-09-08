// !!1    => true
//
// !!"Hello"   => true
//
// !!NaN   => false
//
// !!undefined   => false
//
// !![]   => true
//
// !!{}   => true
//
var tokens = 10;
var heightInches = 50;
var age = 15;
var bossGone = false;
var hasAdult = true;
var hasPass = false;

if (tokens >= 5 && heightInches >= 48 && (age >= 12 || hasAdult)) {
    console.log("GET IN THE CAR!");
    tokens -= 5;
    if (hasPass) {
        tokens += 5
    }
} else if (bossGone) {
    console.log("You sneak in, like a ninja.")
} else {
    console.log("Get outta here, kid.");
}

switch (joke.isFunny) {
    case 'yes':
        laugh();
        break;
    case 'sort of':
        chortle();
        break;
    case 'no':
        stareBlankly();
        break;
    default:
        console.log("Was that even a joke?")
}
