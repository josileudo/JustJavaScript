function strictEquals(a,b) {
  if (Object.is(a , b)) {
    if (Object.is(a , NaN)){
      return false
    }
    return true
  } else {
    if (
        (Object.is(a , 0) && Object.is(b , -0)) || 
        (Object.is(a, -0) && Object.is(b , 0))
      ) {
      return false
    }
    return false
  }
}

const result = strictEquals(-0 , 1)
console.log(result)