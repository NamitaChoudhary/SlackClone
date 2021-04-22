import React from 'react';
import {Grid, Message, GridColumn} from 'semantic-ui-react'



import './App.css';
import {connect} from 'react-redux';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
 


const App=({currentUser,currentChannel,isPrivateChannel,primaryColor,secondaryColor})=>(
   <Grid columns="equal" className="app" style={{background:secondaryColor}}>
    <ColorPanel 
    key={currentUser&&currentUser.name}
    currentUser={currentUser}
    
    />

    <SidePanel 
    key={currentUser && currentUser.uid}
    currentUser={currentUser}
    primaryColor={primaryColor}
    />

    <Grid.Column style={{marginLeft:320}}>

    <Messages
    key={currentChannel && currentChannel.id}
    currentChannel={currentChannel}
    currentUser={currentUser}
    isPrivateChannel={isPrivateChannel}
    
    />

    </Grid.Column>

  <Grid.Column width={4}>
    <MetaPanel
    key={currentChannel && currentChannel.name}
    currentChannel={currentChannel}
     isPrivateChannel={isPrivateChannel}/>

  </Grid.Column>
  
   </Grid>
 )
 const mapsStateToProps=state=>({
     currentUser:state.user.currentUser,
     currentChannel:state.channel.currentChannel,
     isPrivateChannel:state.channel.isPrivateChannel,
     primaryColor:state.colors.primaryColor,
     secondaryColor:state.colors.secondaryColor

 })


export default connect(mapsStateToProps)( App);
