import React, { useState } from 'react';
import "./css/Feed.css";
import { Avatar } from './QuoraHeader';
import { RxThickArrowDown, RxThickArrowUp } from "react-icons/rx";
import { TbMessageCircle2 } from "react-icons/tb";
import { TiArrowSync } from "react-icons/ti";
import { HiOutlineShare, HiDotsHorizontal } from "react-icons/hi";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Feed = () => {
  return (
    <div className='feed'>
      <QuoraBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}


function QuoraBox() {

  return (
    <div className='quoraBox'>
      <div className='quoraBox-info'>
        <Avatar />
      </div>
      <div className='quoraBox__quora'>
        <h5>What is Your Question or link ?</h5>
      </div>
    </div>
  )
}



function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='post'>

      <div className='post__info'>
        <Avatar />
        <h4>User Name</h4>
        <small>Time Stamp</small>
      </div>

      <div className='post__body'>
        <div className='post__question'>
          <p>This is test Question ?</p>
          <button className='post__btnAnswer' onClick={() => setIsModalOpen(true)}>Answer</button>
          <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              }
            }}
          >
            <div className='modal__question'>
              <h1>This is the test question</h1>
              <p>asked by {" "} <span className='name'>userName</span> on <span className='name'>timestamp</span> </p>
            </div>
            <div className='modal__answer' style={{ marginBottom: "10px", }}>
              <ReactQuill placeholder='Enter your answer' />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>

      <div className='post__footer'>
        <div className='post__footerAction'>
          <RxThickArrowUp />
          <RxThickArrowDown />
        </div>
        <div className='post__footerActionmiddle' >
          <TbMessageCircle2 />
          <TiArrowSync />
        </div>

        <div className='post__footerLeft'>
          <HiOutlineShare />
          <br></br>
          <HiDotsHorizontal />
        </div>
      </div>

      <p style={{
        color: "rgba(0,0,0,0.5)",
        fontSize: "12px",
        fontWeight: "bold",
        margin: "1rem 0rem"

      }}
      >1 Answer</p>


      <div style={{
        margin: "5px 0px 0px 0px",
        padding: "5px 0px 0px 20px",
        borderTop: "1px solid lightgray"
      }} className='post__answer'>

        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0.7rem  0.5rem",
          borderTop: "1px solid lightgray",
        }} className='post-answer-container'>

          <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",

          }} className='post__answered'>

            <div className='post__info'>
              <Avatar />
              <h4>User Name</h4>
              <small>Time Stamp</small>
            </div>
            <div style={{
              fontWeight: 600,
              color: "#888",
            }} className='post-answer'>
              <h4>This is test answer this is test answer .</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}






export default Feed
