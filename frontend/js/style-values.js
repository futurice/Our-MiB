
function getStyleRuleValue(style, selector) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    try {
      var mysheet = document.styleSheets[i];
      var myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules;
      for (var j = 0; j < myrules.length; j++) {
        if (myrules[j].selectorText && myrules[j].selectorText.toLowerCase() === selector) {
          return myrules[j].style[style];
        }
      }
    } catch (e) {}
  }
}


export default function getStyleValues() {
  const styleValueInPx = getStyleRuleValue('height', '#navbar-height-to-js');

  const navbarHeight = Number(styleValueInPx.replace(/[^\d]+/, ''))
  const pink = getStyleRuleValue('color', '#pink-to-js');
  const green = getStyleRuleValue('color', '#green-to-js');
  const white = getStyleRuleValue('color', '#white-to-js');

  return {
    navbarHeight,
    pink,
    green,
    white
  };
}
