export const addVote = (member) =>{
  let updatedMember = { ...member, votes: member.votes + 1}
  return (dispatch) => {
    fetch(`http://127.0.0.1:3000/members/${member.id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedMember)
    })
    .then(r=> r.json())
    .then(member=> dispatch({
      type: "EDIT_MEMBER", 
      payload: member
    })) 
  }
}