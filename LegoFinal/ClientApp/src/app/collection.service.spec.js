"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var collection_service_1 = require("./collection.service");
describe('CollectionService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(collection_service_1.CollectionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=collection.service.spec.js.map