export function fetchMembers(){
  console.log("here in fetch")
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/members")
    // fetch('https://coding-assignment.g2crowd.com/')
    .then(r=> r.json())
    .then(members=> dispatch({
      type: "FETCH_MEMBERS", 
      payload: members
    })
    )
  }
}