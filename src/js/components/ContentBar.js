import React from 'react';
import Blockies from 'react-blockies'
import '../../css/ContentBar.css';

// import SideBarItem from './SideBarItem'

function ContentBar () {

    // Click identicon and copy to clipboard
    const copyAddress = () => {
      const range = document.createRange();
      const elem = document.getElementById("user-address")
      range.selectNode(elem)
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy")
      window.getSelection().removeAllRanges();
      alert("Address copied!")
    }

    /* Manage the logout function */
    let logoutUser = () => {
      // Make sure you want to logout
      if (window.confirm("Are you sure you want to logout?")) {
        const sessionKeys = ["lockedKey", "address","network"]
        for (const k in sessionKeys.values){
          console.log("Item Removed",k)
          sessionStorage.removeItem(k)
        }
        // let content = document.getElementsByClassName("Content transitionIn")
        // content[0].className = "Content"
        window.location.hash = ""
      } else {
        console.log("User cancelled logout...")
      }
    }
    const address = sessionStorage.getItem("address")
    const balance = sessionStorage.getItem("balance")
  return (
    <div className="ContentBar">
      <div className="wrapper">
        <div className="one">
          <div className="UserLogo">
            <div className="blockie" onClick={copyAddress}>
              <Blockies seed={address} size={20} scale={6} color="#dfe" bgColor="#C06E5B" spotColor="#011627"/>
            </div>
            <div className="content-header">User Address </div>
            <div id="user-address" className="content-text">{address}</div>
          </div>
        </div>
        
        <div className="two bottomBorder">
          <div className="content-header">User Balance</div>
          <div className="content-text largeText">{balance} PPC</div>
        </div>

        <div className="three bottomBorder">
        <div className="content-header">Network</div>
        </div>

        <div className="four">
        <div className="content-header">Something here</div>
        </div>
      </div>
    </div>
  );
}

export default ContentBar;
