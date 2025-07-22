import {reactive} from 'vue';

const userInfo = reactive({id: 1, name:"ali", address :"live somewhere "})

export function useSharedUserInfo(){
  return {userInfo}
}
