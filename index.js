var a = String(prompt('Enter val a:'));
var b = String(prompt('Enter val b:'));
var c = String(prompt('Enter val c:'));


var x,x1,x2;
var d=b*b-4*a*c;

if ( d < 0 ) {
    document.write('No real roots.');
   } else {
      if ( d == 0 ) {
        var x=-b/2*a;
        document.write('x=',x);
    } else {
      var x1=(Math.sqrt(d)-b)/2*a;
      var x2=(-Math.sqrt(d)-b)/2*a;
        document.write('x1=',x1,'<br>x2=', x2);
        
    }
  }











