(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 2325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2770)), "/Users/projects/kanban/kanban-board-ujjwal/app/page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "/Users/projects/kanban/kanban-board-ujjwal/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["/Users/projects/kanban/kanban-board-ujjwal/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 2913:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4444))

/***/ }),

/***/ 1376:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 2398:
/***/ (() => {



/***/ }),

/***/ 4444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_TaskList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var dist = __webpack_require__(7757);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-icons/dist/react-icons.cjs.production.min.js
var react_icons_cjs_production_min = __webpack_require__(9130);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(1971);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(9610);
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}

;// CONCATENATED MODULE: ./components/ui/Badge.tsx




const badgeVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            error: "border-transparent bg-error-background text-error-foreground shadow",
            warning: "border-transparent bg-warning-background text-warning-foreground shadow",
            success: "border-transparent bg-success-background text-success-foreground shadow",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cn(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var react_slot_dist = __webpack_require__(1085);
;// CONCATENATED MODULE: ./components/ui/Button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-blue-500 hover:bg-blue-700 text-white font-bold shadow",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react_.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? react_slot_dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs + 1 modules
var react_dialog_dist = __webpack_require__(2061);
;// CONCATENATED MODULE: ./components/ui/Dialog.tsx
/* __next_internal_client_entry_do_not_use__ Dialog,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = react_dialog_dist/* Root */.fC;
const DialogTrigger = react_dialog_dist/* Trigger */.xz;
const DialogPortal = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Portal */.h_, {
        className: cn(className),
        ...props
    });
DialogPortal.displayName = react_dialog_dist/* Portal */.h_.displayName;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Overlay */.aV, {
        ref: ref,
        className: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = react_dialog_dist/* Overlay */.aV.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_dist/* Content */.VY, {
                ref: ref,
                className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* Cross2Icon */.Pxu, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = react_dialog_dist/* Content */.VY.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Title */.Dx, {
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = react_dialog_dist/* Title */.Dx.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_dialog_dist/* Description */.dk, {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = react_dialog_dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./components/ui/Input.tsx



const Input = /*#__PURE__*/ react_.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var react_label_dist = __webpack_require__(3618);
;// CONCATENATED MODULE: ./components/ui/Label.tsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority_dist/* cva */.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_label_dist/* Root */.f, {
        ref: ref,
        className: cn(labelVariants(), className),
        ...props
    }));
Label.displayName = react_label_dist/* Root */.f.displayName;


;// CONCATENATED MODULE: ./components/ui/Textarea.tsx



const Textarea = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
        className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-select/dist/index.mjs + 13 modules
var react_select_dist = __webpack_require__(7045);
;// CONCATENATED MODULE: ./components/ui/Select.tsx
/* __next_internal_client_entry_do_not_use__ Select,SelectGroup,SelectValue,SelectTrigger,SelectContent,SelectLabel,SelectItem,SelectSeparator auto */ 




const Select = react_select_dist/* Root */.fC;
const SelectGroup = react_select_dist/* Group */.ZA;
const SelectValue = react_select_dist/* Value */.B4;
const SelectTrigger = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_select_dist/* Trigger */.xz, {
        ref: ref,
        className: cn("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Icon */.JO, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* CaretSortIcon */.jnn, {
                    className: "h-4 w-4 opacity-50"
                })
            })
        ]
    }));
SelectTrigger.displayName = react_select_dist/* Trigger */.xz.displayName;
const SelectContent = /*#__PURE__*/ react_.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Portal */.h_, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Content */.VY, {
            ref: ref,
            className: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover bg-white text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Viewport */.l_, {
                className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            })
        })
    }));
SelectContent.displayName = react_select_dist/* Content */.VY.displayName;
const SelectLabel = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Label */.__, {
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }));
SelectLabel.displayName = react_select_dist/* Label */.__.displayName;
const SelectItem = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_select_dist/* Item */.ck, {
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* ItemIndicator */.wU, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* CheckIcon */.nQG, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* ItemText */.eT, {
                children: children
            })
        ]
    }));
SelectItem.displayName = react_select_dist/* Item */.ck.displayName;
const SelectSeparator = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Separator */.Z0, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
SelectSeparator.displayName = react_select_dist/* Separator */.Z0.displayName;


// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/index.js
var react_datepicker_dist = __webpack_require__(145);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(2094);
// EXTERNAL MODULE: ./node_modules/mobx-state-tree/dist/mobx-state-tree.js
var mobx_state_tree = __webpack_require__(1026);
;// CONCATENATED MODULE: ./stores/TaskStore.ts

