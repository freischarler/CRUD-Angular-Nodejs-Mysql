"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
var path = require('path');
class IndexController {
    index(req, res) {
        //this.app.use(express.static(__dirname + '../dist/client'));
        res.sendFile(path.join(__dirname, '../dist/client/index.html', { "root": __dirname }));
    }
}
exports.indexController = new IndexController();
