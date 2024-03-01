let market = [
    {
        name: 'moloko',
        price: 13000,
        type: 'milk'
    },
    {
        name: 'potato',
        price: 4000,
        type: 'vegetable'
    },
    {
        name: 'vodka',
        price: 25000,
        type: 'alcohol'
    },
    {
        name: 'tvorog',
        price: 8000,
        type: 'milk'
    },
    {
        name: 'tomato',
        price: 20000,
        type: 'vegetable'
    },
    {
        name: 'vine',
        price: 85000,
        type: 'alcohol'
    },
    {
        name: 'pivo ot JAGO',
        price: 24000,
        type: 'alcohol'
    },
    {
        name: 'carrot',
        price: 4000,
        type: 'vegetable'
    },
    {
        name: 'smetana',
        price: 10000,
        type: 'milk'
    },
]

let milk = {
    count: 0,
    total_price: 0
}
let vegetables = {
    count: 0,
    total_price: 0
}
let alcohol = {
    count: 0,
    total_price: 0
}


 let menshe = market.reduce((a,b) => {
  if (a.price < b.price) {
   return a
  } else {
    return b
  }
})

let bolshe =  market.reduce((a,b) => {
  if (a.price > b.price) {
   return a
  } else {
    return b
  }
})
let sum =  market.reduce((a,b) => 
 a + b.price,0
)
let sred = sum / market.length
console.log( 'наименьшее', menshe);
console.log( 'наибольшее', bolshe);
console.log( 'сумма всех', sum);
console.log( 'среднее значение' , sred.toFixed());



