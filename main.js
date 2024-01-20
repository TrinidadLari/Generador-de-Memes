/* <!-- --------------------------------------------------- -->
  <!--  DARK MODE BUTTON // LIGHT MODE BUTTON START-->
  <!-- --------------------------------------------------- --> */

// GET HTML ELEMENTS

document.addEventListener("DOMContentLoaded", (e) => {
  const buttonDarkTheme = document.getElementById("buttonDarkTheme");
  const buttonLightTheme = document.getElementById("buttonLightTheme");
  const body = document.body;
  const header = document.getElementById("darkHeader");
  const nav = document.getElementById("darkNav");
  const imgPanel = document.getElementById("imgPanel");
  const textPanel = document.getElementById("textPanel");

  // CHECK IF DARK THEME IS ACTIVE

  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // ACTIVATE DARK THEME

  const trueDarkMode = () => {
    console.log("Activating Dark Mode");
    body.classList.add("darkBody");
    header.classList.add("darkHeader");
    nav.classList.add("darkNav");
    imgPanel.classList.add("darkImgPanel");
    textPanel.classList.add("darkTextPanel");
    buttonDarkTheme.style.display = "none";
    buttonLightTheme.style.display = "inline-flex";

    localStorage.setItem("darkMode", "true");
  };

  // DEACTIVATE DARK THEME

  const falseDarkMode = () => {
    console.log("Deactivating Dark Mode");
    body.classList.remove("darkBody");
    header.classList.remove("darkHeader");
    nav.classList.remove("darkNav");
    imgPanel.classList.remove("darkImgPanel");
    textPanel.classList.remove("darkTextPanel");
    buttonLightTheme.style.display = "none";
    buttonDarkTheme.style.display = "inline-flex";

    localStorage.setItem("darkMode", null);
  };

  // ASSIGN EVENTS TO BOTTONS

  buttonDarkTheme.addEventListener("click", trueDarkMode);
  buttonLightTheme.addEventListener("click", falseDarkMode);

  if (isDarkMode) {
    trueDarkMode();
  } else {
    falseDarkMode();
  }
});

/* <!-- --------------------------------------------------- -->
  <!--  DARK MODE BUTTON // LIGHT MODE BUTTON END-->
  <!-- --------------------------------------------------- --> */

// -------------------------------------------------------------------
//               UPLOAD IMAGE AND APPLY TO MEME START
// -------------------------------------------------------------------

// GET HTML ELEMENTS

document.addEventListener("DOMContentLoaded", (e) => {
  const imgUploadUrl = document.getElementById("imgUpload__url");
  const imgUploadPc = document.getElementById("imgUpload__pc");
  const imgMeme = document.getElementById("imgMeme");

  console.log("imgUploadUrl element:", imgUploadUrl);
  console.log("imgUploadPc element:", imgUploadPc);
  console.log("imgMeme element:", imgMeme);

  // UPLOAD IMG BY URL

  imgUploadUrl.addEventListener("input", (e) => {
    const imgUrl = imgUploadUrl.value;
    console.log("Image URL input event. New URL:", imgUrl);
    imgMeme.style.backgroundImage = `url('${imgUrl}')`;
    imgMeme.style.backgroundSize = "cover";
  });

  // UPLOAD IMG FROM FILE ON PC

  imgUploadPc.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    console.log("Image file selected. File URL:", imgUrl);
    imgMeme.style.backgroundImage = `url('${imgUrl}')`;
    imgMeme.style.backgroundSize = "cover";
  });
});

// -------------------------------------------------------------------
//               UPLOAD IMAGE AND APPLY TO MEME END
// -------------------------------------------------------------------

// ---------------------------------------------------
//                 NAV IMG - TEXT - NONE START
// ---------------------------------------------------

// GET HTML ELEMENTS

const imgPanelLiImg = document.getElementById("generalPanelLi__img");
const imgPanel = document.getElementById("imgPanel");
const imgPanelTitle = document.getElementById("imgPanel__title");

const textPanelLiText = document.getElementById("generalPanelLi__text");
const textPanel = document.getElementById("textPanel");
const textPanelTitle = document.getElementById("textPanel__title");

