//
// console.log('first')
// setTimeout( () => console.log("soup2222"), 2000)
// console.log('33333')

const promise1 = new Promise((resolve, reject) => {
    setTimeout( () => {
        let isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('✅ soup is ready') : reject('❌ No soup today')
    }, 1000)
})

// console.log(promise1.then(value => console.log(value)).catch(error => console.log({error})))

const getSoup = async () => {
    const data = {
        rating: 0,
        tip: 0,
        pay: 0,
        review: 0
    }
    
    
    try{
        const response = await promise1
        console.log(response)
        console.log('tip')
        data.rating = 5
        data.tip = .2
        data.pay = 10
        data.review = 5
        return data
    }catch (error){
        console.log(error)
        console.log('UnStar')
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
    
}
getSoup().then(value => console.log(value));

const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getDog();


































































