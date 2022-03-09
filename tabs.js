const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
    const keyDownLeft = 37;
    const keyDownUp = 38;
    const keyDownRight = 39;
    const keyDownDown = 40;
    

    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight || e.keyCode === keyDownUp || e.keyCode === keyDownDown ) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if (e.keyCode === keyDownRight || e.keyCode === keyDownDown) {
            tabFocus++;
            if(tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        } else if (e.keyCode === keyDownLeft || e.keyCode === keyDownUp) {
            tabFocus--;
            console.log(tabFocus);
            if(tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    const targetImage = targetTab.getAttribute("data-image");

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]); 
    
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`])
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach(item => item.setAttribute('hidden', true));
}

function showContent(parent, target) {
    parent
        .querySelector(target)
        .removeAttribute('hidden');
}



    