const buttonClose = document.getElementById("buttonClose");

console.log("imgPanelLiImg element:", imgPanelLiImg);
console.log("imgPanel element:", imgPanel);
console.log("imgPanelTitle element:", imgPanelTitle);
console.log("textPanelLiText element:", textPanelLiText);
console.log("textPanel element:", textPanel);
console.log("textPanelTitle element:", textPanelTitle);
console.log("buttonClose element:", buttonClose);

// MAKE IMG PANEL VISIBLE AND SCROLL UP THE SECTION

const showImgPanel = () => {
  console.log("Showing image panel");
  imgPanel.style.display = "flex";
  textPanel.style.display = "none";
  imgPanelTitle.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};

// MAKE TEXT PANEL VISIBLE AND SCROLL UP THE SECTION

const showTextPanel = () => {
  console.log("Showing text panel");
  textPanel.style.display = "flex";
  imgPanel.style.display = "none";
  textPanelTitle.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};

// HIDE PANELS WITH CLOSE BUTTON
const closePanels = () => {
  console.log("Closing panels");
  imgPanel.style.display = "none";
  textPanel.style.display = "none";
};

// DEFAULT STATE
const setDefaultState = () => {
  console.log("Setting default state");
  imgPanel.style.display = "none";
  textPanel.style.display = "none";
  buttonClose.click();
};

// ASSIGN EVENTS TO CLICKS

imgPanelLiImg.addEventListener("click", showImgPanel);
textPanelLiText.addEventListener("click", showTextPanel);
buttonClose.addEventListener("click", closePanels);

setDefaultState();

// ---------------------------------------------------
//                 NAV IMG - TEXT - NONE END
// ---------------------------------------------------

//--------------------------------------------------
//                   ZOMBIE START <---------
//--------------------------------------------------

// GET HTML ELEMENT

const imgZombie = document.getElementById("imgZombie");

console.log("imgZombie element:", imgZombie);

// HIDE AND DISPLAY THE ZOMBIE WITH ONE CLICK

imgZombie.addEventListener("click", (e) => {
  console.log("Zombie clicked");
  imgZombie.style.transition =
    "transform 2s ease-in-out, opacity 2s ease-in-out";
  imgZombie.style.transform = "translateY(100%)";
  imgZombie.style.opacity = "0";

  setTimeout(() => {
    console.log("Zombie animation complete");
    imgZombie.style.transition =
      "transform 2s ease-in-out, opacity 2s ease-in-out";
    imgZombie.style.transform = "translateY(0)";
    imgZombie.style.opacity = "1";
  }, 2000);
});

//--------------------------------------------------
//                ZOMBIE END <---------
//--------------------------------------------------



//--------------------------------------------------
//                ADD TEXT START <---------
//--------------------------------------------------


// GET HTML ELEMENTS

