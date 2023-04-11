//LangName
this.locales["LangName"]={
	label: /^$/i,
	nextCell: /^$/i,
	prevCell: /^$/i,
	addNum: /^$/i,
	subNum: /^$/i,
	appendStr: /^$/i,
	prependStr: /^$/i,
	jump: /^$/i,
	emptyStr: /^$/i,
	printCell: /^$/i,
	printText: /^$/i,
	setStr: /^$/i,

	strToNum(str) {
		return parseFloat(str)
	},
	numToStr(num) {
		return num + ""
	}
}
