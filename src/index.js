/**
 * @file The main file that actually runs programs
 * @author Electogenius
*/
/**
 * @namespace maka
 * @description the main module
 */
const maka = {
	/**
	 * @function maka.run
	 * @param {string} code the code to be run
	 * @returns {maka.Cell[]} the tape after the program is run
	 */
	run(code) {
		console.log(maka)
		const locale = code.split("\n")[0]
		if (!(locale in maka.locales)) {
			throw "🗣⁉️"
		}
		code = code.split("\n").slice(1) //yep
		code.forEach(ln => {
			const line = ln.trim()
			for (item in maka.locales[locale]) {
				if (maka.locales[locale][item].test(line.replace(/".*"/g, "%%"))) {
					//valid command
					maka.abilities[item](line.match(/".*"/))
				}else{
					//invalid command (ignored)
				}
			}
		});
		return t = maka.tape
	},
	/** all the different languages
	 * @type object */
	locales: {
		//debugging
		"db": {
			"label": /^this %%$/
		}
	},
	/** the positions of the 'this is "x"' markers
	 * @type object */
	labels: {},
	/** the commands
	 * @type object */
	abilities: {
		label([name]) {
			maka.labels[name]
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
	}
}

{
	try {
		module.exports = maka
	} catch (_) {
		this.maka = maka
	}
}
