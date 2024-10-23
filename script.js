document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let cartCount = document.getElementById('cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        alert('Beer added to cart!');
    });
});