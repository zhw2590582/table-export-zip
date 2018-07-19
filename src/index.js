import JSZip from "./jszip.min.js";
import saveAs from "./FileSaver.js";

const zip = new JSZip();

const CSVToJSON = (data, delimiter = ",") => {
	const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
	return data
		.slice(data.indexOf("\n") + 1)
		.split("\n")
		.map(v => {
			const values = v.split(delimiter);
			return titles.reduce(
				(obj, title, index) => ((obj[title] = values[index]), obj),
				{}
			);
		});
};

const JSONtoCSV = (arr, columns, delimiter = ",") =>
	[
		columns.join(delimiter),
		...arr.map(obj =>
			columns.reduce(
				(acc, key) =>
					`${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
				""
			)
		)
	].join("\n");

class TableExportZip {
	constructor(options) {
		this.options = Object.assign({}, TableExportZip.DEFAULTS, options);
		this.done = this.done.bind(this);
	}

	static get DEFAULTS() {
		return {
			zipFileName: "eportFile",
			processCallback: null,
			doneCallback: null,
			addFiles: null
		};
	}

	download() {
		zip.files = {};
		this.options.processCallback && this.options.processCallback();
		this.options.addFiles(zip, this.done, {
			CSVToJSON,
			JSONtoCSV
		});
	}

	done(result) {
		let filesLength = Object.keys(zip.files).length;
		if (filesLength === 0 || filesLength !== result.length) return
		zip.generateAsync({ type: "blob" }).then(content => {
			saveAs(content, `${this.options.zipFileName}.zip`);
			this.options.doneCallback && this.options.doneCallback();
		});
	}
}

window.TableExportZip = TableExportZip;
export default TableExportZip;
