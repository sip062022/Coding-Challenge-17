// Task 1: Create a Customer Class //

class Customer { // adds customer class
    constructor (name, email) { // adds properties to constructor
        this.name = name; // defines name property
        this.email = email; // defines email property
        this.purchaseHistory = []; // defines array for purchase history
    }

    addPurchase (amount) {  // creates method addPurchase
        this.purchaseHistory.push(amount); // pushes purchase amount to purchase history array
    }

    getTotalSpent () { // creates method getTotalSpent
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // sums values in the array
    }
}

// Adding in test data for task 1 //

let customer1 = new Customer("Amy Lee", "AmyLee@gmail.com"); // declare new customer
customer1.addPurchase(50);  // adds purchase for customer 1
customer1.addPurchase(100);  // adds purchase for customer 1

console.log(`New Customer Created! Name: ${customer1.name}, Email: ${customer1.email}`); // console log new customer
console.log(`Total Spent by New Customer ${customer1.name}: $${customer1.getTotalSpent()}`); // Log amount spent by new customer

// Task 2: Create a Sales Rep Class //

class SalesRep { // creates salesRep class
    constructor (name) { // adds name to the constructor
        this.name = name;  // defines name property
        this.clients = []; // creates an array for clients
    }

    addClient (customer) { // adds method addClient
        this.clients.push(customer); // pushes the customers to the clients array
    }

    getClientTotal (name) { // adds method clientGetTotal
        const client = this.clients.find(client => client.name === name); // find exact match for client name
        if (client) { // if the client is found
            return client.getTotalSpent(); // pulls method from customer class to find total amount spent
        } else {
            return `Client not found.`; // error message
        }
    }
}

// Adding in test data for task 2 //

let customer2 = new Customer ('Fred White', 'FredWhite@gmail.com');  // declares customer 2
customer2.addPurchase(100); // adds purchase for customer 2
customer2.addPurchase(300);  // adds purchase for customer 2

let newSalesRep = new SalesRep('Maggie Jones'); // declares new sales rep
newSalesRep.addClient(customer1); // adds customer 1 to sales rep
newSalesRep.addClient(customer2); // adds customer 2 to sales rep

console.log(`Sales Rep's Clients: ${newSalesRep.clients.map(client => client.name)}`); // console log list of clients
console.log(`Total Spent by ${customer1.name}: $${newSalesRep.getClientTotal("Amy Lee")}`); // displays total spent by customer 1
console.log(`Total Spent by ${customer2.name}: $${newSalesRep.getClientTotal("Fred White")}`); // displays total spent by customer 2

// Task 3: Create a VIPCustomer Class (extends Customer) //

class VIPCustomer extends Customer { // creates a class to extent customer class
    constructor (name, email, vipLevel) { // defines properties
        super(name, email); // calls parent constructor
        this.vipLevel = vipLevel; // creates VIP level
    }

    getTotalSpent () { // overrides the previous getTotalSpent method for when there is VIP level
        const totalSpent = super.getTotalSpent(); // pulls in total amount spent from the parent
        return totalSpent * 1.1; // adds 10% bonus
    }
}

// Test Data, adding in two more customers who are VIP //

const customer3 = new VIPCustomer('Jane Smith', 'JaneSmith@gmail.com', 'Platinum'); // adding in customer 3 data
customer3.addPurchase(1000);
customer3.addPurchase(2000);

const customer4 = new VIPCustomer('Alex Johnson', 'AlexJohnson@gmail.com', 'Gold'); // adding in customer 4 data
customer4.addPurchase(5000);
customer4.addPurchase(9000);

newSalesRep.addClient(customer3); // adding customer 3 to the sales rep
newSalesRep.addClient(customer4); // adding customer 4 to the sales rep

console.log(`VIP Customer ${customer3.name} Total Spent: $${customer3.getTotalSpent().toFixed(2)}`); // log total spent customer 3 (VIP)
console.log(`VIP Customer ${customer4.name} Total Spent: $${customer4.getTotalSpent().toFixed(2)}`); // log total spent customer 3 (VIP)

// Task 4: Build a Client Report System //

const totalRevenue = newSalesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0); // adds total revenue for all customers
const highSpendingCustomers = newSalesRep.clients.filter(client => client.getTotalSpent() > 500); // finds all customers who spend >$500

const customerReport = newSalesRep.clients.map(client => ({ // set up const and arrow function
    name: client.name, // defines name as client name
    totalSpent: client.getTotalSpent(),  // defines total spent as the method of getTotalSpent()
}));

console.log(`Total Revenue All Customers: $${totalRevenue.toFixed(2)}`); // console logs total revenue

console.log(`High Spending Customers: ${highSpendingCustomers.map(client => client.name).join(', ')}`); // console logs high spending customers

console.log('Customer Report:'); // console logs customer report
    customerReport.forEach(client => {  // where for each client
        console.log(`Name: ${client.name}, Total Spent: $${client.totalSpent.toFixed(2)}`);  // give the name and total amount spent
});

