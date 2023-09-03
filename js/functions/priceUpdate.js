

import { priceSum, totalMultiplier } from "./priceSum";

const pricing = {
    
    chooseSize: "",
    setSize(size) {
        this.chooseSize = size;
    },

    frequency: "",

    setFrequency(frequency) {
        this.frequency = frequency;
    },
    
    // prices to be displayed in the modal
    weeklyPrice() {
        return priceSum[this.chooseSize]["every week"];
    },
    biWeeklyPrice() {
        return priceSum[this.chooseSize]["every 2 weeks"];
    },
    monthlyPrice() {
        return priceSum[this.chooseSize]["every month"];
    },
    total() {
        return priceSum[this.chooseSize][this.frequency] * totalMultiplier[this.frequency];
    }
}

export default pricing;