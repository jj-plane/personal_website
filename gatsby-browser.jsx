const React = require("react");
const animate = require("framer-motion");

require("prismjs/themes/prism-coy.min.css");

exports.wrapPageElement = ({ element, props }) => {
    return <animate.AnimatePresence exitBeforeEnter> {element}</animate.AnimatePresence>
  }