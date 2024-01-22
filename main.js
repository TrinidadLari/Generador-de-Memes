//  ...................................................
// MAIN SCREEN
// MAIN SCREEN
// MAIN SCREEN
// ...................................................

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
    // console.log("Activating Dark Mode");
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
    // console.log("Deactivating Dark Mode");
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

// console.log("imgPanelLiImg element:", imgPanelLiImg);
// console.log("imgPanel element:", imgPanel);
// console.log("imgPanelTitle element:", imgPanelTitle);
// console.log("textPanelLiText element:", textPanelLiText);
// console.log("textPanel element:", textPanel);
// console.log("textPanelTitle element:", textPanelTitle);
// console.log("buttonClose element:", buttonClose);

// MAKE IMG PANEL VISIBLE AND SCROLL UP THE SECTION

const showImgPanel = () => {
  // console.log("Showing image panel");
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
  // console.log("Showing text panel");
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
  // console.log("Closing panels");
  imgPanel.style.display = "none";
  textPanel.style.display = "none";
};

// DEFAULT STATE
const setDefaultState = () => {
  // console.log("Setting default state");
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
  // console.log("Zombie clicked");
  imgZombie.style.transition =
    "transform 2s ease-in-out, opacity 2s ease-in-out";
  imgZombie.style.transform = "translateY(100%)";
  imgZombie.style.opacity = "0";

  setTimeout(() => {
    // console.log("Zombie animation complete");
    imgZombie.style.transition =
      "transform 2s ease-in-out, opacity 2s ease-in-out";
    imgZombie.style.transform = "translateY(0)";
    imgZombie.style.opacity = "1";
  }, 2000);
});

//--------------------------------------------------
//                ZOMBIE END <---------
//--------------------------------------------------

//  ...................................................
// PANEL SECTION TO MODIFY TEXT
// PANEL SECTION TO MODIFY TEXT
// PANEL SECTION TO MODIFY TEXT
// ...................................................

//--------------------------------------------------
//                ADD TEXT START <---------
//--------------------------------------------------

// GET HTML ELEMENTS

document.addEventListener("DOMContentLoaded", () => {
  const topTextInput = document.getElementById("topText");
  const bottomTextInput = document.getElementById("bottomText");
  const noTopTextCheckbox = document.getElementById("noTopText");
  const noBottomTextCheckbox = document.getElementById("noBottomText");
  const memeBoxTop = document.getElementById("memeBox__top");
  const memeBoxBottom = document.getElementById("memeBox__bottom");
  const memeBoxPreview = document.getElementById("memeBox__preview");
  const imgMeme = document.getElementById("imgMeme");
  const memeBoxTopText = document.getElementById("memeBox__topText");
  const memeBoxBottomText = document.getElementById("memeBox__bottomText");

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

  topTextInput.addEventListener("input", (e) => {
    updateText(e, memeBoxTopText);
  });

  bottomTextInput.addEventListener("input", (e) => {
    updateText(e, memeBoxBottomText);
  });

  noTopTextCheckbox.addEventListener("change", () => {
    toggleTextDisplay(noTopTextCheckbox, memeBoxTop, initialStylesTop);
  });

  noBottomTextCheckbox.addEventListener("change", () => {
    toggleTextDisplay(noBottomTextCheckbox, memeBoxBottom, initialStylesBottom);
  });

  //SYNCHRONIZES THE TEXT ENTERED WITH THAT OF THE MEME

  const updateText = (e, outputElement) => {
    outputElement.textContent = e.target.value;
  };

  // CHECKBOX TRUE / FALSE

  const toggleTextDisplay = (checkbox, containerElement, initialStyles) => {
    if (checkbox.checked) {
      containerElement.style.display = "none";
      memeBoxPreview.style.gridTemplateRows = "70% 15%";
      imgMeme.style.height = "100%";
      console.log("Hidden upper text");
    } else {
      containerElement.style.display = "flex";
      memeBoxPreview.style.gridTemplateRows = initialStyles.gridTemplateRows;
      imgMeme.style.height = initialStyles.height;
      containerElement.style.alignItems = "center";
      containerElement.style.justifyContent = "center";
      console.log("Top text shown");
    }
  };

  // DELETES DEFAULT TEXT

  topTextInput.addEventListener("focus", (e) => {
    clearDefaultText(e, "INGRESAR TEXTO SUPERIOR");
  });

  bottomTextInput.addEventListener("focus", (e) => {
    clearDefaultText(e, "INGRESAR TEXTO INFERIOR");
  });

  const clearDefaultText = (e, defaultText) => {
    if (e.target.value === defaultText) {
      e.target.value = "";
    }
  };

  //ENTER NO DEFAULT BEHAVIOR AND REMOVE FOCUS

  topTextInput.addEventListener("keypress", (e) => {
    handleEnterKey(e, memeBoxTopText);
  });

  bottomTextInput.addEventListener("keypress", (e) => {
    handleEnterKey(e, memeBoxBottomText);
  });

  const handleEnterKey = (e, textElement) => {
    if (e.key === "Enter") {
      e.preventDefault();
      textElement.blur();
    }
  };
});

