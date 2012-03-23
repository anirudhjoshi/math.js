/* Jison generated parser */
var calculator = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"GCD":10,"(":11,",":12,")":13,"ROUND":14,"MIN":15,"MAX":16,"FRAC":17,"{":18,"}":19,"TEXT":20,"^":21,"SQRT":22,"!":23,"%":24,"NUMBER":25,"E":26,"PI":27,"sin":28,"arcsin":29,"csc":30,"cos":31,"arccos":32,"sec":33,"tan":34,"arctan":35,"cot":36,"=":37,"<":38,">":39,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"GCD",11:"(",12:",",13:")",14:"ROUND",15:"MIN",16:"MAX",17:"FRAC",18:"{",19:"}",20:"TEXT",21:"^",22:"SQRT",23:"!",24:"%",25:"NUMBER",26:"E",27:"PI",28:"sin",29:"arcsin",30:"csc",31:"cos",32:"arccos",33:"sec",34:"tan",35:"arctan",36:"cot",37:"=",38:"<",39:">"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,6],[4,4],[4,6],[4,6],[4,7],[4,4],[4,3],[4,4],[4,2],[4,2],[4,2],[4,3],[4,1],[4,1],[4,1],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3]],
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
case 6:this.$ = gcd( $$[$0-3], $$[$0-1] )
break;
case 7:this.$ = Math.round( $$[$0-1] )
break;
case 8:this.$ = Math.min( $$[$0-3], $$[$0-1] )
break;
case 9:this.$ = Math.max( $$[$0-3], $$[$0-1] )
break;
case 10:this.$ = $$[$0-4]/$$[$0-1]
break;
case 11:this.$ = $$[$0-1]
break;
case 12:this.$ = Math.pow($$[$0-2], $$[$0])
break;
case 13:this.$ = Math.sqrt( $$[$0-1] )
break;
case 14:this.$ = (function(n) {if(n==0) return 1; return arguments.callee(n-1) * n})($$[$0-1])
break;
case 15:this.$ = $$[$0-1]/100
break;
case 16:this.$ = -$$[$0]
break;
case 17:this.$ = $$[$0-1]
break;
case 18:this.$ = Number(yytext)
break;
case 19:this.$ = Math.E
break;
case 20:this.$ = Math.PI
break;
case 21:this.$ = Math.sin( $$[$0-1] )
break;
case 22:this.$ = Math.asin( $$[$0-1] )
break;
case 23:this.$ = 1 / Math.sin( $$[$0-1] )
break;
case 24:this.$ = Math.cos( $$[$0-1] )
break;
case 25:this.$ = Math.acos( $$[$0-1] )
break;
case 26:this.$ = 1 / Math.cos( $$[$0-1] )
break;
case 27:this.$ = Math.tan( $$[$0-1] )
break;
case 28:this.$ = Math.atan( $$[$0-1] )
break;
case 29:this.$ = 1 / Math.tan( $$[$0-1] )
break;
case 30:this.$ = ( $$[$0-2] == $$[$0] )
break;
case 31:this.$ = ( $$[$0-2] < $$[$0] )
break;
case 32:this.$ = ( $$[$0-2] > $$[$0] )
break;
}
},
table: [{3:1,4:2,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{1:[3]},{5:[1,24],6:[1,25],7:[1,26],8:[1,27],9:[1,28],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{11:[1,35]},{11:[1,36]},{11:[1,37]},{11:[1,38]},{18:[1,39]},{18:[1,40]},{18:[1,41]},{4:42,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:43,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],12:[2,18],13:[2,18],19:[2,18],21:[2,18],23:[2,18],24:[2,18],37:[2,18],38:[2,18],39:[2,18]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],12:[2,19],13:[2,19],19:[2,19],21:[2,19],23:[2,19],24:[2,19],37:[2,19],38:[2,19],39:[2,19]},{5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],12:[2,20],13:[2,20],19:[2,20],21:[2,20],23:[2,20],24:[2,20],37:[2,20],38:[2,20],39:[2,20]},{11:[1,44]},{11:[1,45]},{11:[1,46]},{11:[1,47]},{11:[1,48]},{11:[1,49]},{11:[1,50]},{11:[1,51]},{11:[1,52]},{1:[2,1]},{4:53,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:54,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:55,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:56,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:57,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],12:[2,14],13:[2,14],19:[2,14],21:[2,14],23:[2,14],24:[2,14],37:[2,14],38:[2,14],39:[2,14]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],12:[2,15],13:[2,15],19:[2,15],21:[2,15],23:[2,15],24:[2,15],37:[2,15],38:[2,15],39:[2,15]},{4:58,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:59,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:60,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:61,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:62,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:63,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:64,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:65,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:66,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:67,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],12:[2,16],13:[2,16],19:[2,16],21:[2,16],23:[2,16],24:[2,16],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,68],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{4:69,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:70,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:71,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:72,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:73,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:74,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:75,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:76,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:77,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{5:[2,2],6:[2,2],7:[2,2],8:[1,27],9:[1,28],12:[2,2],13:[2,2],19:[2,2],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,3],6:[2,3],7:[2,3],8:[1,27],9:[1,28],12:[2,3],13:[2,3],19:[2,3],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],12:[2,4],13:[2,4],19:[2,4],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],12:[2,5],13:[2,5],19:[2,5],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],12:[2,12],13:[2,12],19:[2,12],21:[2,12],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,30],6:[2,30],7:[2,30],8:[2,30],9:[2,30],12:[2,30],13:[2,30],19:[2,30],21:[2,30],23:[2,30],24:[2,30],37:[1,32],38:[1,33],39:[1,34]},{5:[2,31],6:[2,31],7:[2,31],8:[2,31],9:[2,31],12:[2,31],13:[2,31],19:[2,31],21:[2,31],23:[2,31],24:[2,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,32],6:[2,32],7:[2,32],8:[2,32],9:[2,32],12:[2,32],13:[2,32],19:[2,32],21:[2,32],23:[2,32],24:[2,32],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],12:[1,78],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,79],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],12:[1,80],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],12:[1,81],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],19:[1,82],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],19:[1,83],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],19:[1,84],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],12:[2,17],13:[2,17],19:[2,17],21:[2,17],23:[2,17],24:[2,17],37:[2,17],38:[2,17],39:[2,17]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,85],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,86],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,87],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,88],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,89],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,90],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,91],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,92],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,93],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{4:94,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],12:[2,7],13:[2,7],19:[2,7],21:[2,7],23:[2,7],24:[2,7],37:[2,7],38:[2,7],39:[2,7]},{4:95,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{4:96,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{18:[1,97]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],12:[2,11],13:[2,11],19:[2,11],21:[2,11],23:[2,11],24:[2,11],37:[2,11],38:[2,11],39:[2,11]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],12:[2,13],13:[2,13],19:[2,13],21:[2,13],23:[2,13],24:[2,13],37:[2,13],38:[2,13],39:[2,13]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],12:[2,21],13:[2,21],19:[2,21],21:[2,21],23:[2,21],24:[2,21],37:[2,21],38:[2,21],39:[2,21]},{5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],12:[2,22],13:[2,22],19:[2,22],21:[2,22],23:[2,22],24:[2,22],37:[2,22],38:[2,22],39:[2,22]},{5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],12:[2,23],13:[2,23],19:[2,23],21:[2,23],23:[2,23],24:[2,23],37:[2,23],38:[2,23],39:[2,23]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],12:[2,24],13:[2,24],19:[2,24],21:[2,24],23:[2,24],24:[2,24],37:[2,24],38:[2,24],39:[2,24]},{5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],12:[2,25],13:[2,25],19:[2,25],21:[2,25],23:[2,25],24:[2,25],37:[2,25],38:[2,25],39:[2,25]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],12:[2,26],13:[2,26],19:[2,26],21:[2,26],23:[2,26],24:[2,26],37:[2,26],38:[2,26],39:[2,26]},{5:[2,27],6:[2,27],7:[2,27],8:[2,27],9:[2,27],12:[2,27],13:[2,27],19:[2,27],21:[2,27],23:[2,27],24:[2,27],37:[2,27],38:[2,27],39:[2,27]},{5:[2,28],6:[2,28],7:[2,28],8:[2,28],9:[2,28],12:[2,28],13:[2,28],19:[2,28],21:[2,28],23:[2,28],24:[2,28],37:[2,28],38:[2,28],39:[2,28]},{5:[2,29],6:[2,29],7:[2,29],8:[2,29],9:[2,29],12:[2,29],13:[2,29],19:[2,29],21:[2,29],23:[2,29],24:[2,29],37:[2,29],38:[2,29],39:[2,29]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,98],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,99],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],13:[1,100],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{4:101,7:[1,10],10:[1,3],11:[1,11],14:[1,4],15:[1,5],16:[1,6],17:[1,7],20:[1,8],22:[1,9],25:[1,12],26:[1,13],27:[1,14],28:[1,15],29:[1,16],30:[1,17],31:[1,18],32:[1,19],33:[1,20],34:[1,21],35:[1,22],36:[1,23]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],12:[2,6],13:[2,6],19:[2,6],21:[2,6],23:[2,6],24:[2,6],37:[2,6],38:[2,6],39:[2,6]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],12:[2,8],13:[2,8],19:[2,8],21:[2,8],23:[2,8],24:[2,8],37:[2,8],38:[2,8],39:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],12:[2,9],13:[2,9],19:[2,9],21:[2,9],23:[2,9],24:[2,9],37:[2,9],38:[2,9],39:[2,9]},{6:[1,25],7:[1,26],8:[1,27],9:[1,28],19:[1,102],21:[1,29],23:[1,30],24:[1,31],37:[1,32],38:[1,33],39:[1,34]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],12:[2,10],13:[2,10],19:[2,10],21:[2,10],23:[2,10],24:[2,10],37:[2,10],38:[2,10],39:[2,10]}],
defaultActions: {24:[2,1]},
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
case 1:return '.'
break;
case 2:return 25
break;
case 3:/* skip whitespace */
break;
case 4:/* skip whitespace */
break;
case 5:/* skip whitespace */
break;
case 6:return 20
break;
case 7:return 37
break;
case 8:return 38
break;
case 9:return 39
break;
case 10:return 8
break;
case 11:return 8
break;
case 12:return 9
break;
case 13:return 10
break;
case 14:return 14
break;
case 15:return 15
break;
case 16:return 16
break;
case 17:return 17
break;
case 18:return 7
break;
case 19:return 6
break;
case 20:return 'SUM'
break;
case 21:return 21
break;
case 22:return 22
break;
case 23:return 23
break;
case 24:return 24
break;
case 25:return 11
break;
case 26:return 18
break;
case 27:return 13
break;
case 28:return 19
break;
case 29:return 12
break;
case 30:return 28
break;
case 31:return 29
break;
case 32:return 30
break;
case 33:return 32
break;
case 34:return 33
break;
case 35:return 31
break;
case 36:return 34
break;
case 37:return 35
break;
case 38:return 36
break;
case 39:return 27
break;
case 40:return 27
break;
case 41:return 26
break;
case 42:return 'VARIABLE'
break;
case 43:return 5
break;
}
};
lexer.rules = [/^\s+/,/^\./,/^[0-9]+(?:\.[0-9]+)?\b/,/^\\/,/^left/,/^right/,/^text/,/^=/,/^\</,/^\>/,/^\*/,/^cdot/,/^\//,/^gcd/,/^round/,/^min/,/^max/,/^frac/,/^-/,/^\+/,/^sum/,/^\^/,/^sqrt/,/^!/,/^%/,/^\(/,/^\{/,/^\)/,/^\}/,/^\,/,/^sin/,/^arcsin/,/^csc/,/^arccos/,/^sec/,/^cos/,/^tan/,/^arctan/,/^cot/,/^PI\b/,/^pi/,/^E\b/,/^[a-zA-Z]+(?:\[a-z]+)?\b/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"inclusive":true}};
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