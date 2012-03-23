/* Jison generated parser */
var calculator = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"FRAC":10,"{":11,"}":12,"^":13,"SQRT":14,"!":15,"%":16,"(":17,")":18,"NUMBER":19,"E":20,"PI":21,"sin":22,"arcsin":23,"cos":24,"arccos":25,"tan":26,"arctan":27,"=":28,"<":29,">":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"FRAC",11:"{",12:"}",13:"^",14:"SQRT",15:"!",16:"%",17:"(",18:")",19:"NUMBER",20:"E",21:"PI",22:"sin",23:"arcsin",24:"cos",25:"arccos",26:"tan",27:"arctan",28:"=",29:"<",30:">"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,7],[4,3],[4,4],[4,2],[4,2],[4,2],[4,3],[4,1],[4,1],[4,1],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1]
break;
case 2:this.$ = $$[$0-2]+$$[$0]
break;
case 3:this.$ = $$[$0-2]-$$[$0]
break;
case 4:this.$ = $$[$0-2]*$$[$0]
break;
case 5:this.$ = $$[$0-2]/$$[$0]
break;
case 6:this.$ = $$[$0-4]/$$[$0-1]
break;
case 7:this.$ = Math.pow($$[$0-2], $$[$0])
break;
case 8:this.$ = Math.sqrt( $$[$0-1] )
break;
case 9:this.$ = (function(n) {if(n==0) return 1; return arguments.callee(n-1) * n})($$[$0-1])
break;
case 10:this.$ = $$[$0-1]/100
break;
case 11:this.$ = -$$[$0]
break;
case 12:this.$ = $$[$0-1]
break;
case 13:this.$ = Number(yytext)
break;
case 14:this.$ = Math.E
break;
case 15:this.$ = Math.PI
break;
case 16:this.$ = Math.sin( $$[$0-1] )
break;
case 17:this.$ = Math.asin( $$[$0-1] )
break;
case 18:this.$ = Math.cos( $$[$0-1] )
break;
case 19:this.$ = Math.acos( $$[$0-1] )
break;
case 20:this.$ = Math.tan( $$[$0-1] )
break;
case 21:this.$ = Math.atan( $$[$0-1] )
break;
case 22:this.$ = ( $$[$0-2] == $$[$0] )
break;
case 23:this.$ = ( $$[$0-2] < $$[$0] )
break;
case 24:this.$ = ( $$[$0-2] > $$[$0] )
break;
}
},
table: [{3:1,4:2,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{1:[3]},{5:[1,16],6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],28:[1,24],29:[1,25],30:[1,26]},{11:[1,27]},{11:[1,28]},{4:29,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:30,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],12:[2,13],13:[2,13],15:[2,13],16:[2,13],18:[2,13],28:[2,13],29:[2,13],30:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],12:[2,14],13:[2,14],15:[2,14],16:[2,14],18:[2,14],28:[2,14],29:[2,14],30:[2,14]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],12:[2,15],13:[2,15],15:[2,15],16:[2,15],18:[2,15],28:[2,15],29:[2,15],30:[2,15]},{17:[1,31]},{17:[1,32]},{17:[1,33]},{17:[1,34]},{17:[1,35]},{17:[1,36]},{1:[2,1]},{4:37,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:38,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:39,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:40,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:41,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],12:[2,9],13:[2,9],15:[2,9],16:[2,9],18:[2,9],28:[2,9],29:[2,9],30:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],12:[2,10],13:[2,10],15:[2,10],16:[2,10],18:[2,10],28:[2,10],29:[2,10],30:[2,10]},{4:42,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:43,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:44,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:45,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:46,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],12:[2,11],13:[2,11],15:[2,11],16:[2,11],18:[2,11],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,47],28:[1,24],29:[1,25],30:[1,26]},{4:48,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:49,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:50,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:51,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:52,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{4:53,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{5:[2,2],6:[2,2],7:[2,2],8:[1,19],9:[1,20],12:[2,2],13:[1,21],15:[1,22],16:[1,23],18:[2,2],28:[1,24],29:[1,25],30:[1,26]},{5:[2,3],6:[2,3],7:[2,3],8:[1,19],9:[1,20],12:[2,3],13:[1,21],15:[1,22],16:[1,23],18:[2,3],28:[1,24],29:[1,25],30:[1,26]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],12:[2,4],13:[1,21],15:[1,22],16:[1,23],18:[2,4],28:[1,24],29:[1,25],30:[1,26]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],12:[2,5],13:[1,21],15:[1,22],16:[1,23],18:[2,5],28:[1,24],29:[1,25],30:[1,26]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],12:[2,7],13:[2,7],15:[1,22],16:[1,23],18:[2,7],28:[1,24],29:[1,25],30:[1,26]},{5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],12:[2,22],13:[2,22],15:[2,22],16:[2,22],18:[2,22],28:[1,24],29:[1,25],30:[1,26]},{5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],12:[2,23],13:[2,23],15:[2,23],16:[2,23],18:[2,23],28:[1,24],29:[1,25],30:[1,26]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],12:[2,24],13:[2,24],15:[2,24],16:[2,24],18:[2,24],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],12:[1,54],13:[1,21],15:[1,22],16:[1,23],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],12:[1,55],13:[1,21],15:[1,22],16:[1,23],28:[1,24],29:[1,25],30:[1,26]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],12:[2,12],13:[2,12],15:[2,12],16:[2,12],18:[2,12],28:[2,12],29:[2,12],30:[2,12]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,56],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,57],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,58],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,59],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,60],28:[1,24],29:[1,25],30:[1,26]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],13:[1,21],15:[1,22],16:[1,23],18:[1,61],28:[1,24],29:[1,25],30:[1,26]},{11:[1,62]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],12:[2,8],13:[2,8],15:[2,8],16:[2,8],18:[2,8],28:[2,8],29:[2,8],30:[2,8]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],12:[2,16],13:[2,16],15:[2,16],16:[2,16],18:[2,16],28:[2,16],29:[2,16],30:[2,16]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],12:[2,17],13:[2,17],15:[2,17],16:[2,17],18:[2,17],28:[2,17],29:[2,17],30:[2,17]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],12:[2,18],13:[2,18],15:[2,18],16:[2,18],18:[2,18],28:[2,18],29:[2,18],30:[2,18]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],12:[2,19],13:[2,19],15:[2,19],16:[2,19],18:[2,19],28:[2,19],29:[2,19],30:[2,19]},{5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],12:[2,20],13:[2,20],15:[2,20],16:[2,20],18:[2,20],28:[2,20],29:[2,20],30:[2,20]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],12:[2,21],13:[2,21],15:[2,21],16:[2,21],18:[2,21],28:[2,21],29:[2,21],30:[2,21]},{4:63,7:[1,5],10:[1,3],14:[1,4],17:[1,6],19:[1,7],20:[1,8],21:[1,9],22:[1,10],23:[1,11],24:[1,12],25:[1,13],26:[1,14],27:[1,15]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],12:[1,64],13:[1,21],15:[1,22],16:[1,23],28:[1,24],29:[1,25],30:[1,26]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],12:[2,6],13:[2,6],15:[2,6],16:[2,6],18:[2,6],28:[2,6],29:[2,6],30:[2,6]}],
defaultActions: {16:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this._input = this.match.slice(n) + this._input;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip whitespace */
break;
case 2:/* skip whitespace */
break;
case 3:/* skip whitespace */
break;
case 4:return 19
break;
case 5:return 28
break;
case 6:return 29
break;
case 7:return 30
break;
case 8:return 8
break;
case 9:return 8
break;
case 10:return 9
break;
case 11:return 10
break;
case 12:return 7
break;
case 13:return 6
break;
case 14:return 'SUM'
break;
case 15:return 13
break;
case 16:return 14
break;
case 17:return 15
break;
case 18:return 16
break;
case 19:return 17
break;
case 20:return 11
break;
case 21:return 18
break;
case 22:return 12
break;
case 23:return 22
break;
case 24:return 23
break;
case 25:return 24
break;
case 26:return 25
break;
case 27:return 26
break;
case 28:return 27
break;
case 29:return 21
break;
case 30:return 21
break;
case 31:return 20
break;
case 32:return 'VARIABLE'
break;
case 33:return 5
break;
}
};
lexer.rules = [/^\s+/,/^\\/,/^left/,/^right/,/^[0-9]+(?:\.[0-9]+)?\b/,/^=/,/^\</,/^\>/,/^\*/,/^cdot/,/^\//,/^frac/,/^-/,/^\+/,/^sum/,/^\^/,/^sqrt/,/^!/,/^%/,/^\(/,/^\{/,/^\)/,/^\}/,/^sin/,/^arcsin/,/^cos/,/^arccos/,/^tan/,/^arctan/,/^PI\b/,/^pi/,/^E\b/,/^[a-zA-Z]+(?:\[a-z]+)?\b/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}