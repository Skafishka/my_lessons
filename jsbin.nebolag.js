w = "#"
for (var q="#";q.length<=7;q+=w) {
  document.write(q+"</br>")};
  
for (var e=1;e<=100;e+=1) {
  if (e%15===0) document.write(" FizzBuzz "+"</br>");
  else if (e%3===0) document.write(" Fizz "+"</br>");
    else if (e%5===0) document.write(" Buzz "+"</br>");
      
      else document.write(e+"</br>");
};