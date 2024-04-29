
export default function functions() {

  const toggleClass = (slection, nextClass) => {
    let elem = document.querySelector(slection);
    elem.classList.toggle(nextClass);
  }

  function addClass(slection, addClass) {
    let elem = document.querySelector(slection);
    elem.classList.add(addClass);
  }

  function removeClass(slection, addClass) {
    let elem = document.querySelector(slection);
    elem.classList.remove(addClass);
  }


  function clickable(elem) {
    let el = document.querySelector(elem);
    el.click();
  }

  function togglePwd(pwdInput, toggleBtn) {
    let toggleButton = document.querySelector(toggleBtn)
    let input = document.querySelector(pwdInput);
    if (input.getAttribute("type") == "password") {
      input.setAttribute("type", "text");
      toggleButton.classList.replace("ri-eye-off-line", "ri-eye-line");
    }
    else {
      input.setAttribute("type", "password");
      toggleButton.classList.replace("ri-eye-line", "ri-eye-off-line");
    }
  }

  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLogin");
    window.location.reload()
  }


  function elemFocus(elem) {
    let el = document.querySelector(elem);
    el.focus()
  }

  function changeAttr(el, attrType, attrVal,prevVal) {
    let elem = document.querySelector(el);

    elem.getAttribute(attrType);
    
    if(attrType !== attrVal){
      elem.setAttribute(attrType,attrVal);
    }
    else{
      elem.setAttribute(attrType,prevVal);
    }

    console.log("Elem",elem,"attrType",attrType,"attrVal",attrVal,"prevVal",prevVal)

  }

  return { toggleClass, addClass, removeClass, clickable, togglePwd, logout, elemFocus, changeAttr };
}