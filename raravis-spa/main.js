(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mingi\Desktop\WebDevelopment\raravis-spa\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "8P11");



class HomeComponent {
    constructor() { }
    // constructor(private ngZone: NgZone) {
    //   function changeToToggledVersion() {  // if media screen size smaller than expected, toggler attributes added to menu links.
    //     var elementsForChange = document.getElementsByClassName("linksOnNav");
    //     for(var i=0; i < elementsForChange.length; i++){
    //       elementsForChange[i].setAttribute("data-toggle", "collapse");
    //       elementsForChange[i].setAttribute('data-target', '#navbarSupportedContent');
    //       elementsForChange[i].setAttribute('aria-controls', 'navbarSupportedContent');
    //       elementsForChange[i].setAttribute('aria-expanded', 'false');
    //       elementsForChange[i].setAttribute('aria-label', 'Toggle navigation');
    //     }
    //   }
    //   function changeToNonToggledVersion() {// if media screen size larger than expected, toggler attributes removed from menu links.
    //     var elementsForChange = document.getElementsByClassName("linksOnNav");
    //     for(var i=0; i < elementsForChange.length; i++){
    //       elementsForChange[i].removeAttribute('data-toggle');
    //       elementsForChange[i].removeAttribute('data-target');
    //       elementsForChange[i].removeAttribute('aria-controls');
    //       elementsForChange[i].removeAttribute('aria-expanded');
    //       elementsForChange[i].removeAttribute('aria-label');
    //     }
    //   }
    //   function changeToggle(x) {    // function to change toggle attributes. 
    //     if (x.matches) { // If media query matches
    //       alert("test1")
    //       changeToToggledVersion();
    //     } else {
    //       alert("test2")
    //       changeToNonToggledVersion();
    //     }
    //   }
    //   window.onresize = () =>
    //   {
    //     var x = window.matchMedia("(max-width: 768px)"); // set media match statement.
    //     //x.addListener(changeToggle); // add a listener to call the changeToggle function when every screen size change
    //     changeToggle(x);
    //     //alert("deneme");
    //       // ngZone.run(() => {
    //       //     alert(window.innerWidth);
    //       //     alert(window.innerHeight);
    //       // });
    //   };
    // }
    ngOnInit() {
        // window.onload = function(){ // check media query and execute changeToggle function after all content loaded or when document ready
        //   alert("test")
        //   var x = window.matchMedia("(max-width: 768px)"); // set media match statement.
        //   changeToggle(x);
        //   };
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 149, vars: 10, consts: [[1, "container"], ["id", "home", 1, "row"], [1, "col-md-12", 2, "display", "contents"], ["id", "banner", "src", "../../assets/raravis.png", "onclick", "colorMe()", 1, "img", 2, "margin", "auto"], ["id", "about", 1, "row"], ["id", "1", 1, "col-md-12"], [1, "col-md-3", "pt-5", "mt-5", 2, "align-content", "space-around"], ["src", "../../assets/isik.jpeg", 2, "width", "100%"], [1, "col-md-9", "min-vh-100", "pt-5", "mt-5"], [2, "font-family", "Corgette", "font-size", "18px", "text-align", "justify"], ["id", "categories", 1, "row", "visible"], [1, "col-md-4", "pt-3"], ["onclick", "changeVisibility()", "SimpleSmoothScroll", "", "src", "../../assets/bracelet.jpg", 1, "category-images", "img", "w-100", 3, "scrollTo", "showHash", "offset", "duration"], ["onclick", "openItems('3')", "src", "../../assets/necklace.jpg", 1, "category-images", "img", "w-100"], ["onclick", "openItems('4')", "src", "../../assets/ring.jpg", 1, "category-images", "img", "w-100"], ["onclick", "openItems('5')", "src", "../../assets/others.jpg", 1, "category-images", "img", "w-100"], ["onclick", "openItems('6')", "src", "../../assets/agora.jpg", 1, "category-images", "img", "w-100"], ["id", "products", 1, "row", "invisible"], ["onclick", "changeVisibility()", "SimpleSmoothScroll", "", 1, "breadcrumb-link", 3, "scrollTo", "showHash", "offset", "duration"], [1, "col-md-12"], [2, "font-family", "cORGETTE", "font-size", "28px", "margin", "25px 0 10px 0"], [2, "font-family", "Niconne", "font-size", "22px"], [1, "col-md-4", "pt-3", "pb-4"], ["src", "../../assets/bracelets/1.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/2.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/3.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/4.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/5.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/6.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/7.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/8.jpg", 1, "category-images", "img", "w-100"], ["src", "../../assets/bracelets/9.jpg", 1, "category-images", "img", "w-100"], ["id", "contact", 1, "row"], [1, "col-md-6", "pt-5", 2, "align-content", "space-around"], ["action", "", "method", "post", 1, "form"], ["id", "contactFormTable", 1, "table", "table-sm", "table-borderless"], ["for", "name"], ["id", "name", "type", "text", "placeholder", "e.g. John Smith", 1, "form-control", "form-control-sm", "inputs"], ["for", "tel"], ["id", "tel", "type", "text", "placeholder", "e.g. 0123456789", 1, "form-control", "form-control-sm", "inputs"], ["for", "email"], ["id", "email", "type", "text", "placeholder", "e.g. yourname@domainname.co.uk", 1, "form-control", "form-control-sm", "inputs"], ["for", "note"], ["cols", "40", "rows", "10", "height", "100%", "placeholder", "Please enter your enquiry...", 1, "form-control", "form-control-sm", "inputs"], ["id", "sendButton", "type", "submit", "value", "Send"], [1, "col-md-6", "min-vh-100", "pt-5"], ["id", "correspondenceTable", 1, "table", "table-sm", "table-borderless"], ["colspan", "2", 2, "font-weight", "700"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23727769.42714312!2d-5.27208422036244!3d43.451071573985324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758fcaebb8c901%3A0x62e6e1430bb8fe68!2sRaravis%20handmade%20Jewellery!5e0!3m2!1sen!2suk!4v1610279609804!5m2!1sen!2suk", "width", "400", "height", "300", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], ["id", "footer", 1, "row"], [1, "col-md-12", "pb-5", "mb-5"], ["id", "businesscard", "src", "../../assets/businesscard.jpg", 1, "img", "mx-auto", "d-block"], [1, "col-md-12", 2, "color", "gray", "align-content", "flex-end"], [2, "width", "100%", "text-align", "center"], ["id", "goToTop"], ["href", "#home", "SimpleSmoothScroll", "", 3, "showHash", "offset"], ["src", "../../assets/move-to-top-button.png", "width", "50px", 2, "cursor", "pointer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Gulseli Isik loves nothing more than roaming the remote villages found dotted around the Mediterranean landscape. During her explorations, she carefully sources organic products and transforms them into stunning pieces of jewellery. Isik's jewellery business is called Raravis which means 'rare bird\u2019. All products are hand-crafted, completely unique, made with natural materials to a very high standard. The pieces can be best described as modern infused, classic designs with a touch of vintage inspiration. Isik is known as very positive lady giving good energy. This is reflected in the jewellery ranges. Gulseli hopes each item gives vibrant and healing energy to all who wears her jewellery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " If you have any questions, Isik is always happy to respond quickly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Many thanks,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Raravis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "bracelets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "necklaces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "rings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "need more?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " / BRACELETS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "WILD FLOWER BRACELETS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores non eaque, adipisci sint aperiam voluptate expedita assumenda cupiditate? Nemo quo explicabo quia cupiditate eius corrupti eveniet harum fugit possimus ratione ex ullam quam odio quos, fugiat facere unde deserunt dolore aperiam! Nesciunt labore quibusdam consequatur ut, sit totam explicabo voluptates? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "form", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "table", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Brighton Agora Market Full Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Company Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "1234567890");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Correspondence Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Brighton address info will be added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Social Media: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "@brightonagoramarket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "E-Mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "info@raravis.co.uk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "iframe", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " This website developed and published by Roy Procurement and Innovation Solutions. \u00A9 Copyright 2021. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTo", "products")("showHash", true)("offset", -36)("duration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTo", "categories")("showHash", true)("offset", -36)("duration", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHash", true)("offset", 1);
    } }, directives: [ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__["SimpleSmoothScrollDirective"]], styles: ["@media (min-width: 768px) {\n  .breadcrumb-link[_ngcontent-%COMP%] {\n    font-family: BadScript;\n    text-decoration: underline;\n    color: gray;\n  }\n\n  .breadcrumb-link[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    font-family: BadScript;\n    text-decoration: underline;\n    color: black;\n  }\n\n  .category-images[_ngcontent-%COMP%] {\n    cursor: pointer;\n    opacity: 1;\n    box-shadow: 3px 4px 10px black, 5px 10px 5px lightgray;\n  }\n\n  .category-images[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    opacity: 1;\n    box-shadow: 3px 4px 10px black, 5px 10px 5px lightgray;\n    transition: all 0.5s ease;\n  }\n\n  #banner[_ngcontent-%COMP%] {\n    height: 50vh;\n  }\n}\n@media (max-width: 768px) {\n  .breadcrumb-link[_ngcontent-%COMP%] {\n    font-family: BadScript;\n    text-decoration: underline;\n    color: gray;\n  }\n\n  #banner[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .category-images[_ngcontent-%COMP%] {\n    cursor: pointer;\n    opacity: 1;\n    box-shadow: 3px 4px 10px black, 5px 10px 5px lightgray;\n  }\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: BadScript;\n}\nfigcaption[_ngcontent-%COMP%] {\n  font-family: Niconne;\n  text-align: center;\n  margin: 0px 0 0 0;\n  font-size: 24px;\n  color: gray;\n  width: 100%;\n}\n.inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: none;\n  border: 0.5px solid #4F4F4F;\n}\n#sendButton[_ngcontent-%COMP%] {\n  float: right;\n}\n#contactFormTable[_ngcontent-%COMP%] {\n  width: 90%;\n  font-family: Corgette;\n}\n#correspondenceTable[_ngcontent-%COMP%] {\n  width: 90%;\n  font-family: Corgette;\n}\n#home[_ngcontent-%COMP%] {\n  padding: 60px 0 0 0;\n  margin: auto;\n  overflow-y: auto;\n  min-height: 100vh;\n  background-color: transparent;\n}\n#about[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%] {\n  padding: 30px 0px 0px 0px;\n  margin: 0;\n  overflow-y: none;\n  background-color: transparent;\n}\n#footer[_ngcontent-%COMP%] {\n  padding: 30px 0px 0px 0px;\n  margin: 0;\n  overflow-y: none;\n  min-height: calc(50vh - 37px);\n  background-color: transparent;\n}\n#goToTop[_ngcontent-%COMP%] {\n  z-index: 999;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  background-color: transparent;\n  padding: 0;\n}\n#banner[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  margin: auto;\n  padding: auto;\n}\n#businesscard[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n.invisible[_ngcontent-%COMP%] {\n  padding: 30px 0px 40px 0px;\n  height: 0;\n  width: 100%;\n  margin: 0;\n  opacity: 0%;\n  background-color: transparent;\n  transition: all 1s ease;\n}\n.visible[_ngcontent-%COMP%] {\n  padding: 30px 0px 40px 0px;\n  min-height: calc(100vh - 37px);\n  width: 100%;\n  margin: 0;\n  opacity: 100%;\n  transition: all 1s ease;\n}\n.items-scrollback[_ngcontent-%COMP%] {\n  height: 0;\n  overflow: hidden;\n  background-color: black;\n  transition: all 1s ease;\n}\n.items-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background-color: white;\n  transition: all 1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtFQURGOztFQUdBO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSxZQUFBO0VBQUY7O0VBRUE7SUFFRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLHNEQUFBO0VBQUY7O0VBRUE7SUFFRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLHNEQUFBO0lBS0EseUJBQUE7RUFBRjs7RUFFQTtJQUNFLFlBQUE7RUFDRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsMEJBQUE7SUFDQSxXQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxVQUFBO0VBRUY7O0VBQUE7SUFFRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLHNEQUFBO0VBRUY7QUFDRjtBQUVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQUFGO0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQUY7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFKRjtBQVdBO0VBQ0UseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBUkY7QUFlQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFaRjtBQWVBO0VBRUUsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWJGO0FBZ0JBO0VBQ0ksV0FBQTtBQWJKO0FBZ0JBO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFLQSx1QkFBQTtBQWJGO0FBZUE7RUFDRSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBS0EsdUJBQUE7QUFaRjtBQWVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFLQSx1QkFBQTtBQVpGO0FBZUE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFLQSx1QkFBQTtBQWJGO0FBK0JBOzs7Ozs7Ozs7Ozs7OztHQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcFBhZGRpbmdzb2ZTZWN0aW9uczogNjBweDtcclxuXHJcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpe1xyXG4gIC5icmVhZGNydW1iLWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogQmFkU2NyaXB0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWItbGluazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBCYWRTY3JpcHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmNhdGVnb3J5LWltYWdlc3tcclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxMHB4IGJsYWNrLCA1cHggMTBweCA1cHggbGlnaHRncmF5O1xyXG4gIH1cclxuICAuY2F0ZWdvcnktaW1hZ2VzOmhvdmVye1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiAzcHggNHB4IDEwcHggYmxhY2ssIDVweCAxMHB4IDVweCBsaWdodGdyYXk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICB9XHJcbiAgI2Jhbm5lcntcclxuICAgIGhlaWdodDogNTB2aDtcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgLmJyZWFkY3J1bWItbGlua3tcclxuICAgIGZvbnQtZmFtaWx5OiBCYWRTY3JpcHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuICAjYmFubmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLmNhdGVnb3J5LWltYWdlc3tcclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxMHB4IGJsYWNrLCA1cHggMTBweCA1cHggbGlnaHRncmF5O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCYWRTY3JpcHQ7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb257XHJcbiAgZm9udC1mYW1pbHk6IE5pY29ubmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4IDAgMCAwO1xyXG4gIGZvbnQtc2l6ZToyNHB4OyBcclxuICBjb2xvcjogZ3JheTsgXHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4uaW5wdXRze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICM0RjRGNEY7XHJcbn1cclxuXHJcbiNzZW5kQnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI2NvbnRhY3RGb3JtVGFibGV7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmb250LWZhbWlseTogQ29yZ2V0dGU7XHJcbn1cclxuXHJcbiNjb3JyZXNwb25kZW5jZVRhYmxle1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1mYW1pbHk6IENvcmdldHRlO1xyXG59XHJcblxyXG4jaG9tZXtcclxuICBwYWRkaW5nOiAkdG9wUGFkZGluZ3NvZlNlY3Rpb25zIDAgMCAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vIGJvcmRlci10b3A6IDBweCBzb2xpZCBibGFjaztcclxuICAvLyBib3JkZXItbGVmdDogMTBweCBzb2xpZCBibGFjaztcclxuICAvLyBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgYmxhY2s7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jYWJvdXQsICNjb250YWN0e1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDBweCAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93LXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCBibGFjaztcclxuICAvLyBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDBweCAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93LXk6IG5vbmU7XHJcbiAgbWluLWhlaWdodDogY2FsYyg1MHZoIC0gMzdweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCBibGFjaztcclxuICAvLyBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNnb1RvVG9we1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI2Jhbm5lcntcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogYXV0bztcclxufVxyXG5cclxuI2J1c2luZXNzY2FyZHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG4uaW52aXNpYmxle1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDQwcHggMHB4O1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgb3BhY2l0eTogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG4udmlzaWJsZXtcclxuICBwYWRkaW5nOiAzMHB4IDBweCA0MHB4IDBweDtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzdweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG5cclxuLml0ZW1zLXNjcm9sbGJhY2sge1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5pdGVtcy1zY3JvbGx7IFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vbGVmdDowJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG5cclxuLy8gLnJpZ2h0OmFjdGl2ZXtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgei1pbmRleDogMjtcclxuLy8gICB3aWR0aDogJGV4d2lkdGg7XHJcbi8vICAgbGVmdDogMTAwJTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbi8vICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4vLyAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuLy8gICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4vLyB9XHJcblxyXG4vKiBcclxuI25ldzp0YXJnZXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgbGVmdDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG59ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "K9yR":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 20, vars: 0, consts: [[1, "container"], ["id", "segment1", 1, "row", 2, "height", "100vh", "background-color", "grey", "padding-top", "60px"], [1, "col-md-12"], ["href", "#segment2"], ["id", "segment2", 1, "row", 2, "height", "100vh", "background-color", "lightpink", "padding-top", "60px"], [1, "col-md-4"], ["href", "#segment3"], ["id", "segment3", 1, "row", 2, "min-height", "100vh", "background-color", "lightseagreen", "padding-top", "60px"], [1, "col-md-4", "pt-3"], ["onclick", "openItems('1')", "src", "../../assets/bracelet.jpg", 1, "category-images", "img", "w-100"], ["onclick", "openItems('2')", "src", "../../assets/earring.jpg", 1, "category-images", "img", "w-100"], ["onclick", "openItems('3')", "src", "../../assets/necklace.jpg", 1, "category-images", "img", "w-100"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "deneme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " deneme1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " deneme2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "deneme3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "8P11");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(smooth) {
        this.smooth = smooth;
        this.title = 'raravis-spa';
    }
    ngOnInit() {
        this.smooth.smoothScrollToAnchor();
    }
    goTop() {
        let opt = { duration: 500, easing: 'linear' };
        this.smooth.smoothScrollToTop(opt);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__["SimpleSmoothScrollService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__["SimpleSmoothScrollService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "a4+m");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "8P11");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test/test.component */ "K9yR");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"]),
            ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__["SimpleSmoothScrollModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__["SimpleSmoothScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"]),
                    ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__["SimpleSmoothScrollModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a4+m":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test/test.component */ "K9yR");


const appRoutes = [
    //HOME
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: "test", component: _test_test_component__WEBPACK_IMPORTED_MODULE_1__["TestComponent"] },
    //EXCEPTION PAGE (If route can not find other declared routes)
    { path: "**", redirectTo: "home", pathMatch: "full" }
];


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "8P11");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 10, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "navigation"], [1, "navbar", "navbar-expand-lg", "navbar-default"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-dark"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "justify-content-center"], [1, "nav-item", "active", "mr-5", "nav-item-space"], ["href", "#home", "SimpleSmoothScroll", "", 1, "linksOnNav", 3, "showHash", "offset"], ["href", "#about", "SimpleSmoothScroll", "", 1, "linksOnNav", 3, "showHash", "offset"], ["href", "#categories", "SimpleSmoothScroll", "", 1, "linksOnNav", 3, "showHash", "offset"], ["href", "#contact", "SimpleSmoothScroll", "", 1, "linksOnNav", 3, "showHash", "offset"], ["href", "#footer", "SimpleSmoothScroll", "", 1, "linksOnNav", 3, "showHash", "offset"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "FOOTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHash", true)("offset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHash", true)("offset", -36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHash", true)("offset", -36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHash", true)("offset", -36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHash", true)("offset", -36);
    } }, directives: [ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__["SimpleSmoothScrollDirective"]], styles: ["@media (max-width: 768px) {\n  .navigation[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 999;\n    padding: 0px 0px 0px 0px;\n    margin: 0px 0px 0px 0px;\n    top: 0px;\n    left: 0px;\n    width: 100vw;\n    height: 40px;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    font-family: BadScript;\n    font-size: 14px;\n    width: 100%;\n    background-color: #4F4F4F;\n    padding: auto;\n    margin: auto;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: #c8c8c8;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: white;\n  }\n\n  .nav-item-space[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .navigation[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 999;\n    padding: 0px 0px 0px 0px;\n    margin: 0px 0px 0px 0px;\n    top: 0px;\n    left: 0px;\n    width: 100vw;\n    height: 40px;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    font-family: BadScript;\n    font-size: 14px;\n    width: 100%;\n    background-color: #4F4F4F;\n    padding: auto;\n    margin: auto;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: #c8c8c8;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQUNOOztFQUVFO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFFQSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VBQU47O0VBR0U7SUFDSSxXQUFBO0VBQU47O0VBRUU7SUFFSSxjQUFBO0VBQU47O0VBRUU7SUFFSyxZQUFBO0VBQVA7O0VBRUU7SUFDSSxnQkFBQTtFQUNOO0FBQ0Y7QUFFSTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQUFWOztFQUdNO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFFQSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VBRFY7O0VBSU07SUFDSSxXQUFBO0VBRFY7O0VBR007SUFFSSxjQUFBO0VBRFY7O0VBR007SUFFSyxZQUFBO0VBRFg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICBuYXZ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEJhZFNjcmlwdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA2LCAxMDUsIDEwMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2IHVse1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICAvL2NvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgLy9jb2xvcjpibGFjaztcclxuICAgICAgICAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW0tc3BhY2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgLm5hdmlnYXRpb257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIG5hdntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogQmFkU2NyaXB0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA2LCAxMDUsIDEwMik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmF2IHVse1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgLy9jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjAwLDIwMCwyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAvL2NvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map