document.addEventListener('DOMContentLoaded', () => {
  const topTextInput = document.getElementById('topText');
  const bottomTextInput = document.getElementById('bottomText');
  const noTopTextCheckbox = document.getElementById('noTopText');
  const noBottomTextCheckbox = document.getElementById('noBottomText');
  const memeBoxTop = document.getElementById('memeBox__top');
  const memeBoxBottom = document.getElementById('memeBox__bottom');
  const memeBoxPreview = document.getElementById('memeBox__preview');
  const imgMeme = document.getElementById('imgMeme');
  const memeBoxTopText = document.getElementById('memeBox__topText');
  const memeBoxBottomText = document.getElementById('memeBox__bottomText');

  // STORES ORIGINAL STYLE

  const initialStylesTop = {
    display: memeBoxTop.style.display,
    height: imgMeme.style.height,
  };

  const initialStylesBottom = {
    display: memeBoxBottom.style.display,
    height: imgMeme.style.height,
  };

  // EVENTS FOR TOP/BOTTOM TEXT

  topTextInput.addEventListener('input', (e) => {
    updateText(e, memeBoxTopText);
  });

  bottomTextInput.addEventListener('input', (e) => {
    updateText(e, memeBoxBottomText);
  });

  noTopTextCheckbox.addEventListener('change', () => {
    toggleTextDisplay(noTopTextCheckbox, memeBoxTop, initialStylesTop);
  });

  noBottomTextCheckbox.addEventListener('change', () => {
    toggleTextDisplay(noBottomTextCheckbox, memeBoxBottom, initialStylesBottom);
  });


//SYNCHRONIZES THE TEXT ENTERED WITH THAT OF THE MEME

  const updateText = (e, outputElement) => {
    outputElement.textContent = e.target.value;
  };

// CHECKBOX TRUE / FALSE

  const toggleTextDisplay = (checkbox, containerElement, initialStyles) => {
    if (checkbox.checked) {
      containerElement.style.display = 'none';
      memeBoxPreview.style.gridTemplateRows = '70% 15%';
      imgMeme.style.height = '100%';
      console.log('Hidden upper text');
    } else {
      containerElement.style.display = 'flex';
      memeBoxPreview.style.gridTemplateRows = initialStyles.gridTemplateRows;
      imgMeme.style.height = initialStyles.height;
      containerElement.style.alignItems = 'center'; 
      containerElement.style.justifyContent = 'center'; 
      console.log('Top text shown');
    }
  };

  // DELETES DEFAULT TEXT

  topTextInput.addEventListener('focus', (e) => {
    clearDefaultText(e, 'INGRESAR TEXTO SUPERIOR');
  });

  bottomTextInput.addEventListener('focus', (e) => {
    clearDefaultText(e, 'INGRESAR TEXTO INFERIOR');
  });

  const clearDefaultText = (e, defaultText) => {
    if (e.target.value === defaultText) {
      e.target.value = '';
    }
  };

  //ENTER NO DEFAULT BEHAVIOR AND REMOVE FOCUS

  topTextInput.addEventListener('keypress', (e) => {
    handleEnterKey(e, memeBoxTopText);
  });

  bottomTextInput.addEventListener('keypress', (e) => {
    handleEnterKey(e, memeBoxBottomText);
  }); 

  const handleEnterKey = (e, textElement) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      textElement.blur();
    }
  };
});

//--------------------------------------------------
//                ADD TEXT END <---------
//--------------------------------------------------


//--------------------------------------------------
//          MEME DOWNLOAD BUTTON START <---------
//--------------------------------------------------

// GET HTML ELEMENT

const buttonDownloadMeme= document.getElementById('buttonDownloadMeme');


//ADD BUTTON CLICK EVENT, GENERATE AN IMG FROM THE DIV, SAVE THE GENERATED IMG

buttonDownloadMeme.addEventListener('click', ()=>
    domtoimage.toBlob(document.getElementById('memeBox__preview')).then(blob => saveAs (blob, 'mi-meme.png'))
)
console.log("dom-to-image Blob created:", blob);
console.log("mi-meme.png saved.");

//// GET HTML ELEMENT

document.addEventListener("DOMContentLoaded", () => {
  const buttonDownloadMeme = document.getElementById("buttonDownloadMeme");

//ADD EVENT CLICK TO DOWNLOAD BUTTON

  buttonDownloadMeme.addEventListener("click", () => {
    const memeBoxPreview = document.getElementById("memeBox__preview");

    // CAPTURES THE CONTENT OF THE DIV AS IMG

    html2canvas(memeBoxPreview, { useCORS: true }).then(canvas => {
      console.log("html2canvas Canvas created:", canvas);
      
      // CONVERTS CONTENT TO A BLOB AND ASSIGNS IT A URL
      canvas.toBlob(blob => {
        console.log("Blob created:", blob);
        const url = window.URL.createObjectURL(blob);

        // CREATES TEMPORARY LINK FOR DOWNLOAD

        const a = document.createElement("a");
        a.href = url;
        a.download = "meme.png";

        // APPLY THE LINK TO THE DOCUMENT
        document.body.appendChild(a);
        console.log("Download link added to the document.");
        a.click();
        console.log("Simulating click on the download link.");

        // CLEAN THE LINK
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        console.log("Download link removed and URL object revoked.");
      });
    });
  });
});


//--------------------------------------------------
//          MEME DOWNLOAD BUTTON END <---------
//--------------------------------------------------