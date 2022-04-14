let maka=require("../src")

Object.keys(maka.abilities).forEach(e=>maka.locales.db[e]=new RegExp(`^${e} %%$`))
maka.locales.db.printCell=/^\.$/
maka.run(
`db
addNum "5"
.`
)
console.log(maka)
console.log(maka.tape)
//to keep it running
setInterval(()=>{})