//--------------------------------------------------
//                ADD TEXT END <---------
//--------------------------------------------------

//--------------------------------------------------
//               CHANGE FONTS  START <---------
//--------------------------------------------------

const textFontSelect = document.getElementById("textPanel__fonts");
const memeBoxTopText = document.getElementById("memeBox__topText");
const memeBoxBottomText = document.getElementById("memeBox__bottomText");

textFontSelect.addEventListener("change", () => {
  const selectedFont = textFontSelect.value;
  applyFont(selectedFont);
});

const applyFont = (font) => {
  memeBoxTopText.style.fontFamily = font;
  memeBoxBottomText.style.fontFamily = font;
};

//--------------------------------------------------
//               CHANGE FONTS  END <---------
//--------------------------------------------------

//--------------------------------------------------
//               SIZE AND ALIGN TEXT  START <---------
//--------------------------------------------------
// GET HTML ELEMENTS
const textSizeInput = document.getElementById("textPanel__size");
const textAlignLeftButton = document.getElementById("textPanelAlign__left");
const textAlignCenterButton = document.getElementById("textPanelAlign__center");
const textAlignRightButton = document.getElementById("textPanelAlign__right");
const memeBox__TopText = document.getElementById("memeBox__topText");
const memeBox__BottomText = document.getElementById("memeBox__bottomText");

// FUNCTION TO APPLY SELECTED TEXT SIZE
const applyTextSize = () => {
  const textSize = `${textSizeInput.value}px`;
  memeBox__TopText.style.fontSize = textSize;
  memeBox__BottomText.style.fontSize = textSize;
};

// FUNCTION TO APPLY SELECTED TEXT ALIGNMENT
const applyTextAlignment = (alignment) => {
  memeBox__TopText.style.textAlign = alignment;
  memeBox__BottomText.style.textAlign = alignment;
};

// ADD EVENT LISTENERS
textSizeInput.addEventListener("input", applyTextSize);
textAlignLeftButton.addEventListener("click", () => applyTextAlignment("left"));
textAlignCenterButton.addEventListener("click", () =>
  applyTextAlignment("center")
);
textAlignRightButton.addEventListener("click", () =>
  applyTextAlignment("right")
);

//--------------------------------------------------
//               SIZE AND ALIGN TEXT   END <---------
//--------------------------------------------------

//--------------------------------------------------
//               COLOR AND BACKGROUND   START <---------
//--------------------------------------------------

// GET HTML ELEMENTS

document.addEventListener("DOMContentLoaded", () => {
  const fontColorInput = document.getElementById("color__letter");
  const backgroundColorInput = document.getElementById("color__background");
  const transparentCheckbox = document.getElementById(
    "transparent__background"
  );
  const memeBox__Top = document.getElementById("memeBox__top");
  const memeBox__Bottom = document.getElementById("memeBox__bottom");

  // APPLY FONT COLOR

  const applyFontColor = () => {
    const fontColor = fontColorInput.value;
    memeBox__TopText.style.color = fontColor;
    memeBox__BottomText.style.color = fontColor;
  };

  fontColorInput.addEventListener("input", applyFontColor);

  // APPLY BACKGROUND COLOR

  const applyBackgroundColor = () => {
    const backgroundColor = backgroundColorInput.value;
    memeBox__Top.style.backgroundColor = backgroundColor;
    memeBox__Bottom.style.backgroundColor = backgroundColor;
  };

  backgroundColorInput.addEventListener("input", applyBackgroundColor);
});

//BACKGROUND TRANSPARENCY CHECKBOX

//                   MISSING TO DO

//--------------------------------------------------
//               COLOR AND BACKGROUND   END <---------
//--------------------------------------------------

//--------------------------------------------------
//               CONTOUR   START <---------
//--------------------------------------------------

// GET HTML ELEMENTS

const noneContourButton = document.getElementById("buttonContour__none");
const whiteContourButton = document.getElementById("buttonContour__white");
const blackContourButton = document.getElementById("buttonContour__black");
const boxTopText = document.getElementById("memeBox__topText");
const boxBottomText = document.getElementById("memeBox__bottomText");

