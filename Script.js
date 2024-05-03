let order = {};

function addToCart(price) {
    if (order[price]) {
        order[price]++;
    } else {
        order[price] = 1;
    }
    alert("Item added to cart! \nTotal Order: " + calculateTotal() + " PESOS");
}

function calculateTotal() {
    let total = 0;
    for (const price in order) {
        total += price * order[price];
    }
    return total;
}

function sendOrderNotification() {
    let message = "Your order:\n";
    for (const price in order) {
        message += `${order[price]} x ${price} PESOS\n`;
    }
    message += `Total Order: ${calculateTotal()} PESOS`;

    alert(message);
}