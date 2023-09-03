const priceSum = {
    "250g": {
        "every week": 7.20, 
        "every 2 weeks": 9.60, 
        "every month": 12.00,
    },

    "500g": {
        "every week": 13.50, 
        "every 2 weeks": 18.30, 
        "every month": 23.80,
    },

    "1000g": {
        "every week": 25.00, 
        "every 2 weeks": 31.00, 
        "every month": 41.00,
    }
}

const totalMultiplier = {
    "every week" : 4,
    "every 2 weeks" : 2,
    "every month" : 1,
}

export { priceSum, totalMultiplier };