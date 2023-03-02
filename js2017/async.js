const asyncFunction = async () => {
  let x = 'default value'

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log('message sended 3 seconds later')
      x = 'changed value'
      resolve(x)
    }, 3000)
  })

  console.log(x)
  console.log(await promise)
}

asyncFunction()
