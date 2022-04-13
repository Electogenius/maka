let maka=require("../src")

Object.keys(maka.abilities).forEach(e=>maka.locales.db[e]=new RegExp(`^${e} %%$`))
maka.run(
`db
addNum "5"
nextCell ""
emptyStr ""
prevCell ""

label "addhi"
nextCell ""
appendStr "hello"
prevCell ""
addNum "-1"
jump "addhi"`
)
console.log(maka)
console.log(maka.tape)
//to keep it running
setInterval(()=>{})