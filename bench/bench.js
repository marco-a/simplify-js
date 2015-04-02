
var Benchmark = require('benchmark');
var simplify = require('../simplify');

var points = require('../test/fixtures/1k.json');

new Benchmark.Suite()
.add('simplify (HQ)', function() {
    simplify(points, 1, true);
})
.add('simplify', function() {
    simplify(points, 1, false);
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.run();
