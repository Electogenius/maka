//[debug]
this.locales["db"]={
	label: /^@%%$/i,
	nextCell: /^>$/i,
	prevCell: /^<$/i,
	addNum: /^\+n %%$/i,
	appendStr: /^\+s %%$/i,
	prependStr: /^s\+ %%$/i,
	jump: /^# %%$/i,
	emptyStr: /^""$/i,
	printCell: /^\.$/i,
	printText: /^\. %%$/i,
	setStr: /^s %%$/i,
	
	strToNum(str) {
		return parseFloat(str)
	},
	numToStr(num) {
		return num + ""
	}
}
