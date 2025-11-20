/**
 * 小学英语词库
 * 包含小学阶段常用英语单词
 */

import { Word, Wordbook, WordbookSection } from '../types/word'

// 小学英语词汇（常用基础词汇）
export const PRIMARY_WORDS: Word[] = [
    // Unit 1: 基础词汇 (1-50)
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
        tags: ['名词', '水果']
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
        tags: ['名词', '学习用品']
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
        tags: ['名词', '动物']
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
        tags: ['名词', '动物']
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
        tags: ['名词', '食物']
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
        tags: ['名词', '动物']
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
        tags: ['形容词']
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
        tags: ['形容词'],
        antonyms: ['sad']
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
        tags: ['名词']
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
        tags: ['动词']
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
        tags: ['名词']
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
        tags: ['动词', '名词']
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
        tags: ['名词', '饮料']
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
        tags: ['形容词']
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
        tags: ['名词', '形容词', '水果']
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
        tags: ['名词', '学习用品']
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
        tags: ['名词']
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
        tags: ['动词']
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
        tags: ['名词', '自然']
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
        tags: ['名词', '植物']
    },
    {
        id: 'primary_021',
        word: 'ant',
        phonetic: '/ænt/',
        phoneticUK: '/ænt/',
        translation: 'n. 蚂蚁',
        examples: [
            {
                english: 'Ants are very hardworking.',
                chinese: '蚂蚁非常勤劳。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 150,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_022',
        word: 'bag',
        phonetic: '/bæɡ/',
        phoneticUK: '/bæɡ/',
        translation: 'n. 包；袋',
        examples: [
            {
                english: 'I put my books in my bag.',
                chinese: '我把书放进包里。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '学习用品']
    },
    {
        id: 'primary_023',
        word: 'bed',
        phonetic: '/bed/',
        phoneticUK: '/bed/',
        translation: 'n. 床',
        examples: [
            {
                english: 'It is time to go to bed.',
                chinese: '该上床睡觉了。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '家具']
    },
    {
        id: 'primary_024',
        word: 'big',
        phonetic: '/bɪɡ/',
        phoneticUK: '/bɪɡ/',
        translation: 'adj. 大的',
        examples: [
            {
                english: 'The elephant is very big.',
                chinese: '大象非常大。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['形容词'],
        antonyms: ['small']
    },
    {
        id: 'primary_025',
        word: 'bird',
        phonetic: '/bɜːrd/',
        phoneticUK: '/bɜːd/',
        translation: 'n. 鸟',
        examples: [
            {
                english: 'The bird is singing in the tree.',
                chinese: '鸟儿在树上唱歌。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_026',
        word: 'blue',
        phonetic: '/bluː/',
        phoneticUK: '/bluː/',
        translation: 'n. 蓝色 adj. 蓝色的',
        examples: [
            {
                english: 'The sky is blue.',
                chinese: '天空是蓝色的。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_027',
        word: 'boy',
        phonetic: '/bɔɪ/',
        phoneticUK: '/bɔɪ/',
        translation: 'n. 男孩',
        examples: [
            {
                english: 'He is a clever boy.',
                chinese: '他是个聪明的男孩。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_028',
        word: 'bus',
        phonetic: '/bʌs/',
        phoneticUK: '/bʌs/',
        translation: 'n. 公共汽车',
        examples: [
            {
                english: 'I go to school by bus.',
                chinese: '我乘公交车去上学。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_029',
        word: 'car',
        phonetic: '/kɑːr/',
        phoneticUK: '/kɑː(r)/',
        translation: 'n. 汽车',
        examples: [
            {
                english: 'My father has a new car.',
                chinese: '我爸爸有一辆新车。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_030',
        word: 'cake',
        phonetic: '/keɪk/',
        phoneticUK: '/keɪk/',
        translation: 'n. 蛋糕',
        examples: [
            {
                english: 'I like chocolate cake.',
                chinese: '我喜欢巧克力蛋糕。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_031',
        word: 'cow',
        phonetic: '/kaʊ/',
        phoneticUK: '/kaʊ/',
        translation: 'n. 母牛；奶牛',
        examples: [
            {
                english: 'The cow gives us milk.',
                chinese: '奶牛给我们提供牛奶。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 110,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_032',
        word: 'day',
        phonetic: '/deɪ/',
        phoneticUK: '/deɪ/',
        translation: 'n. 一天；白天',
        examples: [
            {
                english: 'Have a nice day!',
                chinese: '祝你度过美好的一天！',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_033',
        word: 'desk',
        phonetic: '/desk/',
        phoneticUK: '/desk/',
        translation: 'n. 书桌；办公桌',
        examples: [
            {
                english: 'There is a book on the desk.',
                chinese: '书桌上有一本书。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家具']
    },
    {
        id: 'primary_034',
        word: 'duck',
        phonetic: '/dʌk/',
        phoneticUK: '/dʌk/',
        translation: 'n. 鸭子',
        examples: [
            {
                english: 'The duck can swim.',
                chinese: '鸭子会游泳。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_035',
        word: 'ear',
        phonetic: '/ɪr/',
        phoneticUK: '/ɪə(r)/',
        translation: 'n. 耳朵',
        examples: [
            {
                english: 'Rabbits have long ears.',
                chinese: '兔子有长耳朵。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_036',
        word: 'eye',
        phonetic: '/aɪ/',
        phoneticUK: '/aɪ/',
        translation: 'n. 眼睛',
        examples: [
            {
                english: 'Close your eyes.',
                chinese: '闭上你的眼睛。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_037',
        word: 'face',
        phonetic: '/feɪs/',
        phoneticUK: '/feɪs/',
        translation: 'n. 脸',
        examples: [
            {
                english: 'Wash your face.',
                chinese: '洗洗你的脸。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_038',
        word: 'fan',
        phonetic: '/fæn/',
        phoneticUK: '/fæn/',
        translation: 'n. 风扇；扇子；迷',
        examples: [
            {
                english: 'Turn on the fan, please.',
                chinese: '请打开风扇。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 120,
        tags: ['名词']
    },
    {
        id: 'primary_039',
        word: 'foot',
        phonetic: '/fʊt/',
        phoneticUK: '/fʊt/',
        translation: 'n. 脚；足',
        examples: [
            {
                english: 'My foot hurts.',
                chinese: '我的脚疼。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_040',
        word: 'girl',
        phonetic: '/ɡɜːrl/',
        phoneticUK: '/ɡɜːl/',
        translation: 'n. 女孩',
        examples: [
            {
                english: 'She is a beautiful girl.',
                chinese: '她是个漂亮的女孩。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_041',
        word: 'hand',
        phonetic: '/hænd/',
        phoneticUK: '/hænd/',
        translation: 'n. 手',
        examples: [
            {
                english: 'Raise your hand.',
                chinese: '举起你的手。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_042',
        word: 'hat',
        phonetic: '/hæt/',
        phoneticUK: '/hæt/',
        translation: 'n. 帽子',
        examples: [
            {
                english: 'I have a red hat.',
                chinese: '我有一顶红帽子。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_043',
        word: 'head',
        phonetic: '/hed/',
        phoneticUK: '/hed/',
        translation: 'n. 头',
        examples: [
            {
                english: 'Nod your head.',
                chinese: '点点头。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_044',
        word: 'kite',
        phonetic: '/kaɪt/',
        phoneticUK: '/kaɪt/',
        translation: 'n. 风筝',
        examples: [
            {
                english: 'Let\'s fly a kite.',
                chinese: '我们去放风筝吧。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 130,
        tags: ['名词', '玩具']
    },
    {
        id: 'primary_045',
        word: 'leg',
        phonetic: '/leɡ/',
        phoneticUK: '/leɡ/',
        translation: 'n. 腿',
        examples: [
            {
                english: 'He broke his leg.',
                chinese: '他摔断了腿。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_046',
        word: 'map',
        phonetic: '/mæp/',
        phoneticUK: '/mæp/',
        translation: 'n. 地图',
        examples: [
            {
                english: 'Look at the map.',
                chinese: '看地图。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 110,
        tags: ['名词', '学习用品']
    },
    {
        id: 'primary_047',
        word: 'mom',
        phonetic: '/mɑːm/',
        phoneticUK: '/mɒm/',
        translation: 'n. 妈妈',
        examples: [
            {
                english: 'I love my mom.',
                chinese: '我爱我的妈妈。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 20,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_048',
        word: 'nose',
        phonetic: '/noʊz/',
        phoneticUK: '/nəʊz/',
        translation: 'n. 鼻子',
        examples: [
            {
                english: 'Touch your nose.',
                chinese: '摸摸你的鼻子。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_049',
        word: 'pig',
        phonetic: '/pɪɡ/',
        phoneticUK: '/pɪɡ/',
        translation: 'n. 猪',
        examples: [
            {
                english: 'The pig is fat.',
                chinese: '这头猪很胖。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_050',
        word: 'red',
        phonetic: '/red/',
        phoneticUK: '/red/',
        translation: 'n. 红色 adj. 红色的',
        examples: [
            {
                english: 'Apples are red.',
                chinese: '苹果是红色的。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '形容词', '颜色']
    },
    // Unit 2: 进阶词汇 (51-100)
    {
        id: 'primary_051',
        word: 'rice',
        phonetic: '/raɪs/',
        phoneticUK: '/raɪs/',
        translation: 'n. 米饭',
        examples: [
            {
                english: 'I eat rice for lunch.',
                chinese: '我午餐吃米饭。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_052',
        word: 'school',
        phonetic: '/skuːl/',
        phoneticUK: '/skuːl/',
        translation: 'n. 学校',
        examples: [
            {
                english: 'I go to school every day.',
                chinese: '我每天去上学。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_053',
        word: 'six',
        phonetic: '/sɪks/',
        phoneticUK: '/sɪks/',
        translation: 'num. 六',
        examples: [
            {
                english: 'I have six pencils.',
                chinese: '我有六支铅笔。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['数词']
    },
    {
        id: 'primary_054',
        word: 'star',
        phonetic: '/stɑːr/',
        phoneticUK: '/stɑː(r)/',
        translation: 'n. 星星；明星',
        examples: [
            {
                english: 'Look at the stars in the sky.',
                chinese: '看天上的星星。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_055',
        word: 'stop',
        phonetic: '/stɑːp/',
        phoneticUK: '/stɒp/',
        translation: 'v. 停止 n. 车站',
        examples: [
            {
                english: 'The bus stopped.',
                chinese: '公交车停了。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_056',
        word: 'tea',
        phonetic: '/tiː/',
        phoneticUK: '/tiː/',
        translation: 'n. 茶',
        examples: [
            {
                english: 'Would you like some tea?',
                chinese: '你想喝点茶吗？',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '饮料']
    },
    {
        id: 'primary_057',
        word: 'ten',
        phonetic: '/ten/',
        phoneticUK: '/ten/',
        translation: 'num. 十',
        examples: [
            {
                english: 'I have ten fingers.',
                chinese: '我有十个手指。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['数词']
    },
    {
        id: 'primary_058',
        word: 'toy',
        phonetic: '/tɔɪ/',
        phoneticUK: '/tɔɪ/',
        translation: 'n. 玩具',
        examples: [
            {
                english: 'This is my favorite toy.',
                chinese: '这是我最喜欢的玩具。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '玩具']
    },
    {
        id: 'primary_059',
        word: 'two',
        phonetic: '/tuː/',
        phoneticUK: '/tuː/',
        translation: 'num. 二',
        examples: [
            {
                english: 'I have two hands.',
                chinese: '我有两只手。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['数词']
    },
    {
        id: 'primary_060',
        word: 'water',
        phonetic: '/ˈwɔːtər/',
        phoneticUK: '/ˈwɔːtə(r)/',
        translation: 'n. 水',
        examples: [
            {
                english: 'Drink more water.',
                chinese: '多喝水。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '饮料']
    },
    {
        id: 'primary_061',
        word: 'zoo',
        phonetic: '/zuː/',
        phoneticUK: '/zuː/',
        translation: 'n. 动物园',
        examples: [
            {
                english: 'We went to the zoo yesterday.',
                chinese: '我们昨天去了动物园。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_062',
        word: 'arm',
        phonetic: '/ɑːrm/',
        phoneticUK: '/ɑːm/',
        translation: 'n. 手臂',
        examples: [
            {
                english: 'He has strong arms.',
                chinese: '他有强壮的手臂。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_063',
        word: 'bear',
        phonetic: '/ber/',
        phoneticUK: '/beə(r)/',
        translation: 'n. 熊',
        examples: [
            {
                english: 'The bear is sleeping.',
                chinese: '熊正在睡觉。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 110,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_064',
        word: 'bike',
        phonetic: '/baɪk/',
        phoneticUK: '/baɪk/',
        translation: 'n. 自行车',
        examples: [
            {
                english: 'I ride my bike to the park.',
                chinese: '我骑自行车去公园。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_065',
        word: 'boat',
        phonetic: '/boʊt/',
        phoneticUK: '/bəʊt/',
        translation: 'n. 小船',
        examples: [
            {
                english: 'We are rowing a boat.',
                chinese: '我们正在划船。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 120,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_066',
        word: 'box',
        phonetic: '/bɑːks/',
        phoneticUK: '/bɒks/',
        translation: 'n. 盒子；箱子',
        examples: [
            {
                english: 'Open the box.',
                chinese: '打开盒子。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词']
    },
    {
        id: 'primary_067',
        word: 'bread',
        phonetic: '/bred/',
        phoneticUK: '/bred/',
        translation: 'n. 面包',
        examples: [
            {
                english: 'I eat bread for breakfast.',
                chinese: '我早餐吃面包。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_068',
        word: 'chair',
        phonetic: '/tʃer/',
        phoneticUK: '/tʃeə(r)/',
        translation: 'n. 椅子',
        examples: [
            {
                english: 'Sit on the chair.',
                chinese: '坐在椅子上。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '家具']
    },
    {
        id: 'primary_069',
        word: 'class',
        phonetic: '/klæs/',
        phoneticUK: '/klɑːs/',
        translation: 'n. 班级；课',
        examples: [
            {
                english: 'I am in Class One.',
                chinese: '我在一班。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_070',
        word: 'coat',
        phonetic: '/koʊt/',
        phoneticUK: '/kəʊt/',
        translation: 'n. 外套',
        examples: [
            {
                english: 'Put on your coat.',
                chinese: '穿上你的外套。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_071',
        word: 'cold',
        phonetic: '/koʊld/',
        phoneticUK: '/kəʊld/',
        translation: 'adj. 冷的 n. 感冒',
        examples: [
            {
                english: 'It is very cold today.',
                chinese: '今天很冷。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词', '名词']
    },
    {
        id: 'primary_072',
        word: 'cool',
        phonetic: '/kuːl/',
        phoneticUK: '/kuːl/',
        translation: 'adj. 凉爽的；酷的',
        examples: [
            {
                english: 'The weather is cool.',
                chinese: '天气很凉爽。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['形容词']
    },
    {
        id: 'primary_073',
        word: 'dad',
        phonetic: '/dæd/',
        phoneticUK: '/dæd/',
        translation: 'n. 爸爸',
        examples: [
            {
                english: 'My dad is a doctor.',
                chinese: '我爸爸是医生。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_074',
        word: 'dance',
        phonetic: '/dæns/',
        phoneticUK: '/dɑːns/',
        translation: 'v. 跳舞 n. 舞蹈',
        examples: [
            {
                english: 'She likes to dance.',
                chinese: '她喜欢跳舞。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_075',
        word: 'door',
        phonetic: '/dɔːr/',
        phoneticUK: '/dɔː(r)/',
        translation: 'n. 门',
        examples: [
            {
                english: 'Open the door.',
                chinese: '开门。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词']
    },
    {
        id: 'primary_076',
        word: 'draw',
        phonetic: '/drɔː/',
        phoneticUK: '/drɔː/',
        translation: 'v. 画',
        examples: [
            {
                english: 'I can draw a picture.',
                chinese: '我会画画。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_077',
        word: 'drink',
        phonetic: '/drɪŋk/',
        phoneticUK: '/drɪŋk/',
        translation: 'v. 喝 n. 饮料',
        examples: [
            {
                english: 'I drink water.',
                chinese: '我喝水。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_078',
        word: 'eat',
        phonetic: '/iːt/',
        phoneticUK: '/iːt/',
        translation: 'v. 吃',
        examples: [
            {
                english: 'I eat an apple.',
                chinese: '我吃一个苹果。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词']
    },
    {
        id: 'primary_079',
        word: 'elephant',
        phonetic: '/ˈelɪfənt/',
        phoneticUK: '/ˈelɪfənt/',
        translation: 'n. 大象',
        examples: [
            {
                english: 'The elephant has a long nose.',
                chinese: '大象有长鼻子。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_080',
        word: 'five',
        phonetic: '/faɪv/',
        phoneticUK: '/faɪv/',
        translation: 'num. 五',
        examples: [
            {
                english: 'Give me five.',
                chinese: '击掌。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['数词']
    },
    {
        id: 'primary_081',
        word: 'flower',
        phonetic: '/ˈflaʊər/',
        phoneticUK: '/ˈflaʊə(r)/',
        translation: 'n. 花',
        examples: [
            {
                english: 'The flower is beautiful.',
                chinese: '这朵花很漂亮。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '植物']
    },
    {
        id: 'primary_082',
        word: 'fly',
        phonetic: '/flaɪ/',
        phoneticUK: '/flaɪ/',
        translation: 'v. 飞 n. 苍蝇',
        examples: [
            {
                english: 'Birds can fly.',
                chinese: '鸟会飞。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_083',
        word: 'four',
        phonetic: '/fɔːr/',
        phoneticUK: '/fɔː(r)/',
        translation: 'num. 四',
        examples: [
            {
                english: 'There are four seasons.',
                chinese: '有四个季节。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['数词']
    },
    {
        id: 'primary_084',
        word: 'fox',
        phonetic: '/fɑːks/',
        phoneticUK: '/fɒks/',
        translation: 'n. 狐狸',
        examples: [
            {
                english: 'The fox is clever.',
                chinese: '狐狸很聪明。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 130,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_085',
        word: 'frog',
        phonetic: '/frɔːɡ/',
        phoneticUK: '/frɒɡ/',
        translation: 'n. 青蛙',
        examples: [
            {
                english: 'The frog is green.',
                chinese: '青蛙是绿色的。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 110,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_086',
        word: 'game',
        phonetic: '/ɡeɪm/',
        phoneticUK: '/ɡeɪm/',
        translation: 'n. 游戏；比赛',
        examples: [
            {
                english: 'Let\'s play a game.',
                chinese: '我们玩个游戏吧。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_087',
        word: 'green',
        phonetic: '/ɡriːn/',
        phoneticUK: '/ɡriːn/',
        translation: 'n. 绿色 adj. 绿色的',
        examples: [
            {
                english: 'The grass is green.',
                chinese: '草是绿色的。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_088',
        word: 'hair',
        phonetic: '/her/',
        phoneticUK: '/heə(r)/',
        translation: 'n. 头发',
        examples: [
            {
                english: 'She has long hair.',
                chinese: '她有长头发。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_089',
        word: 'help',
        phonetic: '/help/',
        phoneticUK: '/help/',
        translation: 'v. 帮助 n. 帮助',
        examples: [
            {
                english: 'Can you help me?',
                chinese: '你能帮我吗？',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_090',
        word: 'home',
        phonetic: '/hoʊm/',
        phoneticUK: '/həʊm/',
        translation: 'n. 家 adv. 在家',
        examples: [
            {
                english: 'I go home at 5 o\'clock.',
                chinese: '我五点回家。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['名词', '副词']
    },
    {
        id: 'primary_091',
        word: 'hot',
        phonetic: '/hɑːt/',
        phoneticUK: '/hɒt/',
        translation: 'adj. 热的',
        examples: [
            {
                english: 'The soup is hot.',
                chinese: '汤很热。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_092',
        word: 'house',
        phonetic: '/haʊs/',
        phoneticUK: '/haʊs/',
        translation: 'n. 房子',
        examples: [
            {
                english: 'This is a big house.',
                chinese: '这是一所大房子。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_093',
        word: 'key',
        phonetic: '/kiː/',
        phoneticUK: '/kiː/',
        translation: 'n. 钥匙',
        examples: [
            {
                english: 'I lost my key.',
                chinese: '我丢了钥匙。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['名词']
    },
    {
        id: 'primary_094',
        word: 'light',
        phonetic: '/laɪt/',
        phoneticUK: '/laɪt/',
        translation: 'n. 灯；光 adj. 轻的',
        examples: [
            {
                english: 'Turn on the light.',
                chinese: '开灯。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '形容词']
    },
    {
        id: 'primary_095',
        word: 'lion',
        phonetic: '/ˈlaɪən/',
        phoneticUK: '/ˈlaɪən/',
        translation: 'n. 狮子',
        examples: [
            {
                english: 'The lion is the king of animals.',
                chinese: '狮子是万兽之王。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 105,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_096',
        word: 'long',
        phonetic: '/lɔːŋ/',
        phoneticUK: '/lɒŋ/',
        translation: 'adj. 长的',
        examples: [
            {
                english: 'This ruler is long.',
                chinese: '这把尺子很长。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_097',
        word: 'man',
        phonetic: '/mæn/',
        phoneticUK: '/mæn/',
        translation: 'n. 男人',
        examples: [
            {
                english: 'He is a strong man.',
                chinese: '他是个强壮的男人。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_098',
        word: 'moon',
        phonetic: '/muːn/',
        phoneticUK: '/muːn/',
        translation: 'n. 月亮',
        examples: [
            {
                english: 'The moon is round.',
                chinese: '月亮是圆的。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_099',
        word: 'morning',
        phonetic: '/ˈmɔːrnɪŋ/',
        phoneticUK: '/ˈmɔːnɪŋ/',
        translation: 'n. 早晨；上午',
        examples: [
            {
                english: 'Good morning!',
                chinese: '早上好！',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 20,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_100',
        word: 'music',
        phonetic: '/ˈmjuːzɪk/',
        phoneticUK: '/ˈmjuːzɪk/',
        translation: 'n. 音乐',
        examples: [
            {
                english: 'I like listening to music.',
                chinese: '我喜欢听音乐。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    // Unit 3: 生活词汇 (101-150)
    {
        id: 'primary_101',
        word: 'afternoon',
        phonetic: '/ˌæftərˈnuːn/',
        phoneticUK: '/ˌɑːftəˈnuːn/',
        translation: 'n. 下午',
        examples: [{ english: 'Good afternoon!', chinese: '下午好！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_102',
        word: 'baby',
        phonetic: '/ˈbeɪbi/',
        phoneticUK: '/ˈbeɪbi/',
        translation: 'n. 婴儿',
        examples: [{ english: 'The baby is sleeping.', chinese: '婴儿正在睡觉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_103',
        word: 'ball',
        phonetic: '/bɔːl/',
        phoneticUK: '/bɔːl/',
        translation: 'n. 球',
        examples: [{ english: 'He is playing with a ball.', chinese: '他正在玩球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '玩具']
    },
    {
        id: 'primary_104',
        word: 'banana',
        phonetic: '/bəˈnænə/',
        phoneticUK: '/bəˈnɑːnə/',
        translation: 'n. 香蕉',
        examples: [{ english: 'Monkeys like bananas.', chinese: '猴子喜欢香蕉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '食物', '水果']
    },
    {
        id: 'primary_105',
        word: 'basket',
        phonetic: '/ˈbæskɪt/',
        phoneticUK: '/ˈbɑːskɪt/',
        translation: 'n. 篮子',
        examples: [{ english: 'There are apples in the basket.', chinese: '篮子里有苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_106',
        word: 'bathroom',
        phonetic: '/ˈbæθruːm/',
        phoneticUK: '/ˈbɑːθruːm/',
        translation: 'n. 浴室；卫生间',
        examples: [{ english: 'Where is the bathroom?', chinese: '卫生间在哪里？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_107',
        word: 'bedroom',
        phonetic: '/ˈbedruːm/',
        phoneticUK: '/ˈbedruːm/',
        translation: 'n. 卧室',
        examples: [{ english: 'My bedroom is clean.', chinese: '我的卧室很干净。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_108',
        word: 'beef',
        phonetic: '/biːf/',
        phoneticUK: '/biːf/',
        translation: 'n. 牛肉',
        examples: [{ english: 'I like to eat beef.', chinese: '我喜欢吃牛肉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_109',
        word: 'birthday',
        phonetic: '/ˈbɜːrθdeɪ/',
        phoneticUK: '/ˈbɜːθdeɪ/',
        translation: 'n. 生日',
        examples: [{ english: 'Happy birthday!', chinese: '生日快乐！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_110',
        word: 'black',
        phonetic: '/blæk/',
        phoneticUK: '/blæk/',
        translation: 'n. 黑色 adj. 黑色的',
        examples: [{ english: 'I have a black cat.', chinese: '我有一只黑猫。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_111',
        word: 'blackboard',
        phonetic: '/ˈblækbɔːrd/',
        phoneticUK: '/ˈblækbɔːd/',
        translation: 'n. 黑板',
        examples: [{ english: 'Look at the blackboard.', chinese: '看黑板。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_112',
        word: 'body',
        phonetic: '/ˈbɑːdi/',
        phoneticUK: '/ˈbɒdi/',
        translation: 'n. 身体',
        examples: [{ english: 'Exercise is good for your body.', chinese: '运动对你的身体有好处。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_113',
        word: 'breakfast',
        phonetic: '/ˈbrekfəst/',
        phoneticUK: '/ˈbrekfəst/',
        translation: 'n. 早餐',
        examples: [{ english: 'I have breakfast at 7.', chinese: '我七点吃早餐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_114',
        word: 'brother',
        phonetic: '/ˈbrʌðər/',
        phoneticUK: '/ˈbrʌðə(r)/',
        translation: 'n. 兄弟',
        examples: [{ english: 'He is my brother.', chinese: '他是我的兄弟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_115',
        word: 'brown',
        phonetic: '/braʊn/',
        phoneticUK: '/braʊn/',
        translation: 'n. 棕色 adj. 棕色的',
        examples: [{ english: 'The bear is brown.', chinese: '熊是棕色的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_116',
        word: 'brush',
        phonetic: '/brʌʃ/',
        phoneticUK: '/brʌʃ/',
        translation: 'v. 刷 n. 刷子',
        examples: [{ english: 'Brush your teeth.', chinese: '刷牙。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_117',
        word: 'busy',
        phonetic: '/ˈbɪzi/',
        phoneticUK: '/ˈbɪzi/',
        translation: 'adj. 忙碌的',
        examples: [{ english: 'I am very busy today.', chinese: '我今天很忙。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_118',
        word: 'buy',
        phonetic: '/baɪ/',
        phoneticUK: '/baɪ/',
        translation: 'v. 买',
        examples: [{ english: 'I want to buy a toy.', chinese: '我想买个玩具。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_119',
        word: 'bye',
        phonetic: '/baɪ/',
        phoneticUK: '/baɪ/',
        translation: 'int. 再见',
        examples: [{ english: 'Bye! See you tomorrow.', chinese: '再见！明天见。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['感叹词']
    },
    {
        id: 'primary_120',
        word: 'cabbage',
        phonetic: '/ˈkæbɪdʒ/',
        phoneticUK: '/ˈkæbɪdʒ/',
        translation: 'n. 卷心菜',
        examples: [{ english: 'I like cabbage.', chinese: '我喜欢卷心菜。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '食物', '蔬菜']
    },
    {
        id: 'primary_121',
        word: 'cage',
        phonetic: '/keɪdʒ/',
        phoneticUK: '/keɪdʒ/',
        translation: 'n. 笼子',
        examples: [{ english: 'The bird is in the cage.', chinese: '鸟在笼子里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['名词']
    },
    {
        id: 'primary_122',
        word: 'call',
        phonetic: '/kɔːl/',
        phoneticUK: '/kɔːl/',
        translation: 'v. 打电话；呼叫',
        examples: [{ english: 'Please call me.', chinese: '请给我打电话。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_123',
        word: 'camera',
        phonetic: '/ˈkæmrə/',
        phoneticUK: '/ˈkæmrə/',
        translation: 'n. 照相机',
        examples: [{ english: 'I have a new camera.', chinese: '我有一台新相机。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词']
    },
    {
        id: 'primary_124',
        word: 'candy',
        phonetic: '/ˈkændi/',
        phoneticUK: '/ˈkændi/',
        translation: 'n. 糖果',
        examples: [{ english: 'Kids love candy.', chinese: '孩子们爱吃糖果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_125',
        word: 'cap',
        phonetic: '/kæp/',
        phoneticUK: '/kæp/',
        translation: 'n. 帽子（鸭舌帽）',
        examples: [{ english: 'He is wearing a cap.', chinese: '他戴着一顶鸭舌帽。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_126',
        word: 'card',
        phonetic: '/kɑːrd/',
        phoneticUK: '/kɑːd/',
        translation: 'n. 卡片',
        examples: [{ english: 'Here is a birthday card.', chinese: '这是一张生日卡片。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_127',
        word: 'carry',
        phonetic: '/ˈkæri/',
        phoneticUK: '/ˈkæri/',
        translation: 'v. 搬；携带',
        examples: [{ english: 'Can you carry this box?', chinese: '你能搬这个箱子吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词']
    },
    {
        id: 'primary_128',
        word: 'catch',
        phonetic: '/kætʃ/',
        phoneticUK: '/kætʃ/',
        translation: 'v. 抓住；赶上',
        examples: [{ english: 'Catch the ball!', chinese: '接球！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_129',
        word: 'chicken',
        phonetic: '/ˈtʃɪkɪn/',
        phoneticUK: '/ˈtʃɪkɪn/',
        translation: 'n. 鸡；鸡肉',
        examples: [{ english: 'I like fried chicken.', chinese: '我喜欢炸鸡。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '动物', '食物']
    },
    {
        id: 'primary_130',
        word: 'child',
        phonetic: '/tʃaɪld/',
        phoneticUK: '/tʃaɪld/',
        translation: 'n. 孩子',
        examples: [{ english: 'She is a happy child.', chinese: '她是个快乐的孩子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_131',
        word: 'China',
        phonetic: '/ˈtʃaɪnə/',
        phoneticUK: '/ˈtʃaɪnə/',
        translation: 'n. 中国',
        examples: [{ english: 'I live in China.', chinese: '我住在中国。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '地点']
    },
    {
        id: 'primary_132',
        word: 'cinema',
        phonetic: '/ˈsɪnəmə/',
        phoneticUK: '/ˈsɪnəmə/',
        translation: 'n. 电影院',
        examples: [{ english: 'Let\'s go to the cinema.', chinese: '我们去电影院吧。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_133',
        word: 'city',
        phonetic: '/ˈsɪti/',
        phoneticUK: '/ˈsɪti/',
        translation: 'n. 城市',
        examples: [{ english: 'Beijing is a big city.', chinese: '北京是一个大城市。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '地点']
    },
    {
        id: 'primary_134',
        word: 'clean',
        phonetic: '/kliːn/',
        phoneticUK: '/kliːn/',
        translation: 'v. 打扫 adj. 干净的',
        examples: [{ english: 'Clean your room.', chinese: '打扫你的房间。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词', '形容词']
    },
    {
        id: 'primary_135',
        word: 'climb',
        phonetic: '/klaɪm/',
        phoneticUK: '/klaɪm/',
        translation: 'v. 爬',
        examples: [{ english: 'Monkeys can climb trees.', chinese: '猴子会爬树。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['动词']
    },
    {
        id: 'primary_136',
        word: 'clock',
        phonetic: '/klɑːk/',
        phoneticUK: '/klɒk/',
        translation: 'n. 钟',
        examples: [{ english: 'Look at the clock.', chinese: '看钟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_137',
        word: 'clothes',
        phonetic: '/kloʊðz/',
        phoneticUK: '/kləʊðz/',
        translation: 'n. 衣服',
        examples: [{ english: 'Put on your clothes.', chinese: '穿上你的衣服。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_138',
        word: 'cloud',
        phonetic: '/klaʊd/',
        phoneticUK: '/klaʊd/',
        translation: 'n. 云',
        examples: [{ english: 'There are white clouds in the sky.', chinese: '天上有白云。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_139',
        word: 'coffee',
        phonetic: '/ˈkɔːfi/',
        phoneticUK: '/ˈkɒfi/',
        translation: 'n. 咖啡',
        examples: [{ english: 'Do you like coffee?', chinese: '你喜欢咖啡吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '饮料']
    },
    {
        id: 'primary_140',
        word: 'come',
        phonetic: '/kʌm/',
        phoneticUK: '/kʌm/',
        translation: 'v. 来',
        examples: [{ english: 'Come here, please.', chinese: '请过来。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_141',
        word: 'computer',
        phonetic: '/kəmˈpjuːtər/',
        phoneticUK: '/kəmˈpjuːtə(r)/',
        translation: 'n. 电脑',
        examples: [{ english: 'I play games on the computer.', chinese: '我在电脑上玩游戏。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词']
    },
    {
        id: 'primary_142',
        word: 'cook',
        phonetic: '/kʊk/',
        phoneticUK: '/kʊk/',
        translation: 'v. 做饭 n. 厨师',
        examples: [{ english: 'My mom cooks dinner.', chinese: '我妈妈做晚饭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_143',
        word: 'count',
        phonetic: '/kaʊnt/',
        phoneticUK: '/kaʊnt/',
        translation: 'v. 数数',
        examples: [{ english: 'Let\'s count to ten.', chinese: '我们数到十吧。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['动词']
    },
    {
        id: 'primary_144',
        word: 'cousin',
        phonetic: '/ˈkʌzn/',
        phoneticUK: '/ˈkʌzn/',
        translation: 'n. 堂（表）兄弟姐妹',
        examples: [{ english: 'She is my cousin.', chinese: '她是我的表妹。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_145',
        word: 'cry',
        phonetic: '/kraɪ/',
        phoneticUK: '/kraɪ/',
        translation: 'v. 哭',
        examples: [{ english: 'Don\'t cry.', chinese: '别哭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_146',
        word: 'cup',
        phonetic: '/kʌp/',
        phoneticUK: '/kʌp/',
        translation: 'n. 杯子',
        examples: [{ english: 'A cup of tea.', chinese: '一杯茶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_147',
        word: 'cut',
        phonetic: '/kʌt/',
        phoneticUK: '/kʌt/',
        translation: 'v. 切；剪',
        examples: [{ english: 'Cut the paper.', chinese: '剪纸。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['动词']
    },
    {
        id: 'primary_148',
        word: 'dark',
        phonetic: '/dɑːrk/',
        phoneticUK: '/dɑːk/',
        translation: 'adj. 黑暗的',
        examples: [{ english: 'It is getting dark.', chinese: '天黑了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['形容词']
    },
    {
        id: 'primary_149',
        word: 'date',
        phonetic: '/deɪt/',
        phoneticUK: '/deɪt/',
        translation: 'n. 日期',
        examples: [{ english: 'What is the date today?', chinese: '今天是几号？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['名词']
    },
    {
        id: 'primary_150',
        word: 'daughter',
        phonetic: '/ˈdɔːtər/',
        phoneticUK: '/ˈdɔːtə(r)/',
        translation: 'n. 女儿',
        examples: [{ english: 'She is my daughter.', chinese: '她是我的女儿。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '家庭']
    },
    // Unit 4: 综合词汇 (151-200)
    {
        id: 'primary_151',
        word: 'dear',
        phonetic: '/dɪr/',
        phoneticUK: '/dɪə(r)/',
        translation: 'adj. 亲爱的',
        examples: [{ english: 'Dear Mom,', chinese: '亲爱的妈妈，', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_152',
        word: 'dinner',
        phonetic: '/ˈdɪnər/',
        phoneticUK: '/ˈdɪnə(r)/',
        translation: 'n. 晚餐',
        examples: [{ english: 'We have dinner at 6.', chinese: '我们六点吃晚饭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_153',
        word: 'dirty',
        phonetic: '/ˈdɜːrti/',
        phoneticUK: '/ˈdɜːti/',
        translation: 'adj. 脏的',
        examples: [{ english: 'Your hands are dirty.', chinese: '你的手很脏。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['形容词']
    },
    {
        id: 'primary_154',
        word: 'doctor',
        phonetic: '/ˈdɑːktər/',
        phoneticUK: '/ˈdɒktə(r)/',
        translation: 'n. 医生',
        examples: [{ english: 'See a doctor.', chinese: '看医生。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_155',
        word: 'dollar',
        phonetic: '/ˈdɑːlər/',
        phoneticUK: '/ˈdɒlə(r)/',
        translation: 'n. 美元',
        examples: [{ english: 'It costs one dollar.', chinese: '它值一美元。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '货币']
    },
    {
        id: 'primary_156',
        word: 'dress',
        phonetic: '/dres/',
        phoneticUK: '/dres/',
        translation: 'n. 连衣裙',
        examples: [{ english: 'She wears a beautiful dress.', chinese: '她穿着一件漂亮的连衣裙。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_157',
        word: 'drive',
        phonetic: '/draɪv/',
        phoneticUK: '/draɪv/',
        translation: 'v. 开车',
        examples: [{ english: 'My dad drives to work.', chinese: '我爸爸开车去上班。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_158',
        word: 'driver',
        phonetic: '/ˈdraɪvər/',
        phoneticUK: '/ˈdraɪvə(r)/',
        translation: 'n. 司机',
        examples: [{ english: 'He is a bus driver.', chinese: '他是一名公交车司机。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_159',
        word: 'drop',
        phonetic: '/drɑːp/',
        phoneticUK: '/drɒp/',
        translation: 'v. 掉落',
        examples: [{ english: 'Don\'t drop the cup.', chinese: '别把杯子摔了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['动词']
    },
    {
        id: 'primary_160',
        word: 'dry',
        phonetic: '/draɪ/',
        phoneticUK: '/draɪ/',
        translation: 'adj. 干的',
        examples: [{ english: 'The ground is dry.', chinese: '地面是干的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['形容词']
    },
    {
        id: 'primary_161',
        word: 'dumpling',
        phonetic: '/ˈdʌmplɪŋ/',
        phoneticUK: '/ˈdʌmplɪŋ/',
        translation: 'n. 饺子',
        examples: [{ english: 'I love dumplings.', chinese: '我爱吃饺子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_162',
        word: 'early',
        phonetic: '/ˈɜːrli/',
        phoneticUK: '/ˈɜːli/',
        translation: 'adj. 早的',
        examples: [{ english: 'Get up early.', chinese: '早起。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_163',
        word: 'earth',
        phonetic: '/ɜːrθ/',
        phoneticUK: '/ɜːθ/',
        translation: 'n. 地球',
        examples: [{ english: 'We live on Earth.', chinese: '我们住在地球上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_164',
        word: 'east',
        phonetic: '/iːst/',
        phoneticUK: '/iːst/',
        translation: 'n. 东方',
        examples: [{ english: 'The sun rises in the east.', chinese: '太阳从东方升起。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '方位']
    },
    {
        id: 'primary_165',
        word: 'easy',
        phonetic: '/ˈiːzi/',
        phoneticUK: '/ˈiːzi/',
        translation: 'adj. 容易的',
        examples: [{ english: 'English is easy.', chinese: '英语很容易。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_166',
        word: 'eight',
        phonetic: '/eɪt/',
        phoneticUK: '/eɪt/',
        translation: 'num. 八',
        examples: [{ english: 'It is eight o\'clock.', chinese: '现在是八点。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['数词']
    },
    {
        id: 'primary_167',
        word: 'eighteen',
        phonetic: '/ˌeɪˈtiːn/',
        phoneticUK: '/ˌeɪˈtiːn/',
        translation: 'num. 十八',
        examples: [{ english: 'She is eighteen.', chinese: '她十八岁。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['数词']
    },
    {
        id: 'primary_168',
        word: 'eighty',
        phonetic: '/ˈeɪti/',
        phoneticUK: '/ˈeɪti/',
        translation: 'num. 八十',
        examples: [{ english: 'My grandma is eighty.', chinese: '我奶奶八十岁了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 20,
        tags: ['数词']
    },
    {
        id: 'primary_169',
        word: 'eleven',
        phonetic: '/ɪˈlevn/',
        phoneticUK: '/ɪˈlevn/',
        translation: 'num. 十一',
        examples: [{ english: 'There are eleven players.', chinese: '有十一名队员。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['数词']
    },
    {
        id: 'primary_170',
        word: 'email',
        phonetic: '/ˈiːmeɪl/',
        phoneticUK: '/ˈiːmeɪl/',
        translation: 'n. 电子邮件',
        examples: [{ english: 'Send me an email.', chinese: '给我发邮件。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_171',
        word: 'empty',
        phonetic: '/ˈempti/',
        phoneticUK: '/ˈempti/',
        translation: 'adj. 空的',
        examples: [{ english: 'The box is empty.', chinese: '盒子是空的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['形容词']
    },
    {
        id: 'primary_172',
        word: 'end',
        phonetic: '/end/',
        phoneticUK: '/end/',
        translation: 'n. 结束 v. 结束',
        examples: [{ english: 'This is the end.', chinese: '这是结束。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_173',
        word: 'English',
        phonetic: '/ˈɪŋɡlɪʃ/',
        phoneticUK: '/ˈɪŋɡlɪʃ/',
        translation: 'n. 英语',
        examples: [{ english: 'I speak English.', chinese: '我说英语。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '语言']
    },
    {
        id: 'primary_174',
        word: 'enjoy',
        phonetic: '/ɪnˈdʒɔɪ/',
        phoneticUK: '/ɪnˈdʒɔɪ/',
        translation: 'v. 享受；喜爱',
        examples: [{ english: 'Enjoy your meal.', chinese: '用餐愉快。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_175',
        word: 'evening',
        phonetic: '/ˈiːvnɪŋ/',
        phoneticUK: '/ˈiːvnɪŋ/',
        translation: 'n. 晚上',
        examples: [{ english: 'Good evening!', chinese: '晚上好！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_176',
        word: 'every',
        phonetic: '/ˈevri/',
        phoneticUK: '/ˈevri/',
        translation: 'adj. 每一个',
        examples: [{ english: 'Every student is here.', chinese: '每个学生都在这里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['形容词']
    },
    {
        id: 'primary_177',
        word: 'exam',
        phonetic: '/ɪɡˈzæm/',
        phoneticUK: '/ɪɡˈzæm/',
        translation: 'n. 考试',
        examples: [{ english: 'I have an exam today.', chinese: '我今天有个考试。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_178',
        word: 'excited',
        phonetic: '/ɪkˈsaɪtɪd/',
        phoneticUK: '/ɪkˈsaɪtɪd/',
        translation: 'adj. 兴奋的',
        examples: [{ english: 'I am so excited.', chinese: '我太兴奋了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_179',
        word: 'excuse',
        phonetic: '/ɪkˈskjuːs/',
        phoneticUK: '/ɪkˈskjuːs/',
        translation: 'v. 原谅',
        examples: [{ english: 'Excuse me.', chinese: '打扰一下。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_180',
        word: 'exercise',
        phonetic: '/ˈeksərsaɪz/',
        phoneticUK: '/ˈeksəsaɪz/',
        translation: 'n. 锻炼；练习',
        examples: [{ english: 'Do morning exercises.', chinese: '做早操。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_181',
        word: 'expensive',
        phonetic: '/ɪkˈspensɪv/',
        phoneticUK: '/ɪkˈspensɪv/',
        translation: 'adj. 昂贵的',
        examples: [{ english: 'This car is expensive.', chinese: '这辆车很贵。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['形容词']
    },
    {
        id: 'primary_182',
        word: 'family',
        phonetic: '/ˈfæməli/',
        phoneticUK: '/ˈfæməli/',
        translation: 'n. 家庭',
        examples: [{ english: 'I love my family.', chinese: '我爱我的家庭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_183',
        word: 'farm',
        phonetic: '/fɑːrm/',
        phoneticUK: '/fɑːm/',
        translation: 'n. 农场',
        examples: [{ english: 'There are cows on the farm.', chinese: '农场里有牛。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_184',
        word: 'farmer',
        phonetic: '/ˈfɑːrmər/',
        phoneticUK: '/ˈfɑːmə(r)/',
        translation: 'n. 农民',
        examples: [{ english: 'My uncle is a farmer.', chinese: '我叔叔是农民。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_185',
        word: 'fast',
        phonetic: '/fæst/',
        phoneticUK: '/fɑːst/',
        translation: 'adj. 快的 adv. 快地',
        examples: [{ english: 'Run fast.', chinese: '快跑。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词', '副词']
    },
    {
        id: 'primary_186',
        word: 'fat',
        phonetic: '/fæt/',
        phoneticUK: '/fæt/',
        translation: 'adj. 胖的',
        examples: [{ english: 'The pig is fat.', chinese: '猪很胖。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_187',
        word: 'father',
        phonetic: '/ˈfɑːðər/',
        phoneticUK: '/ˈfɑːðə(r)/',
        translation: 'n. 父亲',
        examples: [{ english: 'My father is tall.', chinese: '我父亲很高。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_188',
        word: 'favorite',
        phonetic: '/ˈfeɪvərɪt/',
        phoneticUK: '/ˈfeɪvərɪt/',
        translation: 'adj. 最喜欢的',
        examples: [{ english: 'Red is my favorite color.', chinese: '红色是我最喜欢的颜色。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['形容词']
    },
    {
        id: 'primary_189',
        word: 'feel',
        phonetic: '/fiːl/',
        phoneticUK: '/fiːl/',
        translation: 'v. 感觉',
        examples: [{ english: 'I feel happy.', chinese: '我感觉很快乐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_190',
        word: 'festival',
        phonetic: '/ˈfestɪvl/',
        phoneticUK: '/ˈfestɪvl/',
        translation: 'n. 节日',
        examples: [{ english: 'Spring Festival is coming.', chinese: '春节快到了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词']
    },
    {
        id: 'primary_191',
        word: 'fifteen',
        phonetic: '/ˌfɪfˈtiːn/',
        phoneticUK: '/ˌfɪfˈtiːn/',
        translation: 'num. 十五',
        examples: [{ english: 'I have fifteen books.', chinese: '我有十五本书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['数词']
    },
    {
        id: 'primary_192',
        word: 'fifty',
        phonetic: '/ˈfɪfti/',
        phoneticUK: '/ˈfɪfti/',
        translation: 'num. 五十',
        examples: [{ english: 'Fifty dollars.', chinese: '五十美元。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['数词']
    },
    {
        id: 'primary_193',
        word: 'film',
        phonetic: '/fɪlm/',
        phoneticUK: '/fɪlm/',
        translation: 'n. 电影',
        examples: [{ english: 'Let\'s watch a film.', chinese: '我们看电影吧。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_194',
        word: 'find',
        phonetic: '/faɪnd/',
        phoneticUK: '/faɪnd/',
        translation: 'v. 找到',
        examples: [{ english: 'I can\'t find my pen.', chinese: '我找不到我的钢笔。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_195',
        word: 'fine',
        phonetic: '/faɪn/',
        phoneticUK: '/faɪn/',
        translation: 'adj. 好的',
        examples: [{ english: 'I am fine, thank you.', chinese: '我很好，谢谢。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['形容词']
    },
    {
        id: 'primary_196',
        word: 'finger',
        phonetic: '/ˈfɪŋɡər/',
        phoneticUK: '/ˈfɪŋɡə(r)/',
        translation: 'n. 手指',
        examples: [{ english: 'I have ten fingers.', chinese: '我有十个手指。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_197',
        word: 'fire',
        phonetic: '/ˈfaɪər/',
        phoneticUK: '/ˈfaɪə(r)/',
        translation: 'n. 火',
        examples: [{ english: 'Don\'t play with fire.', chinese: '不要玩火。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_198',
        word: 'first',
        phonetic: '/fɜːrst/',
        phoneticUK: '/fɜːst/',
        translation: 'num. 第一',
        examples: [{ english: 'He is the first one.', chinese: '他是第一个。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['数词']
    },
    {
        id: 'primary_199',
        word: 'finish',
        phonetic: '/ˈfɪnɪʃ/',
        phoneticUK: '/ˈfɪnɪʃ/',
        translation: 'v. 完成',
        examples: [{ english: 'Finish your homework.', chinese: '完成你的作业。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_200',
        word: 'floor',
        phonetic: '/flɔːr/',
        phoneticUK: '/flɔː(r)/',
        translation: 'n. 地板；楼层',
        examples: [{ english: 'Sit on the floor.', chinese: '坐在地板上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    // Unit 5: 扩展词汇 (201-250)
    {
        id: 'primary_201',
        word: 'food',
        phonetic: '/fuːd/',
        phoneticUK: '/fuːd/',
        translation: 'n. 食物',
        examples: [{ english: 'We need food.', chinese: '我们需要食物。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_202',
        word: 'football',
        phonetic: '/ˈfʊtbɔːl/',
        phoneticUK: '/ˈfʊtbɔːl/',
        translation: 'n. 足球',
        examples: [{ english: 'Play football.', chinese: '踢足球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '运动']
    },
    {
        id: 'primary_203',
        word: 'for',
        phonetic: '/fɔːr/',
        phoneticUK: '/fɔː(r)/',
        translation: 'prep. 为了',
        examples: [{ english: 'This is for you.', chinese: '这是给你的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['介词']
    },
    {
        id: 'primary_204',
        word: 'forest',
        phonetic: '/ˈfɔːrɪst/',
        phoneticUK: '/ˈfɒrɪst/',
        translation: 'n. 森林',
        examples: [{ english: 'Animals live in the forest.', chinese: '动物住在森林里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_205',
        word: 'fork',
        phonetic: '/fɔːrk/',
        phoneticUK: '/fɔːk/',
        translation: 'n. 叉子',
        examples: [{ english: 'Use a fork.', chinese: '用叉子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '餐具']
    },
    {
        id: 'primary_206',
        word: 'forty',
        phonetic: '/ˈfɔːrti/',
        phoneticUK: '/ˈfɔːti/',
        translation: 'num. 四十',
        examples: [{ english: 'Forty students.', chinese: '四十名学生。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['数词']
    },
    {
        id: 'primary_207',
        word: 'fourteen',
        phonetic: '/ˌfɔːrˈtiːn/',
        phoneticUK: '/ˌfɔːˈtiːn/',
        translation: 'num. 十四',
        examples: [{ english: 'Fourteen days.', chinese: '十四天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['数词']
    },
    {
        id: 'primary_208',
        word: 'friend',
        phonetic: '/frend/',
        phoneticUK: '/frend/',
        translation: 'n. 朋友',
        examples: [{ english: 'He is my best friend.', chinese: '他是我最好的朋友。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_209',
        word: 'from',
        phonetic: '/frʌm/',
        phoneticUK: '/frɒm/',
        translation: 'prep. 来自',
        examples: [{ english: 'I am from China.', chinese: '我来自中国。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['介词']
    },
    {
        id: 'primary_210',
        word: 'fruit',
        phonetic: '/fruːt/',
        phoneticUK: '/fruːt/',
        translation: 'n. 水果',
        examples: [{ english: 'Eat more fruit.', chinese: '多吃水果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_211',
        word: 'full',
        phonetic: '/fʊl/',
        phoneticUK: '/fʊl/',
        translation: 'adj. 满的；饱的',
        examples: [{ english: 'I am full.', chinese: '我饱了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_212',
        word: 'fun',
        phonetic: '/fʌn/',
        phoneticUK: '/fʌn/',
        translation: 'n. 乐趣 adj. 有趣的',
        examples: [{ english: 'Have fun!', chinese: '玩得开心！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '形容词']
    },
    {
        id: 'primary_213',
        word: 'funny',
        phonetic: '/ˈfʌni/',
        phoneticUK: '/ˈfʌni/',
        translation: 'adj. 滑稽的',
        examples: [{ english: 'He is very funny.', chinese: '他很滑稽。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_214',
        word: 'garden',
        phonetic: '/ˈɡɑːrdn/',
        phoneticUK: '/ˈɡɑːdn/',
        translation: 'n. 花园',
        examples: [{ english: 'There are flowers in the garden.', chinese: '花园里有花。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_215',
        word: 'gate',
        phonetic: '/ɡeɪt/',
        phoneticUK: '/ɡeɪt/',
        translation: 'n. 大门',
        examples: [{ english: 'Open the gate.', chinese: '打开大门。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词']
    },
    {
        id: 'primary_216',
        word: 'get',
        phonetic: '/ɡet/',
        phoneticUK: '/ɡet/',
        translation: 'v. 得到；变得',
        examples: [{ english: 'Get up.', chinese: '起床。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['动词']
    },
    {
        id: 'primary_217',
        word: 'giraffe',
        phonetic: '/dʒəˈræf/',
        phoneticUK: '/dʒəˈrɑːf/',
        translation: 'n. 长颈鹿',
        examples: [{ english: 'The giraffe is tall.', chinese: '长颈鹿很高。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_218',
        word: 'give',
        phonetic: '/ɡɪv/',
        phoneticUK: '/ɡɪv/',
        translation: 'v. 给',
        examples: [{ english: 'Give me a book.', chinese: '给我一本书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_219',
        word: 'glass',
        phonetic: '/ɡlæs/',
        phoneticUK: '/ɡlɑːs/',
        translation: 'n. 玻璃；玻璃杯',
        examples: [{ english: 'A glass of water.', chinese: '一杯水。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_220',
        word: 'glove',
        phonetic: '/ɡlʌv/',
        phoneticUK: '/ɡlʌv/',
        translation: 'n. 手套',
        examples: [{ english: 'Wear gloves.', chinese: '戴手套。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_221',
        word: 'go',
        phonetic: '/ɡoʊ/',
        phoneticUK: '/ɡəʊ/',
        translation: 'v. 去',
        examples: [{ english: 'Let\'s go.', chinese: '我们走吧。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_222',
        word: 'goat',
        phonetic: '/ɡoʊt/',
        phoneticUK: '/ɡəʊt/',
        translation: 'n. 山羊',
        examples: [{ english: 'The goat eats grass.', chinese: '山羊吃草。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_223',
        word: 'goodbye',
        phonetic: '/ˌɡʊdˈbaɪ/',
        phoneticUK: '/ˌɡʊdˈbaɪ/',
        translation: 'int. 再见',
        examples: [{ english: 'Say goodbye.', chinese: '说再见。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['感叹词']
    },
    {
        id: 'primary_224',
        word: 'goose',
        phonetic: '/ɡuːs/',
        phoneticUK: '/ɡuːs/',
        translation: 'n. 鹅',
        examples: [{ english: 'A white goose.', chinese: '一只白鹅。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_225',
        word: 'grade',
        phonetic: '/ɡreɪd/',
        phoneticUK: '/ɡreɪd/',
        translation: 'n. 年级；成绩',
        examples: [{ english: 'I am in Grade 3.', chinese: '我上三年级。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_226',
        word: 'grandfather',
        phonetic: '/ˈɡrænfɑːðər/',
        phoneticUK: '/ˈɡrænfɑːðə(r)/',
        translation: 'n. 祖父；外祖父',
        examples: [{ english: 'My grandfather is old.', chinese: '我祖父老了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_227',
        word: 'grandma',
        phonetic: '/ˈɡrænmɑː/',
        phoneticUK: '/ˈɡrænmɑː/',
        translation: 'n. 奶奶；姥姥',
        examples: [{ english: 'I love my grandma.', chinese: '我爱我奶奶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_228',
        word: 'grandmother',
        phonetic: '/ˈɡrænmʌðər/',
        phoneticUK: '/ˈɡrænmʌðə(r)/',
        translation: 'n. 祖母；外祖母',
        examples: [{ english: 'My grandmother is kind.', chinese: '我祖母很慈祥。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_229',
        word: 'grandpa',
        phonetic: '/ˈɡrænpɑː/',
        phoneticUK: '/ˈɡrænpɑː/',
        translation: 'n. 爷爷；姥爷',
        examples: [{ english: 'My grandpa likes tea.', chinese: '我爷爷喜欢喝茶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_230',
        word: 'grape',
        phonetic: '/ɡreɪp/',
        phoneticUK: '/ɡreɪp/',
        translation: 'n. 葡萄',
        examples: [{ english: 'Purple grapes.', chinese: '紫色的葡萄。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物', '水果']
    },
    {
        id: 'primary_231',
        word: 'grass',
        phonetic: '/ɡræs/',
        phoneticUK: '/ɡrɑːs/',
        translation: 'n. 草',
        examples: [{ english: 'Green grass.', chinese: '绿草。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_232',
        word: 'great',
        phonetic: '/ɡreɪt/',
        phoneticUK: '/ɡreɪt/',
        translation: 'adj. 伟大的；很好的',
        examples: [{ english: 'That is great!', chinese: '太棒了！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['形容词']
    },
    {
        id: 'primary_233',
        word: 'ground',
        phonetic: '/ɡraʊnd/',
        phoneticUK: '/ɡraʊnd/',
        translation: 'n. 地面',
        examples: [{ english: 'On the ground.', chinese: '在地上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_234',
        word: 'grow',
        phonetic: '/ɡroʊ/',
        phoneticUK: '/ɡrəʊ/',
        translation: 'v. 生长；种植',
        examples: [{ english: 'Plants grow.', chinese: '植物生长。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词']
    },
    {
        id: 'primary_235',
        word: 'guess',
        phonetic: '/ɡes/',
        phoneticUK: '/ɡes/',
        translation: 'v. 猜',
        examples: [{ english: 'Guess what?', chinese: '猜猜看？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_236',
        word: 'guest',
        phonetic: '/ɡest/',
        phoneticUK: '/ɡest/',
        translation: 'n. 客人',
        examples: [{ english: 'We have guests.', chinese: '我们有客人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词']
    },
    {
        id: 'primary_237',
        word: 'guitar',
        phonetic: '/ɡɪˈtɑːr/',
        phoneticUK: '/ɡɪˈtɑː(r)/',
        translation: 'n. 吉他',
        examples: [{ english: 'Play the guitar.', chinese: '弹吉他。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '乐器']
    },
    {
        id: 'primary_238',
        word: 'habit',
        phonetic: '/ˈhæbɪt/',
        phoneticUK: '/ˈhæbɪt/',
        translation: 'n. 习惯',
        examples: [{ english: 'Good habits.', chinese: '好习惯。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词']
    },
    {
        id: 'primary_239',
        word: 'half',
        phonetic: '/hæf/',
        phoneticUK: '/hɑːf/',
        translation: 'n. 一半',
        examples: [{ english: 'Half an hour.', chinese: '半小时。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '数词']
    },
    {
        id: 'primary_240',
        word: 'hamburger',
        phonetic: '/ˈhæmbɜːrɡər/',
        phoneticUK: '/ˈhæmbɜːɡə(r)/',
        translation: 'n. 汉堡包',
        examples: [{ english: 'I like hamburgers.', chinese: '我喜欢汉堡包。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_241',
        word: 'happen',
        phonetic: '/ˈhæpən/',
        phoneticUK: '/ˈhæpən/',
        translation: 'v. 发生',
        examples: [{ english: 'What happened?', chinese: '发生了什么？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_242',
        word: 'hard',
        phonetic: '/hɑːrd/',
        phoneticUK: '/hɑːd/',
        translation: 'adj. 困难的；硬的',
        examples: [{ english: 'It is hard work.', chinese: '这是艰苦的工作。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_243',
        word: 'hate',
        phonetic: '/heɪt/',
        phoneticUK: '/heɪt/',
        translation: 'v. 讨厌',
        examples: [{ english: 'I hate snakes.', chinese: '我讨厌蛇。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['动词']
    },
    {
        id: 'primary_244',
        word: 'have',
        phonetic: '/hæv/',
        phoneticUK: '/hæv/',
        translation: 'v. 有；吃',
        examples: [{ english: 'I have a pen.', chinese: '我有一支笔。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_245',
        word: 'he',
        phonetic: '/hiː/',
        phoneticUK: '/hiː/',
        translation: 'pron. 他',
        examples: [{ english: 'He is my friend.', chinese: '他是我的朋友。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_246',
        word: 'health',
        phonetic: '/helθ/',
        phoneticUK: '/helθ/',
        translation: 'n. 健康',
        examples: [{ english: 'Good health.', chinese: '身体健康。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_247',
        word: 'hear',
        phonetic: '/hɪr/',
        phoneticUK: '/hɪə(r)/',
        translation: 'v. 听见',
        examples: [{ english: 'Can you hear me?', chinese: '你能听见我吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_248',
        word: 'heart',
        phonetic: '/hɑːrt/',
        phoneticUK: '/hɑːt/',
        translation: 'n. 心；心脏',
        examples: [{ english: 'My heart beats.', chinese: '我的心脏在跳动。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_249',
        word: 'heavy',
        phonetic: '/ˈhevi/',
        phoneticUK: '/ˈhevi/',
        translation: 'adj. 重的',
        examples: [{ english: 'The box is heavy.', chinese: '箱子很重。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_250',
        word: 'hello',
        phonetic: '/həˈloʊ/',
        phoneticUK: '/həˈləʊ/',
        translation: 'int. 你好',
        examples: [{ english: 'Hello!', chinese: '你好！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['感叹词']
    },
    // Unit 6: 更多词汇 (251-300)
    {
        id: 'primary_251',
        word: 'hen',
        phonetic: '/hen/',
        phoneticUK: '/hen/',
        translation: 'n. 母鸡',
        examples: [{ english: 'The hen lays eggs.', chinese: '母鸡下蛋。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_252',
        word: 'her',
        phonetic: '/hɜːr/',
        phoneticUK: '/hɜː(r)/',
        translation: 'pron. 她的；她（宾格）',
        examples: [{ english: 'This is her book.', chinese: '这是她的书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['代词']
    },
    {
        id: 'primary_253',
        word: 'here',
        phonetic: '/hɪr/',
        phoneticUK: '/hɪə(r)/',
        translation: 'adv. 这里',
        examples: [{ english: 'Come here.', chinese: '来这里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['副词']
    },
    {
        id: 'primary_254',
        word: 'hi',
        phonetic: '/haɪ/',
        phoneticUK: '/haɪ/',
        translation: 'int. 嗨',
        examples: [{ english: 'Hi there!', chinese: '嗨，你好！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['感叹词']
    },
    {
        id: 'primary_255',
        word: 'high',
        phonetic: '/haɪ/',
        phoneticUK: '/haɪ/',
        translation: 'adj. 高的',
        examples: [{ english: 'High mountain.', chinese: '高山。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_256',
        word: 'hill',
        phonetic: '/hɪl/',
        phoneticUK: '/hɪl/',
        translation: 'n. 小山',
        examples: [{ english: 'Up the hill.', chinese: '上山。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_257',
        word: 'him',
        phonetic: '/hɪm/',
        phoneticUK: '/hɪm/',
        translation: 'pron. 他（宾格）',
        examples: [{ english: 'Give it to him.', chinese: '把它给他。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['代词']
    },
    {
        id: 'primary_258',
        word: 'his',
        phonetic: '/hɪz/',
        phoneticUK: '/hɪz/',
        translation: 'pron. 他的',
        examples: [{ english: 'His name is Tom.', chinese: '他的名字叫汤姆。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['代词']
    },
    {
        id: 'primary_259',
        word: 'hobby',
        phonetic: '/ˈhɑːbi/',
        phoneticUK: '/ˈhɒbi/',
        translation: 'n. 爱好',
        examples: [{ english: 'My hobby is reading.', chinese: '我的爱好是读书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_260',
        word: 'hold',
        phonetic: '/hoʊld/',
        phoneticUK: '/həʊld/',
        translation: 'v. 拿；握住',
        examples: [{ english: 'Hold my hand.', chinese: '握住我的手。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_261',
        word: 'holiday',
        phonetic: '/ˈhɑːlədeɪ/',
        phoneticUK: '/ˈhɒlədeɪ/',
        translation: 'n. 假期',
        examples: [{ english: 'On holiday.', chinese: '度假。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_262',
        word: 'homework',
        phonetic: '/ˈhoʊmwɜːrk/',
        phoneticUK: '/ˈhəʊmwɜːk/',
        translation: 'n. 家庭作业',
        examples: [{ english: 'Do homework.', chinese: '做作业。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_263',
        word: 'hope',
        phonetic: '/hoʊp/',
        phoneticUK: '/həʊp/',
        translation: 'v. 希望',
        examples: [{ english: 'I hope so.', chinese: '我希望如此。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_264',
        word: 'horse',
        phonetic: '/hɔːrs/',
        phoneticUK: '/hɔːs/',
        translation: 'n. 马',
        examples: [{ english: 'Ride a horse.', chinese: '骑马。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_265',
        word: 'hospital',
        phonetic: '/ˈhɑːspɪtl/',
        phoneticUK: '/ˈhɒspɪtl/',
        translation: 'n. 医院',
        examples: [{ english: 'Go to the hospital.', chinese: '去医院。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_266',
        word: 'hotel',
        phonetic: '/hoʊˈtel/',
        phoneticUK: '/həʊˈtel/',
        translation: 'n. 旅馆',
        examples: [{ english: 'Stay in a hotel.', chinese: '住在旅馆。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_267',
        word: 'hour',
        phonetic: '/ˈaʊər/',
        phoneticUK: '/ˈaʊə(r)/',
        translation: 'n. 小时',
        examples: [{ english: 'One hour.', chinese: '一小时。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_268',
        word: 'how',
        phonetic: '/haʊ/',
        phoneticUK: '/haʊ/',
        translation: 'adv. 怎样；如何',
        examples: [{ english: 'How are you?', chinese: '你好吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['副词']
    },
    {
        id: 'primary_269',
        word: 'hundred',
        phonetic: '/ˈhʌndrəd/',
        phoneticUK: '/ˈhʌndrəd/',
        translation: 'num. 百',
        examples: [{ english: 'One hundred.', chinese: '一百。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['数词']
    },
    {
        id: 'primary_270',
        word: 'hungry',
        phonetic: '/ˈhʌŋɡri/',
        phoneticUK: '/ˈhʌŋɡri/',
        translation: 'adj. 饿的',
        examples: [{ english: 'I am hungry.', chinese: '我饿了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_271',
        word: 'hurry',
        phonetic: '/ˈhɜːri/',
        phoneticUK: '/ˈhʌri/',
        translation: 'v. 匆忙',
        examples: [{ english: 'Hurry up!', chinese: '快点！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_272',
        word: 'hurt',
        phonetic: '/hɜːrt/',
        phoneticUK: '/hɜːt/',
        translation: 'v. 伤害；疼痛',
        examples: [{ english: 'It hurts.', chinese: '很疼。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词']
    },
    {
        id: 'primary_273',
        word: 'husband',
        phonetic: '/ˈhʌzbənd/',
        phoneticUK: '/ˈhʌzbənd/',
        translation: 'n. 丈夫',
        examples: [{ english: 'Her husband is nice.', chinese: '她丈夫很好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_274',
        word: 'ice cream',
        phonetic: '/ˌaɪs ˈkriːm/',
        phoneticUK: '/ˌaɪs ˈkriːm/',
        translation: 'n. 冰淇淋',
        examples: [{ english: 'I like ice cream.', chinese: '我喜欢冰淇淋。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_275',
        word: 'idea',
        phonetic: '/aɪˈdiːə/',
        phoneticUK: '/aɪˈdɪə/',
        translation: 'n. 主意',
        examples: [{ english: 'Good idea!', chinese: '好主意！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_276',
        word: 'if',
        phonetic: '/ɪf/',
        phoneticUK: '/ɪf/',
        translation: 'conj. 如果',
        examples: [{ english: 'If you like it.', chinese: '如果你喜欢它。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['连词']
    },
    {
        id: 'primary_277',
        word: 'ill',
        phonetic: '/ɪl/',
        phoneticUK: '/ɪl/',
        translation: 'adj. 生病的',
        examples: [{ english: 'He is ill.', chinese: '他病了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_278',
        word: 'in',
        phonetic: '/ɪn/',
        phoneticUK: '/ɪn/',
        translation: 'prep. 在...里面',
        examples: [{ english: 'In the box.', chinese: '在盒子里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['介词']
    },
    {
        id: 'primary_279',
        word: 'into',
        phonetic: '/ˈɪntuː/',
        phoneticUK: '/ˈɪntə/',
        translation: 'prep. 到...里面',
        examples: [{ english: 'Go into the room.', chinese: '走进房间。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['介词']
    },
    {
        id: 'primary_280',
        word: 'island',
        phonetic: '/ˈaɪlənd/',
        phoneticUK: '/ˈaɪlənd/',
        translation: 'n. 岛',
        examples: [{ english: 'A beautiful island.', chinese: '一座美丽的岛屿。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_281',
        word: 'it',
        phonetic: '/ɪt/',
        phoneticUK: '/ɪt/',
        translation: 'pron. 它',
        examples: [{ english: 'It is a cat.', chinese: '它是一只猫。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_282',
        word: 'jacket',
        phonetic: '/ˈdʒækɪt/',
        phoneticUK: '/ˈdʒækɪt/',
        translation: 'n. 夹克衫',
        examples: [{ english: 'Wear a jacket.', chinese: '穿夹克。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_283',
        word: 'January',
        phonetic: '/ˈdʒænjueri/',
        phoneticUK: '/ˈdʒænjuəri/',
        translation: 'n. 一月',
        examples: [{ english: 'In January.', chinese: '在一月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_284',
        word: 'jeans',
        phonetic: '/dʒiːnz/',
        phoneticUK: '/dʒiːnz/',
        translation: 'n. 牛仔裤',
        examples: [{ english: 'Blue jeans.', chinese: '蓝色牛仔裤。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_285',
        word: 'job',
        phonetic: '/dʒɑːb/',
        phoneticUK: '/dʒɒb/',
        translation: 'n. 工作',
        examples: [{ english: 'Good job!', chinese: '干得好！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_286',
        word: 'join',
        phonetic: '/dʒɔɪn/',
        phoneticUK: '/dʒɔɪn/',
        translation: 'v. 参加；加入',
        examples: [{ english: 'Join us.', chinese: '加入我们。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_287',
        word: 'juice',
        phonetic: '/dʒuːs/',
        phoneticUK: '/dʒuːs/',
        translation: 'n. 果汁',
        examples: [{ english: 'Orange juice.', chinese: '橙汁。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '饮料']
    },
    {
        id: 'primary_288',
        word: 'July',
        phonetic: '/dʒuˈlaɪ/',
        phoneticUK: '/dʒuˈlaɪ/',
        translation: 'n. 七月',
        examples: [{ english: 'In July.', chinese: '在七月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_289',
        word: 'June',
        phonetic: '/dʒuːn/',
        phoneticUK: '/dʒuːn/',
        translation: 'n. 六月',
        examples: [{ english: 'In June.', chinese: '在六月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_290',
        word: 'just',
        phonetic: '/dʒʌst/',
        phoneticUK: '/dʒʌst/',
        translation: 'adv. 刚才；仅仅',
        examples: [{ english: 'Just now.', chinese: '刚才。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['副词']
    },
    {
        id: 'primary_291',
        word: 'keep',
        phonetic: '/kiːp/',
        phoneticUK: '/kiːp/',
        translation: 'v. 保持',
        examples: [{ english: 'Keep quiet.', chinese: '保持安静。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_292',
        word: 'kid',
        phonetic: '/kɪd/',
        phoneticUK: '/kɪd/',
        translation: 'n. 小孩',
        examples: [{ english: 'He is a kid.', chinese: '他是个小孩。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_293',
        word: 'kill',
        phonetic: '/kɪl/',
        phoneticUK: '/kɪl/',
        translation: 'v. 杀死',
        examples: [{ english: 'Kill time.', chinese: '消磨时间。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['动词']
    },
    {
        id: 'primary_294',
        word: 'kilometer',
        phonetic: '/kɪˈlɑːmɪtər/',
        phoneticUK: '/kɪˈlɒmɪtə(r)/',
        translation: 'n. 千米',
        examples: [{ english: 'One kilometer.', chinese: '一千米。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: ['名词', '单位']
    },
    {
        id: 'primary_295',
        word: 'kind',
        phonetic: '/kaɪnd/',
        phoneticUK: '/kaɪnd/',
        translation: 'n. 种类 adj. 善良的',
        examples: [{ english: 'What kind?', chinese: '哪一种？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '形容词']
    },
    {
        id: 'primary_296',
        word: 'kitchen',
        phonetic: '/ˈkɪtʃɪn/',
        phoneticUK: '/ˈkɪtʃɪn/',
        translation: 'n. 厨房',
        examples: [{ english: 'In the kitchen.', chinese: '在厨房里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_297',
        word: 'knife',
        phonetic: '/naɪf/',
        phoneticUK: '/naɪf/',
        translation: 'n. 刀',
        examples: [{ english: 'A sharp knife.', chinese: '一把锋利的刀。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '餐具']
    },
    {
        id: 'primary_298',
        word: 'know',
        phonetic: '/noʊ/',
        phoneticUK: '/nəʊ/',
        translation: 'v. 知道',
        examples: [{ english: 'I know.', chinese: '我知道。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词']
    },
    {
        id: 'primary_299',
        word: 'lake',
        phonetic: '/leɪk/',
        phoneticUK: '/leɪk/',
        translation: 'n. 湖',
        examples: [{ english: 'A big lake.', chinese: '一个大湖。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_300',
        word: 'lamp',
        phonetic: '/læmp/',
        phoneticUK: '/læmp/',
        translation: 'n. 灯',
        examples: [{ english: 'Turn on the lamp.', chinese: '开灯。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    // Unit 7: 常用动词与形容词 (301-350)
    {
        id: 'primary_301',
        word: 'last',
        phonetic: '/læst/',
        phoneticUK: '/lɑːst/',
        translation: 'adj. 最后的 adv. 最后',
        examples: [{ english: 'Last year.', chinese: '去年。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词', '副词']
    },
    {
        id: 'primary_302',
        word: 'late',
        phonetic: '/leɪt/',
        phoneticUK: '/leɪt/',
        translation: 'adj. 晚的',
        examples: [{ english: 'Don\'t be late.', chinese: '别迟到。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_303',
        word: 'laugh',
        phonetic: '/læf/',
        phoneticUK: '/lɑːf/',
        translation: 'v. 笑',
        examples: [{ english: 'They laugh happily.', chinese: '他们开心地笑。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_304',
        word: 'learn',
        phonetic: '/lɜːrn/',
        phoneticUK: '/lɜːn/',
        translation: 'v. 学习',
        examples: [{ english: 'Learn English.', chinese: '学英语。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_305',
        word: 'leave',
        phonetic: '/liːv/',
        phoneticUK: '/liːv/',
        translation: 'v. 离开',
        examples: [{ english: 'Leave the room.', chinese: '离开房间。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_306',
        word: 'left',
        phonetic: '/left/',
        phoneticUK: '/left/',
        translation: 'n. 左边 adj. 左边的',
        examples: [{ english: 'Turn left.', chinese: '向左转。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '形容词', '方位']
    },
    {
        id: 'primary_307',
        word: 'leg',
        phonetic: '/leɡ/',
        phoneticUK: '/leɡ/',
        translation: 'n. 腿',
        examples: [{ english: 'My leg hurts.', chinese: '我的腿疼。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_308',
        word: 'lesson',
        phonetic: '/ˈlesn/',
        phoneticUK: '/ˈlesn/',
        translation: 'n. 课',
        examples: [{ english: 'English lesson.', chinese: '英语课。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_309',
        word: 'let',
        phonetic: '/let/',
        phoneticUK: '/let/',
        translation: 'v. 让',
        examples: [{ english: 'Let me see.', chinese: '让我看看。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_310',
        word: 'letter',
        phonetic: '/ˈletər/',
        phoneticUK: '/ˈletə(r)/',
        translation: 'n. 信；字母',
        examples: [{ english: 'Write a letter.', chinese: '写信。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_311',
        word: 'library',
        phonetic: '/ˈlaɪbreri/',
        phoneticUK: '/ˈlaɪbrəri/',
        translation: 'n. 图书馆',
        examples: [{ english: 'In the library.', chinese: '在图书馆。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_312',
        word: 'lie',
        phonetic: '/laɪ/',
        phoneticUK: '/laɪ/',
        translation: 'v. 躺；撒谎',
        examples: [{ english: 'Don\'t lie.', chinese: '别撒谎。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词']
    },
    {
        id: 'primary_313',
        word: 'life',
        phonetic: '/laɪf/',
        phoneticUK: '/laɪf/',
        translation: 'n. 生活；生命',
        examples: [{ english: 'Happy life.', chinese: '幸福的生活。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_314',
        word: 'lift',
        phonetic: '/lɪft/',
        phoneticUK: '/lɪft/',
        translation: 'v. 举起 n. 电梯',
        examples: [{ english: 'Take the lift.', chinese: '乘电梯。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_315',
        word: 'like',
        phonetic: '/laɪk/',
        phoneticUK: '/laɪk/',
        translation: 'v. 喜欢 prep. 像',
        examples: [{ english: 'I like cats.', chinese: '我喜欢猫。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词', '介词']
    },
    {
        id: 'primary_316',
        word: 'line',
        phonetic: '/laɪn/',
        phoneticUK: '/laɪn/',
        translation: 'n. 线；排',
        examples: [{ english: 'Stand in line.', chinese: '排队。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_317',
        word: 'listen',
        phonetic: '/ˈlɪsn/',
        phoneticUK: '/ˈlɪsn/',
        translation: 'v. 听',
        examples: [{ english: 'Listen to me.', chinese: '听我说。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_318',
        word: 'little',
        phonetic: '/ˈlɪtl/',
        phoneticUK: '/ˈlɪtl/',
        translation: 'adj. 小的',
        examples: [{ english: 'A little bird.', chinese: '一只小鸟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词']
    },
    {
        id: 'primary_319',
        word: 'live',
        phonetic: '/lɪv/',
        phoneticUK: '/lɪv/',
        translation: 'v. 居住',
        examples: [{ english: 'I live in Beijing.', chinese: '我住在北京。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_320',
        word: 'look',
        phonetic: '/lʊk/',
        phoneticUK: '/lʊk/',
        translation: 'v. 看',
        examples: [{ english: 'Look at the picture.', chinese: '看这张图。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['动词']
    },
    {
        id: 'primary_321',
        word: 'lose',
        phonetic: '/luːz/',
        phoneticUK: '/luːz/',
        translation: 'v. 丢失；输',
        examples: [{ english: 'Don\'t lose it.', chinese: '别把它弄丢了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_322',
        word: 'lot',
        phonetic: '/lɑːt/',
        phoneticUK: '/lɒt/',
        translation: 'n. 许多',
        examples: [{ english: 'A lot of books.', chinese: '很多书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_323',
        word: 'love',
        phonetic: '/lʌv/',
        phoneticUK: '/lʌv/',
        translation: 'v. 爱 n. 爱',
        examples: [{ english: 'I love you.', chinese: '我爱你。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_324',
        word: 'low',
        phonetic: '/loʊ/',
        phoneticUK: '/ləʊ/',
        translation: 'adj. 低的',
        examples: [{ english: 'Low price.', chinese: '低价。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['形容词']
    },
    {
        id: 'primary_325',
        word: 'lunch',
        phonetic: '/lʌntʃ/',
        phoneticUK: '/lʌntʃ/',
        translation: 'n. 午餐',
        examples: [{ english: 'Have lunch.', chinese: '吃午饭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_326',
        word: 'make',
        phonetic: '/meɪk/',
        phoneticUK: '/meɪk/',
        translation: 'v. 制作；使得',
        examples: [{ english: 'Make a cake.', chinese: '做一个蛋糕。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_327',
        word: 'many',
        phonetic: '/ˈmeni/',
        phoneticUK: '/ˈmeni/',
        translation: 'adj. 许多的',
        examples: [{ english: 'Many people.', chinese: '许多人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词']
    },
    {
        id: 'primary_328',
        word: 'map',
        phonetic: '/mæp/',
        phoneticUK: '/mæp/',
        translation: 'n. 地图',
        examples: [{ english: 'Look at the map.', chinese: '看地图。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_329',
        word: 'March',
        phonetic: '/mɑːrtʃ/',
        phoneticUK: '/mɑːtʃ/',
        translation: 'n. 三月',
        examples: [{ english: 'In March.', chinese: '在三月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_330',
        word: 'market',
        phonetic: '/ˈmɑːrkɪt/',
        phoneticUK: '/ˈmɑːkɪt/',
        translation: 'n. 市场',
        examples: [{ english: 'Go to the market.', chinese: '去市场。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_331',
        word: 'math',
        phonetic: '/mæθ/',
        phoneticUK: '/mæθ/',
        translation: 'n. 数学',
        examples: [{ english: 'Math class.', chinese: '数学课。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_332',
        word: 'matter',
        phonetic: '/ˈmætər/',
        phoneticUK: '/ˈmætə(r)/',
        translation: 'n. 事情',
        examples: [{ english: 'What\'s the matter?', chinese: '怎么了？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_333',
        word: 'May',
        phonetic: '/meɪ/',
        phoneticUK: '/meɪ/',
        translation: 'n. 五月',
        examples: [{ english: 'In May.', chinese: '在五月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_334',
        word: 'may',
        phonetic: '/meɪ/',
        phoneticUK: '/meɪ/',
        translation: 'modal v. 可以；可能',
        examples: [{ english: 'May I come in?', chinese: '我可以进来吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_335',
        word: 'me',
        phonetic: '/miː/',
        phoneticUK: '/miː/',
        translation: 'pron. 我（宾格）',
        examples: [{ english: 'Look at me.', chinese: '看着我。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_336',
        word: 'meal',
        phonetic: '/miːl/',
        phoneticUK: '/miːl/',
        translation: 'n. 一餐',
        examples: [{ english: 'Have a good meal.', chinese: '吃顿好的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_337',
        word: 'meat',
        phonetic: '/miːt/',
        phoneticUK: '/miːt/',
        translation: 'n. 肉',
        examples: [{ english: 'I eat meat.', chinese: '我吃肉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_338',
        word: 'meet',
        phonetic: '/miːt/',
        phoneticUK: '/miːt/',
        translation: 'v. 遇见',
        examples: [{ english: 'Nice to meet you.', chinese: '很高兴见到你。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_339',
        word: 'meter',
        phonetic: '/ˈmiːtər/',
        phoneticUK: '/ˈmiːtə(r)/',
        translation: 'n. 米',
        examples: [{ english: 'Two meters tall.', chinese: '两米高。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '单位']
    },
    {
        id: 'primary_340',
        word: 'milk',
        phonetic: '/mɪlk/',
        phoneticUK: '/mɪlk/',
        translation: 'n. 牛奶',
        examples: [{ english: 'Drink milk.', chinese: '喝牛奶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '饮料']
    },
    {
        id: 'primary_341',
        word: 'mind',
        phonetic: '/maɪnd/',
        phoneticUK: '/maɪnd/',
        translation: 'n. 头脑 v. 介意',
        examples: [{ english: 'Never mind.', chinese: '没关系。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_342',
        word: 'minute',
        phonetic: '/ˈmɪnɪt/',
        phoneticUK: '/ˈmɪnɪt/',
        translation: 'n. 分钟',
        examples: [{ english: 'Wait a minute.', chinese: '等一分钟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_343',
        word: 'miss',
        phonetic: '/mɪs/',
        phoneticUK: '/mɪs/',
        translation: 'v. 想念；错过',
        examples: [{ english: 'I miss you.', chinese: '我想你。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_344',
        word: 'Miss',
        phonetic: '/mɪs/',
        phoneticUK: '/mɪs/',
        translation: 'n. 小姐；女士',
        examples: [{ english: 'Miss Li.', chinese: '李小姐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_345',
        word: 'model',
        phonetic: '/ˈmɑːdl/',
        phoneticUK: '/ˈmɒdl/',
        translation: 'n. 模型；模特',
        examples: [{ english: 'A plane model.', chinese: '飞机模型。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词']
    },
    {
        id: 'primary_346',
        word: 'mom',
        phonetic: '/mɑːm/',
        phoneticUK: '/mɒm/',
        translation: 'n. 妈妈',
        examples: [{ english: 'I love my mom.', chinese: '我爱我妈妈。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_347',
        word: 'moment',
        phonetic: '/ˈmoʊmənt/',
        phoneticUK: '/ˈməʊmənt/',
        translation: 'n. 片刻',
        examples: [{ english: 'Just a moment.', chinese: '稍等片刻。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_348',
        word: 'money',
        phonetic: '/ˈmʌni/',
        phoneticUK: '/ˈmʌni/',
        translation: 'n. 钱',
        examples: [{ english: 'I have no money.', chinese: '我没有钱。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_349',
        word: 'monkey',
        phonetic: '/ˈmʌŋki/',
        phoneticUK: '/ˈmʌŋki/',
        translation: 'n. 猴子',
        examples: [{ english: 'The monkey is clever.', chinese: '猴子很聪明。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_350',
        word: 'month',
        phonetic: '/mʌnθ/',
        phoneticUK: '/mʌnθ/',
        translation: 'n. 月',
        examples: [{ english: 'Next month.', chinese: '下个月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '时间']
    },
    // Unit 8: 更多名词 (351-400)
    {
        id: 'primary_351',
        word: 'more',
        phonetic: '/mɔːr/',
        phoneticUK: '/mɔː(r)/',
        translation: 'adj. 更多的',
        examples: [{ english: 'One more.', chinese: '再来一个。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['形容词']
    },
    {
        id: 'primary_352',
        word: 'mother',
        phonetic: '/ˈmʌðər/',
        phoneticUK: '/ˈmʌðə(r)/',
        translation: 'n. 母亲',
        examples: [{ english: 'My mother is a teacher.', chinese: '我母亲是老师。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_353',
        word: 'mountain',
        phonetic: '/ˈmaʊntn/',
        phoneticUK: '/ˈmaʊntɪn/',
        translation: 'n. 山',
        examples: [{ english: 'Climb a mountain.', chinese: '爬山。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_354',
        word: 'mouse',
        phonetic: '/maʊs/',
        phoneticUK: '/maʊs/',
        translation: 'n. 老鼠',
        examples: [{ english: 'A small mouse.', chinese: '一只小老鼠。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_355',
        word: 'mouth',
        phonetic: '/maʊθ/',
        phoneticUK: '/maʊθ/',
        translation: 'n. 嘴',
        examples: [{ english: 'Open your mouth.', chinese: '张开嘴。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_356',
        word: 'move',
        phonetic: '/muːv/',
        phoneticUK: '/muːv/',
        translation: 'v. 移动',
        examples: [{ english: 'Don\'t move.', chinese: '别动。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_357',
        word: 'movie',
        phonetic: '/ˈmuːvi/',
        phoneticUK: '/ˈmuːvi/',
        translation: 'n. 电影',
        examples: [{ english: 'Watch a movie.', chinese: '看电影。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_358',
        word: 'Mr',
        phonetic: '/ˈmɪstər/',
        phoneticUK: '/ˈmɪstə(r)/',
        translation: 'n. 先生',
        examples: [{ english: 'Mr Smith.', chinese: '史密斯先生。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_359',
        word: 'Mrs',
        phonetic: '/ˈmɪsɪz/',
        phoneticUK: '/ˈmɪsɪz/',
        translation: 'n. 夫人',
        examples: [{ english: 'Mrs Jones.', chinese: '琼斯夫人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_360',
        word: 'much',
        phonetic: '/mʌtʃ/',
        phoneticUK: '/mʌtʃ/',
        translation: 'adj. 许多的 adv. 非常',
        examples: [{ english: 'Thank you very much.', chinese: '非常感谢。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词', '副词']
    },
    {
        id: 'primary_361',
        word: 'museum',
        phonetic: '/mjuˈziːəm/',
        phoneticUK: '/mjuˈziːəm/',
        translation: 'n. 博物馆',
        examples: [{ english: 'Visit a museum.', chinese: '参观博物馆。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_362',
        word: 'must',
        phonetic: '/mʌst/',
        phoneticUK: '/mʌst/',
        translation: 'modal v. 必须',
        examples: [{ english: 'I must go.', chinese: '我必须走了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_363',
        word: 'my',
        phonetic: '/maɪ/',
        phoneticUK: '/maɪ/',
        translation: 'pron. 我的',
        examples: [{ english: 'This is my book.', chinese: '这是我的书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_364',
        word: 'name',
        phonetic: '/neɪm/',
        phoneticUK: '/neɪm/',
        translation: 'n. 名字',
        examples: [{ english: 'What is your name?', chinese: '你叫什么名字？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['名词']
    },
    {
        id: 'primary_365',
        word: 'near',
        phonetic: '/nɪr/',
        phoneticUK: '/nɪə(r)/',
        translation: 'prep. 在...附近',
        examples: [{ english: 'Near the park.', chinese: '在公园附近。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['介词']
    },
    {
        id: 'primary_366',
        word: 'neck',
        phonetic: '/nek/',
        phoneticUK: '/nek/',
        translation: 'n. 脖子',
        examples: [{ english: 'My neck hurts.', chinese: '我的脖子疼。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_367',
        word: 'need',
        phonetic: '/niːd/',
        phoneticUK: '/niːd/',
        translation: 'v. 需要',
        examples: [{ english: 'I need help.', chinese: '我需要帮助。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_368',
        word: 'neighbor',
        phonetic: '/ˈneɪbər/',
        phoneticUK: '/ˈneɪbə(r)/',
        translation: 'n. 邻居',
        examples: [{ english: 'Good neighbors.', chinese: '好邻居。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_369',
        word: 'never',
        phonetic: '/ˈnevər/',
        phoneticUK: '/ˈnevə(r)/',
        translation: 'adv. 从不',
        examples: [{ english: 'I never lie.', chinese: '我从不撒谎。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['副词']
    },
    {
        id: 'primary_370',
        word: 'new',
        phonetic: '/nuː/',
        phoneticUK: '/njuː/',
        translation: 'adj. 新的',
        examples: [{ english: 'Happy New Year!', chinese: '新年快乐！', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['形容词']
    },
    {
        id: 'primary_371',
        word: 'news',
        phonetic: '/nuːz/',
        phoneticUK: '/njuːz/',
        translation: 'n. 新闻',
        examples: [{ english: 'Good news.', chinese: '好消息。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_372',
        word: 'next',
        phonetic: '/nekst/',
        phoneticUK: '/nekst/',
        translation: 'adj. 下一个',
        examples: [{ english: 'Next week.', chinese: '下周。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['形容词']
    },
    {
        id: 'primary_373',
        word: 'nice',
        phonetic: '/naɪs/',
        phoneticUK: '/naɪs/',
        translation: 'adj. 美好的',
        examples: [{ english: 'Have a nice day.', chinese: '祝你过得愉快。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['形容词']
    },
    {
        id: 'primary_374',
        word: 'night',
        phonetic: '/naɪt/',
        phoneticUK: '/naɪt/',
        translation: 'n. 夜晚',
        examples: [{ english: 'Good night.', chinese: '晚安。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_375',
        word: 'nine',
        phonetic: '/naɪn/',
        phoneticUK: '/naɪn/',
        translation: 'num. 九',
        examples: [{ english: 'Nine o\'clock.', chinese: '九点。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['数词']
    },
    {
        id: 'primary_376',
        word: 'nineteen',
        phonetic: '/ˌnaɪnˈtiːn/',
        phoneticUK: '/ˌnaɪnˈtiːn/',
        translation: 'num. 十九',
        examples: [{ english: 'Nineteen years old.', chinese: '十九岁。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 25,
        tags: ['数词']
    },
    {
        id: 'primary_377',
        word: 'ninety',
        phonetic: '/ˈnaɪnti/',
        phoneticUK: '/ˈnaɪnti/',
        translation: 'num. 九十',
        examples: [{ english: 'Ninety days.', chinese: '九十天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 20,
        tags: ['数词']
    },
    {
        id: 'primary_378',
        word: 'no',
        phonetic: '/noʊ/',
        phoneticUK: '/nəʊ/',
        translation: 'adv. 不',
        examples: [{ english: 'No, thanks.', chinese: '不，谢谢。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['副词']
    },
    {
        id: 'primary_379',
        word: 'nobody',
        phonetic: '/ˈnoʊbədi/',
        phoneticUK: '/ˈnəʊbədi/',
        translation: 'pron. 没有人',
        examples: [{ english: 'Nobody knows.', chinese: '没人知道。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['代词']
    },
    {
        id: 'primary_380',
        word: 'noodles',
        phonetic: '/ˈnuːdlz/',
        phoneticUK: '/ˈnuːdlz/',
        translation: 'n. 面条',
        examples: [{ english: 'Beef noodles.', chinese: '牛肉面。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_381',
        word: 'noon',
        phonetic: '/nuːn/',
        phoneticUK: '/nuːn/',
        translation: 'n. 中午',
        examples: [{ english: 'At noon.', chinese: '在中午。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_382',
        word: 'north',
        phonetic: '/nɔːrθ/',
        phoneticUK: '/nɔːθ/',
        translation: 'n. 北方',
        examples: [{ english: 'In the north.', chinese: '在北方。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '方位']
    },
    {
        id: 'primary_383',
        word: 'nose',
        phonetic: '/noʊz/',
        phoneticUK: '/nəʊz/',
        translation: 'n. 鼻子',
        examples: [{ english: 'Touch your nose.', chinese: '摸摸你的鼻子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_384',
        word: 'not',
        phonetic: '/nɑːt/',
        phoneticUK: '/nɒt/',
        translation: 'adv. 不',
        examples: [{ english: 'I am not tired.', chinese: '我不累。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['副词']
    },
    {
        id: 'primary_385',
        word: 'notebook',
        phonetic: '/ˈnoʊtbʊk/',
        phoneticUK: '/ˈnəʊtbʊk/',
        translation: 'n. 笔记本',
        examples: [{ english: 'Write in your notebook.', chinese: '写在你的笔记本上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_386',
        word: 'nothing',
        phonetic: '/ˈnʌθɪŋ/',
        phoneticUK: '/ˈnʌθɪŋ/',
        translation: 'pron. 没有什么',
        examples: [{ english: 'Nothing special.', chinese: '没什么特别的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['代词']
    },
    {
        id: 'primary_387',
        word: 'November',
        phonetic: '/noʊˈvembər/',
        phoneticUK: '/nəʊˈvembə(r)/',
        translation: 'n. 十一月',
        examples: [{ english: 'In November.', chinese: '在十一月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_388',
        word: 'now',
        phonetic: '/naʊ/',
        phoneticUK: '/naʊ/',
        translation: 'adv. 现在',
        examples: [{ english: 'Right now.', chinese: '立刻。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['副词']
    },
    {
        id: 'primary_389',
        word: 'number',
        phonetic: '/ˈnʌmbər/',
        phoneticUK: '/ˈnʌmbə(r)/',
        translation: 'n. 数字；号码',
        examples: [{ english: 'What is your phone number?', chinese: '你的电话号码是多少？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词']
    },
    {
        id: 'primary_390',
        word: 'nurse',
        phonetic: '/nɜːrs/',
        phoneticUK: '/nɜːs/',
        translation: 'n. 护士',
        examples: [{ english: 'She is a nurse.', chinese: '她是一名护士。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_391',
        word: 'ocean',
        phonetic: '/ˈoʊʃn/',
        phoneticUK: '/ˈəʊʃn/',
        translation: 'n. 海洋',
        examples: [{ english: 'The blue ocean.', chinese: '蓝色的海洋。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_392',
        word: 'October',
        phonetic: '/ɑːkˈtoʊbər/',
        phoneticUK: '/ɒkˈtəʊbə(r)/',
        translation: 'n. 十月',
        examples: [{ english: 'In October.', chinese: '在十月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_393',
        word: 'of',
        phonetic: '/əv/',
        phoneticUK: '/əv/',
        translation: 'prep. ...的',
        examples: [{ english: 'A cup of tea.', chinese: '一杯茶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['介词']
    },
    {
        id: 'primary_394',
        word: 'off',
        phonetic: '/ɔːf/',
        phoneticUK: '/ɒf/',
        translation: 'adv. 离开；关掉',
        examples: [{ english: 'Turn off the light.', chinese: '关灯。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['副词']
    },
    {
        id: 'primary_395',
        word: 'office',
        phonetic: '/ˈɑːfɪs/',
        phoneticUK: '/ˈɒfɪs/',
        translation: 'n. 办公室',
        examples: [{ english: 'In the office.', chinese: '在办公室。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_396',
        word: 'often',
        phonetic: '/ˈɔːfn/',
        phoneticUK: '/ˈɒfn/',
        translation: 'adv. 经常',
        examples: [{ english: 'I often read books.', chinese: '我经常读书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['副词']
    },
    {
        id: 'primary_397',
        word: 'oil',
        phonetic: '/ɔɪl/',
        phoneticUK: '/ɔɪl/',
        translation: 'n. 油',
        examples: [{ english: 'Cooking oil.', chinese: '食用油。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_398',
        word: 'old',
        phonetic: '/oʊld/',
        phoneticUK: '/əʊld/',
        translation: 'adj. 老的；旧的',
        examples: [{ english: 'An old man.', chinese: '一位老人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['形容词']
    },
    {
        id: 'primary_399',
        word: 'on',
        phonetic: '/ɑːn/',
        phoneticUK: '/ɒn/',
        translation: 'prep. 在...上面',
        examples: [{ english: 'On the table.', chinese: '在桌子上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['介词']
    },
    {
        id: 'primary_400',
        word: 'one',
        phonetic: '/wʌn/',
        phoneticUK: '/wʌn/',
        translation: 'num. 一',
        examples: [{ english: 'One apple.', chinese: '一个苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['数词']
    },
    // Unit 9: 常用动词与介词 (401-450)
    {
        id: 'primary_401',
        word: 'open',
        phonetic: '/ˈoʊpən/',
        phoneticUK: '/ˈəʊpən/',
        translation: 'v. 打开 adj. 开着的',
        examples: [{ english: 'Open the door.', chinese: '开门。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词', '形容词']
    },
    {
        id: 'primary_402',
        word: 'or',
        phonetic: '/ɔːr/',
        phoneticUK: '/ɔː(r)/',
        translation: 'conj. 或者',
        examples: [{ english: 'Tea or coffee?', chinese: '茶还是咖啡？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['连词']
    },
    {
        id: 'primary_403',
        word: 'orange',
        phonetic: '/ˈɔːrɪndʒ/',
        phoneticUK: '/ˈɒrɪndʒ/',
        translation: 'n. 橙子；橙色',
        examples: [{ english: 'An orange.', chinese: '一个橙子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '水果', '颜色']
    },
    {
        id: 'primary_404',
        word: 'our',
        phonetic: '/ɑːr/',
        phoneticUK: '/ɑː(r)/',
        translation: 'pron. 我们的',
        examples: [{ english: 'Our school.', chinese: '我们的学校。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['代词']
    },
    {
        id: 'primary_405',
        word: 'out',
        phonetic: '/aʊt/',
        phoneticUK: '/aʊt/',
        translation: 'adv. 在外面',
        examples: [{ english: 'Go out.', chinese: '出去。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['副词']
    },
    {
        id: 'primary_406',
        word: 'over',
        phonetic: '/ˈoʊvər/',
        phoneticUK: '/ˈəʊvə(r)/',
        translation: 'prep. 在...上方 adv. 结束',
        examples: [{ english: 'Game over.', chinese: '游戏结束。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['介词', '副词']
    },
    {
        id: 'primary_407',
        word: 'pair',
        phonetic: '/per/',
        phoneticUK: '/peə(r)/',
        translation: 'n. 一双',
        examples: [{ english: 'A pair of shoes.', chinese: '一双鞋。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '单位']
    },
    {
        id: 'primary_408',
        word: 'pants',
        phonetic: '/pænts/',
        phoneticUK: '/pænts/',
        translation: 'n. 裤子',
        examples: [{ english: 'Blue pants.', chinese: '蓝色的裤子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_409',
        word: 'paper',
        phonetic: '/ˈpeɪpər/',
        phoneticUK: '/ˈpeɪpə(r)/',
        translation: 'n. 纸',
        examples: [{ english: 'A piece of paper.', chinese: '一张纸。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_410',
        word: 'parent',
        phonetic: '/ˈperənt/',
        phoneticUK: '/ˈpeərənt/',
        translation: 'n. 父母',
        examples: [{ english: 'My parents.', chinese: '我的父母。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_411',
        word: 'park',
        phonetic: '/pɑːrk/',
        phoneticUK: '/pɑːk/',
        translation: 'n. 公园 v. 停车',
        examples: [{ english: 'Let\'s go to the park.', chinese: '我们去公园吧。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '场所', '动词']
    },
    {
        id: 'primary_412',
        word: 'party',
        phonetic: '/ˈpɑːrti/',
        phoneticUK: '/ˈpɑːti/',
        translation: 'n. 聚会',
        examples: [{ english: 'Birthday party.', chinese: '生日聚会。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_413',
        word: 'pass',
        phonetic: '/pæs/',
        phoneticUK: '/pɑːs/',
        translation: 'v. 传递；通过',
        examples: [{ english: 'Pass me the salt.', chinese: '把盐递给我。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_414',
        word: 'past',
        phonetic: '/pæst/',
        phoneticUK: '/pɑːst/',
        translation: 'n. 过去 prep. 经过',
        examples: [{ english: 'In the past.', chinese: '在过去。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '介词']
    },
    {
        id: 'primary_415',
        word: 'pay',
        phonetic: '/peɪ/',
        phoneticUK: '/peɪ/',
        translation: 'v. 付款',
        examples: [{ english: 'Pay for it.', chinese: '为此付款。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_416',
        word: 'pen',
        phonetic: '/pen/',
        phoneticUK: '/pen/',
        translation: 'n. 钢笔',
        examples: [{ english: 'I have a pen.', chinese: '我有一支钢笔。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '学习用品']
    },
    {
        id: 'primary_417',
        word: 'pencil',
        phonetic: '/ˈpensl/',
        phoneticUK: '/ˈpensl/',
        translation: 'n. 铅笔',
        examples: [{ english: 'Sharpen the pencil.', chinese: '削铅笔。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '学习用品']
    },
    {
        id: 'primary_418',
        word: 'people',
        phonetic: '/ˈpiːpl/',
        phoneticUK: '/ˈpiːpl/',
        translation: 'n. 人们',
        examples: [{ english: 'Many people.', chinese: '许多人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词']
    },
    {
        id: 'primary_419',
        word: 'person',
        phonetic: '/ˈpɜːrsn/',
        phoneticUK: '/ˈpɜːsn/',
        translation: 'n. 人',
        examples: [{ english: 'A nice person.', chinese: '一个好人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词']
    },
    {
        id: 'primary_420',
        word: 'pet',
        phonetic: '/pet/',
        phoneticUK: '/pet/',
        translation: 'n. 宠物',
        examples: [{ english: 'I have a pet dog.', chinese: '我有一只宠物狗。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_421',
        word: 'phone',
        phonetic: '/foʊn/',
        phoneticUK: '/fəʊn/',
        translation: 'n. 电话',
        examples: [{ english: 'Answer the phone.', chinese: '接电话。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_422',
        word: 'photo',
        phonetic: '/ˈfoʊtoʊ/',
        phoneticUK: '/ˈfəʊtəʊ/',
        translation: 'n. 照片',
        examples: [{ english: 'Take a photo.', chinese: '拍张照。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_423',
        word: 'piano',
        phonetic: '/piˈænoʊ/',
        phoneticUK: '/piˈænəʊ/',
        translation: 'n. 钢琴',
        examples: [{ english: 'Play the piano.', chinese: '弹钢琴。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '乐器']
    },
    {
        id: 'primary_424',
        word: 'pick',
        phonetic: '/pɪk/',
        phoneticUK: '/pɪk/',
        translation: 'v. 挑选；采摘',
        examples: [{ english: 'Pick an apple.', chinese: '摘一个苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_425',
        word: 'picnic',
        phonetic: '/ˈpɪknɪk/',
        phoneticUK: '/ˈpɪknɪk/',
        translation: 'n. 野餐',
        examples: [{ english: 'Have a picnic.', chinese: '去野餐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_426',
        word: 'picture',
        phonetic: '/ˈpɪktʃər/',
        phoneticUK: '/ˈpɪktʃə(r)/',
        translation: 'n. 图片；画',
        examples: [{ english: 'Draw a picture.', chinese: '画一幅画。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_427',
        word: 'pie',
        phonetic: '/paɪ/',
        phoneticUK: '/paɪ/',
        translation: 'n. 派',
        examples: [{ english: 'Apple pie.', chinese: '苹果派。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_428',
        word: 'piece',
        phonetic: '/piːs/',
        phoneticUK: '/piːs/',
        translation: 'n. 一片；一张',
        examples: [{ english: 'A piece of cake.', chinese: '一块蛋糕（小菜一碟）。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '单位']
    },
    {
        id: 'primary_429',
        word: 'pig',
        phonetic: '/pɪɡ/',
        phoneticUK: '/pɪɡ/',
        translation: 'n. 猪',
        examples: [{ english: 'A fat pig.', chinese: '一头肥猪。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_430',
        word: 'pink',
        phonetic: '/pɪŋk/',
        phoneticUK: '/pɪŋk/',
        translation: 'n. 粉色 adj. 粉色的',
        examples: [{ english: 'I like pink.', chinese: '我喜欢粉色。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_431',
        word: 'place',
        phonetic: '/pleɪs/',
        phoneticUK: '/pleɪs/',
        translation: 'n. 地方',
        examples: [{ english: 'A beautiful place.', chinese: '一个美丽的地方。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_432',
        word: 'plan',
        phonetic: '/plæn/',
        phoneticUK: '/plæn/',
        translation: 'n. 计划 v. 计划',
        examples: [{ english: 'Make a plan.', chinese: '制定计划。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_433',
        word: 'plane',
        phonetic: '/pleɪn/',
        phoneticUK: '/pleɪn/',
        translation: 'n. 飞机',
        examples: [{ english: 'By plane.', chinese: '乘飞机。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_434',
        word: 'plant',
        phonetic: '/plænt/',
        phoneticUK: '/plɑːnt/',
        translation: 'n. 植物 v. 种植',
        examples: [{ english: 'Water the plant.', chinese: '给植物浇水。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动词', '自然']
    },
    {
        id: 'primary_435',
        word: 'play',
        phonetic: '/pleɪ/',
        phoneticUK: '/pleɪ/',
        translation: 'v. 玩；播放',
        examples: [{ english: 'Play football.', chinese: '踢足球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词']
    },
    {
        id: 'primary_436',
        word: 'playground',
        phonetic: '/ˈpleɪɡraʊnd/',
        phoneticUK: '/ˈpleɪɡraʊnd/',
        translation: 'n. 操场',
        examples: [{ english: 'On the playground.', chinese: '在操场上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所', '学校']
    },
    {
        id: 'primary_437',
        word: 'please',
        phonetic: '/pliːz/',
        phoneticUK: '/pliːz/',
        translation: 'int. 请',
        examples: [{ english: 'Sit down, please.', chinese: '请坐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['感叹词']
    },
    {
        id: 'primary_438',
        word: 'pocket',
        phonetic: '/ˈpɑːkɪt/',
        phoneticUK: '/ˈpɒkɪt/',
        translation: 'n. 口袋',
        examples: [{ english: 'In my pocket.', chinese: '在我的口袋里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_439',
        word: 'point',
        phonetic: '/pɔɪnt/',
        phoneticUK: '/pɔɪnt/',
        translation: 'v. 指 n. 点',
        examples: [{ english: 'Point at the door.', chinese: '指向门。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_440',
        word: 'police',
        phonetic: '/pəˈliːs/',
        phoneticUK: '/pəˈliːs/',
        translation: 'n. 警察',
        examples: [{ english: 'Call the police.', chinese: '报警。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_441',
        word: 'policeman',
        phonetic: '/pəˈliːsmən/',
        phoneticUK: '/pəˈliːsmən/',
        translation: 'n. 男警察',
        examples: [{ english: 'He is a policeman.', chinese: '他是个警察。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_442',
        word: 'pool',
        phonetic: '/puːl/',
        phoneticUK: '/puːl/',
        translation: 'n. 水池',
        examples: [{ english: 'Swimming pool.', chinese: '游泳池。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_443',
        word: 'poor',
        phonetic: '/pʊr/',
        phoneticUK: '/pɔː(r)/',
        translation: 'adj. 贫穷的；可怜的',
        examples: [{ english: 'Poor boy.', chinese: '可怜的男孩。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_444',
        word: 'popular',
        phonetic: '/ˈpɑːpjələr/',
        phoneticUK: '/ˈpɒpjələ(r)/',
        translation: 'adj. 流行的',
        examples: [{ english: 'Popular song.', chinese: '流行歌曲。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_445',
        word: 'pork',
        phonetic: '/pɔːrk/',
        phoneticUK: '/pɔːk/',
        translation: 'n. 猪肉',
        examples: [{ english: 'I like pork.', chinese: '我喜欢猪肉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_446',
        word: 'post',
        phonetic: '/poʊst/',
        phoneticUK: '/pəʊst/',
        translation: 'n. 邮件 v. 邮寄',
        examples: [{ english: 'Post office.', chinese: '邮局。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_447',
        word: 'potato',
        phonetic: '/pəˈteɪtoʊ/',
        phoneticUK: '/pəˈteɪtəʊ/',
        translation: 'n. 土豆',
        examples: [{ english: 'Potato chips.', chinese: '薯片。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '蔬菜']
    },
    {
        id: 'primary_448',
        word: 'practice',
        phonetic: '/ˈpræktɪs/',
        phoneticUK: '/ˈpræktɪs/',
        translation: 'v. 练习 n. 练习',
        examples: [{ english: 'Practice English.', chinese: '练习英语。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_449',
        word: 'present',
        phonetic: '/ˈpreznt/',
        phoneticUK: '/ˈpreznt/',
        translation: 'n. 礼物',
        examples: [{ english: 'A birthday present.', chinese: '生日礼物。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_450',
        word: 'pretty',
        phonetic: '/ˈprɪti/',
        phoneticUK: '/ˈprɪti/',
        translation: 'adj. 漂亮的',
        examples: [{ english: 'A pretty girl.', chinese: '一个漂亮的女孩。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['形容词']
    },
    // Unit 10: 更多名词与代词 (451-500)
    {
        id: 'primary_451',
        word: 'price',
        phonetic: '/praɪs/',
        phoneticUK: '/praɪs/',
        translation: 'n. 价格',
        examples: [{ english: 'Good price.', chinese: '好价格。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_452',
        word: 'problem',
        phonetic: '/ˈprɑːbləm/',
        phoneticUK: '/ˈprɒbləm/',
        translation: 'n. 问题',
        examples: [{ english: 'No problem.', chinese: '没问题。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_453',
        word: 'pupil',
        phonetic: '/ˈpjuːpl/',
        phoneticUK: '/ˈpjuːpl/',
        translation: 'n. 小学生',
        examples: [{ english: 'Primary school pupil.', chinese: '小学生。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_454',
        word: 'purple',
        phonetic: '/ˈpɜːrpl/',
        phoneticUK: '/ˈpɜːpl/',
        translation: 'n. 紫色 adj. 紫色的',
        examples: [{ english: 'Purple flower.', chinese: '紫色的花。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_455',
        word: 'put',
        phonetic: '/pʊt/',
        phoneticUK: '/pʊt/',
        translation: 'v. 放',
        examples: [{ english: 'Put it down.', chinese: '把它放下。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_456',
        word: 'quarter',
        phonetic: '/ˈkwɔːrtər/',
        phoneticUK: '/ˈkwɔːtə(r)/',
        translation: 'n. 四分之一；一刻钟',
        examples: [{ english: 'A quarter past five.', chinese: '五点一刻。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_457',
        word: 'queen',
        phonetic: '/kwiːn/',
        phoneticUK: '/kwiːn/',
        translation: 'n. 女王',
        examples: [{ english: 'The Queen.', chinese: '女王。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_458',
        word: 'question',
        phonetic: '/ˈkwestʃən/',
        phoneticUK: '/ˈkwestʃən/',
        translation: 'n. 问题',
        examples: [{ english: 'Ask a question.', chinese: '问个问题。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词']
    },
    {
        id: 'primary_459',
        word: 'quick',
        phonetic: '/kwɪk/',
        phoneticUK: '/kwɪk/',
        translation: 'adj. 快的',
        examples: [{ english: 'Be quick.', chinese: '快点。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_460',
        word: 'quiet',
        phonetic: '/ˈkwaɪət/',
        phoneticUK: '/ˈkwaɪət/',
        translation: 'adj. 安静的',
        examples: [{ english: 'Be quiet.', chinese: '安静。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['形容词']
    },
    {
        id: 'primary_461',
        word: 'rabbit',
        phonetic: '/ˈræbɪt/',
        phoneticUK: '/ˈræbɪt/',
        translation: 'n. 兔子',
        examples: [{ english: 'Cute rabbit.', chinese: '可爱的兔子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_462',
        word: 'radio',
        phonetic: '/ˈreɪdioʊ/',
        phoneticUK: '/ˈreɪdiəʊ/',
        translation: 'n. 收音机',
        examples: [{ english: 'Listen to the radio.', chinese: '听收音机。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_463',
        word: 'rain',
        phonetic: '/reɪn/',
        phoneticUK: '/reɪn/',
        translation: 'n. 雨 v. 下雨',
        examples: [{ english: 'Heavy rain.', chinese: '大雨。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '动词', '自然']
    },
    {
        id: 'primary_464',
        word: 'rainy',
        phonetic: '/ˈreɪni/',
        phoneticUK: '/ˈreɪni/',
        translation: 'adj. 下雨的',
        examples: [{ english: 'Rainy day.', chinese: '雨天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词', '自然']
    },
    {
        id: 'primary_465',
        word: 'read',
        phonetic: '/riːd/',
        phoneticUK: '/riːd/',
        translation: 'v. 阅读',
        examples: [{ english: 'Read a book.', chinese: '读书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词']
    },
    {
        id: 'primary_466',
        word: 'ready',
        phonetic: '/ˈredi/',
        phoneticUK: '/ˈredi/',
        translation: 'adj. 准备好的',
        examples: [{ english: 'Are you ready?', chinese: '你准备好了吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词']
    },
    {
        id: 'primary_467',
        word: 'real',
        phonetic: '/ˈriːəl/',
        phoneticUK: '/rɪəl/',
        translation: 'adj. 真的',
        examples: [{ english: 'Real life.', chinese: '现实生活。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_468',
        word: 'really',
        phonetic: '/ˈriːəli/',
        phoneticUK: '/ˈriːəli/',
        translation: 'adv. 真正地',
        examples: [{ english: 'Really good.', chinese: '真的很好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['副词']
    },
    {
        id: 'primary_469',
        word: 'red',
        phonetic: '/red/',
        phoneticUK: '/red/',
        translation: 'n. 红色 adj. 红色的',
        examples: [{ english: 'Red apple.', chinese: '红苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '形容词', '颜色']
    },
    {
        id: 'primary_470',
        word: 'remember',
        phonetic: '/rɪˈmembər/',
        phoneticUK: '/rɪˈmembə(r)/',
        translation: 'v. 记得',
        examples: [{ english: 'Remember me.', chinese: '记住我。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_471',
        word: 'restaurant',
        phonetic: '/ˈrestərɑːnt/',
        phoneticUK: '/ˈrestrɒnt/',
        translation: 'n. 餐厅',
        examples: [{ english: 'Go to a restaurant.', chinese: '去餐厅。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_472',
        word: 'rice',
        phonetic: '/raɪs/',
        phoneticUK: '/raɪs/',
        translation: 'n. 米饭',
        examples: [{ english: 'Eat rice.', chinese: '吃米饭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_473',
        word: 'rich',
        phonetic: '/rɪtʃ/',
        phoneticUK: '/rɪtʃ/',
        translation: 'adj. 富有的',
        examples: [{ english: 'Rich man.', chinese: '富人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_474',
        word: 'ride',
        phonetic: '/raɪd/',
        phoneticUK: '/raɪd/',
        translation: 'v. 骑；乘',
        examples: [{ english: 'Ride a bike.', chinese: '骑自行车。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_475',
        word: 'right',
        phonetic: '/raɪt/',
        phoneticUK: '/raɪt/',
        translation: 'adj. 正确的；右边的',
        examples: [{ english: 'That\'s right.', chinese: '那是对的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['形容词', '方位']
    },
    {
        id: 'primary_476',
        word: 'ring',
        phonetic: '/rɪŋ/',
        phoneticUK: '/rɪŋ/',
        translation: 'n. 戒指；环 v. 响',
        examples: [{ english: 'Gold ring.', chinese: '金戒指。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_477',
        word: 'river',
        phonetic: '/ˈrɪvər/',
        phoneticUK: '/ˈrɪvə(r)/',
        translation: 'n. 河',
        examples: [{ english: 'Swim in the river.', chinese: '在河里游泳。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_478',
        word: 'road',
        phonetic: '/roʊd/',
        phoneticUK: '/rəʊd/',
        translation: 'n. 路',
        examples: [{ english: 'Cross the road.', chinese: '过马路。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_479',
        word: 'robot',
        phonetic: '/ˈroʊbɑːt/',
        phoneticUK: '/ˈrəʊbɒt/',
        translation: 'n. 机器人',
        examples: [{ english: 'Smart robot.', chinese: '智能机器人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_480',
        word: 'room',
        phonetic: '/ruːm/',
        phoneticUK: '/ruːm/',
        translation: 'n. 房间',
        examples: [{ english: 'Clean the room.', chinese: '打扫房间。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_481',
        word: 'rose',
        phonetic: '/roʊz/',
        phoneticUK: '/rəʊz/',
        translation: 'n. 玫瑰',
        examples: [{ english: 'Red rose.', chinese: '红玫瑰。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '植物']
    },
    {
        id: 'primary_482',
        word: 'round',
        phonetic: '/raʊnd/',
        phoneticUK: '/raʊnd/',
        translation: 'adj. 圆的',
        examples: [{ english: 'Round table.', chinese: '圆桌。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_483',
        word: 'rule',
        phonetic: '/ruːl/',
        phoneticUK: '/ruːl/',
        translation: 'n. 规则',
        examples: [{ english: 'Follow the rules.', chinese: '遵守规则。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_484',
        word: 'run',
        phonetic: '/rʌn/',
        phoneticUK: '/rʌn/',
        translation: 'v. 跑',
        examples: [{ english: 'Run fast.', chinese: '跑得快。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_485',
        word: 'sad',
        phonetic: '/sæd/',
        phoneticUK: '/sæd/',
        translation: 'adj. 悲伤的',
        examples: [{ english: 'Don\'t be sad.', chinese: '别难过。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_486',
        word: 'safe',
        phonetic: '/seɪf/',
        phoneticUK: '/seɪf/',
        translation: 'adj. 安全的',
        examples: [{ english: 'Be safe.', chinese: '注意安全。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_487',
        word: 'salad',
        phonetic: '/ˈsæləd/',
        phoneticUK: '/ˈsæləd/',
        translation: 'n. 沙拉',
        examples: [{ english: 'Fruit salad.', chinese: '水果沙拉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_488',
        word: 'salt',
        phonetic: '/sɔːlt/',
        phoneticUK: '/sɔːlt/',
        translation: 'n. 盐',
        examples: [{ english: 'Pass the salt.', chinese: '递给我盐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_489',
        word: 'same',
        phonetic: '/seɪm/',
        phoneticUK: '/seɪm/',
        translation: 'adj. 相同的',
        examples: [{ english: 'The same color.', chinese: '相同的颜色。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词']
    },
    {
        id: 'primary_490',
        word: 'sand',
        phonetic: '/sænd/',
        phoneticUK: '/sænd/',
        translation: 'n. 沙子',
        examples: [{ english: 'Play with sand.', chinese: '玩沙子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_491',
        word: 'sandwich',
        phonetic: '/ˈsænwɪtʃ/',
        phoneticUK: '/ˈsænwɪtʃ/',
        translation: 'n. 三明治',
        examples: [{ english: 'Eat a sandwich.', chinese: '吃三明治。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_492',
        word: 'Saturday',
        phonetic: '/ˈsætərdeɪ/',
        phoneticUK: '/ˈsætədeɪ/',
        translation: 'n. 星期六',
        examples: [{ english: 'On Saturday.', chinese: '在星期六。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_493',
        word: 'save',
        phonetic: '/seɪv/',
        phoneticUK: '/seɪv/',
        translation: 'v. 救；节省',
        examples: [{ english: 'Save money.', chinese: '省钱。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_494',
        word: 'say',
        phonetic: '/seɪ/',
        phoneticUK: '/seɪ/',
        translation: 'v. 说',
        examples: [{ english: 'Say hello.', chinese: '打招呼。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['动词']
    },
    {
        id: 'primary_495',
        word: 'school',
        phonetic: '/skuːl/',
        phoneticUK: '/skuːl/',
        translation: 'n. 学校',
        examples: [{ english: 'Go to school.', chinese: '去上学。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_496',
        word: 'schoolbag',
        phonetic: '/ˈskuːlbæɡ/',
        phoneticUK: '/ˈskuːlbæɡ/',
        translation: 'n. 书包',
        examples: [{ english: 'My schoolbag.', chinese: '我的书包。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_497',
        word: 'science',
        phonetic: '/ˈsaɪəns/',
        phoneticUK: '/ˈsaɪəns/',
        translation: 'n. 科学',
        examples: [{ english: 'Science class.', chinese: '科学课。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_498',
        word: 'sea',
        phonetic: '/siː/',
        phoneticUK: '/siː/',
        translation: 'n. 大海',
        examples: [{ english: 'By the sea.', chinese: '在海边。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_499',
        word: 'season',
        phonetic: '/ˈsiːzn/',
        phoneticUK: '/ˈsiːzn/',
        translation: 'n. 季节',
        examples: [{ english: 'Four seasons.', chinese: '四季。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_500',
        word: 'seat',
        phonetic: '/siːt/',
        phoneticUK: '/siːt/',
        translation: 'n. 座位',
        examples: [{ english: 'Take a seat.', chinese: '请坐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    // Unit 11: 更多动词 (501-550)
    {
        id: 'primary_501',
        word: 'see',
        phonetic: '/siː/',
        phoneticUK: '/siː/',
        translation: 'v. 看见',
        examples: [{ english: 'I see a bird.', chinese: '我看见一只鸟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_502',
        word: 'sell',
        phonetic: '/sel/',
        phoneticUK: '/sel/',
        translation: 'v. 卖',
        examples: [{ english: 'Sell fruit.', chinese: '卖水果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_503',
        word: 'send',
        phonetic: '/send/',
        phoneticUK: '/send/',
        translation: 'v. 发送；寄',
        examples: [{ english: 'Send a letter.', chinese: '寄信。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_504',
        word: 'set',
        phonetic: '/set/',
        phoneticUK: '/set/',
        translation: 'v. 设置；放置',
        examples: [{ english: 'Set the table.', chinese: '摆桌子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_505',
        word: 'shake',
        phonetic: '/ʃeɪk/',
        phoneticUK: '/ʃeɪk/',
        translation: 'v. 摇动',
        examples: [{ english: 'Shake hands.', chinese: '握手。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_506',
        word: 'shine',
        phonetic: '/ʃaɪn/',
        phoneticUK: '/ʃaɪn/',
        translation: 'v. 照耀',
        examples: [{ english: 'The sun shines.', chinese: '太阳照耀。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['动词']
    },
    {
        id: 'primary_507',
        word: 'shoe',
        phonetic: '/ʃuː/',
        phoneticUK: '/ʃuː/',
        translation: 'n. 鞋',
        examples: [{ english: 'Put on your shoes.', chinese: '穿上你的鞋。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_508',
        word: 'shop',
        phonetic: '/ʃɑːp/',
        phoneticUK: '/ʃɒp/',
        translation: 'n. 商店 v. 购物',
        examples: [{ english: 'Go shopping.', chinese: '去购物。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '动词', '场所']
    },
    {
        id: 'primary_509',
        word: 'short',
        phonetic: '/ʃɔːrt/',
        phoneticUK: '/ʃɔːt/',
        translation: 'adj. 短的；矮的',
        examples: [{ english: 'Short hair.', chinese: '短发。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['形容词']
    },
    {
        id: 'primary_510',
        word: 'shorts',
        phonetic: '/ʃɔːrts/',
        phoneticUK: '/ʃɔːts/',
        translation: 'n. 短裤',
        examples: [{ english: 'Wear shorts.', chinese: '穿短裤。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_511',
        word: 'should',
        phonetic: '/ʃʊd/',
        phoneticUK: '/ʃʊd/',
        translation: 'modal v. 应该',
        examples: [{ english: 'You should go.', chinese: '你应该去。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_512',
        word: 'shoulder',
        phonetic: '/ˈʃoʊldər/',
        phoneticUK: '/ˈʃəʊldə(r)/',
        translation: 'n. 肩膀',
        examples: [{ english: 'On my shoulder.', chinese: '在我的肩膀上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_513',
        word: 'shout',
        phonetic: '/ʃaʊt/',
        phoneticUK: '/ʃaʊt/',
        translation: 'v. 喊叫',
        examples: [{ english: 'Don\'t shout.', chinese: '别喊。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_514',
        word: 'show',
        phonetic: '/ʃoʊ/',
        phoneticUK: '/ʃəʊ/',
        translation: 'v. 展示 n. 演出',
        examples: [{ english: 'Show me.', chinese: '展示给我看。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_515',
        word: 'shut',
        phonetic: '/ʃʌt/',
        phoneticUK: '/ʃʌt/',
        translation: 'v. 关闭',
        examples: [{ english: 'Shut the door.', chinese: '关门。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_516',
        word: 'shy',
        phonetic: '/ʃaɪ/',
        phoneticUK: '/ʃaɪ/',
        translation: 'adj. 害羞的',
        examples: [{ english: 'Don\'t be shy.', chinese: '别害羞。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_517',
        word: 'sick',
        phonetic: '/sɪk/',
        phoneticUK: '/sɪk/',
        translation: 'adj. 生病的',
        examples: [{ english: 'I am sick.', chinese: '我病了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_518',
        word: 'side',
        phonetic: '/saɪd/',
        phoneticUK: '/saɪd/',
        translation: 'n. 边；面',
        examples: [{ english: 'By my side.', chinese: '在我身边。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_519',
        word: 'sing',
        phonetic: '/sɪŋ/',
        phoneticUK: '/sɪŋ/',
        translation: 'v. 唱歌',
        examples: [{ english: 'Sing a song.', chinese: '唱首歌。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_520',
        word: 'sister',
        phonetic: '/ˈsɪstər/',
        phoneticUK: '/ˈsɪstə(r)/',
        translation: 'n. 姐妹',
        examples: [{ english: 'My little sister.', chinese: '我的小妹妹。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_521',
        word: 'sit',
        phonetic: '/sɪt/',
        phoneticUK: '/sɪt/',
        translation: 'v. 坐',
        examples: [{ english: 'Sit down.', chinese: '坐下。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_522',
        word: 'six',
        phonetic: '/sɪks/',
        phoneticUK: '/sɪks/',
        translation: 'num. 六',
        examples: [{ english: 'Six apples.', chinese: '六个苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['数词']
    },
    {
        id: 'primary_523',
        word: 'size',
        phonetic: '/saɪz/',
        phoneticUK: '/saɪz/',
        translation: 'n. 尺寸',
        examples: [{ english: 'What size?', chinese: '什么尺寸？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_524',
        word: 'skirt',
        phonetic: '/skɜːrt/',
        phoneticUK: '/skɜːt/',
        translation: 'n. 短裙',
        examples: [{ english: 'A red skirt.', chinese: '一条红裙子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_525',
        word: 'sky',
        phonetic: '/skaɪ/',
        phoneticUK: '/skaɪ/',
        translation: 'n. 天空',
        examples: [{ english: 'Blue sky.', chinese: '蓝天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_526',
        word: 'sleep',
        phonetic: '/sliːp/',
        phoneticUK: '/sliːp/',
        translation: 'v. 睡觉',
        examples: [{ english: 'Go to sleep.', chinese: '去睡觉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_527',
        word: 'slow',
        phonetic: '/sloʊ/',
        phoneticUK: '/sləʊ/',
        translation: 'adj. 慢的',
        examples: [{ english: 'Slow down.', chinese: '慢点。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_528',
        word: 'small',
        phonetic: '/smɔːl/',
        phoneticUK: '/smɔːl/',
        translation: 'adj. 小的',
        examples: [{ english: 'A small box.', chinese: '一个小盒子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['形容词']
    },
    {
        id: 'primary_529',
        word: 'smart',
        phonetic: '/smɑːrt/',
        phoneticUK: '/smɑːt/',
        translation: 'adj. 聪明的',
        examples: [{ english: 'Smart boy.', chinese: '聪明的男孩。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_530',
        word: 'smell',
        phonetic: '/smel/',
        phoneticUK: '/smel/',
        translation: 'v. 闻 n. 气味',
        examples: [{ english: 'Smell the flower.', chinese: '闻花。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_531',
        word: 'smile',
        phonetic: '/smaɪl/',
        phoneticUK: '/smaɪl/',
        translation: 'v. 微笑 n. 微笑',
        examples: [{ english: 'Smile at me.', chinese: '对我微笑。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_532',
        word: 'smoke',
        phonetic: '/smoʊk/',
        phoneticUK: '/sməʊk/',
        translation: 'n. 烟 v. 吸烟',
        examples: [{ english: 'No smoking.', chinese: '禁止吸烟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_533',
        word: 'snake',
        phonetic: '/sneɪk/',
        phoneticUK: '/sneɪk/',
        translation: 'n. 蛇',
        examples: [{ english: 'A long snake.', chinese: '一条长蛇。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_534',
        word: 'snow',
        phonetic: '/snoʊ/',
        phoneticUK: '/snəʊ/',
        translation: 'n. 雪 v. 下雪',
        examples: [{ english: 'White snow.', chinese: '白雪。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '动词', '自然']
    },
    {
        id: 'primary_535',
        word: 'so',
        phonetic: '/soʊ/',
        phoneticUK: '/səʊ/',
        translation: 'adv. 如此 conj. 所以',
        examples: [{ english: 'So happy.', chinese: '如此开心。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['副词', '连词']
    },
    {
        id: 'primary_536',
        word: 'sock',
        phonetic: '/sɑːk/',
        phoneticUK: '/sɒk/',
        translation: 'n. 袜子',
        examples: [{ english: 'A pair of socks.', chinese: '一双袜子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_537',
        word: 'sofa',
        phonetic: '/ˈsoʊfə/',
        phoneticUK: '/ˈsəʊfə/',
        translation: 'n. 沙发',
        examples: [{ english: 'Sit on the sofa.', chinese: '坐在沙发上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '家具']
    },
    {
        id: 'primary_538',
        word: 'some',
        phonetic: '/sʌm/',
        phoneticUK: '/sʌm/',
        translation: 'adj. 一些 pron. 一些',
        examples: [{ english: 'Some water.', chinese: '一些水。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['形容词', '代词']
    },
    {
        id: 'primary_539',
        word: 'son',
        phonetic: '/sʌn/',
        phoneticUK: '/sʌn/',
        translation: 'n. 儿子',
        examples: [{ english: 'My son.', chinese: '我的儿子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_540',
        word: 'song',
        phonetic: '/sɔːŋ/',
        phoneticUK: '/sɒŋ/',
        translation: 'n. 歌曲',
        examples: [{ english: 'Sing a song.', chinese: '唱首歌。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_541',
        word: 'soon',
        phonetic: '/suːn/',
        phoneticUK: '/suːn/',
        translation: 'adv. 不久',
        examples: [{ english: 'See you soon.', chinese: '回头见。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['副词']
    },
    {
        id: 'primary_542',
        word: 'sorry',
        phonetic: '/ˈsɑːri/',
        phoneticUK: '/ˈsɒri/',
        translation: 'adj. 抱歉的',
        examples: [{ english: 'I am sorry.', chinese: '我很抱歉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['形容词']
    },
    {
        id: 'primary_543',
        word: 'sound',
        phonetic: '/saʊnd/',
        phoneticUK: '/saʊnd/',
        translation: 'n. 声音 v. 听起来',
        examples: [{ english: 'Sounds good.', chinese: '听起来不错。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_544',
        word: 'soup',
        phonetic: '/suːp/',
        phoneticUK: '/suːp/',
        translation: 'n. 汤',
        examples: [{ english: 'Chicken soup.', chinese: '鸡汤。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_545',
        word: 'south',
        phonetic: '/saʊθ/',
        phoneticUK: '/saʊθ/',
        translation: 'n. 南方',
        examples: [{ english: 'In the south.', chinese: '在南方。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '方位']
    },
    {
        id: 'primary_546',
        word: 'space',
        phonetic: '/speɪs/',
        phoneticUK: '/speɪs/',
        translation: 'n. 空间；太空',
        examples: [{ english: 'Outer space.', chinese: '外太空。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_547',
        word: 'speak',
        phonetic: '/spiːk/',
        phoneticUK: '/spiːk/',
        translation: 'v. 说话',
        examples: [{ english: 'Speak English.', chinese: '说英语。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_548',
        word: 'special',
        phonetic: '/ˈspeʃl/',
        phoneticUK: '/ˈspeʃl/',
        translation: 'adj. 特别的',
        examples: [{ english: 'Special gift.', chinese: '特别的礼物。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_549',
        word: 'spell',
        phonetic: '/spel/',
        phoneticUK: '/spel/',
        translation: 'v. 拼写',
        examples: [{ english: 'Spell your name.', chinese: '拼写你的名字。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    {
        id: 'primary_550',
        word: 'spend',
        phonetic: '/spend/',
        phoneticUK: '/spend/',
        translation: 'v. 花费',
        examples: [{ english: 'Spend money.', chinese: '花钱。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    // Unit 12: 更多形容词与副词 (551-600)
    {
        id: 'primary_551',
        word: 'spoon',
        phonetic: '/spuːn/',
        phoneticUK: '/spuːn/',
        translation: 'n. 勺子',
        examples: [{ english: 'Use a spoon.', chinese: '用勺子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '餐具']
    },
    {
        id: 'primary_552',
        word: 'sport',
        phonetic: '/spɔːrt/',
        phoneticUK: '/spɔːt/',
        translation: 'n. 运动',
        examples: [{ english: 'Do sports.', chinese: '做运动。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '运动']
    },
    {
        id: 'primary_553',
        word: 'spring',
        phonetic: '/sprɪŋ/',
        phoneticUK: '/sprɪŋ/',
        translation: 'n. 春天',
        examples: [{ english: 'In spring.', chinese: '在春天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_554',
        word: 'square',
        phonetic: '/skwer/',
        phoneticUK: '/skweə(r)/',
        translation: 'n. 广场；正方形',
        examples: [{ english: 'A big square.', chinese: '一个大广场。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_555',
        word: 'stamp',
        phonetic: '/stæmp/',
        phoneticUK: '/stæmp/',
        translation: 'n. 邮票',
        examples: [{ english: 'Collect stamps.', chinese: '集邮。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词']
    },
    {
        id: 'primary_556',
        word: 'stand',
        phonetic: '/stænd/',
        phoneticUK: '/stænd/',
        translation: 'v. 站立',
        examples: [{ english: 'Stand up.', chinese: '起立。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_557',
        word: 'star',
        phonetic: '/stɑːr/',
        phoneticUK: '/stɑː(r)/',
        translation: 'n. 星星；明星',
        examples: [{ english: 'Twinkle star.', chinese: '闪烁的星星。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_558',
        word: 'start',
        phonetic: '/stɑːrt/',
        phoneticUK: '/stɑːt/',
        translation: 'v. 开始',
        examples: [{ english: 'Start now.', chinese: '现在开始。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_559',
        word: 'station',
        phonetic: '/ˈsteɪʃn/',
        phoneticUK: '/ˈsteɪʃn/',
        translation: 'n. 车站',
        examples: [{ english: 'Train station.', chinese: '火车站。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_560',
        word: 'stay',
        phonetic: '/steɪ/',
        phoneticUK: '/steɪ/',
        translation: 'v. 停留',
        examples: [{ english: 'Stay here.', chinese: '待在这里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_561',
        word: 'step',
        phonetic: '/step/',
        phoneticUK: '/step/',
        translation: 'n. 步 v. 踩',
        examples: [{ english: 'Step by step.', chinese: '一步一步地。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_562',
        word: 'stick',
        phonetic: '/stɪk/',
        phoneticUK: '/stɪk/',
        translation: 'n. 棍 v. 粘贴',
        examples: [{ english: 'A wooden stick.', chinese: '一根木棍。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_563',
        word: 'still',
        phonetic: '/stɪl/',
        phoneticUK: '/stɪl/',
        translation: 'adv. 仍然',
        examples: [{ english: 'Still waiting.', chinese: '还在等。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['副词']
    },
    {
        id: 'primary_564',
        word: 'stomach',
        phonetic: '/ˈstʌmək/',
        phoneticUK: '/ˈstʌmək/',
        translation: 'n. 胃',
        examples: [{ english: 'Stomach ache.', chinese: '胃痛。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_565',
        word: 'stone',
        phonetic: '/stoʊn/',
        phoneticUK: '/stəʊn/',
        translation: 'n. 石头',
        examples: [{ english: 'Throw a stone.', chinese: '扔石头。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_566',
        word: 'stop',
        phonetic: '/stɑːp/',
        phoneticUK: '/stɒp/',
        translation: 'v. 停止 n. 车站',
        examples: [{ english: 'Stop talking.', chinese: '别说话了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_567',
        word: 'store',
        phonetic: '/stɔːr/',
        phoneticUK: '/stɔː(r)/',
        translation: 'n. 商店',
        examples: [{ english: 'Department store.', chinese: '百货商店。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_568',
        word: 'story',
        phonetic: '/ˈstɔːri/',
        phoneticUK: '/ˈstɔːri/',
        translation: 'n. 故事',
        examples: [{ english: 'Tell a story.', chinese: '讲故事。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_569',
        word: 'street',
        phonetic: '/striːt/',
        phoneticUK: '/striːt/',
        translation: 'n. 街道',
        examples: [{ english: 'On the street.', chinese: '在街上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_570',
        word: 'strong',
        phonetic: '/strɔːŋ/',
        phoneticUK: '/strɒŋ/',
        translation: 'adj. 强壮的',
        examples: [{ english: 'Strong man.', chinese: '强壮的男人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_571',
        word: 'student',
        phonetic: '/ˈstuːdnt/',
        phoneticUK: '/ˈstjuːdnt/',
        translation: 'n. 学生',
        examples: [{ english: 'Good student.', chinese: '好学生。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_572',
        word: 'study',
        phonetic: '/ˈstʌdi/',
        phoneticUK: '/ˈstʌdi/',
        translation: 'v. 学习 n. 书房',
        examples: [{ english: 'Study hard.', chinese: '努力学习。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_573',
        word: 'subway',
        phonetic: '/ˈsʌbweɪ/',
        phoneticUK: '/ˈsʌbweɪ/',
        translation: 'n. 地铁',
        examples: [{ english: 'Take the subway.', chinese: '坐地铁。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_574',
        word: 'sugar',
        phonetic: '/ˈʃʊɡər/',
        phoneticUK: '/ˈʃʊɡə(r)/',
        translation: 'n. 糖',
        examples: [{ english: 'Add some sugar.', chinese: '加点糖。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_575',
        word: 'summer',
        phonetic: '/ˈsʌmər/',
        phoneticUK: '/ˈsʌmə(r)/',
        translation: 'n. 夏天',
        examples: [{ english: 'Hot summer.', chinese: '炎热的夏天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_576',
        word: 'sun',
        phonetic: '/sʌn/',
        phoneticUK: '/sʌn/',
        translation: 'n. 太阳',
        examples: [{ english: 'The sun rises.', chinese: '太阳升起。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_577',
        word: 'Sunday',
        phonetic: '/ˈsʌndeɪ/',
        phoneticUK: '/ˈsʌndeɪ/',
        translation: 'n. 星期日',
        examples: [{ english: 'On Sunday.', chinese: '在星期日。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_578',
        word: 'sunny',
        phonetic: '/ˈsʌni/',
        phoneticUK: '/ˈsʌni/',
        translation: 'adj. 晴朗的',
        examples: [{ english: 'Sunny day.', chinese: '晴天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词', '自然']
    },
    {
        id: 'primary_579',
        word: 'supermarket',
        phonetic: '/ˈsuːpərmɑːrkɪt/',
        phoneticUK: '/ˈsuːpəmɑːkɪt/',
        translation: 'n. 超市',
        examples: [{ english: 'Go to the supermarket.', chinese: '去超市。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_580',
        word: 'supper',
        phonetic: '/ˈsʌpər/',
        phoneticUK: '/ˈsʌpə(r)/',
        translation: 'n. 晚餐',
        examples: [{ english: 'Have supper.', chinese: '吃晚饭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_581',
        word: 'sure',
        phonetic: '/ʃʊr/',
        phoneticUK: '/ʃɔː(r)/',
        translation: 'adj. 确信的 adv. 当然',
        examples: [{ english: 'I am sure.', chinese: '我确定。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词', '副词']
    },
    {
        id: 'primary_582',
        word: 'sweater',
        phonetic: '/ˈswetər/',
        phoneticUK: '/ˈswetə(r)/',
        translation: 'n. 毛衣',
        examples: [{ english: 'Warm sweater.', chinese: '暖和的毛衣。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_583',
        word: 'sweet',
        phonetic: '/swiːt/',
        phoneticUK: '/swiːt/',
        translation: 'adj. 甜的 n. 糖果',
        examples: [{ english: 'Sweet candy.', chinese: '甜糖果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词', '名词']
    },
    {
        id: 'primary_584',
        word: 'swim',
        phonetic: '/swɪm/',
        phoneticUK: '/swɪm/',
        translation: 'v. 游泳',
        examples: [{ english: 'Swim in the pool.', chinese: '在池子里游泳。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_585',
        word: 'table',
        phonetic: '/ˈteɪbl/',
        phoneticUK: '/ˈteɪbl/',
        translation: 'n. 桌子',
        examples: [{ english: 'On the table.', chinese: '在桌子上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '家具']
    },
    {
        id: 'primary_586',
        word: 'take',
        phonetic: '/teɪk/',
        phoneticUK: '/teɪk/',
        translation: 'v. 拿；乘坐；花费',
        examples: [{ english: 'Take a bus.', chinese: '坐公交车。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词']
    },
    {
        id: 'primary_587',
        word: 'talk',
        phonetic: '/tɔːk/',
        phoneticUK: '/tɔːk/',
        translation: 'v. 谈话',
        examples: [{ english: 'Talk to me.', chinese: '跟我说话。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_588',
        word: 'tall',
        phonetic: '/tɔːl/',
        phoneticUK: '/tɔːl/',
        translation: 'adj. 高的',
        examples: [{ english: 'Tall tree.', chinese: '高树。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['形容词']
    },
    {
        id: 'primary_589',
        word: 'taxi',
        phonetic: '/ˈtæksi/',
        phoneticUK: '/ˈtæksi/',
        translation: 'n. 出租车',
        examples: [{ english: 'Take a taxi.', chinese: '坐出租车。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_590',
        word: 'tea',
        phonetic: '/tiː/',
        phoneticUK: '/tiː/',
        translation: 'n. 茶',
        examples: [{ english: 'Drink tea.', chinese: '喝茶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '饮料']
    },
    {
        id: 'primary_591',
        word: 'teach',
        phonetic: '/tiːtʃ/',
        phoneticUK: '/tiːtʃ/',
        translation: 'v. 教',
        examples: [{ english: 'Teach English.', chinese: '教英语。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_592',
        word: 'teacher',
        phonetic: '/ˈtiːtʃər/',
        phoneticUK: '/ˈtiːtʃə(r)/',
        translation: 'n. 老师',
        examples: [{ english: 'My teacher.', chinese: '我的老师。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_593',
        word: 'team',
        phonetic: '/tiːm/',
        phoneticUK: '/tiːm/',
        translation: 'n. 队',
        examples: [{ english: 'Football team.', chinese: '足球队。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_594',
        word: 'telephone',
        phonetic: '/ˈtelɪfoʊn/',
        phoneticUK: '/ˈtelɪfəʊn/',
        translation: 'n. 电话',
        examples: [{ english: 'Telephone number.', chinese: '电话号码。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_595',
        word: 'tell',
        phonetic: '/tel/',
        phoneticUK: '/tel/',
        translation: 'v. 告诉',
        examples: [{ english: 'Tell me.', chinese: '告诉我。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_596',
        word: 'ten',
        phonetic: '/ten/',
        phoneticUK: '/ten/',
        translation: 'num. 十',
        examples: [{ english: 'Ten fingers.', chinese: '十个手指。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['数词']
    },
    {
        id: 'primary_597',
        word: 'tennis',
        phonetic: '/ˈtenɪs/',
        phoneticUK: '/ˈtenɪs/',
        translation: 'n. 网球',
        examples: [{ english: 'Play tennis.', chinese: '打网球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '运动']
    },
    {
        id: 'primary_598',
        word: 'tent',
        phonetic: '/tent/',
        phoneticUK: '/tent/',
        translation: 'n. 帐篷',
        examples: [{ english: 'Sleep in a tent.', chinese: '睡在帐篷里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词']
    },
    {
        id: 'primary_599',
        word: 'test',
        phonetic: '/test/',
        phoneticUK: '/test/',
        translation: 'n. 测试 v. 测试',
        examples: [{ english: 'English test.', chinese: '英语测试。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_600',
        word: 'than',
        phonetic: '/ðæn/',
        phoneticUK: '/ðæn/',
        translation: 'conj. 比',
        examples: [{ english: 'Bigger than you.', chinese: '比你大。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['连词']
    },
    // Unit 13: 更多代词与介词 (601-650)
    {
        id: 'primary_601',
        word: 'thank',
        phonetic: '/θæŋk/',
        phoneticUK: '/θæŋk/',
        translation: 'v. 感谢',
        examples: [{ english: 'Thank you.', chinese: '谢谢你。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_602',
        word: 'that',
        phonetic: '/ðæt/',
        phoneticUK: '/ðæt/',
        translation: 'pron. 那个 conj. 那个',
        examples: [{ english: 'That is a cat.', chinese: '那是一只猫。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词', '连词']
    },
    {
        id: 'primary_603',
        word: 'the',
        phonetic: '/ðə/',
        phoneticUK: '/ðə/',
        translation: 'art. 这；那',
        examples: [{ english: 'The book.', chinese: '这本书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['冠词']
    },
    {
        id: 'primary_604',
        word: 'theater',
        phonetic: '/ˈθiːətər/',
        phoneticUK: '/ˈθɪətə(r)/',
        translation: 'n. 剧院',
        examples: [{ english: 'Go to the theater.', chinese: '去剧院。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_605',
        word: 'their',
        phonetic: '/ðer/',
        phoneticUK: '/ðeə(r)/',
        translation: 'pron. 他们的',
        examples: [{ english: 'Their house.', chinese: '他们的房子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['代词']
    },
    {
        id: 'primary_606',
        word: 'them',
        phonetic: '/ðem/',
        phoneticUK: '/ðem/',
        translation: 'pron. 他们（宾格）',
        examples: [{ english: 'Give it to them.', chinese: '把它给他们。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['代词']
    },
    {
        id: 'primary_607',
        word: 'then',
        phonetic: '/ðen/',
        phoneticUK: '/ðen/',
        translation: 'adv. 然后；那时',
        examples: [{ english: 'See you then.', chinese: '到时候见。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['副词']
    },
    {
        id: 'primary_608',
        word: 'there',
        phonetic: '/ðer/',
        phoneticUK: '/ðeə(r)/',
        translation: 'adv. 那里',
        examples: [{ english: 'Over there.', chinese: '在那边。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['副词']
    },
    {
        id: 'primary_609',
        word: 'these',
        phonetic: '/ðiːz/',
        phoneticUK: '/ðiːz/',
        translation: 'pron. 这些',
        examples: [{ english: 'These apples.', chinese: '这些苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['代词']
    },
    {
        id: 'primary_610',
        word: 'they',
        phonetic: '/ðeɪ/',
        phoneticUK: '/ðeɪ/',
        translation: 'pron. 他们',
        examples: [{ english: 'They are happy.', chinese: '他们很开心。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_611',
        word: 'thick',
        phonetic: '/θɪk/',
        phoneticUK: '/θɪk/',
        translation: 'adj. 厚的',
        examples: [{ english: 'Thick book.', chinese: '厚书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_612',
        word: 'thin',
        phonetic: '/θɪn/',
        phoneticUK: '/θɪn/',
        translation: 'adj. 薄的；瘦的',
        examples: [{ english: 'Thin paper.', chinese: '薄纸。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_613',
        word: 'thing',
        phonetic: '/θɪŋ/',
        phoneticUK: '/θɪŋ/',
        translation: 'n. 东西；事情',
        examples: [{ english: 'Good thing.', chinese: '好事。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词']
    },
    {
        id: 'primary_614',
        word: 'think',
        phonetic: '/θɪŋk/',
        phoneticUK: '/θɪŋk/',
        translation: 'v. 想；认为',
        examples: [{ english: 'I think so.', chinese: '我想是这样。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词']
    },
    {
        id: 'primary_615',
        word: 'third',
        phonetic: '/θɜːrd/',
        phoneticUK: '/θɜːd/',
        translation: 'num. 第三',
        examples: [{ english: 'Third floor.', chinese: '三楼。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['数词']
    },
    {
        id: 'primary_616',
        word: 'thirsty',
        phonetic: '/ˈθɜːrsti/',
        phoneticUK: '/ˈθɜːsti/',
        translation: 'adj. 口渴的',
        examples: [{ english: 'I am thirsty.', chinese: '我渴了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_617',
        word: 'thirteen',
        phonetic: '/ˌθɜːrˈtiːn/',
        phoneticUK: '/ˌθɜːˈtiːn/',
        translation: 'num. 十三',
        examples: [{ english: 'Thirteen years old.', chinese: '十三岁。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['数词']
    },
    {
        id: 'primary_618',
        word: 'thirty',
        phonetic: '/ˈθɜːrti/',
        phoneticUK: '/ˈθɜːti/',
        translation: 'num. 三十',
        examples: [{ english: 'Thirty days.', chinese: '三十天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['数词']
    },
    {
        id: 'primary_619',
        word: 'this',
        phonetic: '/ðɪs/',
        phoneticUK: '/ðɪs/',
        translation: 'pron. 这个',
        examples: [{ english: 'This is mine.', chinese: '这是我的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_620',
        word: 'those',
        phonetic: '/ðoʊz/',
        phoneticUK: '/ðəʊz/',
        translation: 'pron. 那些',
        examples: [{ english: 'Those birds.', chinese: '那些鸟。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['代词']
    },
    {
        id: 'primary_621',
        word: 'three',
        phonetic: '/θriː/',
        phoneticUK: '/θriː/',
        translation: 'num. 三',
        examples: [{ english: 'Three pigs.', chinese: '三只猪。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['数词']
    },
    {
        id: 'primary_622',
        word: 'throat',
        phonetic: '/θroʊt/',
        phoneticUK: '/θrəʊt/',
        translation: 'n. 喉咙',
        examples: [{ english: 'Sore throat.', chinese: '喉咙痛。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_623',
        word: 'through',
        phonetic: '/θruː/',
        phoneticUK: '/θruː/',
        translation: 'prep. 穿过',
        examples: [{ english: 'Go through the door.', chinese: '穿过门。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['介词']
    },
    {
        id: 'primary_624',
        word: 'throw',
        phonetic: '/θroʊ/',
        phoneticUK: '/θrəʊ/',
        translation: 'v. 扔',
        examples: [{ english: 'Throw the ball.', chinese: '扔球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_625',
        word: 'thumb',
        phonetic: '/θʌm/',
        phoneticUK: '/θʌm/',
        translation: 'n. 拇指',
        examples: [{ english: 'Thumbs up.', chinese: '竖起大拇指。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_626',
        word: 'Thursday',
        phonetic: '/ˈθɜːrzdeɪ/',
        phoneticUK: '/ˈθɜːzdeɪ/',
        translation: 'n. 星期四',
        examples: [{ english: 'On Thursday.', chinese: '在星期四。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_627',
        word: 'ticket',
        phonetic: '/ˈtɪkɪt/',
        phoneticUK: '/ˈtɪkɪt/',
        translation: 'n. 票',
        examples: [{ english: 'Movie ticket.', chinese: '电影票。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_628',
        word: 'tiger',
        phonetic: '/ˈtaɪɡər/',
        phoneticUK: '/ˈtaɪɡə(r)/',
        translation: 'n. 老虎',
        examples: [{ english: 'A big tiger.', chinese: '一只大老虎。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_629',
        word: 'time',
        phonetic: '/taɪm/',
        phoneticUK: '/taɪm/',
        translation: 'n. 时间；次数',
        examples: [{ english: 'What time is it?', chinese: '几点了？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['名词']
    },
    {
        id: 'primary_630',
        word: 'tired',
        phonetic: '/ˈtaɪərd/',
        phoneticUK: '/ˈtaɪəd/',
        translation: 'adj. 累的',
        examples: [{ english: 'I am tired.', chinese: '我累了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_631',
        word: 'to',
        phonetic: '/tuː/',
        phoneticUK: '/tuː/',
        translation: 'prep. 向；到',
        examples: [{ english: 'Go to school.', chinese: '去学校。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['介词']
    },
    {
        id: 'primary_632',
        word: 'today',
        phonetic: '/təˈdeɪ/',
        phoneticUK: '/təˈdeɪ/',
        translation: 'n. 今天 adv. 今天',
        examples: [{ english: 'Today is Monday.', chinese: '今天是星期一。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '副词', '时间']
    },
    {
        id: 'primary_633',
        word: 'toe',
        phonetic: '/toʊ/',
        phoneticUK: '/təʊ/',
        translation: 'n. 脚趾',
        examples: [{ english: 'Touch your toes.', chinese: '摸你的脚趾。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_634',
        word: 'together',
        phonetic: '/təˈɡeðər/',
        phoneticUK: '/təˈɡeðə(r)/',
        translation: 'adv. 一起',
        examples: [{ english: 'Play together.', chinese: '一起玩。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['副词']
    },
    {
        id: 'primary_635',
        word: 'toilet',
        phonetic: '/ˈtɔɪlət/',
        phoneticUK: '/ˈtɔɪlət/',
        translation: 'n. 厕所',
        examples: [{ english: 'Go to the toilet.', chinese: '去厕所。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_636',
        word: 'tomato',
        phonetic: '/təˈmeɪtoʊ/',
        phoneticUK: '/təˈmɑːtəʊ/',
        translation: 'n. 西红柿',
        examples: [{ english: 'Red tomato.', chinese: '红西红柿。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_637',
        word: 'tomorrow',
        phonetic: '/təˈmɔːroʊ/',
        phoneticUK: '/təˈmɒrəʊ/',
        translation: 'n. 明天 adv. 明天',
        examples: [{ english: 'See you tomorrow.', chinese: '明天见。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '副词', '时间']
    },
    {
        id: 'primary_638',
        word: 'tongue',
        phonetic: '/tʌŋ/',
        phoneticUK: '/tʌŋ/',
        translation: 'n. 舌头',
        examples: [{ english: 'Stick out your tongue.', chinese: '伸出你的舌头。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_639',
        word: 'tonight',
        phonetic: '/təˈnaɪt/',
        phoneticUK: '/təˈnaɪt/',
        translation: 'n. 今晚 adv. 今晚',
        examples: [{ english: 'Party tonight.', chinese: '今晚派对。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '副词', '时间']
    },
    {
        id: 'primary_640',
        word: 'too',
        phonetic: '/tuː/',
        phoneticUK: '/tuː/',
        translation: 'adv. 也；太',
        examples: [{ english: 'Me too.', chinese: '我也是。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['副词']
    },
    {
        id: 'primary_641',
        word: 'tooth',
        phonetic: '/tuːθ/',
        phoneticUK: '/tuːθ/',
        translation: 'n. 牙齿',
        examples: [{ english: 'Brush your teeth.', chinese: '刷牙。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_642',
        word: 'toothbrush',
        phonetic: '/ˈtuːθbrʌʃ/',
        phoneticUK: '/ˈtuːθbrʌʃ/',
        translation: 'n. 牙刷',
        examples: [{ english: 'New toothbrush.', chinese: '新牙刷。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '日用品']
    },
    {
        id: 'primary_643',
        word: 'top',
        phonetic: '/tɑːp/',
        phoneticUK: '/tɒp/',
        translation: 'n. 顶部',
        examples: [{ english: 'On the top.', chinese: '在顶部。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_644',
        word: 'touch',
        phonetic: '/tʌtʃ/',
        phoneticUK: '/tʌtʃ/',
        translation: 'v. 触摸',
        examples: [{ english: 'Don\'t touch.', chinese: '别碰。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_645',
        word: 'towel',
        phonetic: '/ˈtaʊəl/',
        phoneticUK: '/ˈtaʊəl/',
        translation: 'n. 毛巾',
        examples: [{ english: 'Dry with a towel.', chinese: '用毛巾擦干。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '日用品']
    },
    {
        id: 'primary_646',
        word: 'town',
        phonetic: '/taʊn/',
        phoneticUK: '/taʊn/',
        translation: 'n. 城镇',
        examples: [{ english: 'Small town.', chinese: '小镇。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_647',
        word: 'toy',
        phonetic: '/tɔɪ/',
        phoneticUK: '/tɔɪ/',
        translation: 'n. 玩具',
        examples: [{ english: 'Play with toys.', chinese: '玩玩具。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词']
    },
    {
        id: 'primary_648',
        word: 'traffic',
        phonetic: '/ˈtræfɪk/',
        phoneticUK: '/ˈtræfɪk/',
        translation: 'n. 交通',
        examples: [{ english: 'Heavy traffic.', chinese: '交通拥堵。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_649',
        word: 'train',
        phonetic: '/treɪn/',
        phoneticUK: '/treɪn/',
        translation: 'n. 火车',
        examples: [{ english: 'Take a train.', chinese: '坐火车。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_650',
        word: 'travel',
        phonetic: '/ˈtrævl/',
        phoneticUK: '/ˈtrævl/',
        translation: 'v. 旅行',
        examples: [{ english: 'Travel around the world.', chinese: '环游世界。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['动词']
    },
    // Unit 14: 更多名词与动词 (651-700)
    {
        id: 'primary_651',
        word: 'tree',
        phonetic: '/triː/',
        phoneticUK: '/triː/',
        translation: 'n. 树',
        examples: [{ english: 'Climb a tree.', chinese: '爬树。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_652',
        word: 'trip',
        phonetic: '/trɪp/',
        phoneticUK: '/trɪp/',
        translation: 'n. 旅行',
        examples: [{ english: 'School trip.', chinese: '学校旅行。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_653',
        word: 'trouble',
        phonetic: '/ˈtrʌbl/',
        phoneticUK: '/ˈtrʌbl/',
        translation: 'n. 麻烦',
        examples: [{ english: 'In trouble.', chinese: '有麻烦。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_654',
        word: 'trousers',
        phonetic: '/ˈtraʊzərz/',
        phoneticUK: '/ˈtraʊzəz/',
        translation: 'n. 裤子',
        examples: [{ english: 'Pair of trousers.', chinese: '一条裤子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_655',
        word: 'truck',
        phonetic: '/trʌk/',
        phoneticUK: '/trʌk/',
        translation: 'n. 卡车',
        examples: [{ english: 'Big truck.', chinese: '大卡车。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '交通']
    },
    {
        id: 'primary_656',
        word: 'true',
        phonetic: '/truː/',
        phoneticUK: '/truː/',
        translation: 'adj. 真实的',
        examples: [{ english: 'It is true.', chinese: '这是真的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['形容词']
    },
    {
        id: 'primary_657',
        word: 'try',
        phonetic: '/traɪ/',
        phoneticUK: '/traɪ/',
        translation: 'v. 尝试',
        examples: [{ english: 'Try again.', chinese: '再试一次。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_658',
        word: 'T-shirt',
        phonetic: '/ˈtiː ʃɜːrt/',
        phoneticUK: '/ˈtiː ʃɜːt/',
        translation: 'n. T恤衫',
        examples: [{ english: 'White T-shirt.', chinese: '白T恤。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '服饰']
    },
    {
        id: 'primary_659',
        word: 'Tuesday',
        phonetic: '/ˈtuːzdeɪ/',
        phoneticUK: '/ˈtjuːzdeɪ/',
        translation: 'n. 星期二',
        examples: [{ english: 'On Tuesday.', chinese: '在星期二。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_660',
        word: 'turn',
        phonetic: '/tɜːrn/',
        phoneticUK: '/tɜːn/',
        translation: 'v. 转动；变成',
        examples: [{ english: 'Turn left.', chinese: '左转。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_661',
        word: 'TV',
        phonetic: '/ˌtiː ˈviː/',
        phoneticUK: '/ˌtiː ˈviː/',
        translation: 'n. 电视',
        examples: [{ english: 'Watch TV.', chinese: '看电视。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '电器']
    },
    {
        id: 'primary_662',
        word: 'twelve',
        phonetic: '/twelv/',
        phoneticUK: '/twelv/',
        translation: 'num. 十二',
        examples: [{ english: 'Twelve months.', chinese: '十二个月。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['数词']
    },
    {
        id: 'primary_663',
        word: 'twenty',
        phonetic: '/ˈtwenti/',
        phoneticUK: '/ˈtwenti/',
        translation: 'num. 二十',
        examples: [{ english: 'Twenty dollars.', chinese: '二十美元。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['数词']
    },
    {
        id: 'primary_664',
        word: 'two',
        phonetic: '/tuː/',
        phoneticUK: '/tuː/',
        translation: 'num. 二',
        examples: [{ english: 'Two hands.', chinese: '两只手。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['数词']
    },
    {
        id: 'primary_665',
        word: 'ugly',
        phonetic: '/ˈʌɡli/',
        phoneticUK: '/ˈʌɡli/',
        translation: 'adj. 丑陋的',
        examples: [{ english: 'Ugly duckling.', chinese: '丑小鸭。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_666',
        word: 'umbrella',
        phonetic: '/ʌmˈbrelə/',
        phoneticUK: '/ʌmˈbrelə/',
        translation: 'n. 雨伞',
        examples: [{ english: 'Take an umbrella.', chinese: '带把伞。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '日用品']
    },
    {
        id: 'primary_667',
        word: 'uncle',
        phonetic: '/ˈʌŋkl/',
        phoneticUK: '/ˈʌŋkl/',
        translation: 'n. 叔叔；舅舅',
        examples: [{ english: 'My uncle.', chinese: '我的叔叔。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_668',
        word: 'under',
        phonetic: '/ˈʌndər/',
        phoneticUK: '/ˈʌndə(r)/',
        translation: 'prep. 在...下面',
        examples: [{ english: 'Under the table.', chinese: '在桌子下面。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['介词']
    },
    {
        id: 'primary_669',
        word: 'understand',
        phonetic: '/ˌʌndərˈstænd/',
        phoneticUK: '/ˌʌndəˈstænd/',
        translation: 'v. 理解',
        examples: [{ english: 'I understand.', chinese: '我明白了。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_670',
        word: 'university',
        phonetic: '/ˌjuːnɪˈvɜːrsəti/',
        phoneticUK: '/ˌjuːnɪˈvɜːsəti/',
        translation: 'n. 大学',
        examples: [{ english: 'Go to university.', chinese: '上大学。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '学校']
    },
    {
        id: 'primary_671',
        word: 'until',
        phonetic: '/ənˈtɪl/',
        phoneticUK: '/ənˈtɪl/',
        translation: 'prep. 直到',
        examples: [{ english: 'Wait until tomorrow.', chinese: '等到明天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['介词']
    },
    {
        id: 'primary_672',
        word: 'up',
        phonetic: '/ʌp/',
        phoneticUK: '/ʌp/',
        translation: 'adv. 向上 prep. 在...之上',
        examples: [{ english: 'Stand up.', chinese: '站起来。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['副词', '介词']
    },
    {
        id: 'primary_673',
        word: 'us',
        phonetic: '/ʌs/',
        phoneticUK: '/ʌs/',
        translation: 'pron. 我们（宾格）',
        examples: [{ english: 'Join us.', chinese: '加入我们。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['代词']
    },
    {
        id: 'primary_674',
        word: 'use',
        phonetic: '/juːz/',
        phoneticUK: '/juːz/',
        translation: 'v. 使用',
        examples: [{ english: 'Use a pen.', chinese: '用钢笔。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_675',
        word: 'usually',
        phonetic: '/ˈjuːʒuəli/',
        phoneticUK: '/ˈjuːʒuəli/',
        translation: 'adv. 通常',
        examples: [{ english: 'I usually walk.', chinese: '我通常走路。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['副词']
    },
    {
        id: 'primary_676',
        word: 'vacation',
        phonetic: '/veɪˈkeɪʃn/',
        phoneticUK: '/vəˈkeɪʃn/',
        translation: 'n. 假期',
        examples: [{ english: 'Summer vacation.', chinese: '暑假。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_677',
        word: 'vegetable',
        phonetic: '/ˈvedʒtəbl/',
        phoneticUK: '/ˈvedʒtəbl/',
        translation: 'n. 蔬菜',
        examples: [{ english: 'Eat vegetables.', chinese: '吃蔬菜。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '食物']
    },
    {
        id: 'primary_678',
        word: 'very',
        phonetic: '/ˈveri/',
        phoneticUK: '/ˈveri/',
        translation: 'adv. 非常',
        examples: [{ english: 'Very good.', chinese: '非常好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['副词']
    },
    {
        id: 'primary_679',
        word: 'village',
        phonetic: '/ˈvɪlɪdʒ/',
        phoneticUK: '/ˈvɪlɪdʒ/',
        translation: 'n. 村庄',
        examples: [{ english: 'Live in a village.', chinese: '住在村庄里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_680',
        word: 'violin',
        phonetic: '/ˌvaɪəˈlɪn/',
        phoneticUK: '/ˌvaɪəˈlɪn/',
        translation: 'n. 小提琴',
        examples: [{ english: 'Play the violin.', chinese: '拉小提琴。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '乐器']
    },
    {
        id: 'primary_681',
        word: 'visit',
        phonetic: '/ˈvɪzɪt/',
        phoneticUK: '/ˈvɪzɪt/',
        translation: 'v. 拜访；参观',
        examples: [{ english: 'Visit my grandma.', chinese: '看望我奶奶。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_682',
        word: 'voice',
        phonetic: '/vɔɪs/',
        phoneticUK: '/vɔɪs/',
        translation: 'n. 声音',
        examples: [{ english: 'Loud voice.', chinese: '大声。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_683',
        word: 'wait',
        phonetic: '/weɪt/',
        phoneticUK: '/weɪt/',
        translation: 'v. 等待',
        examples: [{ english: 'Wait for me.', chinese: '等等我。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_684',
        word: 'waiter',
        phonetic: '/ˈweɪtər/',
        phoneticUK: '/ˈweɪtə(r)/',
        translation: 'n. 服务员',
        examples: [{ english: 'Call the waiter.', chinese: '叫服务员。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_685',
        word: 'wake',
        phonetic: '/weɪk/',
        phoneticUK: '/weɪk/',
        translation: 'v. 醒来',
        examples: [{ english: 'Wake up.', chinese: '醒来。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_686',
        word: 'walk',
        phonetic: '/wɔːk/',
        phoneticUK: '/wɔːk/',
        translation: 'v. 走路',
        examples: [{ english: 'Walk to school.', chinese: '走路去学校。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_687',
        word: 'wall',
        phonetic: '/wɔːl/',
        phoneticUK: '/wɔːl/',
        translation: 'n. 墙',
        examples: [{ english: 'On the wall.', chinese: '在墙上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_688',
        word: 'want',
        phonetic: '/wɑːnt/',
        phoneticUK: '/wɒnt/',
        translation: 'v. 想要',
        examples: [{ english: 'I want an apple.', chinese: '我想要一个苹果。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['动词']
    },
    {
        id: 'primary_689',
        word: 'war',
        phonetic: '/wɔːr/',
        phoneticUK: '/wɔː(r)/',
        translation: 'n. 战争',
        examples: [{ english: 'No war.', chinese: '不要战争。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_690',
        word: 'warm',
        phonetic: '/wɔːrm/',
        phoneticUK: '/wɔːm/',
        translation: 'adj. 温暖的',
        examples: [{ english: 'Warm weather.', chinese: '温暖的天气。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_691',
        word: 'wash',
        phonetic: '/wɔːʃ/',
        phoneticUK: '/wɒʃ/',
        translation: 'v. 洗',
        examples: [{ english: 'Wash your hands.', chinese: '洗手。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_692',
        word: 'watch',
        phonetic: '/wɑːtʃ/',
        phoneticUK: '/wɒtʃ/',
        translation: 'v. 观看 n. 手表',
        examples: [{ english: 'Watch TV.', chinese: '看电视。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_693',
        word: 'water',
        phonetic: '/ˈwɔːtər/',
        phoneticUK: '/ˈwɔːtə(r)/',
        translation: 'n. 水 v. 浇水',
        examples: [{ english: 'Drink water.', chinese: '喝水。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_694',
        word: 'watermelon',
        phonetic: '/ˈwɔːtərmelən/',
        phoneticUK: '/ˈwɔːtəmelən/',
        translation: 'n. 西瓜',
        examples: [{ english: 'Sweet watermelon.', chinese: '甜西瓜。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '水果']
    },
    {
        id: 'primary_695',
        word: 'way',
        phonetic: '/weɪ/',
        phoneticUK: '/weɪ/',
        translation: 'n. 道路；方式',
        examples: [{ english: 'This way.', chinese: '这边走。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词']
    },
    {
        id: 'primary_696',
        word: 'we',
        phonetic: '/wiː/',
        phoneticUK: '/wiː/',
        translation: 'pron. 我们',
        examples: [{ english: 'We are friends.', chinese: '我们是朋友。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_697',
        word: 'weak',
        phonetic: '/wiːk/',
        phoneticUK: '/wiːk/',
        translation: 'adj. 虚弱的',
        examples: [{ english: 'Weak body.', chinese: '虚弱的身体。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_698',
        word: 'wear',
        phonetic: '/wer/',
        phoneticUK: '/weə(r)/',
        translation: 'v. 穿着',
        examples: [{ english: 'Wear a hat.', chinese: '戴帽子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['动词']
    },
    {
        id: 'primary_699',
        word: 'weather',
        phonetic: '/ˈweðər/',
        phoneticUK: '/ˈweðə(r)/',
        translation: 'n. 天气',
        examples: [{ english: 'Good weather.', chinese: '好天气。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词']
    },
    {
        id: 'primary_700',
        word: 'week',
        phonetic: '/wiːk/',
        phoneticUK: '/wiːk/',
        translation: 'n. 星期',
        examples: [{ english: 'Next week.', chinese: '下周。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '时间']
    },
    // Unit 15: 补充常用词汇 A-B (701-750)
    {
        id: 'primary_701',
        word: 'afraid',
        phonetic: '/əˈfreɪd/',
        phoneticUK: '/əˈfreɪd/',
        translation: 'adj. 害怕的',
        examples: [{ english: 'Don\'t be afraid.', chinese: '别害怕。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_702',
        word: 'after',
        phonetic: '/ˈæftər/',
        phoneticUK: '/ˈɑːftə(r)/',
        translation: 'prep. 在...之后',
        examples: [{ english: 'After school.', chinese: '放学后。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['介词']
    },
    {
        id: 'primary_703',
        word: 'again',
        phonetic: '/əˈɡen/',
        phoneticUK: '/əˈɡen/',
        translation: 'adv. 再一次',
        examples: [{ english: 'Try again.', chinese: '再试一次。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['副词']
    },
    {
        id: 'primary_704',
        word: 'age',
        phonetic: '/eɪdʒ/',
        phoneticUK: '/eɪdʒ/',
        translation: 'n. 年龄',
        examples: [{ english: 'What is your age?', chinese: '你多大了？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词']
    },
    {
        id: 'primary_705',
        word: 'ago',
        phonetic: '/əˈɡoʊ/',
        phoneticUK: '/əˈɡəʊ/',
        translation: 'adv. 以前',
        examples: [{ english: 'Long ago.', chinese: '很久以前。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['副词']
    },
    {
        id: 'primary_706',
        word: 'agree',
        phonetic: '/əˈɡriː/',
        phoneticUK: '/əˈɡriː/',
        translation: 'v. 同意',
        examples: [{ english: 'I agree.', chinese: '我同意。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_707',
        word: 'air',
        phonetic: '/er/',
        phoneticUK: '/eə(r)/',
        translation: 'n. 空气',
        examples: [{ english: 'Fresh air.', chinese: '新鲜空气。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词']
    },
    {
        id: 'primary_708',
        word: 'all',
        phonetic: '/ɔːl/',
        phoneticUK: '/ɔːl/',
        translation: 'adj. 所有的 pron. 全部',
        examples: [{ english: 'All of us.', chinese: '我们所有人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['形容词', '代词']
    },
    {
        id: 'primary_709',
        word: 'alone',
        phonetic: '/əˈloʊn/',
        phoneticUK: '/əˈləʊn/',
        translation: 'adj. 单独的',
        examples: [{ english: 'Home alone.', chinese: '独自在家。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_710',
        word: 'along',
        phonetic: '/əˈlɔːŋ/',
        phoneticUK: '/əˈlɒŋ/',
        translation: 'prep. 沿着',
        examples: [{ english: 'Walk along the river.', chinese: '沿着河走。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['介词']
    },
    {
        id: 'primary_711',
        word: 'always',
        phonetic: '/ˈɔːlweɪz/',
        phoneticUK: '/ˈɔːlweɪz/',
        translation: 'adv. 总是',
        examples: [{ english: 'Always happy.', chinese: '总是很开心。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['副词']
    },
    {
        id: 'primary_712',
        word: 'am',
        phonetic: '/æm/',
        phoneticUK: '/æm/',
        translation: 'v. 是（用于I后）',
        examples: [{ english: 'I am a student.', chinese: '我是一名学生。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_713',
        word: 'America',
        phonetic: '/əˈmerɪkə/',
        phoneticUK: '/əˈmerɪkə/',
        translation: 'n. 美国',
        examples: [{ english: 'In America.', chinese: '在美国。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '国家']
    },
    {
        id: 'primary_714',
        word: 'American',
        phonetic: '/əˈmerɪkən/',
        phoneticUK: '/əˈmerɪkən/',
        translation: 'adj. 美国的 n. 美国人',
        examples: [{ english: 'American football.', chinese: '美式足球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词', '名词']
    },
    {
        id: 'primary_715',
        word: 'and',
        phonetic: '/ænd/',
        phoneticUK: '/ænd/',
        translation: 'conj. 和',
        examples: [{ english: 'You and me.', chinese: '你和我。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['连词']
    },
    {
        id: 'primary_716',
        word: 'angry',
        phonetic: '/ˈæŋɡri/',
        phoneticUK: '/ˈæŋɡri/',
        translation: 'adj. 生气的',
        examples: [{ english: 'Don\'t be angry.', chinese: '别生气。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['形容词']
    },
    {
        id: 'primary_717',
        word: 'animal',
        phonetic: '/ˈænɪml/',
        phoneticUK: '/ˈænɪml/',
        translation: 'n. 动物',
        examples: [{ english: 'Wild animal.', chinese: '野生动物。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_718',
        word: 'another',
        phonetic: '/əˈnʌðər/',
        phoneticUK: '/əˈnʌðə(r)/',
        translation: 'adj. 另一个',
        examples: [{ english: 'Another one.', chinese: '另一个。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['形容词']
    },
    {
        id: 'primary_719',
        word: 'answer',
        phonetic: '/ˈænsər/',
        phoneticUK: '/ˈɑːnsə(r)/',
        translation: 'n. 答案 v. 回答',
        examples: [{ english: 'Answer the question.', chinese: '回答问题。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '动词']
    },
    {
        id: 'primary_720',
        word: 'any',
        phonetic: '/ˈeni/',
        phoneticUK: '/ˈeni/',
        translation: 'adj. 任何的',
        examples: [{ english: 'Any questions?', chinese: '有什么问题吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['形容词']
    },
    {
        id: 'primary_721',
        word: 'are',
        phonetic: '/ɑːr/',
        phoneticUK: '/ɑː(r)/',
        translation: 'v. 是',
        examples: [{ english: 'You are good.', chinese: '你很好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_722',
        word: 'area',
        phonetic: '/ˈeriə/',
        phoneticUK: '/ˈeəriə/',
        translation: 'n. 区域',
        examples: [{ english: 'Play area.', chinese: '游乐区。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_723',
        word: 'arm',
        phonetic: '/ɑːrm/',
        phoneticUK: '/ɑːm/',
        translation: 'n. 手臂',
        examples: [{ english: 'My arm.', chinese: '我的手臂。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '身体']
    },
    {
        id: 'primary_724',
        word: 'around',
        phonetic: '/əˈraʊnd/',
        phoneticUK: '/əˈraʊnd/',
        translation: 'prep. 在...周围 adv. 大约',
        examples: [{ english: 'Look around.', chinese: '环顾四周。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['介词', '副词']
    },
    {
        id: 'primary_725',
        word: 'arrive',
        phonetic: '/əˈraɪv/',
        phoneticUK: '/əˈraɪv/',
        translation: 'v. 到达',
        examples: [{ english: 'Arrive home.', chinese: '到家。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['动词']
    },
    {
        id: 'primary_726',
        word: 'art',
        phonetic: '/ɑːrt/',
        phoneticUK: '/ɑːt/',
        translation: 'n. 艺术；美术',
        examples: [{ english: 'Art class.', chinese: '美术课。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '学科']
    },
    {
        id: 'primary_727',
        word: 'ask',
        phonetic: '/æsk/',
        phoneticUK: '/ɑːsk/',
        translation: 'v. 问',
        examples: [{ english: 'Ask a question.', chinese: '问一个问题。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_728',
        word: 'at',
        phonetic: '/æt/',
        phoneticUK: '/æt/',
        translation: 'prep. 在',
        examples: [{ english: 'At home.', chinese: '在家。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['介词']
    },
    {
        id: 'primary_729',
        word: 'aunt',
        phonetic: '/ænt/',
        phoneticUK: '/ɑːnt/',
        translation: 'n. 阿姨；姑姑',
        examples: [{ english: 'My aunt.', chinese: '我的阿姨。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_730',
        word: 'away',
        phonetic: '/əˈweɪ/',
        phoneticUK: '/əˈweɪ/',
        translation: 'adv. 离开',
        examples: [{ english: 'Go away.', chinese: '走开。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['副词']
    },
    {
        id: 'primary_731',
        word: 'baby',
        phonetic: '/ˈbeɪbi/',
        phoneticUK: '/ˈbeɪbi/',
        translation: 'n. 婴儿',
        examples: [{ english: 'Cute baby.', chinese: '可爱的婴儿。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_732',
        word: 'back',
        phonetic: '/bæk/',
        phoneticUK: '/bæk/',
        translation: 'adv. 回来 n. 背部',
        examples: [{ english: 'Come back.', chinese: '回来。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['副词', '名词']
    },
    {
        id: 'primary_733',
        word: 'bad',
        phonetic: '/bæd/',
        phoneticUK: '/bæd/',
        translation: 'adj. 坏的',
        examples: [{ english: 'Bad luck.', chinese: '运气不好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['形容词']
    },
    {
        id: 'primary_734',
        word: 'bag',
        phonetic: '/bæɡ/',
        phoneticUK: '/bæɡ/',
        translation: 'n. 包',
        examples: [{ english: 'School bag.', chinese: '书包。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '日用品']
    },
    {
        id: 'primary_735',
        word: 'ball',
        phonetic: '/bɔːl/',
        phoneticUK: '/bɔːl/',
        translation: 'n. 球',
        examples: [{ english: 'Play ball.', chinese: '玩球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['名词', '运动']
    },
    {
        id: 'primary_736',
        word: 'balloon',
        phonetic: '/bəˈluːn/',
        phoneticUK: '/bəˈluːn/',
        translation: 'n. 气球',
        examples: [{ english: 'Red balloon.', chinese: '红气球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_737',
        word: 'bamboo',
        phonetic: '/ˌbæmˈbuː/',
        phoneticUK: '/ˌbæmˈbuː/',
        translation: 'n. 竹子',
        examples: [{ english: 'Pandas eat bamboo.', chinese: '熊猫吃竹子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '植物']
    },
    {
        id: 'primary_738',
        word: 'band',
        phonetic: '/bænd/',
        phoneticUK: '/bænd/',
        translation: 'n. 乐队',
        examples: [{ english: 'Rock band.', chinese: '摇滚乐队。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词']
    },
    {
        id: 'primary_739',
        word: 'bank',
        phonetic: '/bæŋk/',
        phoneticUK: '/bæŋk/',
        translation: 'n. 银行',
        examples: [{ english: 'Go to the bank.', chinese: '去银行。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_740',
        word: 'baseball',
        phonetic: '/ˈbeɪsbɔːl/',
        phoneticUK: '/ˈbeɪsbɔːl/',
        translation: 'n. 棒球',
        examples: [{ english: 'Play baseball.', chinese: '打棒球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '运动']
    },
    {
        id: 'primary_741',
        word: 'basic',
        phonetic: '/ˈbeɪsɪk/',
        phoneticUK: '/ˈbeɪsɪk/',
        translation: 'adj. 基础的',
        examples: [{ english: 'Basic English.', chinese: '基础英语。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_742',
        word: 'basket',
        phonetic: '/ˈbæskɪt/',
        phoneticUK: '/ˈbɑːskɪt/',
        translation: 'n. 篮子',
        examples: [{ english: 'Fruit basket.', chinese: '水果篮。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_743',
        word: 'basketball',
        phonetic: '/ˈbæskɪtbɔːl/',
        phoneticUK: '/ˈbɑːskɪtbɔːl/',
        translation: 'n. 篮球',
        examples: [{ english: 'Play basketball.', chinese: '打篮球。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '运动']
    },
    {
        id: 'primary_744',
        word: 'bathroom',
        phonetic: '/ˈbæθruːm/',
        phoneticUK: '/ˈbɑːθruːm/',
        translation: 'n. 浴室',
        examples: [{ english: 'In the bathroom.', chinese: '在浴室里。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_745',
        word: 'be',
        phonetic: '/biː/',
        phoneticUK: '/biː/',
        translation: 'v. 是',
        examples: [{ english: 'Be happy.', chinese: '要开心。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['动词']
    },
    {
        id: 'primary_746',
        word: 'beach',
        phonetic: '/biːtʃ/',
        phoneticUK: '/biːtʃ/',
        translation: 'n. 海滩',
        examples: [{ english: 'On the beach.', chinese: '在海滩上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_747',
        word: 'bear',
        phonetic: '/ber/',
        phoneticUK: '/beə(r)/',
        translation: 'n. 熊',
        examples: [{ english: 'Brown bear.', chinese: '棕熊。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_748',
        word: 'beat',
        phonetic: '/biːt/',
        phoneticUK: '/biːt/',
        translation: 'v. 打败；敲打',
        examples: [{ english: 'Beat the drum.', chinese: '打鼓。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['动词']
    },
    {
        id: 'primary_749',
        word: 'beautiful',
        phonetic: '/ˈbjuːtɪfl/',
        phoneticUK: '/ˈbjuːtɪfl/',
        translation: 'adj. 美丽的',
        examples: [{ english: 'Beautiful flower.', chinese: '美丽的花。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['形容词']
    },
    {
        id: 'primary_750',
        word: 'because',
        phonetic: '/bɪˈkɔːz/',
        phoneticUK: '/bɪˈkɒz/',
        translation: 'conj. 因为',
        examples: [{ english: 'Because I like it.', chinese: '因为我喜欢它。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['连词']
    },
    // Unit 16: 词汇 W-Z (751-800)
    {
        id: 'primary_751',
        word: 'weekend',
        phonetic: '/ˈwiːkend/',
        phoneticUK: '/ˌwiːkˈend/',
        translation: 'n. 周末',
        examples: [{ english: 'Have a nice weekend.', chinese: '周末愉快。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_752',
        word: 'welcome',
        phonetic: '/ˈwelkəm/',
        phoneticUK: '/ˈwelkəm/',
        translation: 'adj. 受欢迎的 v. 欢迎',
        examples: [{ english: 'You are welcome.', chinese: '不客气。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词', '动词']
    },
    {
        id: 'primary_753',
        word: 'well',
        phonetic: '/wel/',
        phoneticUK: '/wel/',
        translation: 'adv. 很好',
        examples: [{ english: 'Very well.', chinese: '非常好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['副词']
    },
    {
        id: 'primary_754',
        word: 'west',
        phonetic: '/west/',
        phoneticUK: '/west/',
        translation: 'n. 西方',
        examples: [{ english: 'In the west.', chinese: '在西方。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '方位']
    },
    {
        id: 'primary_755',
        word: 'wet',
        phonetic: '/wet/',
        phoneticUK: '/wet/',
        translation: 'adj. 湿的',
        examples: [{ english: 'Wet hair.', chinese: '湿头发。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_756',
        word: 'whale',
        phonetic: '/weɪl/',
        phoneticUK: '/weɪl/',
        translation: 'n. 鲸鱼',
        examples: [{ english: 'Blue whale.', chinese: '蓝鲸。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_757',
        word: 'what',
        phonetic: '/wɑːt/',
        phoneticUK: '/wɒt/',
        translation: 'pron. 什么',
        examples: [{ english: 'What is this?', chinese: '这是什么？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_758',
        word: 'wheel',
        phonetic: '/wiːl/',
        phoneticUK: '/wiːl/',
        translation: 'n. 轮子',
        examples: [{ english: 'Big wheel.', chinese: '大轮子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词']
    },
    {
        id: 'primary_759',
        word: 'when',
        phonetic: '/wen/',
        phoneticUK: '/wen/',
        translation: 'adv. 什么时候',
        examples: [{ english: 'When do you go?', chinese: '你什么时候去？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['副词']
    },
    {
        id: 'primary_760',
        word: 'where',
        phonetic: '/wer/',
        phoneticUK: '/weə(r)/',
        translation: 'adv. 在哪里',
        examples: [{ english: 'Where are you?', chinese: '你在哪里？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['副词']
    },
    {
        id: 'primary_761',
        word: 'which',
        phonetic: '/wɪtʃ/',
        phoneticUK: '/wɪtʃ/',
        translation: 'pron. 哪一个',
        examples: [{ english: 'Which one?', chinese: '哪一个？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['代词']
    },
    {
        id: 'primary_762',
        word: 'white',
        phonetic: '/waɪt/',
        phoneticUK: '/waɪt/',
        translation: 'adj. 白色的 n. 白色',
        examples: [{ english: 'White snow.', chinese: '白雪。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['形容词', '名词', '颜色']
    },
    {
        id: 'primary_763',
        word: 'who',
        phonetic: '/huː/',
        phoneticUK: '/huː/',
        translation: 'pron. 谁',
        examples: [{ english: 'Who is he?', chinese: '他是谁？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['代词']
    },
    {
        id: 'primary_764',
        word: 'whose',
        phonetic: '/huːz/',
        phoneticUK: '/huːz/',
        translation: 'pron. 谁的',
        examples: [{ english: 'Whose bag?', chinese: '谁的包？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['代词']
    },
    {
        id: 'primary_765',
        word: 'why',
        phonetic: '/waɪ/',
        phoneticUK: '/waɪ/',
        translation: 'adv. 为什么',
        examples: [{ english: 'Why not?', chinese: '为什么不呢？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['副词']
    },
    {
        id: 'primary_766',
        word: 'wide',
        phonetic: '/waɪd/',
        phoneticUK: '/waɪd/',
        translation: 'adj. 宽的',
        examples: [{ english: 'Wide river.', chinese: '宽阔的河。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词']
    },
    {
        id: 'primary_767',
        word: 'wife',
        phonetic: '/waɪf/',
        phoneticUK: '/waɪf/',
        translation: 'n. 妻子',
        examples: [{ english: 'His wife.', chinese: '他的妻子。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '家庭']
    },
    {
        id: 'primary_768',
        word: 'wild',
        phonetic: '/waɪld/',
        phoneticUK: '/waɪld/',
        translation: 'adj. 野生的',
        examples: [{ english: 'Wild animals.', chinese: '野生动物。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['形容词']
    },
    {
        id: 'primary_769',
        word: 'will',
        phonetic: '/wɪl/',
        phoneticUK: '/wɪl/',
        translation: 'modal v. 将要',
        examples: [{ english: 'I will go.', chinese: '我会去。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['动词']
    },
    {
        id: 'primary_770',
        word: 'win',
        phonetic: '/wɪn/',
        phoneticUK: '/wɪn/',
        translation: 'v. 赢',
        examples: [{ english: 'Win the game.', chinese: '赢得比赛。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词']
    },
    {
        id: 'primary_771',
        word: 'wind',
        phonetic: '/wɪnd/',
        phoneticUK: '/wɪnd/',
        translation: 'n. 风',
        examples: [{ english: 'Strong wind.', chinese: '大风。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '自然']
    },
    {
        id: 'primary_772',
        word: 'window',
        phonetic: '/ˈwɪndoʊ/',
        phoneticUK: '/ˈwɪndəʊ/',
        translation: 'n. 窗户',
        examples: [{ english: 'Open the window.', chinese: '打开窗户。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['名词', '家具']
    },
    {
        id: 'primary_773',
        word: 'windy',
        phonetic: '/ˈwɪndi/',
        phoneticUK: '/ˈwɪndi/',
        translation: 'adj. 多风的',
        examples: [{ english: 'Windy day.', chinese: '多风的一天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['形容词', '自然']
    },
    {
        id: 'primary_774',
        word: 'winter',
        phonetic: '/ˈwɪntər/',
        phoneticUK: '/ˈwɪntə(r)/',
        translation: 'n. 冬天',
        examples: [{ english: 'Cold winter.', chinese: '寒冷的冬天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_775',
        word: 'wise',
        phonetic: '/waɪz/',
        phoneticUK: '/waɪz/',
        translation: 'adj. 明智的',
        examples: [{ english: 'Wise man.', chinese: '智者。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['形容词']
    },
    {
        id: 'primary_776',
        word: 'wish',
        phonetic: '/wɪʃ/',
        phoneticUK: '/wɪʃ/',
        translation: 'v. 希望 n. 愿望',
        examples: [{ english: 'Make a wish.', chinese: '许个愿。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_777',
        word: 'with',
        phonetic: '/wɪð/',
        phoneticUK: '/wɪð/',
        translation: 'prep. 和...一起',
        examples: [{ english: 'With my friends.', chinese: '和我的朋友们一起。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: ['介词']
    },
    {
        id: 'primary_778',
        word: 'without',
        phonetic: '/wɪˈðaʊt/',
        phoneticUK: '/wɪˈðaʊt/',
        translation: 'prep. 没有',
        examples: [{ english: 'Without water.', chinese: '没有水。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['介词']
    },
    {
        id: 'primary_779',
        word: 'wolf',
        phonetic: '/wʊlf/',
        phoneticUK: '/wʊlf/',
        translation: 'n. 狼',
        examples: [{ english: 'Grey wolf.', chinese: '灰狼。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: ['名词', '动物']
    },
    {
        id: 'primary_780',
        word: 'woman',
        phonetic: '/ˈwʊmən/',
        phoneticUK: '/ˈwʊmən/',
        translation: 'n. 女人',
        examples: [{ english: 'A kind woman.', chinese: '一位善良的女士。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词', '人物']
    },
    {
        id: 'primary_781',
        word: 'wonderful',
        phonetic: '/ˈwʌndərfəl/',
        phoneticUK: '/ˈwʌndəfl/',
        translation: 'adj. 精彩的',
        examples: [{ english: 'Wonderful day.', chinese: '美好的一天。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['形容词']
    },
    {
        id: 'primary_782',
        word: 'wood',
        phonetic: '/wʊd/',
        phoneticUK: '/wʊd/',
        translation: 'n. 木头',
        examples: [{ english: 'Made of wood.', chinese: '木制的。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: ['名词']
    },
    {
        id: 'primary_783',
        word: 'word',
        phonetic: '/wɜːrd/',
        phoneticUK: '/wɜːd/',
        translation: 'n. 单词；话语',
        examples: [{ english: 'New word.', chinese: '新单词。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['名词']
    },
    {
        id: 'primary_784',
        word: 'work',
        phonetic: '/wɜːrk/',
        phoneticUK: '/wɜːk/',
        translation: 'v. 工作 n. 工作',
        examples: [{ english: 'Go to work.', chinese: '去上班。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['动词', '名词']
    },
    {
        id: 'primary_785',
        word: 'worker',
        phonetic: '/ˈwɜːrkər/',
        phoneticUK: '/ˈwɜːkə(r)/',
        translation: 'n. 工人',
        examples: [{ english: 'Hard worker.', chinese: '勤奋的工人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '职业']
    },
    {
        id: 'primary_786',
        word: 'world',
        phonetic: '/wɜːrld/',
        phoneticUK: '/wɜːld/',
        translation: 'n. 世界',
        examples: [{ english: 'Around the world.', chinese: '世界各地。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['名词']
    },
    {
        id: 'primary_787',
        word: 'worry',
        phonetic: '/ˈwɜːri/',
        phoneticUK: '/ˈwʌri/',
        translation: 'v. 担心',
        examples: [{ english: 'Don\'t worry.', chinese: '别担心。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['动词']
    },
    {
        id: 'primary_788',
        word: 'would',
        phonetic: '/wʊd/',
        phoneticUK: '/wʊd/',
        translation: 'modal v. 将；愿意',
        examples: [{ english: 'Would you like tea?', chinese: '你想要茶吗？', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: ['动词']
    },
    {
        id: 'primary_789',
        word: 'write',
        phonetic: '/raɪt/',
        phoneticUK: '/raɪt/',
        translation: 'v. 写',
        examples: [{ english: 'Write a letter.', chinese: '写信。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: ['动词']
    },
    {
        id: 'primary_790',
        word: 'wrong',
        phonetic: '/rɔːŋ/',
        phoneticUK: '/rɒŋ/',
        translation: 'adj. 错误的',
        examples: [{ english: 'Wrong answer.', chinese: '错误的答案。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['形容词']
    },
    {
        id: 'primary_791',
        word: 'yard',
        phonetic: '/jɑːrd/',
        phoneticUK: '/jɑːd/',
        translation: 'n. 院子',
        examples: [{ english: 'Play in the yard.', chinese: '在院子里玩。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: ['名词', '场所']
    },
    {
        id: 'primary_792',
        word: 'year',
        phonetic: '/jɪr/',
        phoneticUK: '/jɪə(r)/',
        translation: 'n. 年',
        examples: [{ english: 'Happy New Year.', chinese: '新年快乐。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: ['名词', '时间']
    },
    {
        id: 'primary_793',
        word: 'yellow',
        phonetic: '/ˈjeloʊ/',
        phoneticUK: '/ˈjeləʊ/',
        translation: 'adj. 黄色的 n. 黄色',
        examples: [{ english: 'Yellow banana.', chinese: '黄香蕉。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['形容词', '名词', '颜色']
    },
    {
        id: 'primary_794',
        word: 'yes',
        phonetic: '/jes/',
        phoneticUK: '/jes/',
        translation: 'adv. 是的',
        examples: [{ english: 'Yes, please.', chinese: '是的，请。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['副词']
    },
    {
        id: 'primary_795',
        word: 'yesterday',
        phonetic: '/ˈjestərdeɪ/',
        phoneticUK: '/ˈjestədeɪ/',
        translation: 'n. 昨天 adv. 昨天',
        examples: [{ english: 'Yesterday morning.', chinese: '昨天早上。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: ['名词', '副词', '时间']
    },
    {
        id: 'primary_796',
        word: 'yet',
        phonetic: '/jet/',
        phoneticUK: '/jet/',
        translation: 'adv. 还；已经',
        examples: [{ english: 'Not yet.', chinese: '还没有。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: ['副词']
    },
    {
        id: 'primary_797',
        word: 'you',
        phonetic: '/juː/',
        phoneticUK: '/juː/',
        translation: 'pron. 你；你们',
        examples: [{ english: 'You are nice.', chinese: '你很好。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_798',
        word: 'young',
        phonetic: '/jʌŋ/',
        phoneticUK: '/jʌŋ/',
        translation: 'adj. 年轻的',
        examples: [{ english: 'Young man.', chinese: '年轻人。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: ['形容词']
    },
    {
        id: 'primary_799',
        word: 'your',
        phonetic: '/jʊr/',
        phoneticUK: '/jɔː(r)/',
        translation: 'pron. 你的；你们的',
        examples: [{ english: 'Your book.', chinese: '你的书。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: ['代词']
    },
    {
        id: 'primary_800',
        word: 'zoo',
        phonetic: '/zuː/',
        phoneticUK: '/zuː/',
        translation: 'n. 动物园',
        examples: [{ english: 'Go to the zoo.', chinese: '去动物园。', source: 'manual' }],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: ['名词', '场所']
    }
]

// 小学词书章节
export const PRIMARY_SECTIONS: WordbookSection[] = [
    {
        id: 'primary_section_unit1',
        wordbookId: 'primary_wordbook',
        name: 'Unit 1: 基础词汇 (1-50)',
        order: 1,
        wordIds: PRIMARY_WORDS.slice(0, 50).map(w => w.id)
    },
    {
        id: 'primary_section_unit2',
        wordbookId: 'primary_wordbook',
        name: 'Unit 2: 进阶词汇 (51-100)',
        order: 2,
        wordIds: PRIMARY_WORDS.slice(50, 100).map(w => w.id)
    },
    {
        id: 'primary_section_unit3',
        wordbookId: 'primary_wordbook',
        name: 'Unit 3: 生活词汇 (101-150)',
        order: 3,
        wordIds: PRIMARY_WORDS.slice(100, 150).map(w => w.id)
    },
    {
        id: 'primary_section_unit4',
        wordbookId: 'primary_wordbook',
        name: 'Unit 4: 综合词汇 (151-200)',
        order: 4,
        wordIds: PRIMARY_WORDS.slice(150, 200).map(w => w.id)
    },
    {
        id: 'primary_section_unit5',
        wordbookId: 'primary_wordbook',
        name: 'Unit 5: 扩展词汇 (201-250)',
        order: 5,
        wordIds: PRIMARY_WORDS.slice(200, 250).map(w => w.id)
    },
    {
        id: 'primary_section_unit6',
        wordbookId: 'primary_wordbook',
        name: 'Unit 6: 更多词汇 (251-300)',
        order: 6,
        wordIds: PRIMARY_WORDS.slice(250, 300).map(w => w.id)
    },
    {
        id: 'primary_section_unit7',
        wordbookId: 'primary_wordbook',
        name: 'Unit 7: 常用动词与形容词 (301-350)',
        order: 7,
        wordIds: PRIMARY_WORDS.slice(300, 350).map(w => w.id)
    },
    {
        id: 'primary_section_unit8',
        wordbookId: 'primary_wordbook',
        name: 'Unit 8: 更多名词 (351-400)',
        order: 8,
        wordIds: PRIMARY_WORDS.slice(350, 400).map(w => w.id)
    },
    {
        id: 'primary_section_unit9',
        wordbookId: 'primary_wordbook',
        name: 'Unit 9: 常用动词与介词 (401-450)',
        order: 9,
        wordIds: PRIMARY_WORDS.slice(400, 450).map(w => w.id)
    },
    {
        id: 'primary_section_unit10',
        wordbookId: 'primary_wordbook',
        name: 'Unit 10: 更多名词与代词 (451-500)',
        order: 10,
        wordIds: PRIMARY_WORDS.slice(450, 500).map(w => w.id)
    },
    {
        id: 'primary_section_unit11',
        wordbookId: 'primary_wordbook',
        name: 'Unit 11: 更多动词 (501-550)',
        order: 11,
        wordIds: PRIMARY_WORDS.slice(500, 550).map(w => w.id)
    },
    {
        id: 'primary_section_unit12',
        wordbookId: 'primary_wordbook',
        name: 'Unit 12: 更多形容词与副词 (551-600)',
        order: 12,
        wordIds: PRIMARY_WORDS.slice(550, 600).map(w => w.id)
    },
    {
        id: 'primary_section_unit13',
        wordbookId: 'primary_wordbook',
        name: 'Unit 13: 更多代词与介词 (601-650)',
        order: 13,
        wordIds: PRIMARY_WORDS.slice(600, 650).map(w => w.id)
    },
    {
        id: 'primary_section_unit14',
        wordbookId: 'primary_wordbook',
        name: 'Unit 14: 更多名词与动词 (651-700)',
        order: 14,
        wordIds: PRIMARY_WORDS.slice(650, 700).map(w => w.id)
    },
    {
        id: 'primary_section_unit15',
        wordbookId: 'primary_wordbook',
        name: 'Unit 15: 补充常用词汇 A-B (701-750)',
        order: 15,
        wordIds: PRIMARY_WORDS.slice(700, 750).map(w => w.id)
    },
    {
        id: 'primary_section_unit16',
        wordbookId: 'primary_wordbook',
        name: 'Unit 16: 词汇 W-Z (751-800)',
        order: 16,
        wordIds: PRIMARY_WORDS.slice(750, 800).map(w => w.id)
    }
]

// 小学词书
export const PRIMARY_WORDBOOK: Wordbook = {
    id: 'primary_wordbook',
    name: '小学英语词汇',
    description: '小学阶段常用英语单词，适合初学者',
    coverImage: '/primary-wordbook-detail.png',
    difficulty: 'CUSTOM',
    totalWords: PRIMARY_WORDS.length,
    sections: PRIMARY_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}

// 导出便捷函数
export function getPrimaryWordById(id: string | number): Word | undefined {
    return PRIMARY_WORDS.find(w => w.id === id)
}

export function getPrimaryWordsByIds(ids: (string | number)[]): Word[] {
    return ids.map(id => getPrimaryWordById(id)).filter(Boolean) as Word[]
}
