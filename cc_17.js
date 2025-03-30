// Task 1: Create a Customer Class //

class Customer { // adds customer class
    constructor (name, email) { // adds properties to constructor
        this.name = name; // defines name
        this.email = email; // defines email
        this.purchaseHistory = []; // defines array for purchase history
    }

    addPurchase (amount) {  // creates method addPurchase
        this.purchaseHistory.push(amount); // pushes purchase amount to purchase history array
    }

    getTotalSpent () { // creates method getTotalSpent
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // sums values in the array
    }
}

