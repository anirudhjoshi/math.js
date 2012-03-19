#!/bin/bash

if [ $1 = 'all' ]; then
  rm ../build/* -r -f
fi

cp ../assets/* ../build/ -r

cp ../src/* ../build/

cat ../src/js/*.js > ../build/js/math.js
cat ../src/css/*.css > ../build/css/math.css

java -jar compiler/compiler.jar --warning_level=VERBOSE --jscomp_off=globalThis --jscomp_off=checkTypes --externs externs_common.js --language_in=ECMASCRIPT5_STRICT --js ../build/js/math.js --js_output_file ../build/js/math.min.js

rm ../build/js/math.js
