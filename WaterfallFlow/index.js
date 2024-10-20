function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React, { useLayoutEffect, useRef } from 'react';
import { CustomLoading, useIntersectionObserver } from "./..";
var WaterfallFlow = /*#__PURE__*/React.memo(function (props) {
  /**
   * @param
   * data为数据区域，会根据数据项生成真正的dom，data格式必须要求宽高，这是因为瀑布流中一般宽度固定，已知height或者宽高比
   * itemWidth 提供出去的原因是为了提醒使用者目前只能固定宽高
   * 
   * TODO:自适应的动态宽高
   * TODO:考虑加虚拟列表功能提升渲染性能
   */
  var data = props.data,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 220 : _props$itemWidth,
    renderEmpty = props.renderEmpty,
    renderChild = props.renderChild,
    style = props.style,
    rootClassName = props.rootClassName,
    gap = props.gap,
    lazyLoading = props.lazyLoading,
    renderEnd = props.renderEnd,
    renderLoading = props.renderLoading,
    callback = props.callback,
    totalNumber = props.totalNumber,
    observerOptions = props.observerOptions;
  var _useIntersectionObser = useIntersectionObserver(callback, observerOptions),
    ob = _useIntersectionObser.ob;
  var contrainer = useRef();
  if (!(data !== null && data !== void 0 && data.length)) {
    return renderEmpty();
  }
  useLayoutEffect(function () {
    if (!(data !== null && data !== void 0 && data.length)) {
      return;
    }
    var layout = function layout() {
      var contrainerRef = contrainer.current;
      //    获取容器可用宽度
      var contrainerWidth = contrainerRef === null || contrainerRef === void 0 ? void 0 : contrainerRef.offsetWidth;
      // 获取一排能放几个盒子
      var itemCount = Math.floor(contrainerWidth / itemWidth);

      //可变高度数组
      var flexlist = Array(itemCount).fill(0);
      //获取手里能拿到的children
      var childList = Array.from(contrainerRef.children);
      lazyLoading ? childList === null || childList === void 0 ? void 0 : childList.pop() : null;
      for (var i = 0; i < (childList === null || childList === void 0 ? void 0 : childList.length); i++) {
        var _childList$i;
        //取出当前最小的盒子高度
        var minHeight = Math.min.apply(Math, _toConsumableArray(flexlist));
        var index = flexlist === null || flexlist === void 0 ? void 0 : flexlist.indexOf(minHeight);

        //通过定位将盒子定位出去
        //需要获取左右边距的gap 也就是margin

        var horizontal = 0;
        var vertical = 0;
        if (gap) {
          var type = _typeof(gap);
          if (type === 'number') {
            horizontal = 2 * gap;
            vertical = 2 * gap;
          }
          if (type === 'object') {
            var _ref = gap,
              _ref2 = _slicedToArray(_ref, 4),
              _top = _ref2[0],
              right = _ref2[1],
              bottom = _ref2[2],
              _left = _ref2[3];
            horizontal = right + _left;
            vertical = _top + bottom;
          }
        }
        var left = index * (itemWidth + horizontal);
        var top = minHeight + vertical;
        childList[i].style.left = "".concat(left, "px");
        childList[i].style.top = "".concat(top, "px");
        flexlist[index] += ((_childList$i = childList[i]) === null || _childList$i === void 0 ? void 0 : _childList$i.offsetHeight) + vertical;
      }
      requestAnimationFrame(function () {
        contrainerRef.style.height = "".concat(Math.max.apply(Math, _toConsumableArray(flexlist)), "px");
      });
    };
    layout();
    window.addEventListener('resize', layout);
    return function () {
      window.removeEventListener('resize', layout);
    };
  }, [JSON.stringify(data)]);
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      //绝对定位是必须的
      position: 'relative',
      overflowY: 'auto',
      overflowX: 'hidden'
    }, style),
    ref: contrainer,
    className: rootClassName !== null && rootClassName !== void 0 ? rootClassName : ""
  }, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
    return renderChild ? renderChild(item, index) : null;
  }), lazyLoading ? /*#__PURE__*/React.createElement(CustomLoading, {
    ob: ob,
    current: data === null || data === void 0 ? void 0 : data.length,
    maxCurrent: totalNumber,
    renderEnd: renderEnd,
    renderLoading: renderLoading
  }) : null);
});
export default WaterfallFlow;
export { WaterfallFlow };