// DEFINE STYLING CONTOUR
//NONE
const applyNoContour = () => {
  boxTopText.style.textShadow = "none";
  boxBottomText.style.textShadow = "none";
};

//WHITE
const applyWhiteContour = () => {
  boxTopText.style.textShadow = "1px 1px 2px white, -1px -1px 2px white";
  boxBottomText.style.textShadow = "1px 1px 2px white, -1px -1px 2px white";
};

//BLACK
const applyBlackContour = () => {
  boxTopText.style.textShadow = "1px 1px 2px black, -1px -1px 2px black";
  boxBottomText.style.textShadow = "1px 1px 2px black, -1px -1px 2px black";
};

// APPLY EVENTS
noneContourButton.addEventListener("click", applyNoContour);
whiteContourButton.addEventListener("click", applyWhiteContour);
blackContourButton.addEventListener("click", applyBlackContour);

//--------------------------------------------------
//               CONTOUR   END <---------
//--------------------------------------------------

//  ...................................................
// PANEL SECTION TO MODIFY IMG
// PANEL SECTION TO MODIFY IMG
// PANEL SECTION TO MODIFY IMG
// ...................................................

// -------------------------------------------------------------------
//               UPLOAD IMAGE AND APPLY TO MEME START
// -------------------------------------------------------------------

// GET HTML ELEMENTS

document.addEventListener("DOMContentLoaded", (e) => {
  const imgUploadUrl = document.getElementById("imgUpload__url");
  const imgUploadPc = document.getElementById("imgUpload__pc");
  const imgMeme = document.getElementById("imgMeme");

  // console.log("imgUploadUrl element:", imgUploadUrl);
  // console.log("imgUploadPc element:", imgUploadPc);
  // console.log("imgMeme element:", imgMeme);

  // UPLOAD IMG BY URL

  imgUploadUrl.addEventListener("input", (e) => {
    const imgUrl = imgUploadUrl.value;
    // console.log("Image URL input event. New URL:", imgUrl);
    imgMeme.style.backgroundImage = `url('${imgUrl}')`;
    imgMeme.style.backgroundSize = "cover";
  });

  // UPLOAD IMG FROM FILE ON PC

  imgUploadPc.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    // console.log("Image file selected. File URL:", imgUrl);
    imgMeme.style.backgroundImage = `url('${imgUrl}')`;
    imgMeme.style.backgroundSize = "cover";
  });
});

// -------------------------------------------------------------------
//               UPLOAD IMAGE AND APPLY TO MEME END
// -------------------------------------------------------------------

// ----------------------------------------
//                  BACKGROUND
// ----------------------------------------

// GET HTML ELEMENTS

const colorPicker = document.getElementById("imgControlPanelBackground__color");
const compositionSelect = document.getElementById(
  "imgControlPanel-background__comp"
);
const imgMeme = document.getElementById("imgMeme");

// FUNCTION TO APPLY SELECTED COMPOSITION AND COLOR

const applyCompositionAndColor = () => {
  const color = colorPicker.value;
  const composition = compositionSelect.value;

  // console.log('Color selected:', color);
  // console.log('Composition selected:', composition);

  switch (composition) {
    case "unset":
      // Original
      imgMeme.style.filter = "none";
      imgMeme.style.backgroundColor = "transparent";
      break;
    case "lighten":
      // Lighten
      imgMeme.style.filter = `brightness(150%)`;
      imgMeme.style.backgroundColor = color;
      break;
    case "darken":
      // Darken
      imgMeme.style.filter = `brightness(50%)`;
      imgMeme.style.backgroundColor = color;
      break;
    case "difference":
      // Difference
      imgMeme.style.filter = `invert(100%)`;
      imgMeme.style.backgroundColor = color;
      break;
    case "luminosity":
      // Luminosity
      imgMeme.style.filter = `brightness(200%)`;
      imgMeme.style.backgroundColor = color;
      break;
    case "multiply":
      // Multiply
      imgMeme.style.filter = `multiply(${color})`;
      imgMeme.style.backgroundColor = "black";
      break;
    default:
      // Default to unset
      imgMeme.style.filter = "none";
      imgMeme.style.backgroundColor = "transparent";
  }

  // console.log('Filter applied:', imgMeme.style.filter);
  // console.log('Background color applied:', imgMeme.style.backgroundColor);
};

// ADD CHANGE EVENT LISTENERS TO TRIGGER THE FUNCTION

colorPicker.addEventListener("input", applyCompositionAndColor);
compositionSelect.addEventListener("change", applyCompositionAndColor);

// ----------------------------------------
//                  FILTERS
// ----------------------------------------

// GET HTML ELEMENTS

