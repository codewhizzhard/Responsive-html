/* const getValue = (str) => {
    let use = str.split()
    for (const i of use) {
        use = +i
        if (use && (i.length === 4 || i.length === 6)) {
            return "done"
        }
        return "failed"
    }
}
console.log(getValue("2222443"))

const getSameValue = (...str) => {
    for (const i of str) {
        const use = +i
        if (use && i.length === 4 || i.length === 6) {
            return "worked"
        }
        return "failed"
    }
}

console.log(getSameValue(""))

const arr = ["one", "two", "three"]
arr.length = 2
console.log(arr[2])
console.log(arr)
arr.length = 3
console.log(arr)
let x= y= z = 10
console.log()
console.log(arr.join(","))
console.log(arr.push("sam"))
const namee = [1,2,3,4,5]
const reName = namee.slice(0)
namee === reName ? console.log(true) : console.log(false)
console.log(arr.sort())
const sorted = ["name2","name2","name24","name5","name6","name8"]
console.log(sorted.sort((a, b) => {
    const itemA = Number(a.slice(4))
    const itemB = Number(b.slice(4))
    return itemA - itemB
}))
console.log(sorted.forEach((element) => {
    return element
}))
console.log(sorted.every((el) =>  typeof el === "string"))
console.log(namee.reduce((a, b) => {
    return a + b
}, 0))
Array.prototype.forEach.call("wwww  ee", (el) => {
    console.log(el)
})  

!1 chek this well again for import detail !!!!!
const sortOut = (str) => {

    let sorting = str.split(" ")
    for (const sots of sorting) {
        sorting = sots.split()
        for (const sot of sorting) {
            for (now of sot) {
                const out = +now.split()
                if (out ) return out
            }
        }
    } 
}

sortOut("wer4 twyw3v hsj8sk") 
function sum(a, b, c) {
    return a + b + c
}

console.log(sum(2,3,5))

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c)
            }
        }
    }
}

const curr = curry(sum)
console.log(curr(2)(3)(5))

/// this
const person = {
    name: "vishual",
    say: function() {
        console.log(`my name is ${this.name}`)
    }
}

function myName() {
    console.log(`my name is ${this.name}`)
}

myName.call(person)

function Person(name) {
    this.name = name
}

const p1 = new Person("sammy ") */

/// prototype

function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

const p1 = new Person("sam uel")
const p2 = new Person("wom more", "samm")

Person.prototype.getFullName = function() {
    return this.firstName + "" + this.lastName
}
console.log(p2.getFullName())
function superr(fName, lName) {
    Person.call(this, fName, lName)e
    this.isSuper = true
}

superr.prototype.fight = function () {
   console.log("fight") 
}

const batman = new superr