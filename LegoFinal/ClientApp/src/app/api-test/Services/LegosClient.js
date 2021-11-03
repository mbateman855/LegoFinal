"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegosClient = void 0;
var LegosClient = /** @class */ (function () {
    function LegosClient(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'https://rebrickable.com/api/v3/lego/sets/';
    }
    return LegosClient;
}());
exports.LegosClient = LegosClient;
//# sourceMappingURL=LegosClient.js.map