"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var wishlist_service_1 = require("./wishlist.service");
describe('WishlistService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(wishlist_service_1.WishlistService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=wishlist.service.spec.js.map