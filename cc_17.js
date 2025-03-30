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
    // Task 3: Create a VIPCustomer Class (extends Customer) //

    class VIPCustomer extends Customer { // creates a class to extent customer class
        constructor (name, email, vipLevel = 'Gold') { // defines properties
            super(name, email); // calls parent constructor
            this.vipLevel = vipLevel; // creates VIP level
        }

        getTotalSpent () { // overrides the previous getTotalSpent method for when there is VIP level
            const totalSpent = super.getTotalSpent(); // pulls in total amount spent from the parent
            return totalSpent * 1.1; // adds 10% bonus
        }
    }

// Task 2: Create a Sales Rep Class //

class SalesRep { // creates salesRep class
    constructor (name) { // adds name to the constructor
        this.name = name;  // defines name property
        this.clients = []; // creates an array for clients
    }

    addClient (customer) { // adds method addClient
        this.clients.push(customer); // pushes the customers to the clients array
    }

    clientGetTotal (name) { // adds method clientGetTotal
        const client = this.clients.find(client => client.name === name); // find exact match for client name
        if (client) { // if the client is found
            return client.getTotalSpent(); // pulls method from customer class to find total amount spent
        } else {
            return `Client not found.`; // error message
        }
    }
}

// Task 3: Create a VIP Customer Class //
// See within task 1 //


// Test Data: //

const customer1 = new Customer('Amy Lee', 'AmyLee@gmail.com'); // adding in customer 1 data 
customer1.addPurchase(500); 
customer1.addPurchase(700);

const customer2 = new Customer('Fred White', 'FredWhite@gmail.com'); // adding in customer 2 data 
customer2.addPurchase(100); 
customer2.addPurchase(300);

const customer3 = new VIPCustomer('Jane Smith', 'JaneSmith@gmail.com', 'Platinum'); // adding in customer 3 data
customer3.addPurchase(1000);
customer3.addPurchase(2000);

const customer4 = new VIPCustomer('Alex Johnson', 'AlexJohnson@gmail.com', 'Gold'); // adding in customer 4 data
customer4.addPurchase(5000);
customer4.addPurchase(9000);

const salesRep1 = new SalesRep('Maggie Jones'); // add in new sales rep
salesRep1.addClient(customer1); // adding customer 1 to the sales rep
salesRep1.addClient(customer2); // adding customer 2 to the sales rep
salesRep1.addClient(customer3); // adding customer 3 to the sales rep
salesRep1.addClient(customer4); // adding customer 4 to the sales rep
//

// Task 4: Build a Client Report System //

const totalRevenue = salesRep1.clients.reduce((total, client) => total + client.getTotalSpent(), 0); // adds total revenue for all customers
const highSpendingCustomers = salesRep1.clients.filter(client => client.getTotalSpent() > 500); // finds all customers who spend >$500

const customerReport = salesRep1.clients.map(client => ({ // set up const and arrow function
    name: client.name, // defines name as client name
    totalSpent: client.getTotalSpent(),  // defines total spent as the method of getTotalSpent()
}));

console.log(`Total Revenue All Customers: $${totalRevenue}`); // console logs total revenue

console.log(`High Spending Customers: ${highSpendingCustomers.map(client => client.name).join(', ')}`); // console logs high spending customers

console.log('Customer Report:'); // console logs customer report
    customerReport.forEach(client => {  // where for each client
        console.log(`Name: ${client.name}, Total Spent: $${client.totalSpent.toFixed(2)}`);  // give the name and total amount spent
});

