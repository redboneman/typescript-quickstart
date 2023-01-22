"use strict";

var _component = require("./core/component");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Test = function (_HTMLElement) {
  _inherits(Test, _HTMLElement);
  var _super = _createSuper(Test);
  function Test() {
    var _this;
    _classCallCheck(this, Test);
    _this = _super.call(this);
    _this.addEventListener('change', _this.callMe.bind(_assertThisInitialized(_this)));
    return _this;
  }
  _createClass(Test, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      console.log('created!');
      console.log(this.getAttribute('message'));
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('ATTR CHANGED:', name, oldValue, newValue);
      this._name = this.getAttribute('message');
    }
  }, {
    key: "callMe",
    value: function callMe() {
      console.log('changed');
    }
  }]);
  return Test;
}(_wrapNativeSuper(HTMLElement));
_defineProperty(Test, "observedAttributes", ['message']);
customElements.define('test-el', Test);
setTimeout(function () {
  var el = document.querySelector('test-el');
  if (el) {
    el.innerHTML = 'Content changed!';
  }
}, 1000);
var PGTestComponent = function (_PGComponent) {
  _inherits(PGTestComponent, _PGComponent);
  var _super2 = _createSuper(PGTestComponent);
  function PGTestComponent(props) {
    _classCallCheck(this, PGTestComponent);
    return _super2.call(this, props);
  }
  return _createClass(PGTestComponent);
}(_component.PGComponent);
var pgt = new PGTestComponent('testy');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGxNZSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwibmFtZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJfbmFtZSIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJzZXRUaW1lb3V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJQR1Rlc3RDb21wb25lbnQiLCJwcm9wcyIsIlBHQ29tcG9uZW50IiwicGd0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UEdDb21wb25lbnR9IGZyb20gJy4vY29yZS9jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgVGVzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHJcblx0c3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsnbWVzc2FnZSddO1xyXG5cdHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jYWxsTWUuYmluZCh0aGlzKSlcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2NyZWF0ZWQhJylcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdtZXNzYWdlJykpXHJcblx0fVxyXG5cclxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZygnQVRUUiBDSEFOR0VEOicsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSlcclxuXHRcdHRoaXMuX25hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbWVzc2FnZScpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNhbGxNZSgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdjaGFuZ2VkJylcclxuXHR9XHJcblxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Rlc3QtZWwnLCBUZXN0KVxyXG5cclxuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0Y29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rlc3QtZWwnKVxyXG5cdGlmIChlbCkge1xyXG5cdFx0ZWwuaW5uZXJIVE1MID0gJ0NvbnRlbnQgY2hhbmdlZCEnXHJcblx0fVxyXG59LCAxMDAwKVxyXG5cclxuY2xhc3MgUEdUZXN0Q29tcG9uZW50IGV4dGVuZHMgUEdDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5jb25zdCBwZ3QgPSBuZXcgUEdUZXN0Q29tcG9uZW50KCd0ZXN0eScpXHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUE2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFFdkNBLElBQUk7RUFBQTtFQUFBO0VBS1QsZ0JBQWM7SUFBQTtJQUFBO0lBQ2I7SUFDQSxNQUFLQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBS0MsTUFBTSxDQUFDQyxJQUFJLCtCQUFNLENBQUM7SUFBQTtFQUN4RDtFQUFDO0lBQUE7SUFBQSxPQUVELDZCQUFvQjtNQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQ3ZCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQztFQUFDO0lBQUE7SUFBQSxPQUVELGtDQUF5QkMsSUFBWSxFQUFFQyxRQUFhLEVBQUVDLFFBQWEsRUFBRTtNQUNwRUwsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFRSxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxDQUFDO01BQ3RELElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0osWUFBWSxDQUFDLFNBQVMsQ0FBQztJQUMxQztFQUFDO0lBQUE7SUFBQSxPQUVELGtCQUFnQjtNQUNmRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDdkI7RUFBQztFQUFBO0FBQUEsbUJBdEJpQk0sV0FBVztBQUFBLGdCQUF4QlgsSUFBSSx3QkFFbUIsQ0FBQyxTQUFTLENBQUM7QUF3QnhDWSxjQUFjLENBQUNDLE1BQU0sQ0FBQyxTQUFTLEVBQUViLElBQUksQ0FBQztBQUV0Q2MsVUFBVSxDQUFDLFlBQU07RUFDaEIsSUFBTUMsRUFBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDakQsSUFBSUYsRUFBRSxFQUFFO0lBQ1BBLEVBQUUsQ0FBQ0csU0FBUyxHQUFHLGtCQUFrQjtFQUNsQztBQUNELENBQUMsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUVGQyxlQUFlO0VBQUE7RUFBQTtFQUNwQix5QkFBWUMsS0FBVSxFQUFFO0lBQUE7SUFBQSwwQkFDakJBLEtBQUs7RUFDWjtFQUFDO0FBQUEsRUFINEJDLHNCQUFXO0FBT3pDLElBQU1DLEdBQUcsR0FBRyxJQUFJSCxlQUFlLENBQUMsT0FBTyxDQUFDIn0=