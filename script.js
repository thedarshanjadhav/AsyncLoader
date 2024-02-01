// Async Loader
const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div')
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith('...')) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        } else {
            last.innerHTML = last.innerHTML + '.'
        }
    }, 700)


    let strings = ['hii', 'hello', 'how are you'];

    for (let item of strings) {

        await addItem(item)

        console.log(item);
    }

    await randomDelay();
    clearInterval(t)
}

main();








