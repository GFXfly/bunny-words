/**
 * CET-4 词库数据
 * 包含CET-4核心词汇
 */

import { Word, Wordbook, WordbookSection } from '../types/word'

// CET-4 核心词汇（示例数据，包含100个高频词）
export const CET4_WORDS: Word[] = [
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
        tags: ['动词', '名词']
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
        tags: ['名词'],
        synonyms: ['capability', 'capacity', 'competence']
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
        tags: ['副词']
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
        tags: ['形容词', '动词'],
        antonyms: ['present']
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
        tags: ['形容词'],
        synonyms: ['complete', 'total', 'utter']
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
        tags: ['动词']
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
        tags: ['形容词', '名词', '动词'],
        antonyms: ['concrete']
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
        tags: ['形容词', '名词']
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
        tags: ['动词'],
        antonyms: ['reject', 'refuse']
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
        tags: ['名词', '动词']
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
        tags: ['名词']
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
        tags: ['动词']
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
        tags: ['动词'],
        synonyms: ['achieve', 'complete', 'fulfill']
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
        tags: ['名词', '动词']
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
        tags: ['名词', '动词']
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
        tags: ['形容词'],
        synonyms: ['precise', 'exact', 'correct'],
        antonyms: ['inaccurate']
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
        tags: ['动词'],
        synonyms: ['accomplish', 'attain', 'reach']
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
        tags: ['动词']
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
        tags: ['动词'],
        synonyms: ['obtain', 'gain', 'get']
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
        tags: ['形容词'],
        antonyms: ['passive', 'inactive']
    },
    {
        id: 'cet4_021',
        word: 'actual',
        phonetic: '/ˈæktʃuəl/',
        phoneticUK: '/ˈæktʃuəl/',
        translation: 'adj. 实际的；真实的；现行的',
        examples: [
            {
                english: 'The actual cost was much higher than expected.',
                chinese: '实际成本比预期高得多。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1456,
        tags: ['形容词']
    },
    {
        id: 'cet4_022',
        word: 'adapt',
        phonetic: '/əˈdæpt/',
        phoneticUK: '/əˈdæpt/',
        translation: 'v. 适应；改编；调整',
        examples: [
            {
                english: 'It took him a while to adapt to the new environment.',
                chinese: '他花了一段时间才适应新环境。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: ['动词'],
        synonyms: ['adjust', 'modify']
    },
    {
        id: 'cet4_023',
        word: 'adequate',
        phonetic: '/ˈædɪkwət/',
        phoneticUK: '/ˈædɪkwət/',
        translation: 'adj. 足够的；充分的；适当的',
        examples: [
            {
                english: 'We need adequate time to prepare for the exam.',
                chinese: '我们需要充足的时间准备考试。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2567,
        tags: ['形容词'],
        synonyms: ['sufficient', 'enough'],
        antonyms: ['inadequate']
    },
    {
        id: 'cet4_024',
        word: 'adjust',
        phonetic: '/əˈdʒʌst/',
        phoneticUK: '/əˈdʒʌst/',
        translation: 'v. 调整；适应；校准',
        examples: [
            {
                english: 'You can adjust the seat to make yourself comfortable.',
                chinese: '你可以调整座位让自己舒服些。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1789,
        tags: ['动词']
    },
    {
        id: 'cet4_025',
        word: 'admire',
        phonetic: '/ədˈmaɪər/',
        phoneticUK: '/ədˈmaɪə(r)/',
        translation: 'v. 钦佩；赞赏；欣赏',
        examples: [
            {
                english: 'I admire her courage and determination.',
                chinese: '我钦佩她的勇气和决心。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1923,
        tags: ['动词']
    },
    {
        id: 'cet4_026',
        word: 'admit',
        phonetic: '/ədˈmɪt/',
        phoneticUK: '/ədˈmɪt/',
        translation: 'v. 承认；准许进入；接纳',
        examples: [
            {
                english: 'He admitted that he had made a mistake.',
                chinese: '他承认自己犯了错误。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1234,
        tags: ['动词'],
        antonyms: ['deny']
    },
    {
        id: 'cet4_027',
        word: 'adopt',
        phonetic: '/əˈdɑːpt/',
        phoneticUK: '/əˈdɒpt/',
        translation: 'v. 采用；收养；接受',
        examples: [
            {
                english: 'The company decided to adopt a new strategy.',
                chinese: '公司决定采用新策略。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2456,
        tags: ['动词']
    },
    {
        id: 'cet4_028',
        word: 'advance',
        phonetic: '/ədˈvæns/',
        phoneticUK: '/ədˈvɑːns/',
        translation: 'v. 前进；提前；促进 n. 前进；进步；预付款 adj. 预先的',
        examples: [
            {
                english: 'Technology has advanced rapidly in recent years.',
                chinese: '近年来技术进步迅速。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1678,
        tags: ['动词', '名词', '形容词']
    },
    {
        id: 'cet4_029',
        word: 'advantage',
        phonetic: '/ədˈvæntɪdʒ/',
        phoneticUK: '/ədˈvɑːntɪdʒ/',
        translation: 'n. 优势；利益；好处',
        examples: [
            {
                english: 'One advantage of living in the city is convenience.',
                chinese: '住在城市的一个优势是便利。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 987,
        tags: ['名词'],
        antonyms: ['disadvantage']
    },
    {
        id: 'cet4_030',
        word: 'advertise',
        phonetic: '/ˈædvərtaɪz/',
        phoneticUK: '/ˈædvətaɪz/',
        translation: 'v. 做广告；宣传；公布',
        examples: [
            {
                english: 'They advertised the job in the local newspaper.',
                chinese: '他们在当地报纸上刊登了招聘广告。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2123,
        tags: ['动词']
    },
    {
        id: 'cet4_031',
        word: 'advice',
        phonetic: '/ədˈvaɪs/',
        phoneticUK: '/ədˈvaɪs/',
        translation: 'n. 建议；忠告；劝告',
        examples: [
            {
                english: 'Let me give you some advice on how to study effectively.',
                chinese: '让我给你一些关于如何有效学习的建议。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1345,
        tags: ['名词']
    },
    {
        id: 'cet4_032',
        word: 'affect',
        phonetic: '/əˈfekt/',
        phoneticUK: '/əˈfekt/',
        translation: 'v. 影响；感动；侵袭',
        examples: [
            {
                english: 'The weather can affect our mood.',
                chinese: '天气会影响我们的心情。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1567,
        tags: ['动词'],
        synonyms: ['influence', 'impact']
    },
    {
        id: 'cet4_033',
        word: 'afford',
        phonetic: '/əˈfɔːrd/',
        phoneticUK: '/əˈfɔːd/',
        translation: 'v. 买得起；承担得起；提供',
        examples: [
            {
                english: 'I cannot afford to buy a new car right now.',
                chinese: '我现在买不起新车。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1789,
        tags: ['动词']
    },
    {
        id: 'cet4_034',
        word: 'agent',
        phonetic: '/ˈeɪdʒənt/',
        phoneticUK: '/ˈeɪdʒənt/',
        translation: 'n. 代理人；代理商；特工；剂',
        examples: [
            {
                english: 'She works as a real estate agent.',
                chinese: '她是一名房地产经纪人。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: ['名词']
    },
    {
        id: 'cet4_035',
        word: 'agriculture',
        phonetic: '/ˈæɡrɪkʌltʃər/',
        phoneticUK: '/ˈæɡrɪkʌltʃə(r)/',
        translation: 'n. 农业；农学；农艺',
        examples: [
            {
                english: 'Agriculture is the main industry in this region.',
                chinese: '农业是这个地区的主要产业。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2567,
        tags: ['名词']
    },
    {
        id: 'cet4_036',
        word: 'aim',
        phonetic: '/eɪm/',
        phoneticUK: '/eɪm/',
        translation: 'v. 瞄准；针对；致力 n. 目标；目的',
        examples: [
            {
                english: 'Our aim is to provide the best service possible.',
                chinese: '我们的目标是提供最好的服务。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1456,
        tags: ['动词', '名词'],
        synonyms: ['goal', 'objective', 'target']
    },
    {
        id: 'cet4_037',
        word: 'alarm',
        phonetic: '/əˈlɑːrm/',
        phoneticUK: '/əˈlɑːm/',
        translation: 'n. 警报；闹钟；惊恐 v. 使惊恐；警告',
        examples: [
            {
                english: 'The fire alarm went off at midnight.',
                chinese: '火警警报在午夜响起。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1923,
        tags: ['名词', '动词']
    },
    {
        id: 'cet4_038',
        word: 'alcohol',
        phonetic: '/ˈælkəhɔːl/',
        phoneticUK: '/ˈælkəhɒl/',
        translation: 'n. 酒精；含酒精的饮料',
        examples: [
            {
                english: 'Drinking too much alcohol is harmful to health.',
                chinese: '饮酒过量有害健康。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2123,
        tags: ['名词']
    },
    {
        id: 'cet4_039',
        word: 'alike',
        phonetic: '/əˈlaɪk/',
        phoneticUK: '/əˈlaɪk/',
        translation: 'adj. 相似的；相同的 adv. 同样地；相似地',
        examples: [
            {
                english: 'The two sisters look very much alike.',
                chinese: '这两姐妹长得非常像。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2345,
        tags: ['形容词', '副词'],
        synonyms: ['similar']
    },
    {
        id: 'cet4_040',
        word: 'allow',
        phonetic: '/əˈlaʊ/',
        phoneticUK: '/əˈlaʊ/',
        translation: 'v. 允许；准许；给予',
        examples: [
            {
                english: 'Smoking is not allowed in this building.',
                chinese: '这栋楼内禁止吸烟。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 876,
        tags: ['动词'],
        synonyms: ['permit'],
        antonyms: ['forbid', 'prohibit']
    },
    {
        id: 'cet4_041',
        word: 'almost',
        phonetic: '/ˈɔːlmoʊst/',
        phoneticUK: '/ˈɔːlməʊst/',
        translation: 'adv. 几乎；差不多',
        examples: [
            {
                english: 'It is almost time to go home.',
                chinese: '差不多该回家了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 654,
        tags: ['副词'],
        synonyms: ['nearly']
    },
    {
        id: 'cet4_042',
        word: 'alternative',
        phonetic: '/ɔːlˈtɜːrnətɪv/',
        phoneticUK: '/ɔːlˈtɜːnətɪv/',
        translation: 'n. 替代品；选择 adj. 可供选择的；替代的',
        examples: [
            {
                english: 'We have no alternative but to wait.',
                chinese: '我们别无选择只能等待。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2456,
        tags: ['名词', '形容词']
    },
    {
        id: 'cet4_043',
        word: 'amaze',
        phonetic: '/əˈmeɪz/',
        phoneticUK: '/əˈmeɪz/',
        translation: 'v. 使惊奇；使惊愕',
        examples: [
            {
                english: 'Her performance never fails to amaze me.',
                chinese: '她的表演总是让我惊叹。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1987,
        tags: ['动词'],
        synonyms: ['astonish', 'surprise']
    },
    {
        id: 'cet4_044',
        word: 'ambition',
        phonetic: '/æmˈbɪʃn/',
        phoneticUK: '/æmˈbɪʃn/',
        translation: 'n. 雄心；抱负；野心',
        examples: [
            {
                english: 'His ambition is to become a successful entrepreneur.',
                chinese: '他的抱负是成为一名成功的企业家。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: ['名词']
    },
    {
        id: 'cet4_045',
        word: 'amount',
        phonetic: '/əˈmaʊnt/',
        phoneticUK: '/əˈmaʊnt/',
        translation: 'n. 数量；总额 v. 总计；等于',
        examples: [
            {
                english: 'A large amount of money was spent on the project.',
                chinese: '这个项目花费了大量资金。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1123,
        tags: ['名词', '动词']
    },
    {
        id: 'cet4_046',
        word: 'amuse',
        phonetic: '/əˈmjuːz/',
        phoneticUK: '/əˈmjuːz/',
        translation: 'v. 逗乐；娱乐；消遣',
        examples: [
            {
                english: 'The clown amused the children with his tricks.',
                chinese: '小丑用他的把戏逗乐了孩子们。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2123,
        tags: ['动词']
    },
    {
        id: 'cet4_047',
        word: 'analyze',
        phonetic: '/ˈænəlaɪz/',
        phoneticUK: '/ˈænəlaɪz/',
        translation: 'v. 分析；解析；研究',
        examples: [
            {
                english: 'We need to analyze the data carefully.',
                chinese: '我们需要仔细分析数据。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1789,
        tags: ['动词'],
        synonyms: ['examine', 'study']
    },
    {
        id: 'cet4_048',
        word: 'ancient',
        phonetic: '/ˈeɪnʃənt/',
        phoneticUK: '/ˈeɪnʃənt/',
        translation: 'adj. 古代的；古老的；年老的',
        examples: [
            {
                english: 'They visited many ancient temples in Egypt.',
                chinese: '他们参观了埃及的许多古庙。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1567,
        tags: ['形容词'],
        antonyms: ['modern']
    },
    {
        id: 'cet4_049',
        word: 'anger',
        phonetic: '/ˈæŋɡər/',
        phoneticUK: '/ˈæŋɡə(r)/',
        translation: 'n. 愤怒；怒气 v. 使发怒；激怒',
        examples: [
            {
                english: 'He could not hide his anger at the decision.',
                chinese: '他无法掩饰对这个决定的愤怒。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1923,
        tags: ['名词', '动词']
    },
    {
        id: 'cet4_050',
        word: 'angle',
        phonetic: '/ˈæŋɡl/',
        phoneticUK: '/ˈæŋɡl/',
        translation: 'n. 角；角度；观点 v. 钓鱼；谋取',
        examples: [
            {
                english: 'Look at the problem from a different angle.',
                chinese: '从不同的角度看这个问题。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: ['名词', '动词']
    },
    {
        id: 'cet4_051',
        word: 'announce',
        phonetic: '/əˈnaʊns/',
        phoneticUK: '/əˈnaʊns/',
        translation: 'v. 宣布；宣告；通知',
        examples: [
            {
                english: 'The company announced a new product launch.',
                chinese: '公司宣布推出新产品。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1456,
        tags: ['动词']
    },
    {
        id: 'cet4_052',
        word: 'annoy',
        phonetic: '/əˈnɔɪ/',
        phoneticUK: '/əˈnɔɪ/',
        translation: 'v. 使烦恼；打扰；骚扰',
        examples: [
            {
                english: 'The noise from the construction site annoyed the neighbors.',
                chinese: '建筑工地的噪音让邻居们很烦恼。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2123,
        tags: ['动词'],
        synonyms: ['irritate', 'bother']
    },
    {
        id: 'cet4_053',
        word: 'annual',
        phonetic: '/ˈænjuəl/',
        phoneticUK: '/ˈænjuəl/',
        translation: 'adj. 每年的；年度的 n. 年刊；年鉴',
        examples: [
            {
                english: 'The company holds an annual meeting every December.',
                chinese: '公司每年12月举行年度会议。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1789,
        tags: ['形容词', '名词']
    },
    {
        id: 'cet4_054',
        word: 'anticipate',
        phonetic: '/ænˈtɪsɪpeɪt/',
        phoneticUK: '/ænˈtɪsɪpeɪt/',
        translation: 'v. 预期；预料；期望',
        examples: [
            {
                english: 'We anticipate that sales will increase next quarter.',
                chinese: '我们预计下个季度销售额会增长。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2456,
        tags: ['动词'],
        synonyms: ['expect', 'foresee']
    },
    {
        id: 'cet4_055',
        word: 'anxiety',
        phonetic: '/æŋˈzaɪəti/',
        phoneticUK: '/æŋˈzaɪəti/',
        translation: 'n. 焦虑；忧虑；渴望',
        examples: [
            {
                english: 'She felt great anxiety before the exam.',
                chinese: '她在考试前感到非常焦虑。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: ['名词']
    },
    {
        id: 'cet4_056',
        word: 'anxious',
        phonetic: '/ˈæŋkʃəs/',
        phoneticUK: '/ˈæŋkʃəs/',
        translation: 'adj. 焦虑的；担心的；渴望的',
        examples: [
            {
                english: 'I am anxious about the results of the test.',
                chinese: '我对考试结果感到焦虑。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1567,
        tags: ['形容词']
    },
    {
        id: 'cet4_057',
        word: 'apart',
        phonetic: '/əˈpɑːrt/',
        phoneticUK: '/əˈpɑːt/',
        translation: 'adv. 分开地；相距；除去 adj. 分离的',
        examples: [
            {
                english: 'The two buildings are 100 meters apart.',
                chinese: '这两栋建筑相距100米。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1234,
        tags: ['副词', '形容词']
    },
    {
        id: 'cet4_058',
        word: 'apologize',
        phonetic: '/əˈpɑːlədʒaɪz/',
        phoneticUK: '/əˈpɒlədʒaɪz/',
        translation: 'v. 道歉；谢罪；辩解',
        examples: [
            {
                english: 'I apologize for being late to the meeting.',
                chinese: '我为开会迟到道歉。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1923,
        tags: ['动词']
    },
    {
        id: 'cet4_059',
        word: 'apparent',
        phonetic: '/əˈpærənt/',
        phoneticUK: '/əˈpærənt/',
        translation: 'adj. 显然的；明显的；表面上的',
        examples: [
            {
                english: 'It was apparent that she was not telling the truth.',
                chinese: '很明显她没有说实话。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2345,
        tags: ['形容词'],
        synonyms: ['obvious', 'evident', 'clear']
    },
    {
        id: 'cet4_060',
        word: 'appeal',
        phonetic: '/əˈpiːl/',
        phoneticUK: '/əˈpiːl/',
        translation: 'v. 呼吁；上诉；吸引 n. 呼吁；上诉；吸引力',
        examples: [
            {
                english: 'The charity appealed for donations.',
                chinese: '慈善机构呼吁捐款。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1789,
        tags: ['动词', '名词']
    },
    {
        id: 'cet4_061',
        word: 'appear',
        phonetic: '/əˈpɪr/',
        phoneticUK: '/əˈpɪə(r)/',
        translation: 'v. 出现；显得；似乎；公开露面',
        examples: [
            {
                english: 'A rainbow appeared in the sky after the rain.',
                chinese: '雨后天空出现了彩虹。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 987,
        tags: ['动词'],
        antonyms: ['disappear']
    },
    {
        id: 'cet4_062',
        word: 'appetite',
        phonetic: '/ˈæpɪtaɪt/',
        phoneticUK: '/ˈæpɪtaɪt/',
        translation: 'n. 食欲；胃口；欲望',
        examples: [
            {
                english: 'Exercise can improve your appetite.',
                chinese: '运动可以增进食欲。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2123,
        tags: ['名词']
    },
    {
        id: 'cet4_063',
        word: 'applaud',
        phonetic: '/əˈplɔːd/',
        phoneticUK: '/əˈplɔːd/',
        translation: 'v. 鼓掌；称赞；赞成',
        examples: [
            {
                english: 'The audience applauded loudly at the end of the performance.',
                chinese: '演出结束时观众热烈鼓掌。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2456,
        tags: ['动词'],
        synonyms: ['praise', 'commend']
    },
    {
        id: 'cet4_064',
        word: 'application',
        phonetic: '/ˌæplɪˈkeɪʃn/',
        phoneticUK: '/ˌæplɪˈkeɪʃn/',
        translation: 'n. 应用；申请；应用程序',
        examples: [
            {
                english: 'Please submit your application before the deadline.',
                chinese: '请在截止日期前提交申请。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1234,
        tags: ['名词']
    },
    {
        id: 'cet4_065',
        word: 'apply',
        phonetic: '/əˈplaɪ/',
        phoneticUK: '/əˈplaɪ/',
        translation: 'v. 申请；应用；涂抹',
        examples: [
            {
                english: 'I plan to apply for a scholarship.',
                chinese: '我计划申请奖学金。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1456,
        tags: ['动词']
    },
    {
        id: 'cet4_066',
        word: 'appoint',
        phonetic: '/əˈpɔɪnt/',
        phoneticUK: '/əˈpɔɪnt/',
        translation: 'v. 任命；指定；约定',
        examples: [
            {
                english: 'They appointed her as the new manager.',
                chinese: '他们任命她为新经理。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: ['动词']
    },
    {
        id: 'cet4_067',
        word: 'appreciate',
        phonetic: '/əˈpriːʃieɪt/',
        phoneticUK: '/əˈpriːʃieɪt/',
        translation: 'v. 欣赏；感激；理解；增值',
        examples: [
            {
                english: 'I really appreciate your help.',
                chinese: '我真的很感激你的帮助。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1567,
        tags: ['动词']
    },
    {
        id: 'cet4_068',
        word: 'approach',
        phonetic: '/əˈproʊtʃ/',
        phoneticUK: '/əˈprəʊtʃ/',
        translation: 'v. 接近；着手处理 n. 方法；途径；接近',
        examples: [
            {
                english: 'We need a new approach to solve this problem.',
                chinese: '我们需要新方法来解决这个问题。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1789,
        tags: ['动词', '名词']
    },
    {
        id: 'cet4_069',
        word: 'appropriate',
        phonetic: '/əˈproʊpriət/',
        phoneticUK: '/əˈprəʊpriət/',
        translation: 'adj. 适当的；恰当的 v. 占用；拨出',
        examples: [
            {
                english: 'Please wear appropriate clothing for the occasion.',
                chinese: '请穿适合这个场合的衣服。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1923,
        tags: ['形容词', '动词'],
        synonyms: ['suitable', 'proper'],
        antonyms: ['inappropriate']
    },
    {
        id: 'cet4_070',
        word: 'approve',
        phonetic: '/əˈpruːv/',
        phoneticUK: '/əˈpruːv/',
        translation: 'v. 批准；赞成；同意',
        examples: [
            {
                english: 'The committee approved the proposal.',
                chinese: '委员会批准了这项提案。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2123,
        tags: ['动词'],
        antonyms: ['disapprove', 'reject']
    }
]

// CET-4 词书章节划分（按字母顺序）
export const CET4_SECTIONS: WordbookSection[] = [
    {
        id: 'cet4_section_a',
        wordbookId: 'cet4_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET4_WORDS.filter(w => w.word.startsWith('a')).map(w => w.id)
    }
]

// CET-4 词书
export const CET4_WORDBOOK: Wordbook = {
    id: 'cet4_wordbook',
    name: 'CET-4 核心词汇',
    description: '大学英语四级考试核心词汇，包含高频必考单词',
    coverImage: '/cet4-wordbook-cover.png',
    difficulty: 'CET4',
    totalWords: CET4_WORDS.length,
    sections: CET4_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}

// 导出便捷函数
export function getCET4WordById(id: string | number): Word | undefined {
    return CET4_WORDS.find(w => w.id === id)
}

export function getCET4WordsByIds(ids: (string | number)[]): Word[] {
    return ids.map(id => getCET4WordById(id)).filter(Boolean) as Word[]
}
