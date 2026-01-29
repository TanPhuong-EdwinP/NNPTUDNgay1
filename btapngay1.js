//Câu 1:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
//Câu 2:
const products = [
    new Product(1, "iPhone 15", 25000000, 10, "Phone", true),
    new Product(2, "MacBook M3", 45000000, 5, "Laptop", true),
    new Product(3, "AirPods Pro", 5000000, 0, "Accessories", false),
    new Product(4, "Samsung S24", 22000000, 15, "Phone", true),
    new Product(5, "Logitech Mouse", 1200000, 20, "Accessories", true),
    new Product(6, "Dell XPS 13", 35000000, 3, "Laptop", true)
];
//Câu 3: 
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));

//Câu 4: 
const availableProducts = products.filter(p => p.quantity > 0);

//Câu 5: 
const hasExpensiveProduct = products.some(p => p.price > 30000000);

//Câu 6: 
const allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

//Câu 7: 
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
//Câu 8: 
console.log("--- Danh sách sản phẩm (for...of) ---");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

//Câu 9: 
console.log("\n--- Chi tiết sản phẩm đầu tiên (for...in) ---");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}
//Câu 10:
const finalResult = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- Sản phẩm đang bán và còn hàng ---");
console.log(finalResult);