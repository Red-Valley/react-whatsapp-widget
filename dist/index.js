function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var bi = require('react-icons/bi');
var ai = require('react-icons/ai');
var fa = require('react-icons/fa');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var styles = {"root":"_2iWL7","open":"_1fOYS","customTransition":"_11FGp","close":"_bvAzs"};

var Context = React__default.createContext({});
var WidgetContextProvider = function WidgetContextProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var handleOpen = function handleOpen() {
    setIsOpen(function (prevState) {
      return setIsOpen(!prevState);
    });
  };

  return /*#__PURE__*/React__default.createElement(Context.Provider, {
    value: {
      isOpen: isOpen,
      handleOpen: handleOpen
    }
  }, children);
};

var styles$1 = {"root":"_2rVjT","close_btn":"_1w7Ch","logo":"_10MlI","texts":"_1Ixzy","texts_h1":"_2C9-R","texts_span":"_3B7os"};

function Header(_ref) {
  var companyName = _ref.companyName,
      textReplyTime = _ref.textReplyTime,
      handleOpen = _ref.handleOpen;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.root
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1.close_btn,
    onClick: handleOpen
  }, /*#__PURE__*/React__default.createElement(ai.AiOutlineClose, null)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.logo
  }, /*#__PURE__*/React__default.createElement(bi.BiSupport, null)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.texts
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1.texts_h1
  }, companyName), /*#__PURE__*/React__default.createElement("span", {
    className: styles$1.texts_span
  }, textReplyTime)));
}

var styles$2 = {"root":"_3YWHv","message":"_nYEjV","message_title":"_jryeF","message_body":"_3CMpi","triangle_top_right":"_eRm_Y","message_time":"_2x2HJ"};

function ChatSection(_ref) {
  var companyName = _ref.companyName,
      message = _ref.message;
  var time = new Date().toTimeString().split(":").slice(0, 2).join(":");
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.root
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.message
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$2.triangle_top_right
  }), /*#__PURE__*/React__default.createElement("span", {
    className: styles$2.message_title
  }, companyName), /*#__PURE__*/React__default.createElement("p", {
    className: styles$2.message_body
  }, message), /*#__PURE__*/React__default.createElement("span", {
    className: styles$2.message_time
  }, time)));
}

var styles$3 = {"root":"_30mQ0","input":"_2-mAj","button":"_2W95M"};

function SendButton(_ref) {
  var sendButton = _ref.sendButton,
      phoneNumber = _ref.phoneNumber,
      placeholder = _ref.placeholder;

  var _useState = React.useState(''),
      message = _useState[0],
      setMessage = _useState[1];

  var handleSend = function handleSend() {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number');
      return false;
    }

    window.open("https://wa.me/" + phoneNumber + "?text=" + message);
    setMessage('');
  };

  var handleChange = function handleChange(e) {
    setMessage(e.target.value);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.root
  }, /*#__PURE__*/React__default.createElement("input", {
    placeholder: placeholder,
    className: styles$3.input,
    onChange: handleChange,
    value: message
  }), /*#__PURE__*/React__default.createElement("button", {
    className: styles$3.button,
    onClick: handleSend
  }, sendButton));
}

function App(props) {
  var _useContext = React.useContext(Context),
      isOpen = _useContext.isOpen,
      handleOpen = _useContext.handleOpen;

  props.handleOpen = handleOpen;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.root + " " + (isOpen ? styles.open : styles.close)
  }, /*#__PURE__*/React__default.createElement(Header, _extends({
    handleOpen: handleOpen
  }, props)), /*#__PURE__*/React__default.createElement(ChatSection, props), /*#__PURE__*/React__default.createElement(SendButton, props));
}

var styles$4 = {"root":"_1bpcM"};

function WhatsAppButton() {
  var _useContext = React.useContext(Context),
      handleOpen = _useContext.handleOpen;

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.root,
    onClick: handleOpen
  }, /*#__PURE__*/React__default.createElement(fa.FaWhatsapp, null));
}

var styles$5 = {};

function WhatsAppWidget(_ref) {
  var _ref$textReplyTime = _ref.textReplyTime,
      textReplyTime = _ref$textReplyTime === void 0 ? 'Typically replies within a day' : _ref$textReplyTime,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? "Hello! \uD83D\uDC4B\uD83C\uDFFC \n\nWhat can we do for you?" : _ref$message,
      _ref$companyName = _ref.companyName,
      companyName = _ref$companyName === void 0 ? 'Support' : _ref$companyName,
      _ref$sendButton = _ref.sendButton,
      sendButton = _ref$sendButton === void 0 ? 'Send' : _ref$sendButton,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Type a message' : _ref$placeholder,
      phoneNumber = _ref.phoneNumber,
      handleOpen = _ref.handleOpen;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.root
  }, /*#__PURE__*/React__default.createElement(WidgetContextProvider, null, /*#__PURE__*/React__default.createElement(App, {
    textReplyTime: textReplyTime,
    companyName: companyName,
    phoneNumber: phoneNumber,
    sendButton: sendButton,
    placeholder: placeholder,
    message: message,
    handleOpen: handleOpen
  }), /*#__PURE__*/React__default.createElement(WhatsAppButton, null)));
}

module.exports = WhatsAppWidget;
//# sourceMappingURL=index.js.map
