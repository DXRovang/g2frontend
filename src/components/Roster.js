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
              <p className="card-text bold">Want to work with {member.name}?</p>
              <button className="left" onClick={() => this.handleVote(member)}><img className="icon"src={thumb}/></button>
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


    {/* <Title/>
    <CardGroup className="group">
       <ul>
       {fullList ? fullList.map(member =>
        <li>
          <Card className="card">
            {member.image_url ? 
            <CardImg top width="100%" className="image" src={member.image_url}  alt="Card image cap" /> : null}            
            <CardBody className="left">
              <CardTitle tag="h5">{member.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{member.title}</CardSubtitle>
              <CardText>{member.bio}</CardText>
              <div>
                <CardText className="left bold">Want to work with {member.name}?</CardText>
                <button className="left" onClick={() => this.handleVote(member)}><CardImg className="icon"src={thumb}/></button>
                <CardText className="left blue">Yes!</CardText>
              </div>
              {member.votes ? 
              <CardText className="new">{member.votes} people have said Yes!</CardText>: null}
            </CardBody>
          </Card>
          </li>): null}
      </ul>
    </CardGroup> */}
  </>
  )
}
}

export default connect(null, { addVote })(Roster)

