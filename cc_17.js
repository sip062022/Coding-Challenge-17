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
