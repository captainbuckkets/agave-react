import React from 'react';
import '../css/LoginPage.css';
import '../css/SideBar.css'
import LoginInput from './LoginInput'
import {ReactComponent as Logo} from '../img/logo2.svg'

function LoginPage() {
  let modalState = false

  window.onclick = function(e){
    let target = "modal"
    let modal = document.getElementsByClassName(target)[0]
    if ( (e.target.id !== "Login-button") && modalState ){
      let paths = e.composedPath()
      let inModal = false
      for (let k = 0; k < paths.length-1;k++){
          if (target === paths[k].className){
            inModal = true
            console.log("clicked inside modal")
          }
      }
      if (!inModal){
        console.log("clicked outside modal")
        toggleModal()
      }
    }
  }
  
  const openModal = (el) => {}
  const closeModal = (el) => {}

  const toggleModal = () =>{
    const modal = document.getElementsByClassName("modal")[0]
    if (modalState){
      modal.style.display = "none"
      fadeIn("welcome")
    }
    else{
      modal.style.display = "flex"
      fadeOut("welcome")
    }
     modalState = !modalState
     console.log("Modal is " + modalState)
    }

  const getMnemonic = () => {
    const mnemonic = document.getElementById("mnemonic-select")
    mnemonic.value = window.getMnemonic()
  }
  
  const exitLogin = () =>{
    const element = document.getElementsByClassName("LoginPage")
    element[0].className = "hidden"
    const sideBar = document.getElementsByClassName("SideBar")
    sideBar[0].className = "SideBar--expand"
  }

  function fadeIn(el){
    var elem = document.getElementsByClassName(el)[0];
    elem.style.transition = "opacity 0.6s linear 0s";
    elem.style.opacity = "100%";
  }

  function fadeOut(el){
    var elem = document.getElementsByClassName(el)[0];
    elem.style.transition = "opacity 0.6s linear 0s";
    elem.style.opacity = "0%";
  }
  // function submitInformation () {

  //   const mnemonic = document.getElementById("mnemonic-select").value
  //   const safety_code = document.getElementById("password-select").value
  //   const address = Crypto.getAddress(mnemonic,"peercoinTestnet")
  //   const lockedKey = Crypto.encryptData( safety_code, Crypto.getWIF(mnemonic))
  //   sessionStorage.setItem("address",address)
  //   sessionStorage.setItem("lockedKey",lockedKey)
  //  }
  return (
    <div className="LoginPage">
      <div className="LoginMain">
        <div id="LoginMain-welcome" className="welcome">
        <div className="Logo" id="Logo">
          <Logo />
        </div>
        {/* This will make the login form visible */}
      <h1>welcome to agave</h1>
      <LoginInput value="login" type="button" onclick={toggleModal} id="Login-button"/>
      </div>
        <div className="modal" id="login-modal">
          <div className="modal-content" id="modal-content">
            <h1>login</h1>
            <LoginInput value="network" type="select" id="network-select" className="form-select"/>
            <LoginInput type="text" id="mnemonic-select" placeholder="12-Word Passphrase" className="form-text"/>
            <LoginInput value="generate new" type="button" id="generate-submit" onclick={getMnemonic}/>
            <LoginInput type="password" id="password-select" placeholder="Temporary Password" className="form-text"/>
            <LoginInput value="submit" type="button" onclick={exitLogin} id="submit"/>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
