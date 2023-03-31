// Agregar un event listener para cada botón "Agregar al carrito"
let addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Función para agregar un producto al carrito
function addToCart() {
  // Lógica para agregar el producto al carrito
  console.log('Producto agregado al carrito');
}