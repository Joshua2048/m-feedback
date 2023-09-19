"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = TouchFeedback;
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var __assign =
  (void 0 && (void 0).__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
function TouchFeedback(props) {
  var children = props.children,
    _a = props.disabled,
    disabled = _a === void 0 ? false : _a,
    activeClassName = props.activeClassName,
    activeStyle = props.activeStyle;
  var _b = (0, _react.useState)(false),
    active = _b[0],
    setActive = _b[1];
  var triggerEvent = function triggerEvent(type, isActive, ev) {
    var eventType = "on" + type;
    var customChildren = props.children;
    if (customChildren.props[eventType]) {
      customChildren.props[eventType](ev);
    }
    if (isActive !== active) {
      setActive(isActive);
    }
  };
  var onTouchStart = function onTouchStart(e) {
    triggerEvent("TouchStart", true, e);
  };
  var onTouchMove = function onTouchMove(e) {
    triggerEvent("TouchMove", false, e);
  };
  var onTouchEnd = function onTouchEnd(e) {
    triggerEvent("TouchEnd", false, e);
  };
  var onTouchCancel = function onTouchCancel(e) {
    triggerEvent("TouchCancel", false, e);
  };
  var onMouseDown = function onMouseDown(e) {
    // pc simulate mobile
    triggerEvent("MouseDown", true, e);
  };
  var onMouseUp = function onMouseUp(e) {
    triggerEvent("MouseUp", false, e);
  };
  var onMouseLeave = function onMouseLeave(e) {
    triggerEvent("MouseLeave", false, e);
  };
  if (!disabled && active) {
    var _c = children.props,
      style = _c.style,
      className = _c.className;
    if (activeStyle !== false) {
      if (activeStyle) {
        style = __assign(__assign({}, style), activeStyle);
      }
      className = (0, _classnames["default"])(className, activeClassName);
    }
    return /*#__PURE__*/ _react["default"].cloneElement(children, {
      className: className,
      style: style,
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      onTouchCancel: onTouchCancel,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseLeave: onMouseLeave,
    });
  }
  return /*#__PURE__*/ _react["default"].cloneElement(children, {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchCancel,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave,
  });
}
