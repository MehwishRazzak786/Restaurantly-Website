export default function Menu(){
    // Array of dishes with image and name
  const dishes = [
    { name: 'Spicy Chicken Burger', image: '/images/chicken burger.jpg' },
    { name: 'Meat Skiwers', image: '/images/meat-skiwers.jpg' },
    { name: 'Vegetable Salad', image: '/images/vegetable-salad.jpg' },
    { name: 'Pepperoni Pizza', image: '/images/loaded-cheese-pizza.jpg' },
    { name: 'Pasta Alfredo', image: '/images/pasta.jpg' },
    { name: 'Chinese Platter', image: '/images/sushi-plater.png' },
    { name: 'Prawn Spegetti', image: '/images/prawn-spegetti.jpg' },
    { name:  'Black Pepper Chicken', image: '/images/black-paper-chicken.jpg'},
    { name:  'Cream Cake', image: '/images/cream-cake.jpg'},
    { name:  'Banana Donut', image: '/images/banana-dessert.jpg'},
    { name:  'Capachino Coffee', image: '/images/coffee.jpg'},
    { name: 'Ice Cream Sundae', image: '/images/ice-cream.jpg' },
  ];
    return(
        <section className="min-h-screen py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center mb-12 shadow-2xl text-green-700 font-serif">Our Menu</h1>
  
          {/* Grid for displaying dishes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 font-serif">{dish.name}</h2>
                  <p className="text-gray-600">
                    A delicious and savory dish that's sure to satisfy your cravings.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}