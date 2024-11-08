var stu=['jia','destiny','john']
document.write(stu.sort()+'<br>')
document.write(stu.reverse()+'<br>')
document.write('Array sorting of numbers<br>')
var points = [40,100,1,5,25,10];
document.write('Original array='+ points +'<br><br>')
document.write('Ascending order<br>')
points.sort(function(a, b){return a - b});
document.write(points+'<br>')
document.write('Descending order<br>')
points.sort(function(a, b){return b - a});
document.write(points+'<br>')

var numbers = [28, 6, 19, 95];

function myFunction(num)

{

return num + 10;

}

var newarray = numbers.map(myFunction);

document.write(newarray)