let maka=require("../src/index.js")

Object.keys(maka.abilities).forEach(e=>maka.locales.db[e]=new RegExp(`^${e} %%$`))
maka.locales.db.printCell=/^\.$/
maka.run(
`db
prependStr 'hi'
.
`
)
console.log(maka)
console.log(maka.tape)
//to keep it running
setInterval(()=>{})
