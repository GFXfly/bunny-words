(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/bunny-words-homepage/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/data/cet4-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/data/cet6-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/data/primary-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 小学英语词库
 * 包含小学阶段常用英语单词
 */ __turbopack_context__.s([
    "PRIMARY_SECTIONS",
    ()=>PRIMARY_SECTIONS,
    "PRIMARY_WORDBOOK",
    ()=>PRIMARY_WORDBOOK,
    "PRIMARY_WORDS",
    ()=>PRIMARY_WORDS,
    "getPrimaryWordById",
    ()=>getPrimaryWordById,
    "getPrimaryWordsByIds",
    ()=>getPrimaryWordsByIds
]);
const PRIMARY_WORDS = [
    {
        id: 'primary_001',
        word: 'apple',
        phonetic: '/ˈæpl/',
        phoneticUK: '/ˈæpl/',
        translation: 'n. 苹果',
        examples: [
            {
                english: 'I like to eat apples.',
                chinese: '我喜欢吃苹果。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: [
            '名词',
            '水果'
        ]
    },
    {
        id: 'primary_002',
        word: 'book',
        phonetic: '/bʊk/',
        phoneticUK: '/bʊk/',
        translation: 'n. 书；书本',
        examples: [
            {
                english: 'This is my English book.',
                chinese: '这是我的英语书。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: [
            '名词',
            '学习用品'
        ]
    },
    {
        id: 'primary_003',
        word: 'cat',
        phonetic: '/kæt/',
        phoneticUK: '/kæt/',
        translation: 'n. 猫',
        examples: [
            {
                english: 'I have a cute cat.',
                chinese: '我有一只可爱的猫。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: [
            '名词',
            '动物'
        ]
    },
    {
        id: 'primary_004',
        word: 'dog',
        phonetic: '/dɔːɡ/',
        phoneticUK: '/dɒɡ/',
        translation: 'n. 狗',
        examples: [
            {
                english: 'My dog is very friendly.',
                chinese: '我的狗很友好。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: [
            '名词',
            '动物'
        ]
    },
    {
        id: 'primary_005',
        word: 'egg',
        phonetic: '/eɡ/',
        phoneticUK: '/eɡ/',
        translation: 'n. 鸡蛋；蛋',
        examples: [
            {
                english: 'I eat an egg for breakfast.',
                chinese: '我早餐吃一个鸡蛋。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: [
            '名词',
            '食物'
        ]
    },
    {
        id: 'primary_006',
        word: 'fish',
        phonetic: '/fɪʃ/',
        phoneticUK: '/fɪʃ/',
        translation: 'n. 鱼',
        examples: [
            {
                english: 'There are many fish in the sea.',
                chinese: '海里有很多鱼。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: [
            '名词',
            '动物'
        ]
    },
    {
        id: 'primary_007',
        word: 'good',
        phonetic: '/ɡʊd/',
        phoneticUK: '/ɡʊd/',
        translation: 'adj. 好的；良好的',
        examples: [
            {
                english: 'You are a good student.',
                chinese: '你是一个好学生。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: [
            '形容词'
        ]
    },
    {
        id: 'primary_008',
        word: 'happy',
        phonetic: '/ˈhæpi/',
        phoneticUK: '/ˈhæpi/',
        translation: 'adj. 快乐的；高兴的',
        examples: [
            {
                english: 'I am very happy today.',
                chinese: '我今天很开心。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: [
            '形容词'
        ],
        antonyms: [
            'sad'
        ]
    },
    {
        id: 'primary_009',
        word: 'ice',
        phonetic: '/aɪs/',
        phoneticUK: '/aɪs/',
        translation: 'n. 冰',
        examples: [
            {
                english: 'I want some ice cream.',
                chinese: '我想要一些冰淇淋。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: [
            '名词'
        ]
    },
    {
        id: 'primary_010',
        word: 'jump',
        phonetic: '/dʒʌmp/',
        phoneticUK: '/dʒʌmp/',
        translation: 'v. 跳；跳跃',
        examples: [
            {
                english: 'The rabbit can jump very high.',
                chinese: '兔子能跳得很高。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: [
            '动词'
        ]
    },
    {
        id: 'primary_011',
        word: 'king',
        phonetic: '/kɪŋ/',
        phoneticUK: '/kɪŋ/',
        translation: 'n. 国王；君主',
        examples: [
            {
                english: 'The king lives in a big castle.',
                chinese: '国王住在一座大城堡里。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 120,
        tags: [
            '名词'
        ]
    },
    {
        id: 'primary_012',
        word: 'love',
        phonetic: '/lʌv/',
        phoneticUK: '/lʌv/',
        translation: 'v. 爱；喜欢 n. 爱',
        examples: [
            {
                english: 'I love my family.',
                chinese: '我爱我的家人。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: [
            '动词',
            '名词'
        ]
    },
    {
        id: 'primary_013',
        word: 'milk',
        phonetic: '/mɪlk/',
        phoneticUK: '/mɪlk/',
        translation: 'n. 牛奶',
        examples: [
            {
                english: 'I drink milk every morning.',
                chinese: '我每天早上喝牛奶。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: [
            '名词',
            '饮料'
        ]
    },
    {
        id: 'primary_014',
        word: 'nice',
        phonetic: '/naɪs/',
        phoneticUK: '/naɪs/',
        translation: 'adj. 好的；美好的',
        examples: [
            {
                english: 'What a nice day!',
                chinese: '多么美好的一天！',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: [
            '形容词'
        ]
    },
    {
        id: 'primary_015',
        word: 'orange',
        phonetic: '/ˈɔːrɪndʒ/',
        phoneticUK: '/ˈɒrɪndʒ/',
        translation: 'n. 橙子；橙色 adj. 橙色的',
        examples: [
            {
                english: 'I like orange juice.',
                chinese: '我喜欢橙汁。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 110,
        tags: [
            '名词',
            '形容词',
            '水果'
        ]
    },
    {
        id: 'primary_016',
        word: 'pen',
        phonetic: '/pen/',
        phoneticUK: '/pen/',
        translation: 'n. 钢笔；笔',
        examples: [
            {
                english: 'This is my pen.',
                chinese: '这是我的钢笔。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: [
            '名词',
            '学习用品'
        ]
    },
    {
        id: 'primary_017',
        word: 'queen',
        phonetic: '/kwiːn/',
        phoneticUK: '/kwiːn/',
        translation: 'n. 女王；王后',
        examples: [
            {
                english: 'The queen is very beautiful.',
                chinese: '女王非常美丽。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 125,
        tags: [
            '名词'
        ]
    },
    {
        id: 'primary_018',
        word: 'run',
        phonetic: '/rʌn/',
        phoneticUK: '/rʌn/',
        translation: 'v. 跑；奔跑',
        examples: [
            {
                english: 'I can run very fast.',
                chinese: '我能跑得很快。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: [
            '动词'
        ]
    },
    {
        id: 'primary_019',
        word: 'sun',
        phonetic: '/sʌn/',
        phoneticUK: '/sʌn/',
        translation: 'n. 太阳',
        examples: [
            {
                english: 'The sun is shining.',
                chinese: '太阳在照耀。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 88,
        tags: [
            '名词',
            '自然'
        ]
    },
    {
        id: 'primary_020',
        word: 'tree',
        phonetic: '/triː/',
        phoneticUK: '/triː/',
        translation: 'n. 树',
        examples: [
            {
                english: 'There is a big tree in the garden.',
                chinese: '花园里有一棵大树。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 92,
        tags: [
            '名词',
            '植物'
        ]
    }
];
const PRIMARY_SECTIONS = [
    {
        id: 'primary_section_basic',
        wordbookId: 'primary_wordbook',
        name: 'Unit 1: 基础词汇',
        order: 1,
        wordIds: PRIMARY_WORDS.map((w)=>w.id)
    }
];
const PRIMARY_WORDBOOK = {
    id: 'primary_wordbook',
    name: '小学英语词汇',
    description: '小学阶段常用英语单词，适合初学者',
    difficulty: 'CUSTOM',
    totalWords: PRIMARY_WORDS.length,
    sections: PRIMARY_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
};
function getPrimaryWordById(id) {
    return PRIMARY_WORDS.find((w)=>w.id === id);
}
function getPrimaryWordsByIds(ids) {
    return ids.map((id)=>getPrimaryWordById(id)).filter(Boolean);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/utils/wordbook-manager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/cet4-words.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/cet6-words.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/primary-words.ts [app-client] (ecmascript)");
;
;
;
const ALL_WORDBOOKS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_WORDBOOK"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET4_WORDBOOK"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET6_WORDBOOK"]
];
const ALL_WORDS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_WORDS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET4_WORDS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET6_WORDS"]
];
function getWordbookById(id) {
    return ALL_WORDBOOKS.find((wb)=>wb.id === id);
}
function getWordbooksByDifficulty(difficulty) {
    return ALL_WORDBOOKS.filter((wb)=>wb.difficulty === difficulty);
}
function getWordById(id) {
    // 先尝试从小学词库查找
    const primaryWord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryWordById"])(id);
    if (primaryWord) return primaryWord;
    // 再从CET4查找
    const cet4Word = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCET4WordById"])(id);
    if (cet4Word) return cet4Word;
    // 最后从CET6查找
    const cet6Word = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCET6WordById"])(id);
    if (cet6Word) return cet6Word;
    return undefined;
}
function getWordsByIds(ids) {
    return ids.map((id)=>getWordById(id)).filter(Boolean);
}
function getWordbookSection(wordbookId, sectionId) {
    const wordbook = getWordbookById(wordbookId);
    if (!wordbook) return undefined;
    // 检查是否为动态生成的列表ID (例如: primary_list_1)
    if (sectionId.includes('_list_')) {
        const match = sectionId.match(/_list_(\d+)$/);
        if (match) {
            const listIndex = parseInt(match[1]) - 1;
            const pageSize = 50;
            // 获取该词书的所有单词
            let allWords = [];
            if (wordbookId === 'primary_wordbook') allWords = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_WORDS"];
            else if (wordbookId === 'cet4_wordbook') allWords = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET4_WORDS"];
            else if (wordbookId === 'cet6_wordbook') allWords = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET6_WORDS"];
            const start = listIndex * pageSize;
            const end = start + pageSize;
            const wordIds = allWords.slice(start, end).map((w)=>w.id);
            if (wordIds.length > 0) {
                return {
                    id: sectionId,
                    wordbookId: wordbookId,
                    name: `List ${listIndex + 1}`,
                    order: listIndex + 1,
                    wordIds: wordIds
                };
            }
        }
    }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WordbookList",
    ()=>WordbookList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils/wordbook-manager.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function WordbookList({ wordbookId, lists }) {
    _s();
    const [listStats, setListStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showAllWordsModal, setShowAllWordsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedListWords, setSelectedListWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedListName, setSelectedListName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WordbookList.useEffect": ()=>{
            const stats = {};
            lists.forEach({
                "WordbookList.useEffect": (list)=>{
                    // Get words for preview
                    // We use the dynamic section ID format we defined in wordbook-manager
                    const sectionId = `${wordbookId}_list_${list.id}`;
                    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSectionWords"])(wordbookId, sectionId);
                    // Calculate stats from localStorage
                    let learned = 0;
                    let reviewNeeded = 0;
                    if ("TURBOPACK compile-time truthy", 1) {
                        const savedProgress = localStorage.getItem(`bunny_words_progress_${wordbookId}_${sectionId}`);
                        if (savedProgress) {
                            try {
                                const { currentIndex, wrongCount } = JSON.parse(savedProgress);
                                learned = currentIndex || 0;
                                // Simple heuristic: if wrongCount > 0, user needs review
                                // In a real app, we'd check individual word ratings
                                reviewNeeded = wrongCount || 0;
                            } catch (e) {
                                console.error('Failed to parse progress', e);
                            }
                        }
                    }
                    stats[list.id] = {
                        learned,
                        reviewNeeded,
                        total: list.endIndex - list.startIndex,
                        previewWords: words.slice(0, 3).map({
                            "WordbookList.useEffect": (w)=>w.word
                        }["WordbookList.useEffect"]),
                        allWords: words.map({
                            "WordbookList.useEffect": (w)=>({
                                    word: w.word,
                                    translation: w.translation
                                })
                        }["WordbookList.useEffect"])
                    };
                }
            }["WordbookList.useEffect"]);
            setListStats(stats);
        }
    }["WordbookList.useEffect"], [
        wordbookId,
        lists
    ]);
    const handleResetProgress = ()=>{
        if (confirm('确定要重置所有进度吗？此操作不可恢复。')) {
            lists.forEach((list)=>{
                const sectionId = `${wordbookId}_list_${list.id}`;
                localStorage.removeItem(`bunny_words_progress_${wordbookId}_${sectionId}`);
            });
            window.location.reload();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-foreground",
                        children: "单词列表"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: handleResetProgress,
                        className: "text-muted-foreground hover:text-[#E85D75] hover:bg-[#FFF0F3] gap-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 3v9h9"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            "重置进度"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: lists.map((list)=>{
                    const stats = listStats[list.id] || {
                        learned: 0,
                        reviewNeeded: 0,
                        total: 50,
                        previewWords: []
                    };
                    // Construct the dynamic section ID
                    const sectionId = `${wordbookId}_list_${list.id}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white rounded-2xl overflow-hidden group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6 pb-4 border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-foreground",
                                                    children: list.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 41
                                                }, this),
                                                stats.reviewNeeded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-medium rounded-full flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 49
                                                        }, this),
                                                        "需复习 ",
                                                        stats.reviewNeeded,
                                                        " 词"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 109,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-muted-foreground bg-gray-50 px-3 py-1 rounded-full",
                                            children: [
                                                stats.learned,
                                                " / ",
                                                stats.total,
                                                " 词"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 120,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                    lineNumber: 108,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider flex justify-between",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "预览单词"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 128,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 127,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                stats.previewWords.map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 bg-gray-50 text-foreground text-sm rounded-lg border border-gray-100 group-hover:border-pink-100 transition-colors",
                                                        children: word
                                                    }, idx, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 45
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedListWords(stats.allWords || []);
                                                        setSelectedListName(list.name);
                                                        setShowAllWordsModal(true);
                                                    },
                                                    className: "px-3 py-1.5 text-[#E85D75] text-sm font-medium hover:bg-[#FFF0F3] rounded-lg transition-colors cursor-pointer",
                                                    children: "查看全部"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 130,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                    lineNumber: 126,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/wordbook/${wordbookId}/study/${sectionId}?mode=flashcard`,
                                            className: "contents",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                className: "w-full bg-[#FFF5F8] hover:bg-[#FFE4E9] text-[#E85D75] border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none relative overflow-hidden",
                                                children: [
                                                    stats.reviewNeeded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full -mr-1 -mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 49
                                                    }, this),
                                                    "记忆卡片"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 155,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 154,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/wordbook/${wordbookId}/study/${sectionId}?mode=dictation`,
                                            className: "contents",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                className: "w-full bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none",
                                                children: "听写大师"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 166,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 165,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/wordbook/${wordbookId}/study/${sectionId}?mode=choice`,
                                            className: "contents",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                className: "w-full bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none",
                                                children: "词义选择"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 174,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 173,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/wordbook/${wordbookId}/study/${sectionId}?mode=matching`,
                                            className: "contents",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "secondary",
                                                className: "w-full bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none",
                                                children: "连连看"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 182,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                            lineNumber: 181,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                    lineNumber: 153,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                            lineNumber: 107,
                            columnNumber: 29
                        }, this)
                    }, list.id, false, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this),
            showAllWordsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                onClick: ()=>setShowAllWordsModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-foreground",
                                    children: [
                                        selectedListName,
                                        " - 全部单词"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAllWordsModal(false),
                                    className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 216,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 217,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                        lineNumber: 215,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                    lineNumber: 211,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                            lineNumber: 207,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto max-h-[calc(80vh-80px)] p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: selectedListWords.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gray-50 rounded-xl hover:bg-[#FFF5F8] transition-colors border border-gray-100 hover:border-pink-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-lg text-foreground mb-1",
                                                children: item.word
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 230,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: item.translation
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                                lineNumber: 233,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                        lineNumber: 226,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                                lineNumber: 224,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                    lineNumber: 202,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
                lineNumber: 198,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(WordbookList, "+Spm4R/oMchYcce+V9sugk9eXX8=");
_c = WordbookList;
var _c;
__turbopack_context__.k.register(_c, "WordbookList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_bunny-words-homepage_c53f1d05._.js.map