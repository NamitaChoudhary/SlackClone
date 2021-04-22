import React from 'react'
import mime from 'mime-types'
import {Modal,Input,Button,Icon,Segment} from 'semantic-ui-react'

export class FileModal extends React.Component {
     state={
         file:null,
         authorized:['image/jpeg','image/png']
     }

addFile=event=>{
    const file=event.target.files[0];
    console.log(file)
    if(file){
        this.setState({file})
    }
}
addVideo=event=>{
    
    var player = document.getElementById('player');
  
    var handleSuccess = function(stream) {
        player.srcObject = stream;
      };
     
      
    
  
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(handleSuccess)
  
}
sendFile=()=>{
    const{file}=this.state
    const {uploadFile,closeModal}=this.props

    if(file!==null){
       
        if(this.isAuthorized(file.name)){
            const metadata={contentType: mime.lookup(file.name)}
            uploadFile(file,metadata)
            closeModal()
            this.clearFile();
       }
    }
   
}
// sendVideo=()=>{
//     let shouldStop = false;
//   let stopped = false;
//   const downloadLink = document.getElementById('download');
//   const stopButton = document.getElementById('stop');

//   stopButton.addEventListener('click', function() {
//     shouldStop = true;
//   })

//   var handleSuccess = function(stream) {
//     const options = {mimeType: 'video/webm'};
//     const recordedChunks = [];
//     const mediaRecorder = new MediaRecorder(stream, options);

//     mediaRecorder.addEventListener('dataavailable', function(e) {
//       if (e.data.size > 0) {
//         recordedChunks.push(e.data);
//       }

//       if(shouldStop === true && stopped === false) {
//         mediaRecorder.stop();
//         stopped = true;
//       }
//     });

//     mediaRecorder.addEventListener('stop', function() {
//       downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
//       downloadLink.download = 'acetest.webm';
//     });

//     mediaRecorder.start();
//   };

//   navigator.mediaDevices.getUserMedia({ audio: true, video: true })
//       .then(handleSuccess);
// }

isAuthorized=filename=>this.state.authorized.includes(mime.lookup(filename))



clearFile=()=>this.setState({file:null});

    render() {
        const {modal,closeModal}=this.props
        return (
           <Modal basic open={modal} onClose={closeModal}>
               <Modal.Header>Select an Image File</Modal.Header>
               <Modal.Content>
                   <Segment inverted>
                   <Input
                   onChange={this.addFile}
                   fluid 
                   label="File types:jpg,png"
                   name="file"
                   type="file"
                   
                   
                   
                   />
                   </Segment>
                   <Segment inverted>
                   <Input
                //    onChange={this.addVideo}
                    type="file"
                    fluid
                    name="video"
                    label="video"
                    accept="video/*"
                    capture

                   />
                   </Segment>
                   <video id="player" controls //onChange={this.addVideo}
                   ></video>
                   
               </Modal.Content>
               <Modal.Actions>
                   <Button
                   onClick={this.sendFile}
                       color="green"
                       inverted

                    >
                        <Icon name='checkmark'/>Send
                   </Button>
                   <Button
                   onClick={this.addVideo}
                       color="green"
                       inverted

                    >
                         <Icon name='video'/>Record video
                    </Button>
                    <Button
                   onClick={this.sendVideo}
                       color="green"
                       inverted

                    >
                         <Icon name='video'/>Send video
                    </Button>
                   <Button
                       color="red"
                       inverted
                        onClick={closeModal}
                    >
                        <Icon name='remove'/>Cancel
                   </Button>
                   {/* <a id="download">Download</a>
<Button id="stop">Stop</Button> */}
                   
                  
               </Modal.Actions>

                
           </Modal>
        )
    }
}

export default FileModal
 