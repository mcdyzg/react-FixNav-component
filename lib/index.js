'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixNav = function (_React$Component) {
	_inherits(FixNav, _React$Component);

	function FixNav(props) {
		_classCallCheck(this, FixNav);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FixNav).call(this, props));

		_this.state = {
			top: 0,
			transform: ''
		};
		_this.trans = _this.trans.bind(_this);
		return _this;
	}

	_createClass(FixNav, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_events2.default.on(window, 'scroll', this.trans);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_events2.default.off(window, 'scroll', this.trans);
		}
	}, {
		key: 'getStyle',
		value: function getStyle() {
			var style = {
				height: this.props.height || 65,
				background: '#fff',
				boxShadow: ' 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)',
				position: 'fixed',
				top: 0,
				right: 0,
				left: 0,
				transition: 'all .5s'
			};
			return style;
		}
	}, {
		key: 'trans',
		value: function trans() {
			var before = this.state.top;
			var now = document.documentElement.scrollTop || document.body.scrollTop;
			if (now > (this.props.offset || 600) && now > before) {
				this.setState({
					transform: 'translateY(-' + (this.props.height || 65) + 'px)',
					top: document.documentElement.scrollTop || document.body.scrollTop
				});
			} else {
				this.setState({
					transform: 'translateY(0)',
					top: document.documentElement.scrollTop || document.body.scrollTop
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var style = this.getStyle();
			style.transform = this.state.transform;
			var styles = _extends({}, style, this.props.style);
			return _react2.default.createElement(
				'nav',
				_extends({}, this.props, { style: styles }),
			);
		}
	}]);

	return FixNav;
}(_react2.default.Component);

exports.default = FixNav;