const TaskModel = mobx_state_tree/* types */.V5.model("Task", {
    id: mobx_state_tree/* types */.V5.identifier,
    title: mobx_state_tree/* types */.V5.string,
    description: mobx_state_tree/* types */.V5.string,
    status: mobx_state_tree/* types */.V5.string,
    startDate: mobx_state_tree/* types */.V5.Date,
    users: mobx_state_tree/* types */.V5.string
});
const TaskStore = mobx_state_tree/* types */.V5.model("TaskStore", {
    tasks: mobx_state_tree/* types */.V5.optional(mobx_state_tree/* types */.V5.array(TaskModel), [])
}).actions((self)=>{
    return {
        addTask (task) {
            self.tasks.push(task);
        },
        editTask (id, editedTask) {
            const task = self.tasks.find((task)=>task.id === id);
            if (task) {
                task.title = editedTask.title;
                task.startDate = editedTask.startDate;
                task.description = editedTask.description;
                task.status = editedTask.status;
                task.users = editedTask.users;
            }
        },
        deleteTask (taskId) {
            const taskIndex = self.tasks.findIndex((task)=>task.id === taskId);
            if (taskIndex !== -1) {
                self.tasks.splice(taskIndex, 1);
            }
        }
    };
});
// Parse the tasks from local storage and create the task store
let tasksFromLocalStorage = [];
if (false) {}
let TaskStore_taskStore = TaskStore.create({
    tasks: tasksFromLocalStorage
});
// Function to update the store with the initial snapshot
function updateTaskStoreWithSnapshot(snapshot) {
    TaskStore_taskStore = TaskStore.create(snapshot);
}
// Save tasks to local storage whenever a change occurs
if (false) {}

;// CONCATENATED MODULE: ./stores/StoreProvider.tsx
/* __next_internal_client_entry_do_not_use__ StoreProvider,useStore auto */ 



const StoreContext = /*#__PURE__*/ (0,react_.createContext)({
    taskStore: TaskStore_taskStore
});
// Update the taskStore with the initial snapshot
if (false) {}
// Synchronize the store with local storage
(0,mobx_state_tree/* onSnapshot */.cf)(TaskStore_taskStore, (snapshot)=>{
    localStorage.setItem("taskStore", JSON.stringify(snapshot));
});
const StoreProvider = ({ children })=>{
    const stores = {
        taskStore
    };
    return /*#__PURE__*/ _jsx(StoreContext.Provider, {
        value: stores,
        children: children
    });
};
const useStore = ()=>(0,react_.useContext)(StoreContext);

;// CONCATENATED MODULE: ./components/EditTask.tsx












