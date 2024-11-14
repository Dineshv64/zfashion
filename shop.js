


/*products searching script*/


const searchInput = document.getElementById('search');
const products = document.querySelectorAll('.products');

searchInput.addEventListener('input', filterProducts);

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();products.forEach((product) => {
    const productName = product.querySelector('h5').textContent.toLowerCase();
   
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
  