"use strict";

function extract(str) {
    var matches = str.match(/\d{4}-\d{4}-\d{4}-\d{3}[\dX]/gi);
    if (!matches) {
        return [];
    }

    return matches.map(function (orcid) {
        return orcid.toUpperCase();
    }).filter(isValid);
}

function isValid(str) {
    var digits = str.replace(/-/g, "");
    var baseDigits = digits.slice(0, 15).split("");
    var checkDigit = digits.charAt(15);

    var total = baseDigits.reduce(function (acc, digit) {
        return (acc + parseInt(digit, 10)) * 2;
    }, 0);
    var remainder = total % 11;
    var result = (12 - remainder) % 11;
    var expectedCheckDigit = result === 10 ? "X" : result.toString();

    return checkDigit === expectedCheckDigit;
}

exports.extract = extract;