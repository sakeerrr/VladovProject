// Свързване с базата данни
use('autopart_shop');

// === ПОЛУЧАВАНЕ НА ДАННИ (READ) ===

// Извличане на всички части
// Всички документи от колекцията parts
db.parts.find();

// Филтриране на части по категория "Brakes"
db.parts.find({ category: "Brakes" });

// Филтриране на части по категория и марка
// Пример: части от категория "Engine" и марка "Bosch"
db.parts.find({ category: "Engine", brand: "Bosch" });

// Извличане на всички клиенти
db.customers.find();

// Клиенти от град София
db.customers.find({ "address.city": "Sofia" });

// Клиенти с повече от 100 точки за лоялност
db.customers.find({ loyaltyPoints: { $gt: 100 } });

// === АКТУАЛИЗАЦИИ (UPDATE) ===

// Актуализиране на цена на част с име "Oil Filter"
db.parts.updateOne(
  { name: "Oil Filter" },
  { $set: { price: 27.5 } }
);

// Актуализиране на телефонен номер на клиент по имейл
db.customers.updateOne(
  { email: "ivan@example.com" },
  { $set: { phone: "0888999999" } }
);

// Добавяне на нова доставяна част към доставчик
// Пример: добавяне на "Brake Disc" към доставчика "AutoParts Ltd"
db.suppliers.updateOne(
  { name: "AutoParts Ltd" },
  { $addToSet: { suppliedParts: "Brake Disc" } }
);

// === ИЗТРИВАНЕ (DELETE) ===

// Изтриване на част с име "Clutch Kit"
db.parts.deleteOne({ name: "Clutch Kit" });

// Изтриване на клиент с конкретен имейл
db.customers.deleteOne({ email: "client9@example.com" });

// Изтриване на служител с име "Todor Zlatev"
db.employees.deleteOne({ name: "Todor Zlatev" });

// === AGGREGATE PIPELINE ===

// Групиране на части по категория и изчисляване на средна цена
db.parts.aggregate([
  { $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
    }
  }
]);

// Броене на клиенти по град
// Показва броя на клиентите за всеки град




db.customers.aggregate([
  { $group: {
      _id: "$address.city",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// Сумиране на стойности на поръчки по клиент
db.orders.aggregate([
  { $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$total" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalSpent: -1 } }
]);

// Извличане на служители със заплата над 1500, сортирани по заплата

db.employees.aggregate([
  { $match: { salary: { $gt: 1500 } } },
  { $sort: { salary: -1 } }
]);
