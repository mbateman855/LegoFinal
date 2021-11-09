"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var parts_service_1 = require("./parts.service");
describe('PartsService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(parts_service_1.PartsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=parts.service.spec.js.map