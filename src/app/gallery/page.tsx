import Image from "next/image";

export default function Gallery(){
    // Array of gallery images with captions
  const galleryImages = [
    { caption: 'Cozy Dining Area', image: '/images/cozy-dinning-area.jpg' },
    { caption: 'Our Large Kitchen Area', image: '/images/kitchen-area.jpg' },
    { caption: 'Our Hardworking Chefs', image: '/images/chefs.jpg' },
    { caption: 'Chef Special Platter 1', image: '/images/special platter.jpg' },
    { caption: 'Chef Special Platter 2', image: '/images/about.jpg' },
    { caption: 'Family Meals', image: '/images/family-meals.jpg' },
    { caption: 'Serving Utmost', image: '/images/special dish.jpg' },
    { caption:  'Perfection In Each Serving', image: "/images/b0x1.jpg"},
    { caption:  'Enjoyable Get Together', image: '/images/pic1.jpg'},
    { caption:  'Satisfies Our Customer', image: '/images/pic2.jpg'},
    { caption:  'Hi! Tea',image: '/images/tea.jpg'},
    { caption: 'Signature Cocktails', image: '/images/drinks.jpg' },
  ];
    return(
        <section className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-green-700 shadow-2xl font-serif">Our Gallery</h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Explore the ambiance, dishes, and special moments that make Restaurantly a unique dining destination. Each image tells a story of passion, quality, and the unforgettable experiences we create for our guests.
        </p>

        {/* Grid for displaying gallery images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <Image 
                src={item.image}
                alt={item.caption}
                width={150}
                height={192}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center font-serif">{item.caption}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}