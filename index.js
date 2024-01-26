function debounce(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function throttle(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearInterval(timer)
    }
    timer = setInterval(() => {
      console.log(...args)
      console.log(args)
      fn(...args)
    }, delay)
  }
}

function cacheDecorator() {
  const cache = new Map()
  return function (fn) {
    return function (...args) {
      const key = JSON.stringify(args)
      if (cache.has(key)) {
        return cache.get(key)
      }
      const result = fn(...args)
      cache.set(key, result)
      return result
    }
  }
}

const cachedFn = (fn) => {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    console.log(...args)
    console.log(args)
    if (cache.has(key)) {
      console.log('from cache')
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    console.log('first timer')

    return result
  }
}

const fn = (a, b) => console.log('hello', a, b)
const cachedCache = cacheDecorator(fn(1, 2))

const returnHTML = () => `<h1>Hello</h1>`

function getRandomBook(getBook) {
  const allBooks = getBook()
  const randomBook = Math.floor(Math.random() * allBooks.length)
  return allBooks[randomBook]
}

const getBook = () => [
  'book1',
  'book2',
  'book3',
  'book4',
  'book5',
  'book6',
  'book7',
  'book8',
  'book9',
  'book10',
]

getRandomBook(getBook)
