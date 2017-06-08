webpackJsonp([1],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(71);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(4);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(72);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(6);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(5);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(272);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _styles = __webpack_require__(1081);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(1096);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Static Boilerplate
   * https://github.com/kriasoft/react-static-boilerplate
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var AboutPage = function (_React$Component) {
    (0, _inherits3.default)(AboutPage, _React$Component);
  
    function AboutPage() {
      (0, _classCallCheck3.default)(this, AboutPage);
      return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AboutPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _index.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          { className: _styles2.default.content },
          _react2.default.createElement(
            'h1',
            null,
            _index.title
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _index.html } })
        );
      }
    }]);
    return AboutPage;
  }(_react2.default.Component);
  
  exports.default = AboutPage;

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(78)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n *\n * Copyright © 2015-2016 Konstantin Tarkus (@koistya)\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .styles_content_2Ju {\n    padding: 0 16px;\n  }\n\n}\n", "", {"version":3,"sources":["/./pages/about/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;GAQG;;AAEH;;EAEE;IACE,gBAAgB;GACjB;;CAEF","file":"styles.css","sourcesContent":["/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n *\n * Copyright © 2015-2016 Konstantin Tarkus (@koistya)\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@media screen and (max-width: 1024px) {\n\n  .content {\n    padding: 0 16px;\n  }\n\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"content": "styles_content_2Ju"
  };

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(718);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(117)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./styles.css", function() {
  			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../node_modules/postcss-loader/index.js!./styles.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ }),

/***/ 1096:
/***/ (function(module, exports) {

  module.exports = {"title":"About Us","html":"<h1>Privacy Policy</h1>\n<p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>\n<h3>What personal information do we collect from the people that visit our blog, website or app?</h3>\n<p>We do not collect information from visitors of our site.\nor other details to help you with your experience.</p>\n<h3>When do we collect information?</h3>\n<p>We collect information from you when you place an order, fill out a form or enter information on our site.</p>\n<h3>How do we use your information?</h3>\n<p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>\n<pre><code>  • To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.\n  • To improve our website in order to better serve you.\n  • To allow us to better service you in responding to your customer service requests.\n  • To follow up with them after correspondence (live chat, email or phone inquiries)\n</code></pre>\n<h3>How do we protect your information?</h3>\n<p>We do not use vulnerability scanning and/or scanning to PCI standards.\nWe only provide articles and information. We never ask for credit card numbers.\nWe do not use Malware Scanning.</p>\n<h3>We do not use an SSL certificate</h3>\n<pre><code>  • We do not need an SSL because:\n</code></pre>\n<h3>Do we use 'cookies'?</h3>\n<h3>We do not use cookies for tracking purposes</h3>\n<p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>\n<p>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.that make your site experience more efficient and may not function properly.</p>\n<h3>Third-party disclosure</h3>\n<p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</p>\n<p>However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>\n<h3>Third-party links</h3>\n<p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>\n<h3>Google</h3>\n<p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. <a href=\"https://support.google.com/adwordspolicy/answer/1316548?hl=en\">https://support.google.com/adwordspolicy/answer/1316548?hl=en</a></p>\n<h3>We use Google AdSense Advertising on our website.</h3>\n<p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>\n<h3>We have implemented the following:</h3>\n<pre><code>  • Google Display Network Impression Reporting\n  • Demographics and Interests Reporting\n</code></pre>\n<p>We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>\n<p>Opting out:\nUsers can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</p>\n<h3>California Online Privacy Protection Act</h3>\n<p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: <a href=\"http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf\">http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a></p>\n<p>According to CalOPPA, we agree to the following:\nUsers can visit our site anonymously.\nOnce this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.\nOur Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</p>\n<p>You will be notified of any Privacy Policy changes:\n• On our Privacy Policy Page\nCan change your personal information:\n• By emailing us</p>\n<h3>How does our site handle Do Not Track signals?</h3>\n<p>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>\n<h3>Does our site allow third-party behavioral tracking?</h3>\n<p>It's also important to note that we allow third-party behavioral tracking</p>\n<h3>COPPA (Children Online Privacy Protection Act)</h3>\n<p>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>\n<h3>We do not specifically market to children under the age of 13 years old.</h3>\n<h3>Fair Information Practices</h3>\n<p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p>\n<p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:\nWe will notify you via email\n• Within 7 business days</p>\n<p>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</p>\n"};

/***/ })

});
//# sourceMappingURL=1.js.map?2bce82d00a3a441e23bf