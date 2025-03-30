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
            this.vipLevel = vipLevel // creates VIP level
        }

        getTotalSpent () { // overrides the previous getTotalSpent method for when there is VIP level
            const totalSpent = super.getTotalSpent(); // pulls in total amount spent from the parent
            return totalSpent * 1.1; // adds 10% bonus
        }
    }

// Task 2: Create a Sales Rep Class //

class salesRep { // creates salesRep class
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

// Task 4: Build a Client Report System //

const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0); // adds total revenue for all customers
const highSpendingCustomers = salesRep.clients.filter(client => client.getTotalSpent() > 500); // finds all customers who spend >$500

const customerReport = salesRep.clients.map(client => ({ // set up const and arrow function
    name: client.name; // defines name as client name
    totalSpent: client.getTotalSpent(),  // defines total spent as the method of getTotalSpent()
}));

console.log(`Total Revenue All Customers: $${totalRevenue}`); // console logs total revenue
console.log(`High SPending Customers: ${highSpendingCustomers}`); // console logs high spending customers
console.log(`Customer Report: ${customerReport}`); // console logs customer report