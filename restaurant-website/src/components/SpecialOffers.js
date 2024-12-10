import { useCart } from './CartContext';

const SpecialOffers = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const offers = [
        {
            id: 1,
            name: 'Hamburguesa Doble',
            description: 'Deliciosa hamburguesa doble con queso y papas.',
            price: 25.90,
            image: '/path/to/image1.jpg',
        },
        {
            id: 2,
            name: 'Pizza Familiar',
            description: 'Pizza grande con 3 ingredientes a elegir.',
            price: 19.90,
            image: '/path/to/image2.jpg',
        },
        {
            id: 3,
            name: 'Alitas BBQ',
            description: 'Alitas bañadas en salsa BBQ, acompañadas de papas fritas.',
            price: 15.00,
            image: '/path/to/image3.jpg',
        },
    ];

    return (
        <div className="special-offers">
            {offers.map((offer) => (
                <div key={offer.id} className="offer-card">
                    <img src={offer.image} alt={offer.name} className="offer-image" />
                    <h3>{offer.name}</h3>
                    <p>{offer.description}</p>
                    <p className="offer-price">${offer.price.toFixed(2)}</p>
                    <button
                        onClick={() => handleAddToCart(offer)}
                        className="add-to-cart-button"
                    >
                        Añadir al Carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SpecialOffers;




  