/*
 * Bocchi Jam — all site copy, in four languages.
 *
 * index.html refers to this file by key:
 *   data-i18n="key"              element text
 *   data-i18n-attr="attr:key"    attribute value (aria-label, alt, …)
 *   data-i18n-list="key"         <li> items built from an array
 *   data-i18n-phrases="key"      text from an array of phrases; lines break only between them
 *
 * List items are a string or { t, sub, lang, subLang }:
 *   t        main line          lang     language tag for the main line
 *   sub      smaller second line  subLang  language tag for the second line
 *
 * A key missing from a language falls back to English.
 * "{year}" is replaced with the current year.
 * The name "Bocchi Jam" is never translated.
 */

window.SITE_LANGS = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'zh-CN', short: '简', name: '简体中文（中华人民共和国）' },
  { code: 'zh-TW', short: '繁', name: '繁體中文（中華民國）' },
  { code: 'ja', short: '日', name: '日本語' }
];

window.SITE_I18N = {
  en: {
    meta: {
      title: 'Bocchi Jam',
      description: 'Bocchi Jam — computer science student at Hong Kong Baptist University, learning computer vision and image generation.'
    },
    a11y: {
      skip: 'Skip to content',
      newTab: '(opens in a new tab)'
    },
    nav: {
      label: 'Sections',
      home: 'Bocchi Jam, back to top',
      about: 'About',
      research: 'Research',
      guestbook: 'Guestbook',
      contact: 'Contact',
      open: 'Open menu',
      close: 'Close menu'
    },
    lang: {
      menu: 'Language',
      button: 'Language: {name}'
    },
    hero: {
      avatarAlt: 'Avatar of Bocchi Jam',
      intro: 'Computer science student at Hong Kong Baptist University, learning my way into computer vision and image generation. Outside class, it’s anime and history.',
      more: 'Learn more',
      contact: 'Get in touch'
    },
    about: {
      eyebrow: 'About',
      title: 'Nice to meet you.',
      lead: 'What I study, and what I love.',
      motto: {
        label: 'Motto',
        // Shown in the original Japanese in every language.
        phrases: ['一期一会に生き、', '同期の桜のごとく', '咲いて散る'],
        translation: 'Live every encounter as if it were the only one; bloom and fall like cherry blossoms of the same class.'
      },
      education: {
        label: 'Education',
        school: 'Hong Kong Baptist University',
        degree: 'BSc (Hons) in Computer Science and Technology',
        meta: '2023 – 2027 · Taught entirely in English'
      },
      interests: {
        label: 'Academic interests',
        items: ['Computer vision', 'Image generation']
      },
      anime: {
        label: 'Anime',
        items: [
          { t: 'Bocchi the Rock!', sub: 'ぼっち・ざ・ろっく！', subLang: 'ja' },
          { t: 'Wandering Witch: The Journey of Elaina', sub: '魔女の旅々', subLang: 'ja' }
        ],
        note: 'I’m partial to gentle, tender yuri stories with girls at the centre.'
      },
      music: {
        label: 'Music',
        acg: {
          label: 'Anime & Vocaloid',
          items: [
            { t: 'Senbonzakura', sub: 'Sung by Hatsune Miku' },
            { t: 'secret base 〜君がくれたもの〜', lang: 'ja', sub: 'From Anohana: The Flower We Saw That Day' },
            { t: 'LOVE 2000', sub: 'From Too Many Losing Heroines!' }
          ]
        },
        classical: {
          label: 'Classical',
          items: [
            { t: 'Waltz No. 2', sub: 'Dmitri Shostakovich' },
            { t: 'Radetzky March', sub: 'Johann Strauss I' }
          ]
        },
        marches: {
          label: 'Marches & military music',
          items: [
            { t: 'Prussia’s Glory', sub: 'Preußens Gloria', subLang: 'de' },
            { t: 'March in the Snow', sub: '雪の進軍', subLang: 'ja' },
            { t: 'Patriotic March', sub: '愛国行進曲', subLang: 'ja' }
          ]
        }
      },
      visualNovels: {
        label: 'Visual novels',
        items: [
          'Summer Pockets',
          { t: 'A Good Librarian Like a Good Shepherd', sub: '大図書館の羊飼い', subLang: 'ja' },
          'School Days'
        ]
      },
      lightNovels: {
        label: 'Light novels',
        items: [
          { t: 'Date A Live', sub: 'デート・ア・ライブ', subLang: 'ja' },
          { t: 'Akashic Records of Bastard Magic Instructor', sub: 'ロクでなし魔術講師と禁忌教典', subLang: 'ja' }
        ]
      },
      book: {
        label: 'A favourite book',
        items: [{ t: 'The Chrysanthemum and the Sword', sub: 'Ruth Benedict' }]
      },
      history: {
        label: 'History',
        text: 'I like reading about how the battles of both World Wars unfolded, and how each one ended. I’m also drawn to what came after: democratisation and rapid economic growth, especially the rise of the United States and Japan.'
      },
      characters: {
        label: 'Favourite characters',
        note: 'I have a soft spot for gentle girls — especially the graceful, quietly strong kind the Japanese call yamato nadeshiko.',
        hitori: {
          name: 'Hitori Gotoh',
          reading: 'ごとう ひとり',
          work: 'Bocchi the Rock!'
        },
        kotonoha: {
          name: 'Kotonoha Katsura',
          reading: 'かつら ことのは',
          work: 'School Days'
        }
      }
    },
    research: {
      eyebrow: 'Research & Projects',
      title: 'Learning by doing.',
      lead: 'Early days, and still learning. Here’s what I’ve been working on.',
      researchLabel: 'Research',
      status: { ongoing: 'In progress' },
      hoi: {
        date: 'Apr 2026 – Present',
        title: 'Articulated human–object interaction generation',
        org: 'National-Level Undergraduate Innovation Training Project',
        text: 'Text-driven 3D human–object interaction with articulated objects. I’m trying out ways to reduce floating, sliding, inaccurate contact and interpenetration. It’s still at an early, experimental stage.'
      },
      generative: {
        date: '2024 – 2025',
        title: 'Learning generative models',
        text: 'Under faculty guidance, I reimplemented a VAE and a GAN, then went on to study diffusion-based methods.'
      },
      projectsLabel: 'Course projects',
      faceVerification: {
        title: 'Local real-time face verification',
        text: 'A face verification system that runs in real time, entirely on the local machine.'
      },
      lineArt: {
        title: 'Mountain line-art colourisation',
        text: 'Colouring line drawings of mountain scenery with Pix2Pix.'
      },
      skillsLabel: 'Skills',
      skills: ['Python', 'PyTorch', 'Linux / WSL', 'LaTeX']
    },
    guestbook: {
      eyebrow: 'Guestbook',
      title: 'Leave a note.',
      lead: 'Recommend something, or just let me know you stopped by. Posting needs a GitHub account.',
      pending: 'The guestbook is opening soon.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Say hello.',
      lead: 'Email is the best way to reach me. I’m also on GitHub, bilibili and X.',
      email: 'Email',
      copy: 'Copy',
      copied: 'Copied',
      copyLabel: 'Copy email address'
    },
    footer: {
      copyright: '© {year} Bocchi Jam',
      top: 'Back to top'
    }
  },

  'zh-CN': {
    meta: {
      title: 'Bocchi Jam',
      description: 'Bocchi Jam 的个人主页。香港浸会大学计算机科学专业学生，正在学习计算机视觉与图像生成。'
    },
    a11y: {
      skip: '跳到正文',
      newTab: '（在新标签页中打开）'
    },
    nav: {
      label: '页面导航',
      home: 'Bocchi Jam，回到顶部',
      about: '关于我',
      research: '研究与项目',
      guestbook: '留言板',
      contact: '联系',
      open: '打开菜单',
      close: '关闭菜单'
    },
    lang: {
      menu: '语言',
      button: '语言：{name}'
    },
    hero: {
      avatarAlt: 'Bocchi Jam 的头像',
      intro: '香港浸会大学计算机科学专业的学生，正一点点走进计算机视觉与图像生成。课余时间，属于动画和历史。',
      more: '了解更多',
      contact: '联系我'
    },
    about: {
      eyebrow: '关于我',
      title: '很高兴认识你。',
      lead: '在学什么，喜欢什么。',
      motto: {
        label: '座右铭',
        translation: '活在一期一会之中，似同期之樱，绽放而后飘零。'
      },
      education: {
        label: '教育背景',
        school: '香港浸会大学',
        degree: '计算机科学与技术理学士（荣誉）',
        meta: '2023 – 2027 · 全英文授课'
      },
      interests: {
        label: '学术兴趣',
        items: ['计算机视觉', '图像生成']
      },
      anime: {
        label: '动画',
        items: [
          { t: '孤独摇滚！', sub: 'ぼっち・ざ・ろっく！', subLang: 'ja' },
          { t: '魔女之旅', sub: '魔女の旅々', subLang: 'ja' }
        ],
        note: '尤其喜欢以女孩子为主角、温柔细腻的百合作品。'
      },
      music: {
        label: '音乐',
        acg: {
          label: 'ACG',
          items: [
            { t: '千本樱', sub: '演唱：初音未来' },
            { t: 'secret base 〜君がくれたもの〜', lang: 'ja', sub: '出自《未闻花名》' },
            { t: 'LOVE 2000', sub: '出自《败犬女主太多了！》' }
          ]
        },
        classical: {
          label: '古典',
          items: [
            { t: '第二圆舞曲', sub: '肖斯塔科维奇' },
            { t: '拉德斯基进行曲', sub: '老约翰·施特劳斯' }
          ]
        },
        marches: {
          label: '进行曲与军乐',
          items: [
            { t: '普鲁士的荣耀', sub: 'Preußens Gloria', subLang: 'de' },
            { t: '雪之进军', sub: '雪の進軍', subLang: 'ja' },
            { t: '爱国进行曲', sub: '愛国行進曲', subLang: 'ja' }
          ]
        }
      },
      visualNovels: {
        label: '视觉小说',
        items: [
          'Summer Pockets',
          { t: '大图书馆的牧羊人', sub: '大図書館の羊飼い', subLang: 'ja' },
          'School Days'
        ]
      },
      lightNovels: {
        label: '轻小说',
        items: [
          { t: '约会大作战', sub: 'デート・ア・ライブ', subLang: 'ja' },
          { t: '不正经的魔术讲师与禁忌教典', sub: 'ロクでなし魔術講師と禁忌教典', subLang: 'ja' }
        ]
      },
      book: {
        label: '喜欢的书',
        items: [{ t: '菊与刀', sub: '鲁思·本尼迪克特' }]
      },
      history: {
        label: '历史',
        text: '喜欢翻看两次世界大战的战史，弄清每场战役如何展开、又如何收场。也关注战后的民主化与经济腾飞，尤其是美国和日本的崛起。'
      },
      characters: {
        label: '喜欢的角色',
        note: '总是偏爱温柔的女孩子，尤其是端庄娴静、外柔内刚的大和抚子。',
        hitori: {
          name: '后藤一里',
          work: '孤独摇滚！'
        },
        kotonoha: {
          name: '桂言叶',
          work: 'School Days'
        }
      }
    },
    research: {
      eyebrow: '研究与项目',
      title: '在实践中学习。',
      lead: '刚刚起步，还在学习。以下是我做过和正在做的事。',
      researchLabel: '研究经历',
      status: { ongoing: '进行中' },
      hoi: {
        date: '2026 年 4 月至今',
        title: '铰接物体的人–物交互生成',
        org: '国家级大学生创新训练项目',
        text: '探索文本驱动的 3D 人–物交互生成，尝试缓解悬浮、滑动、接触不准与穿模等问题。目前仍处于初步实验阶段。'
      },
      generative: {
        title: '生成模型学习',
        text: '在老师指导下复现了 VAE 与 GAN，之后又学习了扩散模型的相关方法。'
      },
      projectsLabel: '课程项目',
      faceVerification: {
        title: '本地实时人脸验证系统',
        text: '完全在本机运行，实时完成人脸验证。'
      },
      lineArt: {
        title: '基于 Pix2Pix 的山景线稿上色',
        text: '用 Pix2Pix 为山景线稿自动上色。'
      },
      skillsLabel: '技能'
    },
    guestbook: {
      eyebrow: '留言板',
      title: '留下一句话。',
      lead: '推荐一部作品，或者只是告诉我你来过，都很欢迎。留言需要登录 GitHub 账号。',
      pending: '留言板即将开放。'
    },
    contact: {
      eyebrow: '联系',
      title: '打个招呼吧。',
      lead: '发邮件是联系我最方便的方式。也可以在 GitHub、bilibili 和 X 上找到我。',
      email: '邮箱',
      copy: '复制',
      copied: '已复制',
      copyLabel: '复制邮箱地址'
    },
    footer: {
      top: '回到顶部'
    }
  },

  'zh-TW': {
    meta: {
      title: 'Bocchi Jam',
      description: 'Bocchi Jam 的個人網站。香港浸會大學計算機科學系學生，正在學習電腦視覺與影像生成。'
    },
    a11y: {
      skip: '跳至主要內容',
      newTab: '（在新分頁開啟）'
    },
    nav: {
      label: '頁面導覽',
      home: 'Bocchi Jam，回到頁首',
      about: '關於我',
      research: '研究與專案',
      guestbook: '留言板',
      contact: '聯絡',
      open: '開啟選單',
      close: '關閉選單'
    },
    lang: {
      menu: '語言',
      button: '語言：{name}'
    },
    hero: {
      avatarAlt: 'Bocchi Jam 的頭像',
      intro: '香港浸會大學計算機科學系學生，正一點一點走進電腦視覺與影像生成的世界。課餘時間，則留給動畫與歷史。',
      more: '了解更多',
      contact: '聯絡我'
    },
    about: {
      eyebrow: '關於我',
      title: '很高興認識你。',
      lead: '在學什麼，喜歡什麼。',
      motto: {
        label: '座右銘',
        translation: '活在一期一會之中，似同期之櫻，綻放而後飄零。'
      },
      education: {
        label: '學歷',
        school: '香港浸會大學',
        degree: '計算機科學與技術理學士（榮譽）',
        meta: '2023 – 2027 · 全英語授課'
      },
      interests: {
        label: '學術興趣',
        items: ['電腦視覺', '影像生成']
      },
      anime: {
        label: '動畫',
        items: [
          { t: '孤獨搖滾！', sub: 'ぼっち・ざ・ろっく！', subLang: 'ja' },
          { t: '魔女之旅', sub: '魔女の旅々', subLang: 'ja' }
        ],
        note: '特別喜歡以女孩子為主角、溫柔細膩的百合作品。'
      },
      music: {
        label: '音樂',
        acg: {
          label: 'ACG',
          items: [
            { t: '千本櫻', sub: '演唱：初音未來' },
            { t: 'secret base 〜君がくれたもの〜', lang: 'ja', sub: '出自《未聞花名》' },
            { t: 'LOVE 2000', sub: '出自《敗北女角太多了！》' }
          ]
        },
        classical: {
          label: '古典',
          items: [
            { t: '第二號圓舞曲', sub: '蕭士塔高維契' },
            { t: '拉德茨基進行曲', sub: '老約翰·史特勞斯' }
          ]
        },
        marches: {
          label: '進行曲與軍樂',
          items: [
            { t: '普魯士的榮耀', sub: 'Preußens Gloria', subLang: 'de' },
            { t: '雪之進軍', sub: '雪の進軍', subLang: 'ja' },
            { t: '愛國進行曲', sub: '愛国行進曲', subLang: 'ja' }
          ]
        }
      },
      visualNovels: {
        label: '視覺小說',
        items: [
          'Summer Pockets',
          { t: '大圖書館的牧羊人', sub: '大図書館の羊飼い', subLang: 'ja' },
          'School Days'
        ]
      },
      lightNovels: {
        label: '輕小說',
        items: [
          { t: '約會大作戰', sub: 'デート・ア・ライブ', subLang: 'ja' },
          { t: '不正經的魔術講師與禁忌教典', sub: 'ロクでなし魔術講師と禁忌教典', subLang: 'ja' }
        ]
      },
      book: {
        label: '喜歡的書',
        items: [{ t: '菊與刀', sub: '露絲·潘乃德' }]
      },
      history: {
        label: '歷史',
        text: '喜歡翻閱兩次世界大戰的戰史，弄清楚每場戰役如何展開、又如何收場。也關注戰後的民主化與經濟起飛，尤其是美國與日本的崛起。'
      },
      characters: {
        label: '喜歡的角色',
        note: '總是偏愛溫柔的女孩子，尤其是端莊嫻靜、外柔內剛的大和撫子。',
        hitori: {
          name: '後藤一里',
          work: '孤獨搖滾！'
        },
        kotonoha: {
          name: '桂言葉',
          work: 'School Days'
        }
      }
    },
    research: {
      eyebrow: '研究與專案',
      title: '從做中學。',
      lead: '才剛起步，還在學習。以下是我做過與正在做的事。',
      researchLabel: '研究經歷',
      status: { ongoing: '進行中' },
      hoi: {
        date: '2026 年 4 月至今',
        title: '鉸接物體的人–物互動生成',
        org: '國家級大學生創新訓練計畫',
        text: '探索文字驅動的 3D 人–物互動生成，嘗試改善懸浮、滑動、接觸不準確與模型穿透等問題。目前仍在初步實驗階段。'
      },
      generative: {
        title: '生成模型學習',
        text: '在老師指導下重新實作了 VAE 與 GAN，之後也學習了擴散模型的相關方法。'
      },
      projectsLabel: '課程專案',
      faceVerification: {
        title: '本機即時人臉驗證系統',
        text: '完全在本機上執行，即時完成人臉驗證。'
      },
      lineArt: {
        title: '以 Pix2Pix 為山景線稿上色',
        text: '用 Pix2Pix 自動為山景線稿上色。'
      },
      skillsLabel: '技能'
    },
    guestbook: {
      eyebrow: '留言板',
      title: '留下一句話。',
      lead: '推薦一部作品，或只是讓我知道你來過，都很歡迎。留言需要登入 GitHub 帳號。',
      pending: '留言板即將開放。'
    },
    contact: {
      eyebrow: '聯絡',
      title: '打聲招呼吧。',
      lead: '寄電子郵件是聯絡我最方便的方式。也可以在 GitHub、bilibili 和 X 上找到我。',
      email: '電子郵件',
      copy: '複製',
      copied: '已複製',
      copyLabel: '複製電子郵件地址'
    },
    footer: {
      top: '回到頁首'
    }
  },

  ja: {
    meta: {
      title: 'Bocchi Jam',
      description: 'Bocchi Jam の個人サイト。香港浸会大学でコンピュータサイエンスを学び、コンピュータビジョンと画像生成を勉強しています。'
    },
    a11y: {
      skip: '本文へスキップ',
      newTab: '（新しいタブで開きます）'
    },
    nav: {
      label: 'ページ内の項目',
      home: 'Bocchi Jam（ページの先頭へ）',
      about: 'プロフィール',
      research: '研究',
      guestbook: 'ゲストブック',
      contact: '連絡先',
      open: 'メニューを開く',
      close: 'メニューを閉じる'
    },
    lang: {
      menu: '言語',
      button: '言語：{name}'
    },
    hero: {
      avatarAlt: 'Bocchi Jam のアイコン',
      intro: '香港浸会大学でコンピュータサイエンスを学んでいます。コンピュータビジョンと画像生成を、少しずつ勉強中。授業のあとは、アニメと歴史の時間です。',
      more: '詳しく見る',
      contact: '連絡する'
    },
    about: {
      eyebrow: 'プロフィール',
      title: 'はじめまして。',
      lead: '学んでいること、好きなもの。',
      motto: {
        label: '座右の銘',
        translation: ''
      },
      education: {
        label: '学歴',
        school: '香港浸会大学',
        degree: 'コンピュータ科学・技術 理学士（優等学位）',
        meta: '2023 – 2027 · 授業はすべて英語'
      },
      interests: {
        label: '関心のある分野',
        items: ['コンピュータビジョン', '画像生成']
      },
      anime: {
        label: 'アニメ',
        items: ['ぼっち・ざ・ろっく！', '魔女の旅々'],
        note: '女の子が主人公の、やさしく繊細な百合作品に惹かれます。'
      },
      music: {
        label: '音楽',
        acg: {
          label: 'アニソン・ボカロ',
          items: [
            { t: '千本桜', sub: '歌：初音ミク' },
            { t: 'secret base 〜君がくれたもの〜', sub: '『あの日見た花の名前を僕達はまだ知らない。』より' },
            { t: 'LOVE 2000', sub: '『負けヒロインが多すぎる！』より' }
          ]
        },
        classical: {
          label: 'クラシック',
          items: [
            { t: 'ワルツ第2番', sub: 'ショスタコーヴィチ' },
            { t: 'ラデツキー行進曲', sub: 'ヨハン・シュトラウス1世' }
          ]
        },
        marches: {
          label: '行進曲・軍楽',
          items: [
            { t: 'プロイセンの栄光', sub: 'Preußens Gloria', subLang: 'de' },
            '雪の進軍',
            '愛国行進曲'
          ]
        }
      },
      visualNovels: {
        label: 'ビジュアルノベル',
        items: ['Summer Pockets', '大図書館の羊飼い', 'School Days']
      },
      lightNovels: {
        label: 'ライトノベル',
        items: ['デート・ア・ライブ', 'ロクでなし魔術講師と禁忌教典']
      },
      book: {
        label: '好きな本',
        items: [{ t: '菊と刀', sub: 'ルース・ベネディクト' }]
      },
      history: {
        label: '歴史',
        text: '二つの世界大戦で、それぞれの戦いがどう展開し、どう決着したのかを読み解くのが好きです。戦後の民主化と経済成長、とりわけアメリカと日本の台頭にも関心があります。'
      },
      characters: {
        label: '好きなキャラクター',
        note: 'やさしい女の子、とりわけ凛として奥ゆかしい大和撫子に、つい惹かれてしまいます。',
        hitori: {
          name: '後藤ひとり',
          work: 'ぼっち・ざ・ろっく！'
        },
        kotonoha: {
          name: '桂言葉',
          work: 'School Days'
        }
      }
    },
    research: {
      eyebrow: '研究・プロジェクト',
      title: '手を動かして、学ぶ。',
      lead: 'まだ駆け出しで、学びの途中です。これまでの取り組みを紹介します。',
      researchLabel: '研究',
      status: { ongoing: '進行中' },
      hoi: {
        date: '2026年4月 – 現在',
        title: '関節物体を含む人–物体インタラクション生成',
        org: '国家級大学生イノベーション訓練プロジェクト',
        text: 'テキストから 3D の人–物体インタラクションを生成する研究です。浮き・滑り・接触のずれ・めり込みといった問題を減らす方法を試しています。まだ初期の実験段階です。'
      },
      generative: {
        title: '生成モデルの学習',
        text: '指導教員のもとで VAE と GAN を再現し、その後、拡散モデルの手法についても学びました。'
      },
      projectsLabel: '授業のプロジェクト',
      faceVerification: {
        title: 'ローカル・リアルタイム顔認証システム',
        text: '手元のマシンだけで、リアルタイムに顔認証を行うシステムです。'
      },
      lineArt: {
        title: 'Pix2Pix による山の線画の着色',
        text: '山の風景の線画を、Pix2Pix で自動着色します。'
      },
      skillsLabel: 'スキル'
    },
    guestbook: {
      eyebrow: 'ゲストブック',
      title: 'ひとこと、どうぞ。',
      lead: 'おすすめの作品や、「来たよ」のひとことでも歓迎です。書き込みには GitHub アカウントが必要です。',
      pending: 'ゲストブックはまもなく公開します。'
    },
    contact: {
      eyebrow: '連絡先',
      title: 'お気軽にどうぞ。',
      lead: 'ご連絡はメールがいちばん確実です。GitHub、bilibili、X にもいます。',
      email: 'メール',
      copy: 'コピー',
      copied: 'コピーしました',
      copyLabel: 'メールアドレスをコピー'
    },
    footer: {
      top: 'ページの先頭へ'
    }
  }
};
