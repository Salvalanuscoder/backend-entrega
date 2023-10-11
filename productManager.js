class managerTicket {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProductos = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Todos los campos son obligatorios');
            return;
        }

        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProductById = (id) => {
        const product = this.products.find(product => product.id === id);

        if (product) {
            return product;
        } else {
            console.log('Error: Product not found');
            return null;
        }
    }
}

const manejadorEventos = new managerTicket();

manejadorEventos.addProductos('Empanada', 'Empanada de jamon y queso', 200, 'https://imagen.jpg', 'PROD-001', 20);
manejadorEventos.addProductos('Pizza', 'Pizza de jamon y queso', 150, 'https://otraimagen.jpg', 'PROD-002', 10);

console.log(manejadorEventos.getProductById(1));
console.log(manejadorEventos.getProductById(2)); 
   