export default function memberReducer(state = {members: []}, action){
  switch(action.type){
    case "FETCH_MEMBERS":
      return {members: action.payload}
    case "EDIT_MEMBER":
      return {...state, members: state.members.map(member => {
        if(member.id === action.payload.id){
          return action.payload
        }else{
          return member
        }
      })}
    default:
      return state
  }
}