module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Desktop/bunny-words-homepage/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/bunny-words-homepage/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/bunny-words-homepage/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/bunny-words-homepage/lib/data/cet4-words.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CET-4 词库数据
 * 包含CET-4核心词汇
 */ __turbopack_context__.s([
    "CET4_SECTIONS",
    ()=>CET4_SECTIONS,
    "CET4_WORDBOOK",
    ()=>CET4_WORDBOOK,
    "CET4_WORDS",
    ()=>CET4_WORDS,
    "getCET4WordById",
    ()=>getCET4WordById,
    "getCET4WordsByIds",
    ()=>getCET4WordsByIds
]);
const CET4_WORDS = [
    {
        id: 'cet4_001',
        word: 'abandon',
        phonetic: '/əˈbændən/',
        phoneticUK: '/əˈbændən/',
        translation: 'v. 放弃；遗弃；抛弃 n. 放任；狂热',
        examples: [
            {
                english: 'They had to abandon the car and walk the rest of the way.',
                chinese: '他们不得不弃车步行完成剩下的路程。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2156,
        tags: [
            '动词',
            '名词'
        ]
    },
    {
        id: 'cet4_002',
        word: 'ability',
        phonetic: '/əˈbɪləti/',
        phoneticUK: '/əˈbɪləti/',
        translation: 'n. 能力；才能；本领',
        examples: [
            {
                english: 'She has the ability to speak three languages fluently.',
                chinese: '她有流利说三种语言的能力。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 856,
        tags: [
            '名词'
        ],
        synonyms: [
            'capability',
            'capacity',
            'competence'
        ]
    },
    {
        id: 'cet4_003',
        word: 'abroad',
        phonetic: '/əˈbrɔːd/',
        phoneticUK: '/əˈbrɔːd/',
        translation: 'adv. 在国外；到国外；广为流传',
        examples: [
            {
                english: 'She went abroad to study medicine.',
                chinese: '她出国学医了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1523,
        tags: [
            '副词'
        ]
    },
    {
        id: 'cet4_004',
        word: 'absent',
        phonetic: '/ˈæbsənt/',
        phoneticUK: '/ˈæbsənt/',
        translation: 'adj. 缺席的；缺少的；心不在焉的 v. 缺席',
        examples: [
            {
                english: 'He was absent from school due to illness.',
                chinese: '他因病没来上学。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2341,
        tags: [
            '形容词',
            '动词'
        ],
        antonyms: [
            'present'
        ]
    },
    {
        id: 'cet4_005',
        word: 'absolute',
        phonetic: '/ˈæbsəluːt/',
        phoneticUK: '/ˈæbsəluːt/',
        translation: 'adj. 绝对的；完全的；专制的',
        examples: [
            {
                english: 'I have absolute confidence in her ability to lead.',
                chinese: '我对她的领导能力有绝对的信心。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1876,
        tags: [
            '形容词'
        ],
        synonyms: [
            'complete',
            'total',
            'utter'
        ]
    },
    {
        id: 'cet4_006',
        word: 'absorb',
        phonetic: '/əbˈsɔːrb/',
        phoneticUK: '/əbˈzɔːb/',
        translation: 'v. 吸收；吸引；承受；理解',
        examples: [
            {
                english: 'Plants absorb carbon dioxide from the air.',
                chinese: '植物从空气中吸收二氧化碳。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet4_007',
        word: 'abstract',
        phonetic: '/ˈæbstrækt/',
        phoneticUK: '/ˈæbstrækt/',
        translation: 'adj. 抽象的；深奥的 n. 摘要；抽象概念 v. 提取；抽象化',
        examples: [
            {
                english: 'The concept of freedom is very abstract.',
                chinese: '自由的概念非常抽象。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2567,
        tags: [
            '形容词',
            '名词',
            '动词'
        ],
        antonyms: [
            'concrete'
        ]
    },
    {
        id: 'cet4_008',
        word: 'academic',
        phonetic: '/ˌækəˈdemɪk/',
        phoneticUK: '/ˌækəˈdemɪk/',
        translation: 'adj. 学术的；理论的；学院的 n. 学者；大学教师',
        examples: [
            {
                english: 'The university is known for its high academic standards.',
                chinese: '这所大学以其高学术标准而闻名。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1432,
        tags: [
            '形容词',
            '名词'
        ]
    },
    {
        id: 'cet4_009',
        word: 'accept',
        phonetic: '/əkˈsept/',
        phoneticUK: '/əkˈsept/',
        translation: 'v. 接受；承认；同意；相信',
        examples: [
            {
                english: 'She accepted the job offer immediately.',
                chinese: '她立即接受了这份工作邀请。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 567,
        tags: [
            '动词'
        ],
        antonyms: [
            'reject',
            'refuse'
        ]
    },
    {
        id: 'cet4_010',
        word: 'access',
        phonetic: '/ˈækses/',
        phoneticUK: '/ˈækses/',
        translation: 'n. 通道；入口；接近的机会 v. 访问；存取',
        examples: [
            {
                english: 'Students need a password to access the library database.',
                chinese: '学生需要密码才能访问图书馆数据库。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1234,
        tags: [
            '名词',
            '动词'
        ]
    },
    {
        id: 'cet4_011',
        word: 'accident',
        phonetic: '/ˈæksɪdənt/',
        phoneticUK: '/ˈæksɪdənt/',
        translation: 'n. 事故；意外；偶然',
        examples: [
            {
                english: 'He was injured in a car accident last week.',
                chinese: '他上周在一场车祸中受伤了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1678,
        tags: [
            '名词'
        ]
    },
    {
        id: 'cet4_012',
        word: 'accompany',
        phonetic: '/əˈkʌmpəni/',
        phoneticUK: '/əˈkʌmpəni/',
        translation: 'v. 陪伴；伴随；为...伴奏',
        examples: [
            {
                english: 'I will accompany you to the hospital.',
                chinese: '我会陪你去医院。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2456,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet4_013',
        word: 'accomplish',
        phonetic: '/əˈkɑːmplɪʃ/',
        phoneticUK: '/əˈkʌmplɪʃ/',
        translation: 'v. 完成；实现；达到',
        examples: [
            {
                english: 'We accomplished our mission ahead of schedule.',
                chinese: '我们提前完成了任务。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2789,
        tags: [
            '动词'
        ],
        synonyms: [
            'achieve',
            'complete',
            'fulfill'
        ]
    },
    {
        id: 'cet4_014',
        word: 'accord',
        phonetic: '/əˈkɔːrd/',
        phoneticUK: '/əˈkɔːd/',
        translation: 'n. 一致；协议 v. 给予；使一致',
        examples: [
            {
                english: 'The two countries signed a peace accord.',
                chinese: '两国签署了和平协议。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 3123,
        tags: [
            '名词',
            '动词'
        ]
    },
    {
        id: 'cet4_015',
        word: 'account',
        phonetic: '/əˈkaʊnt/',
        phoneticUK: '/əˈkaʊnt/',
        translation: 'n. 账户；账目；报告；解释 v. 解释；认为',
        examples: [
            {
                english: 'Please give us an account of what happened.',
                chinese: '请向我们说明发生了什么事。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 789,
        tags: [
            '名词',
            '动词'
        ]
    },
    {
        id: 'cet4_016',
        word: 'accurate',
        phonetic: '/ˈækjərət/',
        phoneticUK: '/ˈækjərət/',
        translation: 'adj. 精确的；准确的',
        examples: [
            {
                english: 'The report must be accurate and detailed.',
                chinese: '报告必须准确详细。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2134,
        tags: [
            '形容词'
        ],
        synonyms: [
            'precise',
            'exact',
            'correct'
        ],
        antonyms: [
            'inaccurate'
        ]
    },
    {
        id: 'cet4_017',
        word: 'achieve',
        phonetic: '/əˈtʃiːv/',
        phoneticUK: '/əˈtʃiːv/',
        translation: 'v. 实现；取得；达到',
        examples: [
            {
                english: 'She achieved her goal of becoming a doctor.',
                chinese: '她实现了成为医生的目标。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1345,
        tags: [
            '动词'
        ],
        synonyms: [
            'accomplish',
            'attain',
            'reach'
        ]
    },
    {
        id: 'cet4_018',
        word: 'acknowledge',
        phonetic: '/əkˈnɑːlɪdʒ/',
        phoneticUK: '/əkˈnɒlɪdʒ/',
        translation: 'v. 承认；答谢；告知收到',
        examples: [
            {
                english: 'He acknowledged his mistake and apologized.',
                chinese: '他承认了错误并道歉。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2567,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet4_019',
        word: 'acquire',
        phonetic: '/əˈkwaɪər/',
        phoneticUK: '/əˈkwaɪə(r)/',
        translation: 'v. 获得；学到；取得',
        examples: [
            {
                english: 'Children acquire language naturally.',
                chinese: '儿童自然地习得语言。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1987,
        tags: [
            '动词'
        ],
        synonyms: [
            'obtain',
            'gain',
            'get'
        ]
    },
    {
        id: 'cet4_020',
        word: 'active',
        phonetic: '/ˈæktɪv/',
        phoneticUK: '/ˈæktɪv/',
        translation: 'adj. 积极的；活跃的；主动的',
        examples: [
            {
                english: 'She takes an active part in school activities.',
                chinese: '她积极参加学校活动。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1123,
        tags: [
            '形容词'
        ],
        antonyms: [
            'passive',
            'inactive'
        ]
    }
];
const CET4_SECTIONS = [
    {
        id: 'cet4_section_a',
        wordbookId: 'cet4_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET4_WORDS.filter((w)=>w.word.startsWith('a')).map((w)=>w.id)
    }
];
const CET4_WORDBOOK = {
    id: 'cet4_wordbook',
    name: 'CET-4 核心词汇',
    description: '大学英语四级考试核心词汇，包含高频必考单词',
    difficulty: 'CET4',
    totalWords: CET4_WORDS.length,
    sections: CET4_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
};
function getCET4WordById(id) {
    return CET4_WORDS.find((w)=>w.id === id);
}
function getCET4WordsByIds(ids) {
    return ids.map((id)=>getCET4WordById(id)).filter(Boolean);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/data/cet6-words.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CET-6 词库数据
 * 包含CET-6核心词汇（较CET-4更难）
 */ __turbopack_context__.s([
    "CET6_SECTIONS",
    ()=>CET6_SECTIONS,
    "CET6_WORDBOOK",
    ()=>CET6_WORDBOOK,
    "CET6_WORDS",
    ()=>CET6_WORDS,
    "getCET6WordById",
    ()=>getCET6WordById,
    "getCET6WordsByIds",
    ()=>getCET6WordsByIds
]);
const CET6_WORDS = [
    {
        id: 'cet6_001',
        word: 'abduct',
        phonetic: '/æbˈdʌkt/',
        phoneticUK: '/æbˈdʌkt/',
        translation: 'v. 诱拐；绑架；劫持',
        examples: [
            {
                english: 'The alien attempted to abduct the cow from the field.',
                chinese: '外星人试图从田野里诱拐那头牛。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5234,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet6_002',
        word: 'abide',
        phonetic: '/əˈbaɪd/',
        phoneticUK: '/əˈbaɪd/',
        translation: 'v. 遵守；忍受；停留',
        examples: [
            {
                english: 'You must abide by the rules of the game.',
                chinese: '你必须遵守游戏规则。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4567,
        tags: [
            '动词'
        ],
        synonyms: [
            'comply',
            'obey',
            'follow'
        ]
    },
    {
        id: 'cet6_003',
        word: 'abject',
        phonetic: '/ˈæbdʒekt/',
        phoneticUK: '/ˈæbdʒekt/',
        translation: 'adj. 卑鄙的；可怜的；(境况)凄惨的',
        examples: [
            {
                english: 'They lived in abject poverty for many years.',
                chinese: '他们在赤贫中生活了很多年。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 6789,
        tags: [
            '形容词'
        ]
    },
    {
        id: 'cet6_004',
        word: 'abolish',
        phonetic: '/əˈbɑːlɪʃ/',
        phoneticUK: '/əˈbɒlɪʃ/',
        translation: 'v. 废除；废止；取消',
        examples: [
            {
                english: 'The government voted to abolish the death penalty.',
                chinese: '政府投票决定废除死刑。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5432,
        tags: [
            '动词'
        ],
        synonyms: [
            'eliminate',
            'eradicate',
            'remove'
        ]
    },
    {
        id: 'cet6_005',
        word: 'abort',
        phonetic: '/əˈbɔːrt/',
        phoneticUK: '/əˈbɔːt/',
        translation: 'v. 流产；堕胎；夭折；中止',
        examples: [
            {
                english: 'They had to abort the mission due to bad weather.',
                chinese: '由于天气恶劣，他们不得不中止任务。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5678,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet6_006',
        word: 'abrupt',
        phonetic: '/əˈbrʌpt/',
        phoneticUK: '/əˈbrʌpt/',
        translation: 'adj. 突然的；意外的；唐突的；陡峭的',
        examples: [
            {
                english: 'The meeting came to an abrupt end.',
                chinese: '会议突然结束了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4890,
        tags: [
            '形容词'
        ],
        synonyms: [
            'sudden',
            'unexpected'
        ],
        antonyms: [
            'gradual'
        ]
    },
    {
        id: 'cet6_007',
        word: 'absentee',
        phonetic: '/ˌæbsənˈtiː/',
        phoneticUK: '/ˌæbsənˈtiː/',
        translation: 'n. 缺席者；不在场者',
        examples: [
            {
                english: 'An absentee landlord often neglects the property.',
                chinese: '不在地主经常忽视房产管理。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 7234,
        tags: [
            '名词'
        ]
    },
    {
        id: 'cet6_008',
        word: 'absurd',
        phonetic: '/əbˈsɜːrd/',
        phoneticUK: '/əbˈsɜːd/',
        translation: 'adj. 荒谬的；可笑的；不合理的',
        examples: [
            {
                english: 'It would be absurd to suggest that he knew nothing about it.',
                chinese: '说他对此一无所知是荒谬的。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4321,
        tags: [
            '形容词'
        ],
        synonyms: [
            'ridiculous',
            'preposterous',
            'irrational'
        ]
    },
    {
        id: 'cet6_009',
        word: 'abundance',
        phonetic: '/əˈbʌndəns/',
        phoneticUK: '/əˈbʌndəns/',
        translation: 'n. 丰富；充裕；大量',
        examples: [
            {
                english: 'There was an abundance of food at the party.',
                chinese: '聚会上有大量的食物。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5123,
        tags: [
            '名词'
        ],
        antonyms: [
            'scarcity',
            'shortage'
        ]
    },
    {
        id: 'cet6_010',
        word: 'abyss',
        phonetic: '/əˈbɪs/',
        phoneticUK: '/əˈbɪs/',
        translation: 'n. 深渊；深邃；无底洞',
        examples: [
            {
                english: 'He stood on the edge of the cliff, looking down into the abyss.',
                chinese: '他站在悬崖边，向下凝视着深渊。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 6543,
        tags: [
            '名词'
        ]
    },
    {
        id: 'cet6_011',
        word: 'accelerate',
        phonetic: '/əkˈseləreɪt/',
        phoneticUK: '/əkˈseləreɪt/',
        translation: 'v. 加速；促进；增加',
        examples: [
            {
                english: 'The car accelerated smoothly.',
                chinese: '汽车平稳地加速了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 3456,
        tags: [
            '动词'
        ],
        antonyms: [
            'decelerate',
            'slow'
        ]
    },
    {
        id: 'cet6_012',
        word: 'accommodate',
        phonetic: '/əˈkɑːmədeɪt/',
        phoneticUK: '/əˈkɒmədeɪt/',
        translation: 'v. 容纳；为...提供住宿；适应；调解',
        examples: [
            {
                english: 'The hotel can accommodate up to 500 guests.',
                chinese: '这家酒店最多可容纳500位客人。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4234,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet6_013',
        word: 'accountable',
        phonetic: '/əˈkaʊntəbl/',
        phoneticUK: '/əˈkaʊntəbl/',
        translation: 'adj. 负有责任的；应作解释的',
        examples: [
            {
                english: 'Politicians should be accountable to the public.',
                chinese: '政治家应该对公众负责。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 3890,
        tags: [
            '形容词'
        ],
        synonyms: [
            'responsible',
            'answerable'
        ]
    },
    {
        id: 'cet6_014',
        word: 'accumulate',
        phonetic: '/əˈkjuːmjəleɪt/',
        phoneticUK: '/əˈkjuːmjəleɪt/',
        translation: 'v. 积累；积聚；堆积',
        examples: [
            {
                english: 'Dust had accumulated on the furniture.',
                chinese: '灰尘已经在家具上堆积了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4567,
        tags: [
            '动词'
        ],
        synonyms: [
            'gather',
            'collect',
            'amass'
        ]
    },
    {
        id: 'cet6_015',
        word: 'acquaint',
        phonetic: '/əˈkweɪnt/',
        phoneticUK: '/əˈkweɪnt/',
        translation: 'v. 使熟悉；使认识',
        examples: [
            {
                english: 'Please acquaint me with the facts of the case.',
                chinese: '请让我了解这个案件的事实。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5678,
        tags: [
            '动词'
        ]
    }
];
const CET6_SECTIONS = [
    {
        id: 'cet6_section_a',
        wordbookId: 'cet6_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET6_WORDS.filter((w)=>w.word.startsWith('a')).map((w)=>w.id)
    }
];
const CET6_WORDBOOK = {
    id: 'cet6_wordbook',
    name: 'CET-6 核心词汇',
    description: '大学英语六级考试核心词汇，难度高于CET-4',
    difficulty: 'CET6',
    totalWords: CET6_WORDS.length,
    sections: CET6_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
};
function getCET6WordById(id) {
    return CET6_WORDS.find((w)=>w.id === id);
}
function getCET6WordsByIds(ids) {
    return ids.map((id)=>getCET6WordById(id)).filter(Boolean);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/utils/wordbook-manager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 词库管理工具
 * 统一管理所有词库数据
 */ __turbopack_context__.s([
    "ALL_WORDBOOKS",
    ()=>ALL_WORDBOOKS,
    "ALL_WORDS",
    ()=>ALL_WORDS,
    "getRandomWords",
    ()=>getRandomWords,
    "getSectionWords",
    ()=>getSectionWords,
    "getWordById",
    ()=>getWordById,
    "getWordbookById",
    ()=>getWordbookById,
    "getWordbookSection",
    ()=>getWordbookSection,
    "getWordbookStats",
    ()=>getWordbookStats,
    "getWordbooksByDifficulty",
    ()=>getWordbooksByDifficulty,
    "getWordsByIds",
    ()=>getWordsByIds,
    "searchWords",
    ()=>searchWords,
    "validateSpelling",
    ()=>validateSpelling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/cet4-words.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/cet6-words.ts [app-ssr] (ecmascript)");
;
;
const ALL_WORDBOOKS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CET4_WORDBOOK"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CET6_WORDBOOK"]
];
const ALL_WORDS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CET4_WORDS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CET6_WORDS"]
];
function getWordbookById(id) {
    return ALL_WORDBOOKS.find((wb)=>wb.id === id);
}
function getWordbooksByDifficulty(difficulty) {
    return ALL_WORDBOOKS.filter((wb)=>wb.difficulty === difficulty);
}
function getWordById(id) {
    // 先尝试从CET4查找
    const cet4Word = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCET4WordById"])(id);
    if (cet4Word) return cet4Word;
    // 再从CET6查找
    const cet6Word = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCET6WordById"])(id);
    if (cet6Word) return cet6Word;
    return undefined;
}
function getWordsByIds(ids) {
    return ids.map((id)=>getWordById(id)).filter(Boolean);
}
function getWordbookSection(wordbookId, sectionId) {
    const wordbook = getWordbookById(wordbookId);
    if (!wordbook) return undefined;
    return wordbook.sections.find((section)=>section.id === sectionId);
}
function getSectionWords(wordbookId, sectionId) {
    const section = getWordbookSection(wordbookId, sectionId);
    if (!section) return [];
    return getWordsByIds(section.wordIds);
}
function searchWords(query, options) {
    const { difficulty, limit = 50 } = options || {};
    const lowerQuery = query.toLowerCase().trim();
    let results = ALL_WORDS.filter((word)=>{
        // 按单词匹配
        if (word.word.toLowerCase().includes(lowerQuery)) return true;
        // 按翻译匹配
        if (word.translation.toLowerCase().includes(lowerQuery)) return true;
        return false;
    });
    // 按难度过滤
    if (difficulty) {
        results = results.filter((w)=>w.difficulty === difficulty);
    }
    // 限制结果数量
    return results.slice(0, limit);
}
function getRandomWords(count, options) {
    const { difficulty, excludeIds = [] } = options || {};
    let pool = ALL_WORDS.filter((w)=>!excludeIds.includes(w.id));
    if (difficulty) {
        pool = pool.filter((w)=>w.difficulty === difficulty);
    }
    // Fisher-Yates 洗牌算法
    const shuffled = [
        ...pool
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled.slice(0, count);
}
function getWordbookStats(wordbookId) {
    const wordbook = getWordbookById(wordbookId);
    if (!wordbook) return null;
    const allWords = wordbook.sections.flatMap((section)=>getWordsByIds(section.wordIds));
    return {
        totalWords: allWords.length,
        totalSections: wordbook.sections.length,
        averageWordsPerSection: Math.round(allWords.length / wordbook.sections.length),
        difficulty: wordbook.difficulty
    };
}
function validateSpelling(input, correctWord) {
    const normalizedInput = input.toLowerCase().trim();
    const normalizedCorrect = correctWord.toLowerCase().trim();
    if (normalizedInput === normalizedCorrect) {
        return {
            isCorrect: true,
            similarity: 1
        };
    }
    // 计算Levenshtein距离（编辑距离）
    const distance = levenshteinDistance(normalizedInput, normalizedCorrect);
    const maxLength = Math.max(normalizedInput.length, normalizedCorrect.length);
    const similarity = 1 - distance / maxLength;
    return {
        isCorrect: false,
        similarity
    };
}
/**
 * Levenshtein距离算法（计算两个字符串的编辑距离）
 */ function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(()=>Array(n + 1).fill(0));
    for(let i = 0; i <= m; i++)dp[i][0] = i;
    for(let j = 0; j <= n; j++)dp[0][j] = j;
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1 // 替换
                );
            }
        }
    }
    return dp[m][n];
}
}),
"[project]/Desktop/bunny-words-homepage/lib/utils/text-to-speech.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 文本转语音工具
 * 使用浏览器内置的 Web Speech API
 */ __turbopack_context__.s([
    "TextToSpeech",
    ()=>TextToSpeech,
    "speakSentence",
    ()=>speakSentence,
    "speakWord",
    ()=>speakWord,
    "stopSpeaking",
    ()=>stopSpeaking,
    "tts",
    ()=>tts
]);
class TextToSpeech {
    static instance;
    synth = null;
    voices = [];
    isInitialized = false;
    constructor(){
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    static getInstance() {
        if (!TextToSpeech.instance) {
            TextToSpeech.instance = new TextToSpeech();
        }
        return TextToSpeech.instance;
    }
    /**
     * 加载可用的语音列表
     */ loadVoices() {
        if (!this.synth) return;
        const loadVoicesCallback = ()=>{
            this.voices = this.synth.getVoices();
            this.isInitialized = true;
        };
        // Chrome 需要等待 voiceschanged 事件
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = loadVoicesCallback;
        }
        // 立即尝试加载一次
        loadVoicesCallback();
    }
    /**
     * 获取英语语音
     * 优先选择美式英语，其次英式英语
     */ getEnglishVoice() {
        if (!this.isInitialized || this.voices.length === 0) {
            return null;
        }
        // 优先美式英语
        const usVoice = this.voices.find((voice)=>voice.lang === 'en-US' || voice.lang.startsWith('en-US') || voice.name.toLowerCase().includes('us') || voice.name.toLowerCase().includes('american'));
        if (usVoice) return usVoice;
        // 其次英式英语
        const ukVoice = this.voices.find((voice)=>voice.lang === 'en-GB' || voice.lang.startsWith('en-GB') || voice.name.toLowerCase().includes('uk') || voice.name.toLowerCase().includes('british'));
        if (ukVoice) return ukVoice;
        // 最后任何英语语音
        const anyEnglishVoice = this.voices.find((voice)=>voice.lang.startsWith('en'));
        return anyEnglishVoice || null;
    }
    /**
     * 朗读文本
     * @param text 要朗读的文本
     * @param options 朗读选项
     */ speak(text, options = {}) {
        if (!this.synth) {
            console.warn('Speech synthesis not supported in this browser');
            return;
        }
        // 停止当前正在播放的语音
        this.stop();
        const utterance = new SpeechSynthesisUtterance(text);
        // 设置语音
        const voice = this.getEnglishVoice();
        if (voice) {
            utterance.voice = voice;
        }
        // 设置参数
        utterance.rate = options.rate ?? 0.9; // 稍微慢一点，便于学习
        utterance.pitch = options.pitch ?? 1;
        utterance.volume = options.volume ?? 1;
        utterance.lang = options.lang ?? 'en-US';
        // 设置回调
        if (options.onEnd) {
            utterance.onend = options.onEnd;
        }
        if (options.onError) {
            utterance.onerror = options.onError;
        }
        // 开始朗读
        this.synth.speak(utterance);
    }
    /**
     * 朗读单词（专门为单词学习优化）
     * @param word 单词
     * @param options 选项
     */ speakWord(word, options = {}) {
        const { slow = false, repeat = 1, onComplete } = options;
        let count = 0;
        const speakOnce = ()=>{
            count++;
            this.speak(word, {
                rate: slow ? 0.6 : 0.9,
                onEnd: ()=>{
                    if (count < repeat) {
                        // 重复朗读，间隔500ms
                        setTimeout(speakOnce, 500);
                    } else if (onComplete) {
                        onComplete();
                    }
                }
            });
        };
        speakOnce();
    }
    /**
     * 朗读例句
     * @param sentence 例句
     * @param options 选项
     */ speakSentence(sentence, options = {}) {
        this.speak(sentence, {
            rate: options.rate ?? 0.85,
            onEnd: options.onEnd
        });
    }
    /**
     * 停止朗读
     */ stop() {
        if (this.synth) {
            this.synth.cancel();
        }
    }
    /**
     * 暂停朗读
     */ pause() {
        if (this.synth) {
            this.synth.pause();
        }
    }
    /**
     * 恢复朗读
     */ resume() {
        if (this.synth) {
            this.synth.resume();
        }
    }
    /**
     * 检查是否正在朗读
     */ isSpeaking() {
        return this.synth?.speaking ?? false;
    }
    /**
     * 获取可用的语音列表
     */ getAvailableVoices() {
        return this.voices;
    }
}
const tts = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
const speakWord = (word, options)=>{
    tts?.speakWord(word, options);
};
const speakSentence = (sentence, options)=>{
    tts?.speakSentence(sentence, options);
};
const stopSpeaking = ()=>{
    tts?.stop();
};
}),
"[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordbookTestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * 词库系统测试页面
 * 用于测试和演示词库功能
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-ssr] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils/wordbook-manager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils/text-to-speech.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function WordbookTestPage() {
    const [selectedWordbook, setSelectedWordbook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('cet4_wordbook');
    const [currentWord, setCurrentWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [spellingInput, setSpellingInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [spellingResult, setSpellingResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // 加载第一个单词
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadRandomWord();
    }, [
        selectedWordbook
    ]);
    const loadRandomWord = ()=>{
        const wordbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWordbookById"])(selectedWordbook);
        if (!wordbook || !wordbook.sections[0]) return;
        const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSectionWords"])(selectedWordbook, wordbook.sections[0].id);
        if (words.length > 0) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setCurrentWord(randomWord);
            setSpellingInput('');
            setSpellingResult(null);
        }
    };
    const handleSearch = ()=>{
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }
        const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchWords"])(searchQuery, {
            difficulty: selectedWordbook === 'cet4_wordbook' ? 'CET4' : 'CET6',
            limit: 10
        });
        setSearchResults(results);
    };
    const handleSpellingCheck = ()=>{
        if (!currentWord) return;
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSpelling"])(spellingInput, currentWord.word);
        setSpellingResult(result);
    };
    const handlePlayWord = ()=>{
        if (currentWord) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["speakWord"])(currentWord.word);
        }
    };
    const handlePlayExample = (example)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["speakSentence"])(example);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FAFAFA] p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 mb-2",
                            children: "📚 词库系统测试页面"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "测试 CET-4/6 词库功能和 Web Speech API"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "选择词书"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_WORDBOOKS"].map((wb)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedWordbook(wb.id),
                                    variant: selectedWordbook === wb.id ? 'default' : 'outline',
                                    className: selectedWordbook === wb.id ? 'bg-[#E85D75] hover:bg-[#D54D65]' : '',
                                    children: [
                                        wb.name,
                                        " (",
                                        wb.totalWords,
                                        "词)"
                                    ]
                                }, wb.id, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, this),
                currentWord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-5xl font-bold text-gray-900",
                                                    children: currentWord.word
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: handlePlayWord,
                                                    variant: "outline",
                                                    size: "icon",
                                                    className: "rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 font-mono text-lg",
                                            children: [
                                                currentWord.phonetic,
                                                currentWord.phoneticUK && ` / ${currentWord.phoneticUK}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: loadRandomWord,
                                    variant: "outline",
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 33
                                        }, this),
                                        "随机单词"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-500 mb-1",
                                            children: "释义"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-gray-900",
                                            children: currentWord.translation
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, this),
                                currentWord.examples.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-500 mb-2",
                                            children: "例句"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 37
                                        }, this),
                                        currentWord.examples.map((example, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#FFF5F8] rounded-lg p-4 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#E85D75] font-bold text-xs mt-1",
                                                                children: "EN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-700 flex-1",
                                                                children: example.english
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>handlePlayExample(example.english),
                                                                variant: "ghost",
                                                                size: "icon",
                                                                className: "h-6 w-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 border-t border-[#FFD6E0] pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#E85D75] font-bold text-xs mt-1",
                                                                children: "CN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: example.chinese
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 41
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 33
                                }, this),
                                currentWord.tags && currentWord.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-500 mb-2",
                                            children: "标签"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: currentWord.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm",
                                                    children: tag
                                                }, idx, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 33
                                }, this),
                                (currentWord.synonyms || currentWord.antonyms) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        currentWord.synonyms && currentWord.synonyms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-gray-500 mb-1",
                                                    children: "同义词"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: currentWord.synonyms.join(', ')
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 41
                                        }, this),
                                        currentWord.antonyms && currentWord.antonyms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-gray-500 mb-1",
                                                    children: "反义词"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: currentWord.antonyms.join(', ')
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 143,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                    lineNumber: 112,
                    columnNumber: 21
                }, this),
                currentWord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "拼写测试"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 214,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    value: spellingInput,
                                    onChange: (e)=>setSpellingInput(e.target.value),
                                    onKeyDown: (e)=>e.key === 'Enter' && handleSpellingCheck(),
                                    placeholder: "输入单词拼写...",
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSpellingCheck,
                                    className: "bg-[#E85D75] hover:bg-[#D54D65]",
                                    children: "检查"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 215,
                            columnNumber: 25
                        }, this),
                        spellingResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 rounded-lg bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: spellingResult.isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-5 h-5 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-600 font-semibold",
                                                children: "正确！"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-600 font-semibold",
                                                children: "错误"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700",
                                    children: [
                                        "相似度: ",
                                        (spellingResult.similarity * 100).toFixed(1),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 33
                                }, this),
                                !spellingResult.isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: [
                                        "正确拼写: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: currentWord.word
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 228,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                    lineNumber: 213,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "搜索单词"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 257,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    onKeyDown: (e)=>e.key === 'Enter' && handleSearch(),
                                    placeholder: "输入单词或释义...",
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSearch,
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 29
                                        }, this),
                                        "搜索"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 258,
                            columnNumber: 21
                        }, this),
                        searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "找到 ",
                                        searchResults.length,
                                        " 个结果"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 29
                                }, this),
                                searchResults.map((word)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer",
                                        onClick: ()=>setCurrentWord(word),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-lg",
                                                                children: word.word
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500 ml-3",
                                                                children: word.phonetic
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["speakWord"])(word.word);
                                                        },
                                                        variant: "ghost",
                                                        size: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 mt-1",
                                                children: word.translation
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, word.id, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 33
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 273,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                    lineNumber: 256,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-6 bg-blue-50 border-blue-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4 text-blue-900",
                            children: "系统信息"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 306,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-sm text-blue-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "✅ 词库系统已加载"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "✅ Web Speech API 可用"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "📚 当前词书: ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_WORDBOOKS"].find((wb)=>wb.id === selectedWordbook)?.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "📊 总单词数: ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_WORDBOOKS"].reduce((sum, wb)=>sum + wb.totalWords, 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                            lineNumber: 307,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
                    lineNumber: 305,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/app/test-wordbook/page.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a91c3254._.js.map