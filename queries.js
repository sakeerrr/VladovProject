// Свързване с базата данни
use('autopart_shop');

//////////////////////////////////////////////////////
// ============ ИЗВЛИЧАНЕ НА ДАННИ (READ) ============
//////////////////////////////////////////////////////

// --- PARTS ---
// Извличане на всички части
db.parts.find();

// Части от категория "Brakes"
db.parts.find({ category: "Brakes" });

// Части от категория "Engine" и марка "Bosch"
db.parts.find({ category: "Engine", brand: "Bosch" });


// --- CUSTOMERS ---
// Всички клиенти
db.customers.find();

// Клиенти от град "Sofia"
db.customers.find({ "address.city": "Sofia" });

// Клиенти с повече от 100 точки за лоялност
db.customers.find({ loyaltyPoints: { $gt: 100 } });


// --- SUPPLIERS ---
// Всички доставчици
db.suppliers.find();

// Доставчици от държава "Germany"
db.suppliers.find({ country: "Germany" });

// Доставчици от "Germany" с част "Oil Filter"
db.suppliers.find({ country: "Germany", suppliedParts: "Oil Filter" });


// --- ORDERS ---
// Всички поръчки
db.orders.find();

// Поръчки с обща сума над 150
db.orders.find({ total: { $gt: 150 } });

// Поръчки от клиент със специфично ID
db.orders.find({ customerId: ObjectId("665f21feaa7a4eb9ef8cb1a1") });


// --- EMPLOYEES ---
// Всички служители
db.employees.find();

// Служители със заплата над 1500
db.employees.find({ salary: { $gt: 1500 } });

// Служители със заплата над 1500 и позиция "Technician"
db.employees.find({ salary: { $gt: 1500 }, position: "Technician" });

//////////////////////////////////////////////////////
// ============ АКТУАЛИЗАЦИЯ (UPDATE) ===============
//////////////////////////////////////////////////////

// --- PARTS ---
db.parts.updateOne(
  { name: "Oil Filter" },
  { $set: { price: 27.5 } }
);

// --- CUSTOMERS ---
db.customers.updateOne(
  { email: "ivan@example.com" },
  { $set: { phone: "0888999999" } }
);

// --- SUPPLIERS ---
db.suppliers.updateOne(
  { name: "AutoParts Ltd" },
  { $addToSet: { suppliedParts: "Brake Disc" } }
);

// --- ORDERS ---
db.orders.updateOne(
  { total: { $gt: 200 } },
  { $set: { status: "processed" } }
);

// --- EMPLOYEES ---
db.employees.updateOne(
  { name: "Ivan Stanchev" },
  { $set: { salary: 1800 } }
);

//////////////////////////////////////////////////////
// ================ ИЗТРИВАНЕ (DELETE) ==============
//////////////////////////////////////////////////////

// --- PARTS ---
db.parts.deleteOne({ name: "Clutch Kit" });

// --- CUSTOMERS ---
db.customers.deleteOne({ email: "client9@example.com" });

// --- SUPPLIERS ---
db.suppliers.deleteOne({ name: "AsiaParts" });

// --- ORDERS ---
db.orders.deleteOne({ total: { $lt: 50 } });

// --- EMPLOYEES ---
db.employees.deleteOne({ name: "Todor Zlatev" });

//////////////////////////////////////////////////////
// ================= АГРЕГИРАНЕ (AGGREGATE) =========
//////////////////////////////////////////////////////

// --- PARTS ---
// 1. Групиране по категория със средна цена и обща наличност
db.parts.aggregate([
  {
    $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      totalStock: { $sum: "$stock" }
    }
  },
  { $sort: { avgPrice: -1 } }
]);

// 2. Брой части по марка
db.parts.aggregate([
  {
    $group: {
      _id: "$brand",
      partCount: { $sum: 1 }
    }
  },
  { $sort: { partCount: -1 } }
]);

// --- CUSTOMERS ---
// 1. Броене на клиенти по град
db.customers.aggregate([
  {
    $group: {
      _id: "$address.city",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// 2. Средни точки за лоялност по възрастова група
db.customers.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [18, 30, 45, 60, 100],
      default: "Other",
      output: {
        avgLoyaltyPoints: { $avg: "$loyaltyPoints" },
        count: { $sum: 1 }
      }
    }
  }
]);

// --- SUPPLIERS ---
// 1. Групиране на доставчици по държава с брой доставени части
db.suppliers.aggregate([
  {
    $project: {
      name: 1,
      country: 1,
      partsCount: { $size: "$suppliedParts" }
    }
  },
  {
    $group: {
      _id: "$country",
      totalParts: { $sum: "$partsCount" },
      suppliers: { $push: "$name" }
    }
  },
  { $sort: { totalParts: -1 } }
]);

// 2. Брой доставчици по държава
db.suppliers.aggregate([
  {
    $group: {
      _id: "$country",
      supplierCount: { $sum: 1 }
    }
  },
  { $sort: { supplierCount: -1 } }
]);

// --- ORDERS ---
// 1. Общо похарчено и брой поръчки по клиент
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$total" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalSpent: -1 } }
]);

// 2. Брой поръчки по статус
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);

// --- EMPLOYEES ---
// 1. Групиране по позиция със средна заплата и брой служители
db.employees.aggregate([
  {
    $group: {
      _id: "$position",
      avgSalary: { $avg: "$salary" },
      count: { $sum: 1 }
    }
  },
  { $sort: { avgSalary: -1 } }
]);

// 2. Брой служители по град
db.employees.aggregate([
  {
    $group: {
      _id: "$address.city",
      employeeCount: { $sum: 1 }
    }
  },
  { $sort: { employeeCount: -1 } }
]);

