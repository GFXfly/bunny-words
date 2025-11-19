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
"[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-ssr] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-ssr] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
// 导入词库管理工具和发音功能
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
;
// 词书ID映射：URL参数 -> 实际词书ID
const WORDBOOK_ID_MAP = {
    'cet4': 'cet4_wordbook',
    'cet4-1': 'cet4_wordbook',
    'cet6': 'cet6_wordbook',
    'cet6-1': 'cet6_wordbook'
};
// 章节ID映射：根据词书ID获取默认章节
const getDefaultSectionId = (wordbookId)=>{
    if (wordbookId === 'cet4_wordbook') return 'cet4_section_a';
    if (wordbookId === 'cet6_wordbook') return 'cet6_section_a';
    return 'cet4_section_a' // 默认
    ;
};
function adaptWord(word) {
    return {
        id: word.id,
        word: word.word,
        pronunciation: word.phonetic,
        definition: word.translation,
        example: word.examples[0]?.english || '',
        exampleTranslation: word.examples[0]?.chinese || ''
    };
}
function StudyPageClient({ id, listId, mode }) {
    // 加载真实单词数据
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        try {
            // 映射词书ID
            const actualWordbookId = WORDBOOK_ID_MAP[id] || id;
            // 获取章节ID（如果listId是数字，使用默认章节）
            const actualSectionId = listId.match(/^\d+$/) ? getDefaultSectionId(actualWordbookId) : listId;
            // 从词库系统获取单词
            const rawWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSectionWords"])(actualWordbookId, actualSectionId);
            // 如果没有找到单词，返回空数组
            if (!rawWords || rawWords.length === 0) {
                console.warn(`No words found for wordbook: ${actualWordbookId}, section: ${actualSectionId}`);
                return [];
            }
            // 适配为组件使用的格式
            return rawWords.map(adaptWord);
        } catch (error) {
            console.error('Failed to load words:', error);
            return [];
        }
    }, [
        id,
        listId
    ]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userInput, setUserInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [matchingPairs, setMatchingPairs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: [],
        right: []
    });
    const [selectedLeft, setSelectedLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRight, setSelectedRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [correctCount, setCorrectCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [wrongCount, setWrongCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showAnswer, setShowAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStarred, setIsStarred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentWord = words[currentIndex];
    const progress = currentIndex + 1;
    const total = words.length;
    const accuracy = correctCount + wrongCount > 0 ? Math.round(correctCount / (correctCount + wrongCount) * 100) : 0;
    // Reset state when mode or word changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resetState();
    }, [
        currentIndex,
        mode
    ]);
    // Auto-play audio when a new word is shown (Flashcard mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === 'flashcard' && !showAnswer && currentWord) {
            // Auto-play audio when showing the front of the card
            handlePlayAudio();
        }
    }, [
        currentIndex,
        mode,
        currentWord
    ]);
    // Cleanup: stop speaking when component unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopSpeaking"])();
        };
    }, []);
    // Keyboard shortcuts for Flashcard mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode !== 'flashcard') return;
        const handleKeyDown = (e)=>{
            if (e.code === 'Space') {
                e.preventDefault();
                setShowAnswer(!showAnswer);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        mode,
        showAnswer
    ]);
    const handleNext = ()=>{
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrevious = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const resetState = ()=>{
        setUserInput('');
        setSelectedOption(null);
        setShowAnswer(false);
    // Don't reset matching pairs here as it's a continuous game
    };
    const handlePlayAudio = ()=>{
        if (!currentWord) return;
        // 使用 Web Speech API 朗读单词
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$text$2d$to$2d$speech$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["speakWord"])(currentWord.word, {
            slow: false,
            repeat: 1
        });
    };
    const handleCardFlip = ()=>{
        setShowAnswer(!showAnswer);
    };
    const handleToggleStar = ()=>{
        setIsStarred(!isStarred);
    };
    // Anki Rating Handler
    const handleRating = (rating)=>{
        // In a real app, this would update the SRS algorithm
        console.log(`Rated word ${currentWord.word} as ${rating}`);
        if (rating === 'again') {
            setWrongCount(wrongCount + 1);
        } else {
            setCorrectCount(correctCount + 1);
        }
        handleNext();
    };
    // Dictation Logic
    const handleDictationSubmit = ()=>{
        if (userInput.toLowerCase().trim() === currentWord.word.toLowerCase()) {
            setCorrectCount(correctCount + 1);
        } else {
            setWrongCount(wrongCount + 1);
        }
        setTimeout(handleNext, 1000);
    };
    // Choice Logic
    const handleChoiceSubmit = (optionIndex)=>{
        setSelectedOption(optionIndex);
        if (optionIndex === 0) {
            setCorrectCount(correctCount + 1);
        } else {
            setWrongCount(wrongCount + 1);
        }
        setTimeout(handleNext, 1000);
    };
    // Matching Logic
    const handleMatchingClick = (side, index)=>{
    // ... (Matching logic remains same)
    };
    // Render Components
    const renderHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 h-14 flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/wordbook/${id}`,
                    className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "返回列表"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 232,
            columnNumber: 5
        }, this);
    const renderModeSelector = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-8 md:gap-16",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                            name: '记忆卡片',
                            value: 'flashcard'
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
                            name: '听写大师',
                            value: 'dictation'
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
                            name: '词义选择',
                            value: 'choice'
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
                            name: '连连看',
                            value: 'matching'
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/wordbook/${id}/study/${listId}?mode=${item.value}`,
                            className: "flex flex-col items-center gap-2 cursor-pointer group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${mode === item.value ? 'bg-[#FFF0F3] border-[#E85D75] text-[#E85D75]' : 'bg-white border-gray-200 text-gray-500 group-hover:border-[#E85D75]/50 group-hover:text-[#E85D75]/70'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: "w-6 h-6 md:w-7 md:h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs font-medium ${mode === item.value ? 'text-[#E85D75]' : 'text-gray-500'}`,
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.value, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 246,
            columnNumber: 5
        }, this);
    const renderProgressBar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white pb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-muted-foreground mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: mode === 'flashcard' ? '记忆进度' : mode === 'dictation' ? '听写进度' : '测试进度'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    progress,
                                    " / ",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 bg-[#FFF0F3] rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-black rounded-full transition-all duration-300",
                            style: {
                                width: `${progress / total * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 278,
            columnNumber: 5
        }, this);
    const renderFlashcard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center p-4 min-h-[500px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "perspective-1000 w-full max-w-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full aspect-[4/3] transition-transform duration-500 transform-style-3d cursor-pointer",
                    style: {
                        transformStyle: 'preserve-3d',
                        transform: showAnswer ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    },
                    onClick: handleCardFlip,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "absolute inset-0 bg-white rounded-3xl shadow-lg border-0 backface-hidden",
                            style: {
                                backfaceVisibility: 'hidden'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center p-8 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleToggleStar();
                                        },
                                        className: "absolute top-6 right-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: `w-6 h-6 ${isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-5xl md:text-6xl font-bold text-gray-900 tracking-tight",
                                                children: currentWord.word
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    handlePlayAudio();
                                                },
                                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    className: "w-6 h-6 text-gray-400 hover:text-[#E85D75]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400",
                                        children: "(点击卡片或按空格键查看答案)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "absolute inset-0 bg-white rounded-3xl shadow-lg border-0 backface-hidden",
                            style: {
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col p-6 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleToggleStar();
                                        },
                                        className: "absolute top-6 right-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: `w-6 h-6 ${isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-2",
                                                children: currentWord.word
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2 text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-sm",
                                                        children: currentWord.pronunciation
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handlePlayAudio();
                                                        },
                                                        className: "p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-gray-800 font-medium",
                                            children: currentWord.definition
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#FFF5F8] rounded-xl p-3 mb-4 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#E85D75] font-bold text-xs mt-0.5",
                                                        children: "EN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed text-sm",
                                                        children: currentWord.example
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2 border-t border-[#FFD6E0] pt-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#E85D75] font-bold text-xs mt-0.5",
                                                        children: "CN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 leading-relaxed text-sm",
                                                        children: currentWord.exampleTranslation
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto pt-4 border-t border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-4 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleRating('again');
                                                            },
                                                            variant: "outline",
                                                            className: "h-10 border-2 border-red-100 hover:border-red-200 hover:bg-red-50 text-red-600 font-medium rounded-lg cursor-pointer text-xs",
                                                            children: "忘记"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-center text-gray-400 font-medium uppercase",
                                                            children: "1m"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleRating('hard');
                                                            },
                                                            variant: "outline",
                                                            className: "h-10 border-2 border-orange-100 hover:border-orange-200 hover:bg-orange-50 text-orange-600 font-medium rounded-lg cursor-pointer text-xs",
                                                            children: "模糊"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-center text-gray-400 font-medium uppercase",
                                                            children: "10m"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleRating('good');
                                                            },
                                                            variant: "outline",
                                                            className: "h-10 border-2 border-green-100 hover:border-green-200 hover:bg-green-50 text-green-600 font-medium rounded-lg cursor-pointer text-xs",
                                                            children: "认识"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-center text-gray-400 font-medium uppercase",
                                                            children: "1d"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleRating('easy');
                                                            },
                                                            variant: "outline",
                                                            className: "h-10 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 text-blue-600 font-medium rounded-lg cursor-pointer text-xs",
                                                            children: "熟练"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] text-center text-gray-400 font-medium uppercase",
                                                            children: "4d"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 299,
            columnNumber: 5
        }, this);
    const renderDictation = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center p-4 min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl text-center space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold text-gray-900",
                                children: currentWord.definition
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            value: userInput,
                            onChange: (e)=>setUserInput(e.target.value),
                            className: "w-full h-12 text-center text-xl border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-gray-900 px-0 bg-transparent",
                            placeholder: " "
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    setWrongCount(wrongCount + 1);
                                    handleNext();
                                },
                                variant: "secondary",
                                className: "px-8 py-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium cursor-pointer border-0",
                                children: "跳过"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleDictationSubmit,
                                className: "px-8 py-6 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium cursor-pointer shadow-sm gap-2",
                                children: [
                                    "下一个 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 475,
            columnNumber: 5
        }, this);
    const renderChoice = ()=>{
        const options = [
            '字母A',
            '第一流的',
            '学业成绩达最高标准的评价符号',
            '畸变的'
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center p-4 min-h-[500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 mb-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold text-gray-900",
                                children: "a"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "w-6 h-6 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 528,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg space-y-4",
                    children: options.map((option, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleChoiceSubmit(idx),
                            className: `w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:border-[#E85D75] hover:bg-[#FFF5F8] transition-all duration-200 cursor-pointer text-gray-700 font-medium ${selectedOption === idx ? 'border-[#E85D75] bg-[#FFF5F8]' : ''}`,
                            children: option
                        }, idx, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 536,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleNext,
                        className: "px-8 py-6 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium cursor-pointer shadow-sm gap-2 min-w-[160px]",
                        children: [
                            "下一个 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 554,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 549,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 526,
            columnNumber: 7
        }, this);
    };
    const renderMatching = ()=>{
        const gridItems = [
            {
                text: 'abyss',
                type: 'en'
            },
            {
                text: '卑鄙的；可怜的；不幸的；(境况)凄惨的，绝望的',
                type: 'cn'
            },
            {
                text: '能力，能耐；才能',
                type: 'cn'
            },
            {
                text: 'absolute',
                type: 'en'
            },
            {
                text: '深渊；深邃，无底洞，地狱',
                type: 'cn'
            },
            {
                text: '绝对的；完全的；专制的',
                type: 'cn'
            },
            {
                text: 'abort',
                type: 'en'
            },
            {
                text: 'academic',
                type: 'en'
            },
            {
                text: '学术的；理论的；学院的',
                type: 'cn'
            },
            {
                text: 'ability',
                type: 'en'
            },
            {
                text: 'abject',
                type: 'en'
            },
            {
                text: '流产；堕胎；夭折；发育不全',
                type: 'cn'
            }
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-5xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: gridItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `p-4 h-24 rounded-xl flex items-center justify-center text-center text-sm font-medium transition-all cursor-pointer hover:scale-[1.02] ${item.type === 'en' ? 'bg-[#F0F7FF] text-blue-600 hover:bg-[#E0EFFF]' : 'bg-[#FFF9E6] text-[#D97706] hover:bg-[#FFF0B3]'}`,
                            children: item.text
                        }, idx, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                            lineNumber: 582,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 580,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 579,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 578,
            columnNumber: 7
        }, this);
    };
    const renderBottomStats = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border-t py-6 mt-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-4xl flex items-center justify-center gap-12 md:gap-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl md:text-3xl font-medium text-blue-500",
                                children: correctCount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 602,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mt-1",
                                children: mode === 'matching' ? '最高连击' : '正确'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 603,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl md:text-3xl font-medium text-red-500",
                                children: wrongCount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mt-1",
                                children: "错误"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl md:text-3xl font-medium text-gray-400",
                                children: [
                                    accuracy,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 612,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mt-1",
                                children: "正确率"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 611,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-[#FFF0F3] hover:bg-[#FFE4E9] text-[#E85D75] border border-[#FFD6E0] rounded-lg px-6 py-2 h-auto text-sm font-medium cursor-pointer shadow-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            "结束测试"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 599,
            columnNumber: 5
        }, this);
    // 如果没有单词数据，显示提示
    if (!words || words.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#FAFAFA] flex flex-col font-sans",
            children: [
                renderHeader(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-center justify-center p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-8 max-w-md text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 mb-4",
                                children: "📚 暂无单词数据"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 632,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4",
                                children: "当前词书章节没有找到单词数据。"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-6",
                                children: [
                                    "词书ID: ",
                                    id,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                        lineNumber: 639,
                                        columnNumber: 25
                                    }, this),
                                    "章节ID: ",
                                    listId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 638,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/wordbook/${id}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-[#E85D75] hover:bg-[#D54D65]",
                                    children: "返回词书列表"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                    lineNumber: 630,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
            lineNumber: 628,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FAFAFA] flex flex-col font-sans",
        children: [
            renderHeader(),
            renderModeSelector(),
            renderProgressBar(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: [
                    mode === 'flashcard' && renderFlashcard(),
                    mode === 'dictation' && renderDictation(),
                    mode === 'choice' && renderChoice(),
                    mode === 'matching' && renderMatching()
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
                lineNumber: 659,
                columnNumber: 7
            }, this),
            mode !== 'flashcard' && renderBottomStats()
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx",
        lineNumber: 654,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$app$2f$wordbook$2f5b$id$5d2f$study$2f5b$listId$5d2f$study$2d$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/study-client.tsx [app-ssr] (ecmascript)");
'use client';
;
;
async function StudyPage({ params, searchParams }) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$app$2f$wordbook$2f5b$id$5d2f$study$2f5b$listId$5d2f$study$2d$client$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: resolvedParams.id,
        listId: resolvedParams.listId,
        mode: resolvedSearchParams.mode || 'flashcard'
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/study/[listId]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dbdbb170._.js.map