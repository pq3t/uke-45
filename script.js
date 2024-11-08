fetch('products.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('product-cards');
  data.forEach(product => {
    const html = `
      <div class="card">
        <img class="image" src="img/${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <a><button class="btn">$${product.price}</button></a>
      </div>
    `;
    container.innerHTML += html;
  });
});