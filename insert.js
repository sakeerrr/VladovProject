// Свързване с база данни autopart_shop
use('autopart_shop');

// Вмъкване на документи в колекция parts
// Колекцията съдържа данни за авточасти
db.parts.insertMany([
  {
    name: "Oil Filter",
    brand: "Bosch",
    price: 25.5,
    stock: 150,
    category: "Engine",
    specs: { material: "Synthetic", size: "Standard" },
    compatibleModels: ["Toyota Corolla", "Honda Civic"]
  },
  {
    name: "Brake Pad Set",
    brand: "Brembo",
    price: 65.0,
    stock: 100,
    category: "Brakes",
    specs: { material: "Ceramic", pieces: 4 },
    compatibleModels: ["BMW 3 Series", "Audi A4"]
  },
  {
    name: "Air Filter",
    brand: "MANN",
    price: 30.0,
    stock: 80,
    category: "Engine",
    specs: { material: "Paper", size: "Large" },
    compatibleModels: ["VW Golf", "Ford Focus"]
  },
  {
    name: "Spark Plug",
    brand: "NGK",
    price: 10.5,
    stock: 200,
    category: "Ignition",
    specs: { type: "Iridium", length: "Standard" },
    compatibleModels: ["Mazda 3", "Hyundai Elantra"]
  },
  {
    name: "Timing Belt",
    brand: "Contitech",
    price: 120.0,
    stock: 40,
    category: "Engine",
    specs: { length: "104 teeth", material: "Rubber" },
    compatibleModels: ["Opel Astra", "Skoda Octavia"]
  },
  {
    name: "Wiper Blades",
    brand: "Bosch",
    price: 18.0,
    stock: 300,
    category: "Accessories",
    specs: { size: "24 inch", type: "All-season" },
    compatibleModels: ["Renault Clio", "Fiat Panda"]
  },
  {
    name: "Fuel Pump",
    brand: "Delphi",
    price: 95.0,
    stock: 60,
    category: "Fuel System",
    specs: { voltage: "12V", type: "Electric" },
    compatibleModels: ["Nissan Qashqai", "Peugeot 308"]
  },
  {
    name: "Radiator",
    brand: "Valeo",
    price: 180.0,
    stock: 25,
    category: "Cooling",
    specs: { material: "Aluminum", size: "Medium" },
    compatibleModels: ["Kia Sportage", "Hyundai Tucson"]
  },
  {
    name: "Clutch Kit",
    brand: "Sachs",
    price: 210.0,
    stock: 35,
    category: "Transmission",
    specs: { pieces: 3, type: "Manual" },
    compatibleModels: ["Ford Mondeo", "VW Passat"]
  },
  {
    name: "Battery",
    brand: "Varta",
    price: 150.0,
    stock: 50,
    category: "Electrical",
    specs: { capacity: "60Ah", voltage: "12V" },
    compatibleModels: ["Toyota Yaris", "Seat Ibiza"]
  }
]);

// Вмъкване на документи в колекция customers
db.customers.insertMany([
  {
    name: "Ivan Petrov",
    email: "ivan@example.com",
    phone: "0888123456",
    address: { city: "Sofia", street: "Bulgaria Blvd 21" },
    loyaltyPoints: 120
  },
  {
    name: "Maria Ivanova",
    email: "maria@example.com",
    phone: "0888234567",
    address: { city: "Plovdiv", street: "Tsar Simeon 10" },
    loyaltyPoints: 80
  },
  {
    name: "Georgi Georgiev",
    email: "georgi@example.com",
    phone: "0888345678",
    address: { city: "Varna", street: "Vasil Levski 5" },
    loyaltyPoints: 50
  },
  {
    name: "Elena Stoyanova",
    email: "elena@example.com",
    phone: "0888456789",
    address: { city: "Burgas", street: "Aleksandrovska 15" },
    loyaltyPoints: 110
  },
  {
    name: "Petar Dimitrov",
    email: "petar@example.com",
    phone: "0888567890",
    address: { city: "Ruse", street: "Plevenska 7" },
    loyaltyPoints: 95
  },
  {
    name: "Nikolay Todorov",
    email: "nikolay@example.com",
    phone: "0888678901",
    address: { city: "Sofia", street: "Hristo Botev 32" },
    loyaltyPoints: 70
  },
  {
    name: "Kristina Koleva",
    email: "kristina@example.com",
    phone: "0888789012",
    address: { city: "Plovdiv", street: "Kapitan Raycho 11" },
    loyaltyPoints: 60
  },
  {
    name: "Todor Marinov",
    email: "todor@example.com",
    phone: "0888890123",
    address: { city: "Varna", street: "Slivnitsa 90" },
    loyaltyPoints: 150
  },
  {
    name: "Silvia Hristova",
    email: "silvia@example.com",
    phone: "0888901234",
    address: { city: "Burgas", street: "Demokratsia 8" },
    loyaltyPoints: 130
  },
  {
    name: "Dimitar Iliev",
    email: "dimitar@example.com",
    phone: "0888012345",
    address: { city: "Ruse", street: "Shipka 22" },
    loyaltyPoints: 75
  }
]);

