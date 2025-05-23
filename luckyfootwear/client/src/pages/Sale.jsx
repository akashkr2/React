import Container from "../components/Container";

const Sale = () => {
  const saleCollection = [
    {
      prodName: "Winter Boots",
      originalPrice: 199.99,
      salePrice: 119.99,
      prodImage: "/assets/saleCollection/Winter-Boots.jpg",
    },
    {
      prodName: "Retro Sneakers",
      originalPrice: 99.99,
      salePrice: 69.99,
      prodImage: "/assets/saleCollection/Retro-Sneakers.jpg",
    },
    {
      prodName: "Kids Fun Runners",
      originalPrice: 59.99,
      salePrice: 44.99,
      prodImage: "/assets/saleCollection/Kids-Fun-Runners.jpg",
    },
    {
      prodName: "Elegant Heels",
      originalPrice: 139.99,
      salePrice: 89.99,
      prodImage: "/assets/saleCollection/Elegant-Heels.jpg",
    },
  ];

  return (
    <Container className="space-y-6 py-8">
      <h1 className="text-3xl font-bold text-surface-900">Sale Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {[1, 2, 3, 4].map((item) => ( */}
        {saleCollection.map((item, index) => (
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
              <p className="text-surface-500 line-through">
                ${item.originalPrice}
              </p>
              <p className="text-error font-bold">${item.salePrice}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Sale;
