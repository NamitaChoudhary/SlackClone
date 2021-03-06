import React from 'react'

import { Segment, Header, Input ,Icon} from 'semantic-ui-react'


export class MessagesHeader extends React.Component {
    render() {
      const {channelName,numuniqueUsers,handleSearchChange,searchLoading,isPrivateChannel,
    handleStar,
isChannelStarred}=this.props  ;

        return (
            <Segment clearing>
                <Header fluid="true" as="h2" floated="left" style={{marginBottom:0}}>
                    <span>
                  {channelName}
        {!isPrivateChannel&&(
        <Icon
         onClick={handleStar}
         name={isChannelStarred?'star': 'star outline'} 
         color={isChannelStarred ? 'yellow':'black'}
         /> 
        ) } 
                  </span>
                  <Header.Subheader>
                      {numuniqueUsers}
                  </Header.Subheader>
                </Header>

{/*channel search input */}
                <Header floated="right">
                    <Input
                    loading={searchLoading}
                    onChange={handleSearchChange}
                    size="mini"
                    icon="search"
                    name="searchTerm"
                    placeholder="Search Messages"
                    
                    />
                </Header>

            </Segment>
           
        )
    }
}

export default MessagesHeader