// Вмъкване на документи в колекция suppliers
db.suppliers.insertMany([
  {
    name: "AutoParts Ltd",
    contact: { phone: "029999999", email: "contact@autoparts.com" },
    country: "Germany",
    suppliedParts: ["Brake Pad Set", "Oil Filter"]
  },
  {
    name: "TechAuto",
    contact: { phone: "028888888", email: "sales@techauto.com" },
    country: "France",
    suppliedParts: ["Wiper Blades", "Battery"]
  },
  {
    name: "EuroCar Supplies",
    contact: { phone: "027777777", email: "info@eurocar.com" },
    country: "Italy",
    suppliedParts: ["Clutch Kit", "Timing Belt"]
  },
  {
    name: "BulAuto",
    contact: { phone: "026666666", email: "office@bulauto.bg" },
    country: "Bulgaria",
    suppliedParts: ["Fuel Pump", "Radiator"]
  },
  {
    name: "AutoHaus",
    contact: { phone: "025555555", email: "orders@autohaus.de" },
    country: "Germany",
    suppliedParts: ["Air Filter", "Spark Plug"]
  },
  {
    name: "NordicParts",
    contact: { phone: "024444444", email: "support@nordicparts.se" },
    country: "Sweden",
    suppliedParts: ["Brake Pad Set", "Wiper Blades"]
  },
  {
    name: "SparePro",
    contact: { phone: "023333333", email: "sales@sparepro.co.uk" },
    country: "UK",
    suppliedParts: ["Battery", "Radiator"]
  },
  {
    name: "BalkanAuto",
    contact: { phone: "022222222", email: "hello@balkanauto.rs" },
    country: "Serbia",
    suppliedParts: ["Clutch Kit", "Oil Filter"]
  },
  {
    name: "MotorPlus",
    contact: { phone: "021111111", email: "motor@plus.com" },
    country: "Spain",
    suppliedParts: ["Fuel Pump", "Timing Belt"]
  },
  {
    name: "AsiaParts",
    contact: { phone: "020000000", email: "contact@asiaparts.jp" },
    country: "Japan",
    suppliedParts: ["Spark Plug", "Air Filter"]
  }
]);

// Вмъкване на документи в колекция orders
db.orders.insertMany([
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a1"),
    date: ISODate("2025-06-10"),
    items: [
      { part: "Brake Pad Set", quantity: 2, price: 65.0 },
      { part: "Oil Filter", quantity: 1, price: 25.5 }
    ],
    total: 155.5
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a2"),
    date: ISODate("2025-06-11"),
    items: [
      { part: "Battery", quantity: 1, price: 150.0 }
    ],
    total: 150.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a3"),
    date: ISODate("2025-06-12"),
    items: [
      { part: "Timing Belt", quantity: 1, price: 120.0 },
      { part: "Spark Plug", quantity: 4, price: 10.5 }
    ],
    total: 162.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a4"),
    date: ISODate("2025-06-13"),
    items: [
      { part: "Fuel Pump", quantity: 1, price: 95.0 }
    ],
    total: 95.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a5"),
    date: ISODate("2025-06-14"),
    items: [
      { part: "Radiator", quantity: 1, price: 180.0 },
      { part: "Wiper Blades", quantity: 2, price: 18.0 }
    ],
    total: 216.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a6"),
    date: ISODate("2025-06-15"),
    items: [
      { part: "Clutch Kit", quantity: 1, price: 210.0 }
    ],
    total: 210.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a7"),
    date: ISODate("2025-06-16"),
    items: [
      { part: "Brake Pad Set", quantity: 1, price: 65.0 },
      { part: "Oil Filter", quantity: 2, price: 25.5 }
    ],
    total: 116.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a8"),
    date: ISODate("2025-06-17"),
    items: [
      { part: "Air Filter", quantity: 1, price: 30.0 }
    ],
    total: 30.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a9"),
    date: ISODate("2025-06-18"),
    items: [
      { part: "Wiper Blades", quantity: 3, price: 18.0 }
    ],
    total: 54.0
  },
  {
    customerId: ObjectId("665f21feaa7a4eb9ef8cb1a1"),
    date: ISODate("2025-06-19"),
    items: [
      { part: "Battery", quantity: 1, price: 150.0 }
    ],
    total: 150.0
  }
]);

// Вмъкване на документи в колекция employees
db.employees.insertMany([
  {
    name: "Maria Dimitrova",
    position: "Sales Assistant",
    hireDate: ISODate("2023-03-01"),
    salary: 1300,
    skills: ["Customer Service", "POS", "Inventory"]
  },
  {
    name: "Ivan Stanchev",
    position: "Mechanic",
    hireDate: ISODate("2022-07-15"),
    salary: 1700,
    skills: ["Diagnostics", "Repair", "Engine"]
  },
  {
    name: "Tanya Petrova",
    position: "Cashier",
    hireDate: ISODate("2024-01-10"),
    salary: 1100,
    skills: ["POS", "Customer Service"]
  },
  {
    name: "Kiril Ivanov",
    position: "Inventory Manager",
    hireDate: ISODate("2021-05-20"),
    salary: 1900,
    skills: ["Warehouse", "Ordering", "Stock"]
  },
  {
    name: "Desislava Koleva",
    position: "HR Specialist",
    hireDate: ISODate("2023-09-01"),
    salary: 1500,
    skills: ["Recruiting", "Payroll"]
  },
  {
    name: "Petar Georgiev",
    position: "Technician",
    hireDate: ISODate("2020-02-15"),
    salary: 1600,
    skills: ["Diagnostics", "Repairs"]
  },
  {
    name: "Viktoria Nedeva",
    position: "Marketing Assistant",
    hireDate: ISODate("2024-04-01"),
    salary: 1400,
    skills: ["Social Media", "Design"]
  },
  {
    name: "Nikolay Hristov",
    position: "Logistics Coordinator",
    hireDate: ISODate("2022-08-12"),
    salary: 1800,
    skills: ["Logistics", "Planning"]
  },
  {
    name: "Stanislava Mihailova",
    position: "Accountant",
    hireDate: ISODate("2021-11-30"),
    salary: 2000,
    skills: ["Accounting", "Finance"]
  },
  {
    name: "Todor Zlatev",
    position: "Sales Manager",
    hireDate: ISODate("2019-06-05"),
    salary: 2500,
    skills: ["Sales", "Leadership", "Strategy"]
  }
]);
