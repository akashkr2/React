import Container from "../components/Container";

const Men = () => {
  const mensCollection = [
    {
      prodName: "Urban Sneakers",
      prodPrice: 129.99,
      prodImage: "/assets/mensCollection/Urban-Sneakers.jpg",
    },
    {
      prodName: "Classic Loafers",
      prodPrice: 79.99,
      prodImage: "/assets/mensCollection/Classic-Loafers.jpg",
    },
    {
      prodName: "Outdoor Trainers",
      prodPrice: 109.99,
      prodImage: "/assets/mensCollection/Outdoor-Trainers.jpg",
    },
    {
      prodName: "Rugged Boots",
      prodPrice: 229.99,
      prodImage: "/assets/mensCollection/Rugged-Boots.jpg",
    },
    {
      prodName: "Everyday Sneakers",
      prodPrice: 189.99,
      prodImage: "/assets/mensCollection/Everyday-Sneakers.jpg",
    },
    {
      prodName: "Athletic Runners",
      prodPrice: 199.99,
      prodImage: "/assets/mensCollection/Athletic-Runners.jpg",
    },
    {
      prodName: "Formal Leather Shoes",
      prodPrice: 149.99,
      prodImage: "/assets/mensCollection/Formal-Leather-Shoes.jpg",
    },
    {
      prodName: "Heavy Duty Shoes",
      prodPrice: 179.99,
      prodImage: "/assets/mensCollection/Heavy-Duty-Shoes.jpg",
    },
  ];

  return (
    <Container className="space-y-6 py-8">
      <h1 className="text-3xl font-bold text-surface-900">Men's Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {[1, 2, 3, 4, 5, 6, 8].map((item) => ( */}
        {mensCollection.map((item, index) => (
          <div
            key={index}
            className="bg-primary-content rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-surface-200">
              <img
                src={item.prodImage}
                alt={item.prodName}
                className="object-cover aspect-square"
              />
            </div>
            <div className="p-4 bg-secondary-content">
              <h3 className="text-lg font-semibold text-primary">
                {item.prodName}
              </h3>
              <p className="text-primary">${item.prodPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Men;
