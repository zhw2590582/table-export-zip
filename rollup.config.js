const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");

export default {
	input: "src/index.js",
	output: {
		name: "tableExportZip",
		file: "dist/tableExportZip.js",
		format: "umd"
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		babel({
			plugins: ["external-helpers"]
		})
	]
};
