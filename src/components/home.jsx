import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import Link from "@editorjs/link";
import ImageTool from "@editorjs/image";
import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote";
import Checklist from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter' ;
import Video from './video';





const home = () => {
const SimpleVideo = require('simple-video-editorjs');
  const editor = new EditorJS({
    holderId: "editorjs",
    tools: {
      list: {
        class: List,
        inlineToolbar: ["link", "bold"],
      },
      list: {
        class: Video,
        inlineToolbar: ["link", "bold"],
      },
      image: {
        class: ImageTool,
        config: {
          byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
          byUrl: "http://localhost:8008/fetchUrl",
        },
      },
      code: {
        class: Code,
        inlineToolbar: ["link"],
      },

      link: {
        class: Link,
        inlineToolbar: ["link"],
      },
      
      raw: {
        class: Raw,
        inlineToolbar: ["link"],
      },
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        }
      },

      checklist: {
        class: Checklist,
      inlineToolbar: true
      },

      delimiter: {
        class: Delimiter,
      inlineToolbar: true
      },

      video:{
          class: SimpleVideo,
          inlineToolbar: true
      }



      
    },
  });
  return (
    <div>
      Hello there!
      <div id="editorjs"></div>
      <button>Click</button>
    </div>
  );
};

export default home;
