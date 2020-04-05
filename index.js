
const injectHTML = function (e) {
    let x = event.clientX; 
    let y = event.clientY; 
    el = document.elementFromPoint(x, y);

    const HTMLStructure =  
    `<ul class="multilevel-drop-down col">
    <li class="sub-nav-item" onclick="injectHTML(event)">
    dropdown
    <i class="fa fa-caret-down sub-caret-icon "aria-hidden="true"></i>
    </li>
    <li class="sub-nav-item"  onclick="injectHTML(event)">
    dropdown
    <i class="fa fa-caret-down sub-caret-icon "aria-hidden="true"></i>
    </li>
    <li class="sub-nav-item" onclick="injectHTML(event)">
    dropdown
    <i class="fa fa-caret-down sub-caret-icon " aria-hidden="true"></i>
    </li>   
    </ul>`

    el.insertAdjacentHTML("beforeend", HTMLStructure);

}

