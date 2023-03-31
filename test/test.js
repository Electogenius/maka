let maka=require("../src/index.js")

maka.getLocaleNode("locales", ["db", "en"])

//Object.keys(maka.abilities).forEach(e=>maka.locales.db[e]=new RegExp(`^${e} %%$`))
//maka.locales.db.printCell=/^\.$/
maka.run(
`English
# says hello world forever
this is "the start"
	put text "Hello, world" in this box
	move to the next box.
	move to previous box
	say what is in box.
If there is something in this box, go to "the start"
`
)
console.log(maka)
console.log(maka.tape)
//to keep it running
setInterval(()=>{})
