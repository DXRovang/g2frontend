
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMembers } from '../actions/fetchMembers'
import Roster from '../components/Roster'
import Member from '../components/Member'

class MembersContainer extends React.Component{

componentDidMount(){
  this.props.fetchMembers()
}

    render(){
      return(
        <>
        <Switch>
          <Route exact path='/roster' render={(routerProps) =>
          <Roster {...routerProps} members={this.props.members}/> }/>

          <Route path='/members/:id' render={(routerProps) => 
                <Member {...routerProps} members={this.props.members} />}/>
                
          </Switch>
        </>
      )
    }
}

const mapStateToProps = (state) =>{
  return {
    members: state.members
  }
}

export default connect(mapStateToProps, {fetchMembers})(MembersContainer)