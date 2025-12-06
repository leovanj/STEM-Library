(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// File: components/Sidebar.jsx
// 1. 🛑 FIX: Add the 'use client' directive to make this an interactive Client Component.
__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // 💡 OPTIONAL: You can use state for more complex interactivity
'use client';
;
;
;
// Simple navigation links based on your planned structure
const navItems = [
    {
        name: 'Library Home',
        href: '/'
    },
    {
        name: 'Mathematics',
        href: '/math',
        sub: [
            {
                name: 'Algebra Basics',
                href: '/math/algebra'
            },
            {
                name: 'Counting & Probability',
                href: '/math/counting'
            }
        ]
    },
    {
        name: 'Biology',
        href: '/bio',
        sub: [
            {
                name: 'Marine Biology',
                href: '/bio/marine'
            },
            {
                name: 'Parts of a Cell',
                href: '/bio/ptc'
            }
        ]
    },
    {
        name: 'Physics',
        href: '/physics',
        sub: [
            {
                name: 'Mechanics: Energy',
                href: '/physics/energy'
            },
            {
                name: 'Electromagnetism',
                href: '/physics/em'
            }
        ]
    },
    {
        name: 'Contest Hub',
        href: '/contests'
    },
    {
        name: 'Past Experiments',
        href: '/experiments'
    },
    {
        name: 'About & Vetting',
        href: '/about'
    }
];
function Sidebar() {
    return(// 'sidebar' is the class defined in app/globals.css
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sidebar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '0 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            },
            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "nav-link",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/Sidebar.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        item.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub-links",
                            children: item.sub.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: subItem.href,
                                    style: {
                                        display: 'block',
                                        color: '#6b7280',
                                        textDecoration: 'none',
                                        transition: 'color 0.15s ease'
                                    },
                                    // These event handlers are now valid because the component is a Client Component.
                                    onMouseEnter: (e)=>e.currentTarget.style.color = '#3b82f6',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = '#6b7280',
                                    children: subItem.name
                                }, subItem.name, false, {
                                    fileName: "[project]/app/components/Sidebar.jsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Sidebar.jsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/app/components/Sidebar.jsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/Sidebar.jsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Sidebar.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, this));
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_Sidebar_jsx_80224b5d._.js.map