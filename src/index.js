import JSZip from './jszip.min.js';
import jsonexport from 'jsonexport/dist';

console.log(JSZip, jsonexport)

class TableExportZip {
	constructor(options) {
        this.options = Object.assign({}, TableExportZip.DEFAULTS, options);

		this._init();
	}

	static get DEFAULTS() {
		return {
			fileName: 'eportFile',
			processing: null,
			done: null,
			addFile: null,
		};
	}

	_init() {
		console.log(this);
    }
    
    start() {
        //
    }

	destroy() {
        //
    }
}

window.TableExportZip = TableExportZip;
export default TableExportZip;
