function Replace() {
    var inputTextChanageFirst = document.querySelector(".first");
    var inputTextChanageSecond = document.querySelector(".second");
    var inputValue = inputTextChanageFirst.value;
    inputTextChanageFirst.value = inputTextChanageSecond.value; 
    inputTextChanageSecond.value = inputValue;    
}
