import JSZip from "./jszip.min.js";
import saveAs from './FileSaver.js';
import jsonexport from "jsonexport/dist";

class TableExportZip {
	constructor(options) {
		this.options = Object.assign({}, TableExportZip.DEFAULTS, options);

		this._init();
	}

	static get DEFAULTS() {
		return {
			zipFileName: "eportFile",
			processCallback: null,
			doneCallback: null,
			failCallback: null,
			addFiles: null
		};
	}

	_init() {
		console.log(this);
	}

	download() {
		console.log("download");
	}
}

window.TableExportZip = TableExportZip;
export default TableExportZip;
