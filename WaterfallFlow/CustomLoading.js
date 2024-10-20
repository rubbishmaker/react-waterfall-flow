import React, { useEffect, useRef } from 'react';
var customLoading = function customLoading(_ref) {
  var ob = _ref.ob,
    _ref$current = _ref.current,
    current = _ref$current === void 0 ? 0 : _ref$current,
    _ref$maxCurrent = _ref.maxCurrent,
    maxCurrent = _ref$maxCurrent === void 0 ? 0 : _ref$maxCurrent,
    renderEnd = _ref.renderEnd,
    renderLoading = _ref.renderLoading;
  var loadingRef = useRef();
  var render = function render() {
    if (current > maxCurrent) {
      return renderEnd === null || renderEnd === void 0 ? void 0 : renderEnd();
    }
    return renderLoading();
  };
  useEffect(function () {
    var _ob$observe;
    if (current >= maxCurrent) {
      var _ob$unobserve;
      ob === null || ob === void 0 || (_ob$unobserve = ob.unobserve) === null || _ob$unobserve === void 0 || _ob$unobserve.call(ob, loadingRef === null || loadingRef === void 0 ? void 0 : loadingRef.current);
    }
    ob === null || ob === void 0 || (_ob$observe = ob.observe) === null || _ob$observe === void 0 || _ob$observe.call(ob, loadingRef === null || loadingRef === void 0 ? void 0 : loadingRef.current);
  }, [current, maxCurrent]);
  return /*#__PURE__*/React.createElement("div", {
    ref: loadingRef,
    style: {
      width: '100%',
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: '-40px'
    }
  }, render());
};
export default customLoading;