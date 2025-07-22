import {ref} from 'vue'
const counter = ref(0);
export function useSharedCounter(){
  return {counter}
}


// import { ref } from 'vue'
// const counter = ref(0)
// function inc() { counter.value++ }
// function dec() { counter.value-- }
// export function useCounter() {
//   return { counter, inc, dec }
// }