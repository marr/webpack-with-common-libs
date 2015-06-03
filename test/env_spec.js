var TestUtils = require('react/lib/ReactTestUtils');
describe("environment", function() {
    it("should load React.addons.TestUtils", function() {
        TestUtils.should.exist;
    });
})

