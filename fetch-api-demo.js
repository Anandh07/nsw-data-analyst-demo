
// fetch-api-demo.js
fetch('https://fakestoreapi.com/products?limit=3')
  .then(res => res.json())
  .then(data => {
    let html = '<ul>';
    data.forEach(product => {
      html += `<li><strong>${product.title}</strong> – $${product.price}</li>`;
    });
    html += '</ul>';
    document.getElementById('api-data').innerHTML = html;
  })
  .catch(err => {
    document.getElementById('api-data').innerText = 'Failed to load API data.';
  });
