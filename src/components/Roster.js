import React from 'react'
import {
  CardGroup,
} from 'reactstrap';
import { connect } from 'react-redux'
import { addVote } from '../actions/addVote'
import thumb from '../assets/thumb.svg'
import Title from '../components/Title'


class Roster extends React.Component{

handleVote = (member) =>{ 
  this.props.addVote(member)
}

render(){
  const fullList = this.props.members
  return(
    <>
        <Title/>
     <CardGroup className="group">
        <ul>
       {fullList ? fullList.map(member =>
        <li>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
          {member.image_url ? 
            <img src={member.image_url}  className="img-fluid rounded-start image" alt="..."/>: null}  

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{member.name}</h3>
              <h5 className="card-title">{member.title}</h5>
              <p className="card-text">{member.bio}</p>
              <div>
          <p className="card-text bold left">Want to work with {member.name}?&nbsp;&nbsp;</p>
                <img className="icon blue left" onClick={() => this.handleVote(member)} src={thumb}/>
                <div className="card-text left blue">Yes!</div>
              </div>
              {member.votes ? 
              <p className="new">{member.votes} people have said Yes!</p>: null}
            </div>
          </div>
        </div>
      </div>
      </li>): null}
      </ul>
    </CardGroup>




  </>
  )
}
}

export default connect(null, { addVote })(Roster)

