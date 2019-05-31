"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Bem Vindo!'); });
        app.route('/ola/:nome').get(function (req, res) { return res.send(res.send("Ol\u00E1, " + req.params.nome)); });
    };
    return Routes;
}());
exports.default = Routes;
