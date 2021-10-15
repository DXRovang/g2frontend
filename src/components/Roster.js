import React from 'react'
import {
  Card, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
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
    <Title />
    <CardGroup className="group">
       <ul>
       {fullList ? fullList.map(member =>
        <li>
          <Card className="card">
            {member.image_url ? 
            <CardImg top width="100%"className="image" src={member.image_url}  alt="Card image cap" /> : null}            
            <CardBody>
              <CardTitle tag="h5">{member.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{member.title}</CardSubtitle>
              <CardText>{member.bio}</CardText>
              <div>
                <CardText className="left">Want to work with {member.name}?  </CardText>
                <button className="left" onClick={() => this.handleVote(member)}><CardImg className="icon"src={thumb}/></button>
                <CardText className="left">yes!</CardText>
              </div>
              {member.votes ? 
              <CardText className="new">{member.votes} people have said Yes!</CardText>: null}
            </CardBody>
          </Card>
          </li>): null}
      </ul>
    </CardGroup>
  </>
  )
}
}

export default connect(null, { addVote })(Roster)

