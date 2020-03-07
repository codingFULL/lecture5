var numero1 = null;
var numero2 = null;

function suma() {
  // var numero1 = +document.getElementById('text1').value;
  a();
  var resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Resultado: ' + (+numero1.value + +numero2.value);
}

a = function() {
  numero1 = document.getElementById('text1');
  numero2 = document.getElementById('text2');
};
