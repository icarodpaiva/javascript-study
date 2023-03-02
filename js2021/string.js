const text = 'icaro icaro icaro'

// with replace (before js02021)
console.log(text.replace('icaro', 'something'))

// now
console.log(text.replaceAll('icaro', 'something'))
