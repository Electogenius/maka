const maka = {
	run(code) {
		const locale = code.split("\n")[0]
		if (!(locale in maka.locales)) {
			throw "🗣⁉️"
		}
		code = code.split("\n").slice(1) //yep
		code.forEach(line => {
			for (item in maka.locales[locale]) {
				if (maka.locales[locale][item].test(line.replace(/".*"/g, "%%"))) {
					//valid command
					maka.abilities[item](line.match(/".*"/))
				}
			}
		});
	},
	locales: {
		"db": {
			"label": /^this %%$/
		}
	},
	labels: {},
	abilities: {
		label([name]) {
			maka.labels[name]
		}
	},
	/**
	 * @type maka.Cell[]
	 */
	tape: [],
	Cell: class {
		constructor(type, value) {
			this.type = type; this.value = value
		}
		type = "num"
		value = 0
	}
}

{
	if ("module" in this) {
		module.exports = maka
	} else {
		this.maka = maka
	}
}