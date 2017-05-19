"use strict";

const orcid = require("../lib/orcid");

test("extracts ORCID identifiers", () => {
    expect(orcid.extract("0000-0002-0488-8591")).toEqual(["0000-0002-0488-8591"]);
});

test("extracts ORCID identifiers with orcid.org prefix", () => {
    expect(orcid.extract("orcid.org/0000-0002-0088-0058")).toEqual(["0000-0002-0088-0058"]);
});

test("returns an empty array if there are no IDs", () => {
    expect(orcid.extract("No IDs here")).toEqual([]);
});

test("does not extract invalid ORCID identifiers", () => {
    expect(orcid.extract("0000-0002-0088-0052")).toEqual([]);
});

test("extracts ORCID identifiers ending in X", () => {
    expect(orcid.extract("0000-0002-1694-233X")).toEqual(["0000-0002-1694-233X"]);
});

test("extracts ORCID identifiers ending in x", () => {
    expect(orcid.extract("0000-0002-1694-233x")).toEqual(["0000-0002-1694-233X"]);
});