const EditTask = ({ id, title, startDate, description, status, users, open, setOpen })=>{
    const { taskStore } = useStore();
    const router = (0,navigation.useRouter)();
    const [newTitle, setNewTitle] = (0,react_.useState)(title);
    const [newDescription, setNewDescription] = (0,react_.useState)(description);
    const [newStatus, setNewStatus] = (0,react_.useState)(status);
    const [newUsers, setNewUsers] = (0,react_.useState)(users);
    //const [newstartDate, setStartDate] = useState(startDate);
    const [newstartDate, setStartDate] = (0,react_.useState)(new Date());
    const [error, setError] = (0,react_.useState)();
    const handleEditedTask = (e)=>{
        e.preventDefault();
        if (newTitle.length < 3) {
            setError("Please enter a title with at least 3 characters");
        } else if (newDescription.length < 3) {
            setError("Please enter a description with at least 3 characters");
        } else if (!newStatus) {
            setError("Please select a status for the task");
        } else if (!newUsers) {
            setError("Please select a user for the task");
        } else {
            const editedTask = {
                title: newTitle,
                startDate: newstartDate,
                description: newDescription,
                status: newStatus,
                users: newUsers
            };
            taskStore.editTask(id, editedTask);
            // Reset the input values
            setNewTitle("");
            setNewDescription("");
            setNewStatus("");
            setNewUsers("");
            setError("");
            setOpen(!open);
            router.refresh();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
        className: "sm:max-w-2xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                        className: "text-xl",
                        children: "Edit Task"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DialogDescription, {
                        children: "Edit or Update Your Task here. Click save when you are done."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleEditedTask,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "name",
                                        className: "text-left",
                                        children: "Title"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                        id: "name",
                                        value: newTitle,
                                        onChange: (e)=>setNewTitle(e.target.value),
                                        placeholder: "Title",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "date",
                                        className: "text-left",
                                        children: "Due Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker_dist/* default */.ZP, {
                                        id: "datepicker",
                                        className: "col-span-3 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                                        selected: newstartDate,
                                        onChange: (date)=>setStartDate(date)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "description",
                                        className: "text-left",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Textarea, {
                                        id: "description",
                                        rows: 5,
                                        value: newDescription,
                                        onChange: (e)=>setNewDescription(e.target.value),
                                        placeholder: "Description",
                                        className: "col-span-3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "status",
                                        className: "text-left",
                                        children: "Status"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Select, {
                                        value: newStatus,
                                        onValueChange: setNewStatus,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectTrigger, {
                                                className: "col-span-3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValue, {
                                                    placeholder: "Task Status"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectContent, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                        value: "pending",
                                                        children: "Planned"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                        value: "in_progress",
                                                        children: "Started"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                        value: "completed",
                                                        children: "Done"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-4 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                        htmlFor: "users",
                                        className: "text-left",
                                        children: "Assign User"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Select, {
                                        value: newUsers,
                                        onValueChange: setNewUsers,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectTrigger, {
                                                className: "col-span-3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValue, {
                                                    placeholder: "Assign Users"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectContent, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                        value: "User A",
                                                        children: "UserA"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                        value: "User B",
                                                        children: "UserB"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                        value: "User C",
                                                        children: "UserC"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center py-1 rounded bg-error-background text-error-foreground",
                                children: error
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DialogFooter, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            type: "submit",
                            children: "Save Changes"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_EditTask = (EditTask);

;// CONCATENATED MODULE: ./components/Task.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const Task = (0,dist.observer)(({ id, title, startDate, description, status, users })=>{
    const { taskStore } = useStore();
    const [open, setOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative bg-white p-4 rounded shadow mt-1 border-b border-slate-300 max-w-2xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-lg font-medium",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-1 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dialog, {
                                open: open,
                                onOpenChange: setOpen,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(DialogTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                            variant: "ghost",
                                            size: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* Pencil2Icon */.oqE, {
                                                className: "w-5 h-5 text-blue-500"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_EditTask, {
                                        id: id,
                                        title: title,
                                        startDate: startDate,
                                        description: description,
                                        status: status,
                                        users: users,
                                        open: open,
                                        setOpen: setOpen
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>taskStore.deleteTask(id),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* TrashIcon */.XHJ, {
                                    className: "w-5 h-5 text-red-500"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                className: "my-2",
                variant: status === "pending" ? "error" : status === "in_progress" ? "warning" : "success",
                children: status === "pending" ? "Pending" : status === "in_progress" ? "In Progress" : "Completed"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "Due Date:",
                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker_dist/* default */.ZP, {
                                selected: startDate,
                                onChange: Date,
                                readOnly: true,
                                onFocus: (e)=>e.target.blur()
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Badge, {
                            className: "my-3",
                            variant: "success",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_icons_cjs_production_min/* FaceIcon */.TkB, {
                                    className: "w-4 h-4 text-blue-500"
                                }),
                                " ",
                                users
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 text-sm text-slate-600",
                children: description
            })
        ]
    });
});
/* harmony default export */ const components_Task = (Task);

;// CONCATENATED MODULE: ./components/AddTask.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











const AddTask = (0,dist.observer)(()=>{
    const { taskStore } = useStore();
    const [open, setOpen] = (0,react_.useState)(false);
    const [title, setTitle] = (0,react_.useState)("");
    const [description, setDescription] = (0,react_.useState)("");
    const [status, setStatus] = (0,react_.useState)();
    const [users, setUsers] = (0,react_.useState)();
    const [startDate, setStartDate] = (0,react_.useState)(new Date());
    const [error, setError] = (0,react_.useState)();
    const handleNewTask = (e)=>{
        e.preventDefault();
        if (title.length < 3) {
            setError("Please enter a title with at least 3 characters");
        } else if (description.length < 3) {
            setError("Please enter a description with at least 3 characters");
        } else if (!status) {
            setError("Please select a status for the task");
        } else if (!users) {
            setError("Please select a user for the task");
        } else {
            const newTask = {
                id: Date.now().toString(),
                title,
                description,
                status,
                startDate,
                users
            };
            taskStore.addTask(newTask);
            // Reset the input values
            setTitle("");
            //setStartDate(date)
            setDescription("");
            setStatus("");
            setUsers("");
            setError("");
            setOpen(!open);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dialog, {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogTrigger, {
                asChild: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                    variant: "default",
                    children: "Add New Task"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
                className: "sm:max-w-2xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                                className: "text-xl",
                                children: "Add Task"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DialogDescription, {
                                children: "Add a new Task to your Task Manager here. Click save when you are done."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: handleNewTask,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid gap-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-4 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: "name",
                                                className: "text-left",
                                                children: "Title"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                id: "name",
                                                value: title,
                                                onChange: (e)=>setTitle(e.target.value),
                                                placeholder: "Title",
                                                className: "col-span-3"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-4 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: "date",
                                                className: "text-left",
                                                children: "Due Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker_dist/* default */.ZP, {
                                                id: "datepicker",
                                                className: "col-span-3 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                                                showIcon: true,
                                                selected: startDate,
                                                onChange: (date)=>setStartDate(date)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-4 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: "description",
                                                className: "text-left",
                                                children: "Description"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Textarea, {
                                                id: "description",
                                                className: "col-span-3",
                                                rows: 5,
                                                value: description,
                                                onChange: (e)=>setDescription(e.target.value),
                                                placeholder: "Description"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-4 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: "status",
                                                className: "text-left",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Select, {
                                                value: status,
                                                onValueChange: setStatus,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectTrigger, {
                                                        className: "col-span-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValue, {
                                                            placeholder: "Task Status"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectContent, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                                value: "pending",
                                                                children: "Planned"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                                value: "in_progress",
                                                                children: "Started"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                                value: "completed",
                                                                children: "Done"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-4 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: "users",
                                                className: "text-left",
                                                children: "Assign User"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Select, {
                                                value: users,
                                                onValueChange: setUsers,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(SelectTrigger, {
                                                        className: "col-span-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValue, {
                                                            placeholder: "Assign Users"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectContent, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                                value: "User A",
                                                                children: "User A"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                                value: "User B",
                                                                children: "User B"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                                value: "User C",
                                                                children: "User C"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-center py-1 rounded bg-error-background text-error-foreground",
                                        children: error
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DialogFooter, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                    type: "submit",
                                    children: "Save Task"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const components_AddTask = (AddTask);

;// CONCATENATED MODULE: ./components/TaskList.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const TaskList = (0,dist.observer)(()=>{
    const { taskStore } = useStore();
    let filteredTasksp;
    let filteredTasksi;
    let filteredTasksc;
    filteredTasksp = taskStore.tasks.filter((task)=>task.status === "pending");
    filteredTasksi = taskStore.tasks.filter((task)=>task.status === "in_progress");
    filteredTasksc = taskStore.tasks.filter((task)=>task.status === "completed");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-3 px-5 py-5 max-h-[600px] overflow-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "border px-5 py-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-center py-3",
                            children: "Planned"
                        }),
                        filteredTasksp.map((task)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Task, {
                                id: task.id,
                                title: task.title,
                                startDate: task.startDate,
                                description: task.description,
                                status: task.status,
                                users: task.users
                            }, task.id)),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center py-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_AddTask, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "border px-5 py-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-center py-3",
                            children: "Started"
                        }),
                        filteredTasksi.map((task)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Task, {
                                id: task.id,
                                title: task.title,
                                startDate: task.startDate,
                                description: task.description,
                                status: task.status,
                                users: task.users
                            }, task.id)),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center py-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_AddTask, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "border px-5 py-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-center py-3",
                            children: "Done"
                        }),
                        filteredTasksc.map((task)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Task, {
                                id: task.id,
                                title: task.title,
                                startDate: task.startDate,
                                description: task.description,
                                status: task.status,
                                users: task.users
                            }, task.id)),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center py-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_AddTask, {})
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const components_TaskList = (TaskList);


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9160);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 2770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/TaskList.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/projects/kanban/kanban-board-ujjwal/components/TaskList.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const TaskList = (__default__);
;// CONCATENATED MODULE: ./app/page.tsx


function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24",
                children: "Welcome to Task Board"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid place-items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(TaskList, {})
            })
        ]
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,922], () => (__webpack_exec__(3641)));
module.exports = __webpack_exports__;

})();