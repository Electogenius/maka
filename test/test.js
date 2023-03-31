let maka=require("../src/index.js")

maka.getLocaleNode("locales", ["db", "en"])

//Object.keys(maka.abilities).forEach(e=>maka.locales.db[e]=new RegExp(`^${e} %%$`))
//maka.locales.db.printCell=/^\.$/
maka.run(
`English
# counts until 10:

add number "1" to box
go to next box
add the number "10" to box
	
this is the line named "count"
	go to last box
	say what is in box
	add the number "1" to box
	go to next box
	add the number "-1" to box
	if there is any nonzero value in box, go to "count"
`
)
console.log(maka)
console.log(maka.tape)
//to keep it running
setInterval(()=>{})
