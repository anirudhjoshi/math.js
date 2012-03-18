#!/bin/bash

cat ../src/*.js > ../build/math.js

java -jar compiler/compiler.jar --warning_level=VERBOSE --jscomp_off=globalThis --jscomp_off=checkTypes --externs externs_common.js --language_in=ECMASCRIPT5_STRICT --js ../build/math.js --js_output_file ../build/math.min.js

rm ../build/math.js
