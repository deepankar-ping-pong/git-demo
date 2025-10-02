console.log('Hello, World!'); //developer - 1 added some comments.
(async () => {
    let r = await new Promise((res) => {
        setTimeout(() => {
            res(10)
        }, 1000)
    })
    console.log(r)
})()
console.log('God is great!');
