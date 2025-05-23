import Container from "../components/Container";

const Women = () => {
  const womensCollection = [
    {
      prodName: "Heeled Sandals",
      prodPrice: 99.99,
      prodImage: "/assets/womensCollection/Heeled-Sandals.jpg",
    },
    {
      prodName: "Ballet Flats",
      prodPrice: 69.99,
      prodImage: "/assets/womensCollection/Ballet-Flats.jpg",
    },
    {
      prodName: "Ankle Boots",
      prodPrice: 139.99,
      prodImage: "/assets/womensCollection/Ankle-Boots.jpg",
    },
    {
      prodName: "Wedge Heels",
      prodPrice: 119.99,
      prodImage: "/assets/womensCollection/Wedge-Heels.jpg",
    },
    {
      prodName: "Running Shoes",
      prodPrice: 109.99,
      prodImage: "/assets/womensCollection/Running-Shoes.jpg",
    },
    {
      prodName: "Stylish Sneakers",
      prodPrice: 89.99,
      prodImage: "/assets/womensCollection/Stylish-Sneakers.jpg",
    },
    {
      prodName: "Party Heels",
      prodPrice: 159.99,
      prodImage: "/assets/womensCollection/Party-Heels.jpg",
    },
    {
      prodName: "Comfort Loafers",
      prodPrice: 129.99,
      prodImage: "/assets/womensCollection/Comfort-Loafers.jpg",
    },
  ];

  return (
    <Container className="space-y-6 py-8">
      <h1 className="text-3xl font-bold text-surface-900">
        Women's Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {[1, 2, 3, 4, 5, 6, 8].map((item) => ( */}
        {womensCollection.map((item, index) => (
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

export default Women;
