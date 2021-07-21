import React from 'react';
// import sQR from '../Assets/senior.png'
import Modal from 'react-modal';
import iah from '../Assets/iah.jpg';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Call2act() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div>

<div class="c2a"style={{"background": "rgba(255,255,255,0.6", "width":"100%"}}>
            <div>&nbsp;</div>
            <h1 style={{"font-size":"3em"}}>Want to join in our community?</h1>
            <div>&nbsp;</div>

            <div>
            <div>&nbsp;</div>
            



            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmZtYaSdPfGMdSr9WoS3gxXJ1300fekzzIri754SgEeCp2Dw/viewform" className="btn">  🧓 I'm a Senior</a> 
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfq9IttonRg50HBVl4jZxKT9WWutAzLvvwFQxWpbMm8ed_Prw/viewform" className="btn"> 🙋 I'm a Volunteer</a> 

            <button onClick={openModal} className="btn"> 📅 Our next event </button> 

            <a href="https://beconnected.esafety.gov.au/topic-library"  className="btn">  🦘 Be Connected</a> 
            
            </div>
            <div style={{"height":"50px"}}>&nbsp;</div>

            </div>


          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Regular Event</h2>
            <div>
            <h4>Digital Support Drop-in Sessions Saturdays 2-4pm Indoorpily Activity Hub</h4>
            <img src={iah} alt="at indoorpily activity hub" width="720px" />
            </div>
            <button className="btn" onClick={closeModal}>close</button>


          </Modal>
        </div>
      );
    }
    
  


export default Call2act;