const filtersBrightness = document.getElementById("filters__brightness");
const filtersOpacity = document.getElementById("filters__opacity");
const filtersContrast = document.getElementById("filters__contrast");
const filtersBlur = document.getElementById("filters__blur");
const filtersGrayscale = document.getElementById("filters__grayscale");
const filtersSepia = document.getElementById("filters__sepia");
const filtersTone = document.getElementById("filters__tone");
const filtersSaturate = document.getElementById("filters__saturate");
const filtersNegative = document.getElementById("filters__negative");
const buttonResetFilters = document.getElementById("buttonResetFilters");
const img__Meme = document.getElementById("imgMeme");

//ADD EVENT INPUT TO FILTERS

filtersBrightness.addEventListener("input", getFilterValue);
filtersOpacity.addEventListener("input", getFilterValue);
filtersContrast.addEventListener("input", getFilterValue);
filtersBlur.addEventListener("input", getFilterValue);
filtersGrayscale.addEventListener("input", getFilterValue);
filtersSepia.addEventListener("input", getFilterValue);
filtersTone.addEventListener("input", getFilterValue);
filtersSaturate.addEventListener("input", getFilterValue);
filtersNegative.addEventListener("input", getFilterValue);

//DEFAULT VALUES

buttonResetFilters.addEventListener("click", () => {
  const brightness = 1;
  const opacity = 1;
  const contrast = 100;
  const blur = 0;
  const grayscale = 0;
  const sepia = 0;
  const tone = 0;
  const saturate = 100;
  const negative = 0;
  resetFilter(
    brightness,
    opacity,
    contrast,
    blur,
    grayscale,
    sepia,
    tone,
    saturate,
    negative
  );
});

// FUNCTION TO APPLY SELECTED FILTERS
function getFilterValue() {
  const brightness = filtersBrightness.value;
  const opacity = filtersOpacity.value;
  const contrast = filtersContrast.value;
  const blur = filtersBlur.value;
  const grayscale = filtersGrayscale.value;
  const sepia = filtersSepia.value;
  const tone = filtersTone.value;
  const saturate = filtersSaturate.value;
  const negative = filtersNegative.value;
  resetFilter(
    brightness,
    opacity,
    contrast,
    blur,
    grayscale,
    sepia,
    tone,
    saturate,
    negative
  );
}

// FUNCTION TO APPLY SELECTED FILTERS
function resetFilter(
  brightness,
  opacity,
  contrast,
  blur,
  grayscale,
  sepia,
  tone,
  saturate,
  negative
) {
  brightness = `brightness(${brightness})`;
  opacity = `opacity(${opacity})`;
  contrast = `contrast(${contrast}%)`;
  blur = `blur(${blur}px)`;
  grayscale = `grayscale(${grayscale}%)`;
  sepia = `sepia(${sepia}%)`;
  const hueRotate = `hue-rotate(${tone}deg)`;
  saturate = `saturate(${saturate}%)`;
  invert = `invert(${negative})`;

  const filterValue = `${brightness} ${opacity} ${contrast} ${blur} ${grayscale} ${sepia} ${hueRotate} ${saturate} ${invert}`;

  imgMeme.style.filter = filterValue;
}

buttonResetFilters.addEventListener("click", () => {
  // console.log('Reset Filters Button Clicked');
  resetFilter(1, 1, 100, 0, 0, 0, 0, 100, 0); // Restablecer los filtros a los valores predeterminados
});

//  ...................................................
// DOWNLOAD MEME
// DOWNLOAD MEME
// DOWNLOAD MEME
// ...................................................

//--------------------------------------------------
//          MEME DOWNLOAD BUTTON START <---------
//--------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const buttonDownloadMeme = document.getElementById("buttonDownloadMeme");

  // ADD BUTTON CLICK EVENT
  buttonDownloadMeme.addEventListener("click", () => {
    // GET HTML ELEMENT
    const memeBoxPreview = document.getElementById("memeBox__preview");

    // CAPTURES THE CONTENT OF THE DIV AS IMG
    html2canvas(memeBoxPreview, { useCORS: true }).then((canvas) => {
      // CONVERTS CONTENT TO A BLOB AND ASSIGNS IT A URL
      canvas
        .toBlob((blob) => {
          const url = window.URL.createObjectURL(blob);

          // CREATES TEMPORARY LINK FOR DOWNLOAD
          const a = document.createElement("a");
          a.href = url;
          a.download = "meme.png";

          // APPLY THE LINK TO THE DOCUMENT
          document.body.appendChild(a);

          a.click();

          // CLEAN THE LINK
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          // console.log("Download link removed and URL object revoked.");
        })
        .then(() => {
          console.log("Descarga completada");
          //MISSING TO DO
        });
    });
  });
});


