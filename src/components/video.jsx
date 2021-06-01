import React, { Component } from 'react'
import VideoUpload from './uploader/videoUpload'

export class video extends Component {
    static get toolbox(){
        return {
            title: 'video',
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="https://image.flaticon.com/icons/png/512/16/16270.png"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
        }
    }
    render() {
        const wrapper = document.createElement('div');
        const input = document.createElement('input');
    
        wrapper.classList.add('simple-image');
        wrapper.appendChild(input);
    
        input.placeholder = 'Paste an image URL...';
        input.value = this.data && this.data.url ? this.data.url : '';
    
        return wrapper;
        // return (
           
        //     document.createElement('input')
        //     // <div>
        //     //    <VideoUpload/>
        //     //    {console.log("ddasda")}
        //     //    <label></label>
        //     //     <input></input>
        //     // </div>
        // )
    }
    save(blockContent){
        return {
          url: blockContent.value
        }
      }
}

export default video;
