/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 55

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow")
} else {
    console.log("Jamie Lannister has the same attack than Jon Snow")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0
    console.log("jon Snow has been slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    // jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    // console.log('here is health ' + jonSnowHealth)
    // console.log('here is health again', jonSnowHealth)
}
//jon picks up a shield, add to his defense
jonSnowDefense += 25

//jamie attacks again
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

// villager throws jon a health kit, but health can't exceed 100
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}
console.log('jon snow health after the health kit is ' + jonSnowHealth)

let coinLandsHeads = true

if (coinLandsHeads) {
    console.log("the fight continues")
} else {
    console.log("jone is allowed to run away")
}

// jamie attacks jon 5 times
for (let i = 0; i < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    if(jonSnowHealth > 0){
    console.log('jon\'s health is now ' + jonSnowHealth)
    } else {
        console.log("jon snow is dead")
    }if(jonSnowHealth <=0){
        break;
    }
}



//Post-lab assignment 1:
//Write logic in the for loop that detects if jon's health gets 0 or less, in which case you will print that jon is dead 
// and you will stop further loop iterations (see the "break" JS keyword for leaving a loop early)



// Post-lab assignment 2: 
// Write the for loop (including the logic you wrote for the first assignment) as a while loop.
// It should behave exactly the same

// let i = 0; 
// while (i < 5) {
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//     if(jonSnowHealth > 0){
//     console.log('jon\'s health is now ' + jonSnowHealth)
//     } else {
//         console.log("jon snow is dead")
//     }if(jonSnowHealth <=0){
//         break;
//     }
//     i++
// }


console.log("..........")





let backpack = [];

// backpack.push("sword");
// backpack.push("shield");
// backpack.push("food");
// can do either way

backpack.push("sword", "shield", "food")

// backpack.splice(0,1)

let externalItems = []
externalItems.push(backpack.shift())

let furCoat = "fur coat"
backpack.push(furCoat)
// backpack.unshift(furCoat)


externalItems.push(backpack.pop())

// console.log(externalItems)
// console.log(backpack)

let itemCount = backpack.length
// console.log(itemCount)

backpack.push("flint", "blanket", "knife", "toothbrush")

let fannyPack = backpack.splice(2, 4)

console.log(fannyPack[0])

for(let i = 0; i < fannyPack.length; i++){
    console.log(`fanny pack items: ${fannyPack[i]}`)
}

for(let i = 0; i < backpack.length; i++){
    console.log("backpack items: " + backpack[i])
}


if(backpack.length > 3){
    for(let i = 0; i < 3; i++){
        console.log(`backpack items: ${backpack[i]}`)
    }
} else {
    for(let i = 0; i < backpack.length; i++){
        console.log(`backpack items: ${backpack[i]}`)
    }
}



let guessMe = 54
let timeRan = 0

while(guessMe < 100){
    timeRan++
    console.log(guessMe)
    if(guessMe % 4 === 0 || guessMe % 5 === 0){
        console.log("guessMe is divisible by 4 or 5. Added 25")
        guessMe += 25
    }else if (guessMe % 3 === 0){
        console.log("guessMe is divisible by 3. Subtract 27")
        guessMe -= 27
    }else {
        console.log("added 3")
        guessMe += 3
    }

    guessMe += 22
    console.log(`guessMe is now ${guessMe}`)
}
console.log(timeRan)






