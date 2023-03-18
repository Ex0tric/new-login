
const intialState = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null


export const user = (state = intialState, action) =>{
  switch(action.type){
    case "SETUSER": return action.payload;
    default: return state;
  }
}
