"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const valuesRoutes_1 = __importDefault(require("./routes/valuesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
var path = require('path');
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //para ver los GET POST en el npm
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //el servidor entiende el formato json
        //this.app.use(express.static(__dirname + '/dist'));
        //this.app.use(express.static(path.join(__dirname,'../dist/')));
        this.app.use(express_1.default.static(__dirname + '../dist/client'));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/values', valuesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
const server = new Server();
server.start();
