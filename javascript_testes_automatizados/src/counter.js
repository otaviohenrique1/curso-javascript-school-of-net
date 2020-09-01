module.exports = {
    count: 0,
    increment: function(quantity) {
        if (quantity == undefined) {
            quantity = 1;
        }
        this.count += quantity;
    },
    decrement: function() {
        this.count --;
    }
};