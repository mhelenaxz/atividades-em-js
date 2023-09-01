function calcularCentimetros() {
    const polegadas = parseFloat(document.getElementById("polegadas").value);

    const centimetros = polegadas * 2.54

  document.getElementById("resultado").textContent = polegadas + " polegadas em centímetros fica: " + centimetros
}