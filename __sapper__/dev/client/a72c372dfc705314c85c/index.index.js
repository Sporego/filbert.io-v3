(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src\routes\index.svelte generated by Svelte v3.23.2 */


const file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let t5;
	let p;
	let strong;
	let t6;

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Great success!");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			figure = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("figure");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			figcaption = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("figcaption");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Have fun with Sapper!");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			strong = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("strong");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-oh6yg0\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Great success!");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			figure = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "FIGURE", {});
			var figure_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(figure);
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(figure_nodes, "IMG", { alt: true, src: true });
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(figure_nodes);
			figcaption = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(figcaption);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(figcaption_nodes, "Have fun with Sapper!");
			figcaption_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			figure_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			strong = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p_nodes, "STRONG", {});
			var strong_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(strong);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 5, 0, 71);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "alt", "Success Kid");
			if (img.src !== (img_src_value = "successkid.jpg")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(img, "src", img_src_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img, file, 8, 1, 106);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(figcaption, file, 9, 1, 152);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(figure, file, 7, 0, 96);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(strong, file, 12, 3, 213);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 12, 0, 210);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, h1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, figure, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(figure, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(figure, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(figure, figcaption);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(figcaption, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, strong);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(strong, t6);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(h1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t2);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(figure);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t5);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Routes", $$slots, []);
	return [];
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhNzJjMzcyZGZjNzA1MzE0Yzg1Yy9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9