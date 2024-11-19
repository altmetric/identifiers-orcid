# Identifiers - ORCID

Extract, validate and normalize [ORCID identifiers](http://orcid.org/).

**Current version:** 0.1.1  
**Supported Node.js versions:** 18, 20, 22, 23

## Installation

Add the following to your `package.json` via `yarn add identifiers-orcid` or `npm install --save identifiers-orcid`:

```shell
"identifiers-orcid": "^0.1.0"
```

## Usage

```javascript
const orcid = require("identifiers-orcid");

orcid.extract("orcid.org/0000-0002-0088-0058");
//=> ["0000-0002-0088-0058"]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017-2024 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
