import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./css/QuoraHeader.css";
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { BsPatchQuestionFill, BsPeople } from 'react-icons/bs';
import { RxAvatar } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { MdExpandMore, MdOutlineFeaturedPlayList, MdAssignmentTurnedIn, MdPeopleAlt, MdOutlineNotifications } from 'react-icons/md';
import axios from 'axios';


const user = "data:image/jpeg;base64,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"



/** Quora Navbar*/
const QuoraHeader = () => {
    return (
        <div className='qHeader'>
            <div> <Logo /></div>
            <div>  <Icon /></div>
            <div><Search /></div>
            <div> <Avatar /></div>
            <div>
                <AddQuestion />
            </div>

        </div>
    )
}


/**Navbar Logo */
const Logo = () => {
    return (<div className="qHeader__logo">
        <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
        />
    </div>)
};

/**Navbar icons
 * 1.Home
 * 2.Playlist
 * 3.Pepole
 * Notification
 */

const Icon = () => {
    return (<div className='qHeader__icons'>
        <div className="qHeader__icon"><AiFillHome /></div>
        <div className="qHeader__icon"><MdOutlineFeaturedPlayList /></div>
        <div className="qHeader__icon"><MdAssignmentTurnedIn /></div>
        <div className="qHeader__icon"><MdPeopleAlt /></div>
        <div className="qHeader__icon"><MdOutlineNotifications /></div>
    </div>)
}
/** NavbarUser Avatar
 */

export const Avatar = () => {
    return (
        <div className="qHeader__rem avatar">
            <span className='qHeader__avatar'><RxAvatar src={user} /></span>


        </div>
    )
}

/** Navbar Search Button */
const Search = () => {
    return (<div className="qHeader__input">
        <AiOutlineSearch />
        <input type="text" placeholder='Seach questions' />
    </div>)
}

/**Navbar New Question add Button */

const AddQuestion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputurl, setInputurl] = useState("");
    const [question, setQuestion] = useState("");

    const handleSubmit = async () => {

        if (question !== "") {

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = {
                questionName: question,
                questionUrl: inputurl,
            };
            await axios
                .post("/api/questions", body, config)
                .then((res) => {
                    alert(res.data.message);
                    window.location.href = "/";
                    setIsModalOpen(false);
                })
                .catch((e) => {
                    console.log(e);
                    alert("Error in adding question");
                });

        }

    };
    return (
        <div className='qHeaderButton'>
            { }
            <Button onClick={() => setIsModalOpen(true)}>
                Add Question
            </Button>

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
                <div className='modal_box'>
                    <div className="modal__title">
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar className="avatar" />
                        <div className="modal__scope">
                            <p><BsPeople /></p>
                            <p>Public</p>
                            <p><MdExpandMore /></p>
                        </div>
                    </div>
                    <div className="modal__Field">
                        <input
                            onChange={(e) => {
                                setQuestion(e.target.value)
                            }}
                            value={question}
                            type=" text"
                            placeholder="Start your question with 'What', 'How', 'Why', etc. "
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <input
                                type="text"
                                value={inputurl}
                                onChange={(e) => setInputurl(e.target.value)}
                                style={{
                                    margin: "5px 0",
                                    border: "1px solid lightgray",
                                    padding: "10px",
                                    outline: "2px solid #000",
                                }}
                                placeholder="Optional: inclue a link that gives context"
                            />
                            {inputurl !== "" && <img style={{
                                height: "40vh",
                                objectFit: "contain"
                            }} src={inputurl} alt="image not found" />}


                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className="cancle" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button type='submit' className='add' onClick={handleSubmit}>
                            Add Question
                        </button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}




export default QuoraHeader;