# left-pad-io

Finally you can left pad your strings using the enterprise level robustness of a REST service, from the comfort of your node application!

## Installation

```
npm install --save left-pad-io
```

## Usage

```
var leftPad = require('left-pad-io')

leftPad('pm', 3, 'n', function(paddedString) {
  console.log(paddedString) // 'npm'
})
```
