#!/usr/bin/env node
/**
 * @file The main file that actually runs programs
 * @author Electogenius
*/

/**
 * @namespace maka
 * @description the main module
 */

const g = e => console.log(e)
const maka = {
	/**
	 * @function maka.run
	 * @param {string} code the code to be run
	 * @returns {maka.Cell[]} the tape after the program is run
	 */
	run(code) {
		maka.tape = [new this.Cell("str", "")]
		const locale = code.split("\n")[0]
		const stringRegex =
			/[‘’`"'「«].*[»」'"`“”‘’]/g

		if (!(locale in maka.locales)) {
			maka.throw(`🗣 "${locale}" = ❓`)
		}
		code = code.split("\n").slice(1) //yep
		for (let lnNo = 0; lnNo < code.length; lnNo++) {
			const line = code[lnNo].trim()
			Object.keys(maka.locales[locale]).forEach(item => {
				if (typeof maka.locales[locale][item] == "function") return
				if (maka.locales[locale][item].test(line.replace(stringRegex, "%%"))) {
					//valid command
					maka.abilities[item]((line.match(stringRegex) ?? []).map(e => e.slice(1, -1)), e => eval(e))
				} else {
					//invalid command (ignored)
				}
			})
		};
		return maka.tape
	},
	/** all the different languages
	 * @type object */
	locales: {},
	/**
	 * the positions of the 'this is "x"' markers
	 * @type object */
	labels: {},

	/** 
	 * the commands
	 * @type object
	*/
	abilities: {
		label([name], e) {
			maka.labels[name] = e("lnNo")
		},
		nextCell() {
			maka.ptr++
			if (maka.tape[maka.ptr] === undefined) maka.tape[maka.ptr] = new maka.Cell("str", "")
		},
		prevCell() {
			maka.ptr--
			if (maka.tape[maka.ptr] === undefined) maka.tape[maka.ptr] = new maka.Cell("str", "")
		},
		addNum([name], e) {
			maka.tape[maka.ptr].type = "num"
			maka.tape[maka.ptr].value = maka.tape[maka.ptr].value + maka.locales[e('locale')].strToNum(name)
		},
		appendStr([str]) {
			maka.tape[maka.ptr].type = "str"
			maka.tape[maka.ptr].value = String(maka.tape[maka.ptr].value) + String(str)
		},
		prependStr([str]) {
			maka.tape[maka.ptr].type = "str"
			maka.tape[maka.ptr].value = String(str) + String(maka.tape[maka.ptr].value)
		},
		jump([label], e) {
			if (maka.tape[maka.ptr].value) e("lnNo=" + maka.labels[label])
		},
		emptyStr() {
			maka.tape[maka.ptr].type = "str"
			maka.tape[maka.ptr].value = ""
		},
		printCell(_, e) {
			let val = maka.tape[maka.ptr].type == "num" ? e('maka.locales[locale].numToStr')(maka.tape[maka.ptr].value) : maka.tape[maka.ptr].value
			console.log(val)
		},
		printText([text]) {
			console.log(text)
		},
		setStr([str]) {
			maka.tape[maka.ptr].type = "str"
			maka.tape[maka.ptr].value = str
		},
		readStr() { },
		readNum() { },
		eqPrev() {

		}
	},
	/** The tape used
	 * @type maka.Cell[]
	 */
	tape: [],
	/** The cell class
	 * @class
	 */
	Cell: class {
		/** @constructor */
		constructor(type, value) {
			this.type = type || "num"; this.value = value || 0
		}
	},
	/** cell pointer */
	ptr: 0,
	/** throws an error */
	throw(error) {
		console.log("%c😕: " + error, "color: red")
		process.exit(1)
	},

	getLocaleNode(folder, locales) {
		let fs = require('fs')
		locales.forEach((locale) => {
			let js = fs.readFileSync(`${folder}/${locale}.js`)

			// Peak unsafety
			new Function(js).apply(this);
		})
	}
}

function h() {
	try {
		module.exports = maka
	} catch (_) {
		this.maka = maka
	}
	try {
		if (module == require.main) {
			//CLI thing
			let fn = process.argv[2]
			if (!fn.endsWith('.maka')) {
				//fn+='.maka'
			}
			try {
				let h = require('fs').readFileSync(fn, { encoding: 'utf-8' })
				maka.run(h)
			} catch (e) {
				maka.throw(`📄 '${fn}' = ❌`)
				throw e
			}
		} else {
		}
	} catch (_) {
		throw _
	}
}
h()