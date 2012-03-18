#!/bin/bash

cp ../assets/* ../build/ -r

cp ../src/index.html ../build/index.html

cat ../src/*.js > ../build/js/math.js

java -jar compiler/compiler.jar --warning_level=VERBOSE --jscomp_off=globalThis --jscomp_off=checkTypes --externs externs_common.js --language_in=ECMASCRIPT5_STRICT --js ../build/js/math.js --js_output_file ../build/js/math.min.js

rm ../build/js/math.js