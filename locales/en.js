//English
this.locales.English={
	label: /^(this (line )?is (named )?(the )?%%|this is the line (named )?%%)\.?$/i,
	nextCell: /^(move|go) to (the )?next box\.?$/i,
	prevCell: /^(move|go) to (the )?(last|previous) box\.?$/i,
	addNum: /^add (the )?number %% to (the contents of |what is in )?(this )?box\.?$/i,
	appendStr: /^add (the )?text %% after (the contents of |what is in )?(this )?box\.?$/i,
	prependStr: /^add (the )?text %% before (the contents of |what is in )?(this )?box\.?$/i,
	jump: /^if there is (something|anything|a(ny)? (nonzero )?value) in (this )?box, (go|move|continue) to (the )?(line named )?%%\.?$/i,
	emptyStr: /^remove (anything|everything) (from|in) (this )?box\.?$/i,
	printCell: /^(say|show|display|tell) (what(ever)? is in|anything in|everything in|the contents of) (this )?box\.?$/i,
	printText: /^(say|show|display|tell) %%\.?$/i,
	setStr: /^put (the )?text %% (in|inside|into) (this )?box\.?$/i,


	strToNum(str) {
		return parseFloat(str)
	},
	numToStr(num) {
		return num + ""
	}
}
