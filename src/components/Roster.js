import React from 'react'
import {
  Card, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { connect } from 'react-redux'
import { addVote } from '../actions/addVote'
import Owl from './Owl.jpg'

class Roster extends React.Component{

handleVote = (member) =>{ 
  this.props.addVote(member)
}

render(){
  const fullList = this.props.members
  return(

    <CardGroup className="group">
       <ul>
       {fullList ? fullList.map(member =>
        <li>
          <Card className="card">
          {member.image_url ? 
        <CardImg top width="100%" className="image" src={member.image_url}  alt="Card image cap" /> :
        <CardImg top width="100%" className="image" src={Owl} alt="Card image cap" />}            <CardBody>
              <CardTitle tag="h5">{member.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{member.title}</CardSubtitle>
              <CardText>{member.bio}</CardText>
              {member.votes ? 
              <CardText>{member.votes} vote(s) so far!</CardText>
              : null}

                <button onClick={() => this.handleVote(member)}>VOTE</button>

            </CardBody>
          </Card>
          </li>): null}
      </ul>
      </CardGroup>

  )
}
}

export default connect(null, { addVote })(Roster)

