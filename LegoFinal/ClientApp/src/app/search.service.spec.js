"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var search_service_1 = require("./search.service");
describe('SearchService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(search_service_1.SearchService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=search.service.spec.js.map