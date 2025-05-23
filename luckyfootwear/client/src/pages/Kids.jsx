import Container from "../components/Container";

const Kids = () => {
  const kidsCollection = [
    {
      prodName: "Light-Up Sneakers",
      prodPrice: 49.99,
      prodImage: "/assets/kidsCollection/Light-Up-Sneakers.jpg",
    },
    {
      prodName: "Cartoon Shoes",
      prodPrice: 39.99,
      prodImage: "/assets/kidsCollection/Cartoon-Shoes.jpg",
    },
    {
      prodName: "Mini Sports Shoes",
      prodPrice: 59.99,
      prodImage: "/assets/kidsCollection/Mini-Sports-Shoes.jpg",
    },
    {
      prodName: "School Shoes",
      prodPrice: 44.99,
      prodImage: "/assets/kidsCollection/School-Shoes.jpg",
    },
    {
      prodName: "Velcro Trainers",
      prodPrice: 54.99,
      prodImage: "/assets/kidsCollection/Velcro-Trainers.jpg",
    },
    {
      prodName: "Playground Boots",
      prodPrice: 64.99,
      prodImage: "/assets/kidsCollection/Playground-Boots.jpg",
    },
    {
      prodName: "Tiny Sandals",
      prodPrice: 29.99,
      prodImage: "/assets/kidsCollection/Tiny-Sandals.jpg",
    },
    {
      prodName: "Kids Casuals",
      prodPrice: 34.99,
      prodImage: "/assets/kidsCollection/Kids-Casuals.jpg",
    },
  ];

  return (
    <Container className="space-y-6 py-8">
      <h1 className="text-3xl font-bold text-surface-900">Kids Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {[1, 2, 3, 4, 5, 6].map((item) => ( */}
        {kidsCollection.map((item, index) => (
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

export default Kids;
