export const ADD_USER ='ADD_USER';

export const ITEMS_LOADING='ITEMS_LOADING'


export const addUserDetails = (users) => {
  return {
    type:ADD_USER,
    users
}
}

export const setItemsLoading = ()=>{
  return {
    type: ITEMS_LOADING
  }
}