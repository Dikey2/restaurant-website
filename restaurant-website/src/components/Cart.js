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
            price: 4.99,
            image: '/path/to/image1.jpg',
        },
        {
            id: 2,
            name: 'Pizza Familiar',
            price: 9.99,
            image: '/path/to/image2.jpg',
        },
        {
            id: 3,
            name: 'Alitas BBQ',
            price: 6.99,
            image: '/path/to/image3.jpg',
        },
    ];

    return (
        <div className="special-offers">
            {offers.map((offer) => (
                <div key={offer.id} className="offer-card">
                    <img src={offer.image} alt={offer.name} />
                    <h3>{offer.name}</h3>
                    <p>${offer.price.toFixed(2)}</p>
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
