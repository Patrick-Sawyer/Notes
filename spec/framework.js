const dandelion = (desc, fn) => {
  unicorn = eval('new ' + storyOfTheUnicorn);
  console.log(desc);
  fn();
}

const cabbage = (msg, fn) => dandelion('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (value) => {
    if (exp === value) {
      console.log('     pass')
    } else {
      console.log('     fail')
    }
  },

  toBeAnInstanceOf: (value) => {
    if(exp.constructor === value){
      console.log('     pass')
    }else{
      console.log('     fail')
    }
  },

  toInclude: (value) => {
    if(exp.includes(value)){
      console.log('     pass')
    }else{
      console.log('     fail')
    }
  },

  // toHaveBeenCalled: (value) => {
  //   if(exp.includes(value)){
  //     console.log('     pass')
  //   }else{
  //     console.log('     fail')
  //   }
  // }
})

const believe = (exp) => matchers(exp)