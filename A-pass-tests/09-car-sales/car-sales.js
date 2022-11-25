function sales(carsSold) {
    let x={};
    carsSold.forEach(car => {
        if(x.hasOwnProperty(car.make)){
            x[car.make]=x[car.make]+ car.price;
        }else{
            x[car.make]=car.price;
        }
    });

    return x;
}

module.exports = sales;
