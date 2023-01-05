"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    theme: {\n        logo: \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png\",\n        brandColor: \"#f13287\",\n        colorScheme: \"auto\"\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signOut: \"/auth/signout\",\n        error: \"/auth/error\",\n        verifyRequest: \"/auth/verify-request\",\n        newUser: \"/auth/new-user\" // New users will be directed here on first sign in (leave the property out if not of interest)\n    },\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.user.username = session.user.name.split(\" \").join(\"\").toLocaleLowerCase();\n            session.user.uid = token.sub;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUVoRCxNQUFNRSxjQUFjO0lBQ3pCLGlEQUFpRDtJQUNqREMsV0FBVztRQUNURixpRUFBY0EsQ0FBQztZQUNiRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7S0FHRDtJQUVEQyxPQUFPO1FBQ0xDLE1BQUs7UUFDTEMsWUFBWTtRQUNaQyxhQUFhO0lBQ2Y7SUFFQUMsT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxlQUFlO1FBQ2ZDLFNBQVMsaUJBQWlCLCtGQUErRjtJQUMzSDtJQUVBQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUSxFQUFFQSxRQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFDLEVBQUU7WUFDckNGLFFBQVFFLElBQUksQ0FBQ0MsUUFBUSxHQUFHSCxRQUFRRSxJQUFJLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEtBQUtDLElBQUksQ0FBQyxJQUFJQyxpQkFBaUI7WUFFL0VQLFFBQVFFLElBQUksQ0FBQ00sR0FBRyxHQUFHUCxNQUFNUSxHQUFHO1lBQzVCLE9BQU9UO1FBQ1Q7SUFDRjtBQUVGLEVBQUM7QUFJRCxpRUFBZXJCLGdEQUFRQSxDQUFDRSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICAgIFxyXG4gIF0sXHJcblxyXG4gIHRoZW1lOiB7XHJcbiAgICBsb2dvOlwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzJhL0luc3RhZ3JhbV9sb2dvLnN2Zy8xMjgwcHgtSW5zdGFncmFtX2xvZ28uc3ZnLnBuZ1wiLFxyXG4gICAgYnJhbmRDb2xvcjogJyNmMTMyODcnLFxyXG4gICAgY29sb3JTY2hlbWU6IFwiYXV0b1wiXHJcbiAgfSxcclxuICBcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcclxuICAgIHNpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JyxcclxuICAgIGVycm9yOiAnL2F1dGgvZXJyb3InLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxyXG4gICAgdmVyaWZ5UmVxdWVzdDogJy9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXHJcbiAgICBuZXdVc2VyOiAnL2F1dGgvbmV3LXVzZXInIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXHJcbiAgfSxcclxuXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXJ9KSB7XHJcbiAgICAgIHNlc3Npb24udXNlci51c2VybmFtZSA9IHNlc3Npb24udXNlci5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICBzZXNzaW9uLnVzZXIudWlkID0gdG9rZW4uc3ViO1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJ0aGVtZSIsImxvZ28iLCJicmFuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJlcnJvciIsInZlcmlmeVJlcXVlc3QiLCJuZXdVc2VyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInVzZXJuYW1lIiwibmFtZSIsInNwbGl0Iiwiam9pbiIsInRvTG9jYWxlTG93ZXJDYXNlIiwidWlkIiwic3ViIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();