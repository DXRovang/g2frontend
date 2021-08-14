import React from 'react'
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
import Vote from './Vote'
import Owl from './Owl.jpg'

const Member = props =>{
let member = props.members[props.match.params.id - 1]


return(
    <>
    {member ? 
      <Card className="card">
        {member.image_url ? 
        <CardImg top width="100%" className="image" src={member.image_url}  alt="Card image cap" /> :
        <CardImg top width="100%" className="image" src={Owl} alt="Card image cap" />}
        <CardBody>
          <CardTitle tag="h5">{member.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{member.title}</CardSubtitle>
          <CardText>{member.bio}</CardText>
          <Vote memberID={member.id}/>
        </CardBody> 
      </Card> : null}
    </>
  )
}

export default Member