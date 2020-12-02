var expect = require("chai").expect;
import { escapeHTML } from "../../src/highlight.js";

describe("highlight.js", function() {
  describe("#escapeHTML(el)", function() {
    it("should return clean HTML markup", function() {
      expect(escapeHTML("<div></div>")).to.be.a("string");
      expect(escapeHTML("<div></div>")).to.equal("&lt;div&gt;&lt;/div&gt;");
    });
  });
});
