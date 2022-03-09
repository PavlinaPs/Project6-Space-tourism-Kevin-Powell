const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keyDownLeft = 37;
    const keyDownRight = 39;

    // change the tabindex of the current tab to -1
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
        // console.log(tabs[tabFocus]);
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

// if the right arrow key is pushed, move to the next tab on the right
    if (e.keyCode === keyDownRight) {
        tabFocus++;
        console.log(tabFocus);
        if(tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }

// if the left arrow key is pushed, move to the next tab on the left
    if (e.keyCode === keyDownLeft) {
        tabFocus--;
        console.log(tabFocus);
        if(tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}

function changeTabPanel(e) {
    const targetTab = e.target;
    console.log(e.target)
    const targetPanel = targetTab.getAttribute("aria-controls");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach(panel => panel.setAttribute('hidden', true));

    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
}



    
