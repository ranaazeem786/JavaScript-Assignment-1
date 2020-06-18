var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

--a;

document.write ("a is " + a + "<br>")
document.write ("b is " + b + "<br>")
document.write ("result is " + result + "<br><br>")

--a - --b;

document.write ("a is " + a + "<br>")
document.write ("b is " + b + "<br>")
document.write ("result is " + result + "<br><br>")

--a - --b + ++b;

document.write ("a is " + a + "<br>")
document.write ("b is " + b + "<br>")
document.write ("result is " + result + "<br><br>")

--a - --b + ++b + b--;

document.write ("a is " + a + "<br>")
document.write ("b is " + b + "<br>")
document.write ("result is " + result )