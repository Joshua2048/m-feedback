var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
import classNames from "classnames";
import React, { useState } from "react";
export default function TouchFeedback(props) {
  var children = props.children,
    _a = props.disabled,
    disabled = _a === void 0 ? false : _a,
    activeClassName = props.activeClassName,
    activeStyle = props.activeStyle;
  var _b = useState(false),
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
      className = classNames(className, activeClassName);
    }
    return /*#__PURE__*/React.cloneElement(children, {
      className: className,
      style: style,
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      onTouchCancel: onTouchCancel,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseLeave: onMouseLeave
    });
  }
  return /*#__PURE__*/React.cloneElement(children, {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onTouchCancel: onTouchCancel,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave
  });
}