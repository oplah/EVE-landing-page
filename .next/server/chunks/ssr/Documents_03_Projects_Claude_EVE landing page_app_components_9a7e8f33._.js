module.exports = [
"[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Navigation() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        {
            label: "Features",
            href: "#features"
        },
        {
            label: "How It Works",
            href: "#about"
        },
        {
            label: "FAQ",
            href: "#faq"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-black/5" : "bg-transparent"}`,
        role: "navigation",
        "aria-label": "Main navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "flex items-center",
                        "aria-label": "EVE by Mindvalley home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/eve-logo.svg",
                            alt: "EVE by Mindvalley",
                            width: 76,
                            height: 32,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: navLinks.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: "body-small font-medium text-gray-500 hover:text-[#1A1A1A] transition-colors duration-200",
                                children: label
                            }, label, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#get-started",
                            className: "btn-primary px-5 py-2.5 rounded-full text-sm font-semibold",
                            children: "Try EVE Free"
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "md:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-black/5 transition-colors",
                        "aria-label": "Toggle mobile menu",
                        "aria-expanded": mobileOpen,
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-5 space-y-4 shadow-xl",
                children: [
                    navLinks.map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            onClick: ()=>setMobileOpen(false),
                            className: "block body-small font-medium text-gray-600 hover:text-[#1A1A1A] transition-colors",
                            children: label
                        }, label, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#get-started",
                        onClick: ()=>setMobileOpen(false),
                        className: "btn-primary block w-full text-center px-5 py-3 rounded-full text-sm font-semibold mt-2",
                        children: "Try EVE Free"
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/Navigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const INITIAL_MESSAGES = [
    {
        id: "1",
        role: "eve",
        content: "Hi! I'm EVE, your personal growth companion. I know your learning history, your goals, and what moves you. What would you like to explore today?"
    }
];
const QUICK_REPLIES = [
    {
        label: "Help me manage stress",
        key: "stress"
    },
    {
        label: "Suggest a morning routine",
        key: "morning"
    },
    {
        label: "What should I learn today?",
        key: "learn"
    }
];
const EVE_RESPONSES = {
    stress: "Managing stress is one of the most transformational skills you can develop. Based on your journey, I'd recommend starting with Vishen Lakhiani's 6 Phase Meditation — it's one of the most effective tools in our library. Just 20 minutes a day has been shown to reduce cortisol by up to 40%. Want me to add it to your path today?",
    morning: "Let's build your perfect morning together! Given your current programs, here's what I'd suggest: Begin with 12 minutes of Alpha Level meditation, followed by journaling using our guided prompts, then 15 minutes from your chosen program. This gentle ritual sets a powerful intention for the day. Shall I schedule your first session?",
    learn: "Based on your progress and where you left off, today is perfect for the next lesson in Jim Kwik's Superbrain — you were exploring memory palace techniques. I also noticed you bookmarked a lesson on habit formation by B.J. Fogg. Which feels more energizing right now?",
    default: "That's a wonderful area to explore! Let me draw from your personal context and Mindvalley's vast library to create something meaningful just for you. I think I know exactly the right path to suggest — would you like me to curate it?"
};
function EveAvatar({ size = "sm" }) {
    const dim = size === "sm" ? "w-8 h-8" : "w-6 h-6";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${dim} rounded-full bg-[#0D0920] flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-500/30`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/EVE-icon.svg",
            alt: "EVE",
            width: size === "sm" ? 18 : 14,
            height: size === "sm" ? 18 : 14
        }, void 0, false, {
            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end gap-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EveAvatar, {}, void 0, false, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1A0F3A] border border-violet-900/50 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "typing-dot"
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "typing-dot"
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "typing-dot"
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function ChatFeature() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_MESSAGES);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [usedReplies, setUsedReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        isTyping
    ]);
    const sendMessage = (content, key)=>{
        if (!content.trim() || isTyping) return;
        const userMsg = {
            id: Date.now().toString(),
            role: "user",
            content: content.trim()
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInputValue("");
        if (key) setUsedReplies((prev)=>new Set([
                ...prev,
                key
            ]));
        setIsTyping(true);
        const responseKey = key ?? "default";
        const response = EVE_RESPONSES[responseKey] ?? EVE_RESPONSES.default;
        setTimeout(()=>{
            setIsTyping(false);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: (Date.now() + 1).toString(),
                        role: "eve",
                        content: response
                    }
                ]);
        }, 1600);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendMessage(inputValue);
    };
    const availableReplies = QUICK_REPLIES.filter((r)=>!usedReplies.has(r.key));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "chat-feature",
        className: "relative py-24 md:py-32 overflow-hidden",
        style: {
            background: "linear-gradient(135deg, #202548 0%, #454468 100%)"
        },
        "aria-label": "Conversational AI feature",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-900/15 blur-[80px]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-violet-900/30",
                                    style: {
                                        background: "#0F0A20"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 px-5 py-4 border-b border-white/6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EveAvatar, {
                                                    size: "sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-semibold text-sm",
                                                            children: "EVE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] text-white/40",
                                                                    children: "Online · Your personal guide"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-auto flex gap-1.5",
                                                    "aria-hidden": "true",
                                                    children: [
                                                        "bg-red-500/60",
                                                        "bg-yellow-500/60",
                                                        "bg-green-500/60"
                                                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-2.5 h-2.5 rounded-full ${c}`
                                                        }, i, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-72 overflow-y-auto px-5 py-5 space-y-4 scroll-smooth",
                                            role: "log",
                                            "aria-live": "polite",
                                            "aria-label": "Chat messages",
                                            children: [
                                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`,
                                                        children: [
                                                            msg.role === "eve" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EveAvatar, {}, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 44
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "eve" ? "bg-[#1A0F3A] border border-violet-900/50 text-white/85 rounded-bl-sm" : "bg-gradient-to-br from-violet-600 to-purple-700 text-white rounded-br-sm"}`,
                                                                children: msg.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, msg.id, true, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)),
                                                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingIndicator, {}, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: messagesEndRef
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        availableReplies.length > 0 && !isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 pb-3 flex flex-wrap gap-2",
                                            children: availableReplies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>sendMessage(reply.label, reply.key),
                                                    className: "text-xs px-3 py-1.5 rounded-full border border-violet-500/30 text-violet-300 hover:bg-violet-500/15 hover:border-violet-400/50 transition-all duration-200 font-medium",
                                                    children: reply.label
                                                }, reply.key, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "px-5 pb-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 bg-white/6 border border-white/8 rounded-2xl px-4 py-3 focus-within:border-violet-500/50 focus-within:bg-white/8 transition-all duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: inputRef,
                                                        value: inputValue,
                                                        onChange: (e)=>setInputValue(e.target.value),
                                                        placeholder: "Ask EVE anything…",
                                                        className: "flex-1 bg-transparent text-sm text-white/80 placeholder:text-white/25 outline-none min-w-0",
                                                        "aria-label": "Message input",
                                                        disabled: isTyping
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: !inputValue.trim() || isTyping,
                                                        className: "w-8 h-8 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",
                                                        style: {
                                                            background: "linear-gradient(135deg, #9B37F2, #7A12D4)"
                                                        },
                                                        "aria-label": "Send message",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3.5 h-3.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2.5,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-white/30 text-xs mt-4",
                                    children: "✦ This is a preview. Try clicking the quick replies above."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "title-bold-3 text-white mb-6",
                                    children: [
                                        "Conversations that ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: "transform"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                            lineNumber: 219,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body text-white max-w-lg",
                                    children: "EVE engages with you like a knowledgeable friend who truly knows you. Ask anything, explore ideas, and receive guidance that's always grounded in your personal growth journey."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/ChatFeature.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoalFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const GOALS = [
    {
        id: "mindset",
        label: "Mindset and peak performance",
        emoji: "🧠",
        color: "#7C3AED",
        courses: [
            {
                title: "Superbrain",
                instructor: "Jim Kwik",
                duration: "36 lessons",
                tag: "Top rated",
                cover: "/cover-superbrain.jpg"
            },
            {
                title: "Be Extraordinary",
                instructor: "Vishen Lakhiani",
                duration: "42 lessons",
                tag: "Best seller",
                cover: "/cover-beextraordinary.jpg"
            },
            {
                title: "10x Fitness Quest",
                instructor: "Dr. Michael Roizen",
                duration: "24 lessons",
                tag: "New",
                cover: "/cover-10x.jpg"
            }
        ]
    },
    {
        id: "health",
        label: "Health and vitality",
        emoji: "💪",
        color: "#059669",
        courses: [
            {
                title: "Wildfit",
                instructor: "Eric Edmeades",
                duration: "90 days",
                tag: "Life-changing",
                cover: "/cover-wildfit.jpg"
            },
            {
                title: "10x Fitness Quest",
                instructor: "Dr. Michael Roizen",
                duration: "24 lessons",
                tag: "Top rated",
                cover: "/cover-10x.jpg"
            },
            {
                title: "Total Self Confidence",
                instructor: "Paul McKenna",
                duration: "30 lessons",
                tag: "Popular",
                cover: "/cover-totalselfconfidence.jpg"
            }
        ]
    },
    {
        id: "relationships",
        label: "Love and relationships",
        emoji: "❤️",
        color: "#E11D48",
        courses: [
            {
                title: "Calling in the One",
                instructor: "Katherine Woodward Thomas",
                duration: "49 lessons",
                tag: "Best seller",
                cover: "/cover-callingintheone.jpg"
            },
            {
                title: "Quantum Love",
                instructor: "Dr. Laura Berman",
                duration: "12 lessons",
                tag: "Powerful",
                cover: "/cover-quantumlove.jpg"
            },
            {
                title: "Total Self Confidence",
                instructor: "Paul McKenna",
                duration: "30 lessons",
                tag: "Top rated",
                cover: "/cover-totalselfconfidence.jpg"
            }
        ]
    },
    {
        id: "career",
        label: "Career and success",
        emoji: "💼",
        color: "#2563EB",
        courses: [
            {
                title: "Be Extraordinary",
                instructor: "Vishen Lakhiani",
                duration: "42 lessons",
                tag: "Best seller",
                cover: "/cover-beextraordinary.jpg"
            },
            {
                title: "Superbrain",
                instructor: "Jim Kwik",
                duration: "36 lessons",
                tag: "Top rated",
                cover: "/cover-superbrain.jpg"
            },
            {
                title: "Manifesting",
                instructor: "Natalie Ledwell",
                duration: "28 lessons",
                tag: "Popular",
                cover: "/cover-manifesting.jpg"
            }
        ]
    },
    {
        id: "spirituality",
        label: "Spirituality and inner peace",
        emoji: "🌸",
        color: "#D97706",
        courses: [
            {
                title: "Chakra Healing",
                instructor: "Anodea Judith",
                duration: "30 lessons",
                tag: "Best seller",
                cover: "/cover-chakra.jpg"
            },
            {
                title: "Manifesting",
                instructor: "Natalie Ledwell",
                duration: "28 lessons",
                tag: "Popular",
                cover: "/cover-manifesting.jpg"
            },
            {
                title: "Calling in the One",
                instructor: "Katherine Woodward Thomas",
                duration: "49 lessons",
                tag: "Classic",
                cover: "/cover-callingintheone.jpg"
            }
        ]
    },
    {
        id: "creativity",
        label: "Creativity and expression",
        emoji: "🎨",
        color: "#7C3AED",
        courses: [
            {
                title: "Be Extraordinary",
                instructor: "Vishen Lakhiani",
                duration: "42 lessons",
                tag: "Best seller",
                cover: "/cover-beextraordinary.jpg"
            },
            {
                title: "Manifesting",
                instructor: "Natalie Ledwell",
                duration: "28 lessons",
                tag: "Popular",
                cover: "/cover-manifesting.jpg"
            },
            {
                title: "Chakra Healing",
                instructor: "Anodea Judith",
                duration: "30 lessons",
                tag: "Classic",
                cover: "/cover-chakra.jpg"
            }
        ]
    }
];
function GoalFeature() {
    const [selectedGoal, setSelectedGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPath, setShowPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGoalSelect = (id)=>{
        if (selectedGoal === id) {
            setSelectedGoal(null);
            setShowPath(false);
            return;
        }
        setSelectedGoal(id);
        setShowPath(false);
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            setShowPath(true);
        }, 600);
    };
    const selected = GOALS.find((g)=>g.id === selectedGoal);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "goal-feature",
        className: "bg-white py-24 md:py-32 overflow-hidden",
        "aria-label": "Goal AI feature",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 lg:gap-20 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:sticky lg:top-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "title-bold-3 text-[#1A1A1A] mb-6",
                                children: "Set goals. Get recommendations."
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body text-gray-500 max-w-lg",
                                children: "Tell EVE what you want to achieve — or what's holding you back. She'll curate a personalised learning path from Mindvalley's world-class library, designed around your goals, challenges, and pace."
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 mb-5 p-4 bg-[#F0F0F8] rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/EVE-icon.svg",
                                        alt: "EVE",
                                        width: 24,
                                        height: 24,
                                        className: "flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "body-small font-semibold text-[#1A1A1A] leading-relaxed",
                                        children: "What area of life would you most like to transform? Select one below — I'll build your personalised learning path."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2.5 mb-5",
                                children: GOALS.map((goal)=>{
                                    const isSelected = selectedGoal === goal.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleGoalSelect(goal.id),
                                        className: "text-left p-3.5 rounded-2xl border-2 transition-all duration-200 active:scale-95 focus:outline-none hover:-translate-y-0.5 hover:shadow-md",
                                        style: {
                                            borderColor: isSelected ? goal.color : "#E5E7EB",
                                            background: isSelected ? `${goal.color}12` : "white"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (!isSelected) e.currentTarget.style.background = "rgba(86,147,246,0.06)";
                                        },
                                        onMouseLeave: (e)=>{
                                            if (!isSelected) e.currentTarget.style.background = "white";
                                        },
                                        "aria-pressed": isSelected,
                                        "aria-label": `Select goal: ${goal.label}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl mb-2 block",
                                                children: goal.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-[#1A1A1A] leading-snug",
                                                children: goal.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, goal.id, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-gray-100 overflow-hidden",
                                style: {
                                    background: "#F7F7F9"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-b border-gray-200/80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                                            children: "Your recommendations"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    !selectedGoal && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-8 text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 mb-2 opacity-40",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Select a goal above to see your path"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1.5 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "typing-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "typing-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "typing-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: "EVE is curating your path…"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    showPath && selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-scale-in",
                                        children: [
                                            selected.courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 last:border-b-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 rounded-xl overflow-hidden bg-gray-100",
                                                            style: {
                                                                width: 100,
                                                                height: 56
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: course.cover,
                                                                alt: course.title,
                                                                width: 100,
                                                                height: 56,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-[#1A1A1A] leading-snug",
                                                                    children: course.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 mt-0.5",
                                                                    children: [
                                                                        course.instructor,
                                                                        " · ",
                                                                        course.duration
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 flex-shrink-0 whitespace-nowrap",
                                                            children: course.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, course.title, true, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-center py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90",
                                                    style: {
                                                        background: "linear-gradient(135deg, #9B37F2, #7A12D4)"
                                                    },
                                                    children: "See all recommendations"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/GoalFeature.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearningFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const QUIZ = {
    question: "According to habit science, what is the average number of days it takes to form a new habit?",
    options: [
        {
            id: "a",
            text: "21 days",
            correct: false
        },
        {
            id: "b",
            text: "66 days on average",
            correct: true
        },
        {
            id: "c",
            text: "Exactly 30 days",
            correct: false
        },
        {
            id: "d",
            text: "It's different for everyone — there's no fixed number",
            correct: false
        }
    ],
    explanation: "Research by Dr. Phillippa Lally at University College London found habits take anywhere from 18 to 254 days to form, with 66 days being the average. The popular '21-day myth' was misinterpreted from early plastic surgery observations."
};
const SUMMARY_POINTS = [
    "Small 1% improvements compound into extraordinary results — the math of marginal gains.",
    "Your identity shapes your habits more than your goals do. \"I am a reader\" vs. \"I want to read more.\"",
    "Environment design beats willpower every time. Make good habits obvious and easy.",
    "The 2-minute rule: shrink any habit to its smallest possible version to start."
];
const APPLY_ITEMS = [
    {
        time: "Morning",
        action: "Choose one micro-habit and commit to 2 minutes only",
        icon: "🌅"
    },
    {
        time: "Afternoon",
        action: "Redesign your environment to make your habit unavoidable",
        icon: "🏡"
    },
    {
        time: "Evening",
        action: "Track your streak and note one thing you noticed about yourself",
        icon: "📓"
    },
    {
        time: "Weekly",
        action: "Review with EVE — she'll adjust your path based on what's working",
        icon: "✦"
    }
];
function LearningFeature() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("quiz");
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showExplanation, setShowExplanation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAnswer = (id)=>{
        if (selectedAnswer) return;
        setSelectedAnswer(id);
        setTimeout(()=>setShowExplanation(true), 500);
    };
    const resetQuiz = ()=>{
        setSelectedAnswer(null);
        setShowExplanation(false);
    };
    const handleTabChange = (tab)=>{
        setActiveTab(tab);
        if (tab !== "quiz") {
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };
    const tabs = [
        {
            id: "quiz",
            label: "Quiz Me",
            icon: "🧩"
        },
        {
            id: "summary",
            label: "Quick Summary",
            icon: "📖"
        },
        {
            id: "apply",
            label: "Apply It",
            icon: "⚡"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "learning-feature",
        className: "py-24 md:py-32 overflow-hidden",
        style: {
            background: "linear-gradient(180deg, #DBE9FE 0%, #E5E6FA 45%, #FAFBFF 75%, #FFFFFF 100%)"
        },
        "aria-label": "Learning Assistant feature",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 lg:gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 p-1 bg-white/60 rounded-2xl border border-violet-100 backdrop-blur-sm mb-5 shadow-sm",
                                children: tabs.map(({ id, label, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTabChange(id),
                                        className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === id ? "text-white shadow-md" : "text-gray-500 hover:text-[#1A1A1A]"}`,
                                        style: activeTab === id ? {
                                            background: "linear-gradient(135deg, #9B37F2 0%, #7A12D4 100%)",
                                            boxShadow: "0 4px 12px rgba(122,18,212,0.3)"
                                        } : {},
                                        "aria-selected": activeTab === id,
                                        role: "tab",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: icon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl border border-violet-100/80 shadow-xl shadow-violet-100/50 overflow-hidden",
                                children: [
                                    activeTab === "quiz" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        role: "tabpanel",
                                        "aria-label": "Quiz mode",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "8",
                                                            height: "8",
                                                            viewBox: "0 0 10 10",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 0.5L6.12 3.88H9.51L6.7 5.99L7.82 9.37L5 7.26L2.18 9.37L3.3 5.99L0.49 3.88H3.88L5 0.5Z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-violet-600 uppercase tracking-wider",
                                                        children: "Testing your understanding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-violet-50 rounded-2xl p-4 mb-5 border border-violet-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-violet-500 font-semibold uppercase tracking-wider mb-1",
                                                        children: "From: Atomic Habits · James Clear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base font-semibold text-[#1A1A1A] leading-snug",
                                                        children: QUIZ.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2.5 mb-4",
                                                role: "radiogroup",
                                                "aria-label": "Answer options",
                                                children: QUIZ.options.map((opt)=>{
                                                    const isSelected = selectedAnswer === opt.id;
                                                    const isAnswered = !!selectedAnswer;
                                                    const isCorrect = opt.correct;
                                                    let style = "border-gray-200 bg-white text-[#1A1A1A] hover:border-violet-300 hover:bg-violet-50";
                                                    if (isAnswered && isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-900";
                                                    else if (isAnswered && isSelected && !isCorrect) style = "border-red-400 bg-red-50 text-red-900";
                                                    else if (isAnswered) style = "border-gray-100 bg-gray-50 text-gray-400 opacity-60";
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleAnswer(opt.id),
                                                        disabled: isAnswered,
                                                        className: `w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 flex items-center gap-3 ${style}`,
                                                        role: "radio",
                                                        "aria-checked": isSelected,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[10px] font-bold border-current",
                                                                children: opt.id.toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 27
                                                            }, this),
                                                            opt.text,
                                                            isAnswered && isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 ml-auto text-emerald-500",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2.5,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M4.5 12.75l6 6 9-13.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, opt.id, true, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            showExplanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-violet-50 rounded-xl p-4 border border-violet-200 animate-slide-up-fade",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-violet-600 mb-1.5",
                                                        children: "EVE explains:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[#1A1A1A] leading-relaxed",
                                                        children: QUIZ.explanation
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: resetQuiz,
                                                        className: "mt-3 text-xs font-semibold text-violet-600 hover:text-violet-700 underline underline-offset-2",
                                                        children: "Try again →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    activeTab === "summary" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        role: "tabpanel",
                                        "aria-label": "Quick summary mode",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "8",
                                                            height: "8",
                                                            viewBox: "0 0 10 10",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 0.5L6.12 3.88H9.51L6.7 5.99L7.82 9.37L5 7.26L2.18 9.37L3.3 5.99L0.49 3.88H3.88L5 0.5Z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-violet-600 uppercase tracking-wider",
                                                        children: "EVE's key insights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-violet-50 rounded-2xl p-4 mb-5 border border-violet-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-violet-500 font-semibold uppercase tracking-wider mb-0.5",
                                                        children: "Lesson"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-[#1A1A1A]",
                                                        children: "The Power of Atomic Habits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: "James Clear · Mindvalley Quest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 mb-5",
                                                children: SUMMARY_POINTS.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mt-0.5",
                                                                children: i + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-[#1A1A1A] leading-relaxed",
                                                                children: point
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-amber-50 rounded-xl p-4 border border-amber-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-amber-700 mb-1",
                                                        children: "💡 EVE's Insight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-amber-900 leading-relaxed",
                                                        children: "Based on your current patterns, your identity shift from “someone trying to change” to “someone who naturally does this” is the breakthrough that will unlock everything else."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this),
                                    activeTab === "apply" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        role: "tabpanel",
                                        "aria-label": "Real-world application mode",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "8",
                                                            height: "8",
                                                            viewBox: "0 0 10 10",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 0.5L6.12 3.88H9.51L6.7 5.99L7.82 9.37L5 7.26L2.18 9.37L3.3 5.99L0.49 3.88H3.88L5 0.5Z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-violet-600 uppercase tracking-wider",
                                                        children: "Your daily action plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-5 leading-relaxed",
                                                children: [
                                                    "EVE translated today's lesson into actionable steps designed for ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-[#1A1A1A]",
                                                        children: "your schedule and goals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 91
                                                    }, this),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 mb-5",
                                                children: APPLY_ITEMS.map(({ time, action, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4 p-3.5 rounded-xl bg-gray-50 border border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl flex-shrink-0",
                                                                children: icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-bold text-violet-600 uppercase tracking-wider mb-0.5",
                                                                        children: time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-[#1A1A1A] leading-relaxed",
                                                                        children: action
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, time, true, {
                                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#get-started",
                                                className: "btn-primary block text-center py-3 rounded-xl text-sm font-semibold",
                                                children: "Add to my daily plan ✦"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "title-bold-3 text-[#1A1A1A] mb-6",
                                children: [
                                    "Learn deeper,",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#1A1A1A]",
                                        children: "apply faster"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body text-gray-500 max-w-lg",
                                children: "EVE doesn't just teach — she helps you truly understand, remember, and use what you're learning. With three powerful modes, she meets you wherever you are in your learning journey."
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/LearningFeature.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/03_Projects/Claude/EVE landing page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const FAQ_ITEMS = [
    {
        question: "Is EVE free to use?",
        answer: "EVE is available exclusively to Mindvalley members. With a Mindvalley membership, you get full access to EVE alongside 100+ transformational programs, live events, and a global community of like-minded learners. Check out our membership plans to find the right fit for you."
    },
    {
        question: "Does EVE remember my conversations?",
        answer: "Yes! EVE maintains a rich memory of your conversations, learning progress, and personal context. Every interaction makes her more attuned to you — your preferences, challenges, and goals. Over time, her guidance becomes increasingly personalised and insightful."
    },
    {
        question: "What makes EVE different from ChatGPT or other AI assistants?",
        answer: "EVE is purpose-built for personal growth and is deeply integrated with Mindvalley's 20+ years of transformational content. She doesn't just answer questions — she knows your learning journey, understands your goals, and actively guides you toward becoming the best version of yourself. She's a growth companion, not a general-purpose assistant."
    },
    {
        question: "Is my data safe and private with EVE?",
        answer: "Absolutely. Your privacy is our highest priority. All conversations are encrypted end-to-end, and we never share your data with third parties. For extra privacy on sensitive topics, you can use EVE's Incognito Mode — a completely private chat space where conversations aren't stored."
    },
    {
        question: "Can I use EVE on any device?",
        answer: "EVE is available on iOS and Android through the Mindvalley app, and accessible on the web through your Mindvalley account. Your progress, preferences, and conversation history sync seamlessly across all your devices."
    },
    {
        question: "Can I speak to EVE instead of typing?",
        answer: "Yes! EVE supports voice input so you can have natural, hands-free conversations. Just like talking to a knowledgeable friend — speak your thoughts, questions, or goals, and EVE will respond. It's especially useful when you're on the go."
    },
    {
        question: "What languages does EVE support?",
        answer: "EVE currently delivers the best experience in English. We're actively expanding language support to serve our global community, with more languages coming soon. Stay tuned for announcements in the Mindvalley app."
    }
];
function FAQ() {
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set([
        0
    ]));
    const toggle = (index)=>{
        setOpenItems((prev)=>{
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-24 md:py-32",
        style: {
            background: "linear-gradient(135deg, #DBE9FE 0%, #E5E6FA 100%)"
        },
        "aria-label": "Frequently asked questions",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "title-bold-3 text-[#1A1A1A] mb-4",
                            children: [
                                "Everything you",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#1A1A1A]",
                                    children: "want to know"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-large text-gray-500",
                            children: "Can't find your answer? Ask EVE directly — she's rather good at answering questions."
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    role: "list",
                    children: FAQ_ITEMS.map((item, index)=>{
                        const isOpen = openItems.has(index);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? "bg-white border-violet-200 shadow-sm shadow-violet-100" : "bg-white border-gray-200 hover:border-gray-300"}`,
                            role: "listitem",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggle(index),
                                    className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
                                    "aria-expanded": isOpen,
                                    "aria-controls": `faq-answer-${index}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "body font-semibold text-[#1A1A1A]",
                                            children: item.question
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45" : "bg-gray-100 rotate-0"}`,
                                            style: isOpen ? {
                                                background: "linear-gradient(135deg, #5693F6, #8A87EF)"
                                            } : {},
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: `w-3.5 h-3.5 transition-colors duration-200 ${isOpen ? "text-white" : "text-gray-500"}`,
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M12 4.5v15m7.5-7.5h-15"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: `faq-answer-${index}`,
                                    role: "region",
                                    "aria-hidden": !isOpen,
                                    className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-violet-100 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "body text-gray-600",
                                                children: item.answer
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                                lineNumber: 136,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 87,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 text-center p-8 rounded-3xl bg-white border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                            style: {
                                background: "linear-gradient(135deg, #5693F6, #8A87EF)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 1.5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "title-bold-5 text-[#1A1A1A] mb-2",
                            children: "Still have questions?"
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-small text-gray-500 mb-5",
                            children: "EVE is live and ready to answer anything — or reach our support team."
                        }, void 0, false, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#get-started",
                                    className: "btn-primary px-6 py-2.5 rounded-full text-sm font-semibold",
                                    children: "Ask EVE directly"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$03_Projects$2f$Claude$2f$EVE__landing__page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://support.mindvalley.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-6 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-[#1A1A1A] transition-colors",
                                    children: "Visit support center"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/03_Projects/Claude/EVE landing page/app/components/FAQ.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_03_Projects_Claude_EVE%20landing%20page_app_components_9a7e8f33._.js.map