/*var monbouton = document.getElementById('valider');*/
/*monbouton.onclick =*/ function division() {
  var first_number = document.getElementById('premier_nombre').value , second_number = document.getElementById('deuxieme_nombre').value;
  var result = parseFloat(first_number) % (parseFloat(second_number));
    alert(result);
};
