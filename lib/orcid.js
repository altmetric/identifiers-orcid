"use strict";

function extract(str) {
    const matches = str.match(/\d{4}-\d{4}-\d{4}-\d{3}[\dX]/gi);
    if (!matches) {
        return [];
    }

    return matches.map((orcid) => orcid.toUpperCase()).filter(isValid);
}

function isValid(str) {
    const digits = str.replace(/-/g, "");
    const baseDigits = digits.slice(0, 15).split("");
    const checkDigit = digits.charAt(15);

    const total = baseDigits.reduce((acc, digit) => (acc + parseInt(digit, 10)) * 2, 0);
    const remainder = total % 11;
    const result = (12 - remainder) % 11;
    const expectedCheckDigit = result === 10 ? "X" : result.toString();

    return checkDigit === expectedCheckDigit;
}

exports.extract = extract;
