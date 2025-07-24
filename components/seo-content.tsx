"use client"

import { Heart, Users, Gift, Gamepad2, Smartphone, Monitor, Zap } from "lucide-react"

interface SEOData {
  hero: {
    title: string
    subtitle: string
    features: string[]
  }
  productFeatures: {
    title: string
    features: Array<{
      title: string
      description: string
    }>
  }
  gameHighlights: {
    title: string
    highlights: Array<{
      title: string
      description: string
    }>
  }
  gameModes: {
    title: string
    modes: Array<{
      title: string
      description: string
    }>
  }
  usageScenarios: {
    title: string
    scenarios: Array<{
      title: string
      description: string
    }>
  }
  faq: {
    title: string
    questions: Array<{
      question: string
      answer: string
    }>
  }
  testimonials: {
    title: string
    reviews: Array<{
      rating: string
      content: string
      reviewer: string
    }>
  }
  relatedKeywords: {
    title: string
    keywords: string[]
  }
}

// 直接将中文数据定义为常量
const seoData: SEOData = {
    hero: {
        title: "飞行棋",
        subtitle: "fxq",
        features: ["fxq"],
    },
    productFeatures: {
        title: "棋游？",
        features: [
        {
            title: "飞行棋游戏",
            description:
            "fxq",
        },
        {
            title: "fxq",
            description:
            "fxq",
        },
        {
            title: "������",
            description:
            "fxq",
        },
        {
            title: "������",
            description:
            "fxq",
        },
        ],
    },
    gameHighlights: {
        title: "fxq",
        highlights: [
        {
            title: "������ ",
            description:
            "fxq",
        },
        {
            title: "������",
            description:
            "fxq",
        },
        {
            title: "������ ",
            description:
            "fxq",
        },
        {
            title: "������",
            description:
            "fxq",
        },
        ],
    },
    gameModes: {
        title: "飞行棋",
        modes: [
        {
            title: "������",
            description:
            "fxq",
        },
        {
            title: "������",
            description:
            "fxq",
        },
        {
            title: "������ 情侣互动游戏 - 深度交流版",
            description:
            "适合稳定关系的情侣互动游戏，更深层次的情感和身体交流。包含轻度的亲密接触任务，如按摩、亲吻、拥抱等，增进彼此的了解和信任。情侣娱乐游戏中的经典模式。",
        },
        {
            title: "������ 情侣挑战游戏 - 刺激冒险版",
            description:
            "为寻求更多刺激的情侣准备的情侣挑战游戏，大胆有趣的亲密挑战任务。包含更多身体接触和情趣互动，让关系更加紧密和激情，适合想要突破的情侣双人游戏体验。",
        },
        {
            title: "������ 情侣游戏app - 私密成人版",
            description:
            "仅限私密空间的成人内容，为成熟情侣提供更加深入和私密的互动体验。包含成人向的亲密任务，帮助情侣探索更深层次的身体和情感连接。情侣游戏app中的高级版本。",
        },
        {
            title: "������ 情侣游戏在线玩 - 随机惊喜版",
            description:
            "随机组合各种模式的任务，每次情侣游戏在线玩都有不同的惊喜和体验。从温和到激情的任务随机出现，保持游戏的新鲜感和不可预测性。情侣互动小游戏的终极体验。",
        },
        ],
    },
    usageScenarios: {
        title: "情侣飞行棋游戏适用场景",
        scenarios: [
        {
            title: "������ 情人节礼物 - 最有创意的礼物选择",
            description: "独特创意的情人节礼物，比传统礼物更有意义，能够创造共同的美好回忆。情侣礼物推荐首选，让Ta感受到你的用心。",
        },
        {
            title: "������ 生日纪念日礼物 - 表达爱意的最佳方式",
            description: "生日、恋爱纪念日、结婚纪念日的完美礼物选择，表达你的用心和爱意。情侣礼物推荐中最受欢迎的选择。",
        },
        {
            title: "������ 情侣约会游戏 - 在家也能浪漫约会",
            description: "不想出门的时候，在家也能享受浪漫约会时光。情侣约会游戏让你们增进感情的同时放松身心，创造美好回忆。",
        },
        {
            title: "������ 异地恋情侣游戏 - 跨越距离的甜蜜互动",
            description: "通过视频通话一起玩异地恋情侣游戏，即使相隔千里也能感受到彼此的温暖和爱意。情侣游戏手机版的最佳应用场景。",
        },
        {
            title: "������ 朋友聚会 - 活跃气氛的互动游戏",
            description: "朋友聚会时的活跃气氛神器，情侣互动小游戏让聚会更有趣。双人游戏情侣版也适合朋友间的互动娱乐。",
        },
        {
            title: "������ 睡前游戏 - 增进亲密关系的温馨时光",
            description: "睡前的温馨时光，通过情侣小游戏增进亲密关系。情侣娱乐游戏中最适合私密时刻的选择。",
        },
        ],
    },
    faq: {
        title: "情侣飞行棋游戏常见问题",
        questions: [
        {
            question: "情侣飞行棋游戏怎么玩？",
            answer: "情侣飞行棋游戏结合了经典飞行棋和情侣互动元素。两人轮流掷骰子移动棋子，踩到特殊格子时会触发情侣任务，需要当场执行。游戏支持手机版和电脑版，可以免费在线玩。",
        },
        {
            question: "情侣飞行棋手机游戏支持哪些设备？",
            answer: "情侣飞行棋手机游戏支持iOS和Android系统的手机和平板。也可以在电脑浏览器中打开，支持Windows、Mac系统。无需下载APP，直接在线游戏即可。",
        },
        {
            question: "情侣飞行棋在线游戏是免费的吗？",
            answer: "是的！情侣飞行棋在线游戏完全免费，无需付费即可享受所有游戏模式。我们提供6种不同的游戏模式，从温和到激情，满足不同情侣的需求。",
        },
        {
            question: "异地恋可以玩情侣飞行棋游戏吗？",
            answer: "当然可以！异地恋情侣游戏是我们的特色功能之一。通过视频通话，两人可以同时观看游戏画面，一起掷骰子，执行任务。让异地恋也能享受面对面的甜蜜互动。",
        },
        {
            question: "情侣飞行棋游戏适合什么年龄段？",
            answer: "情侣飞行棋游戏适合18岁以上的成年情侣。我们提供多种模式，从适合新手的情侣破冰游戏，到适合成熟情侣的深度互动模式，每个人都能找到适合自己的玩法。",
        },
        {
            question: "情侣飞行棋游戏任务安全吗？",
            answer: "所有任务都经过精心设计，确保安全、有趣且有助于增进感情。每个模式都有明确的界限设定，玩家可以根据自己的舒适度选择合适的游戏模式。",
        },
        ],
    },
    testimonials: {
        title: "情侣飞行棋游戏用户评价",
        reviews: [
        {
            rating: "⭐⭐⭐⭐⭐",
            content: "这个情侣飞行棋游戏全集真的太棒了！我和男朋友玩了好几个小时都不腻，任务设计得很有创意，让我们的感情更亲密了。强烈推荐给所有情侣！",
            reviewer: "小甜甜 - 大学生情侣",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            content: "作为异地恋情侣，这个游戏简直是救星！我们通过视频通话一起玩情侣飞行棋手机游戏，虽然相隔千里但感觉就像在一起一样。手机版操作很流畅，体验很棒！",
            reviewer: "阿杰 - 异地恋情侣",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            content: "朋友推荐的情侣互动游戏，没想到这么好玩！我们选择了情侣升温游戏模式，每个任务都让我们笑得很开心，关系也变得更亲密了。这绝对是最好的情侣约会游戏！",
            reviewer: "小雨 - 新婚夫妇",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            content: "情人节我送给女朋友这个情侣飞行棋游戏链接，她超级喜欢！比买实物礼物更有意义，我们一起玩游戏的时光变成了最珍贵的回忆。情侣礼物推荐必选！",
            reviewer: "小明 - 上班族情侣",
        },
        {
            rating: "⭐⭐⭐⭐⭐",
            content: "这个情侣挑战游戏的任务设计得太有创意了！从简单的情侣破冰游戏到更深入的互动，每个模式都有不同的体验。我们已经玩遍了所有模式，每次都有新的惊喜！",
            reviewer: "婷婷 - 恋爱3年情侣",
        },
        ],
    },
  relatedKeywords: {
    title: "相关热门搜索词",
    keywords: [
      "情侣飞行棋游戏全集", "情侣飞行棋手机游戏", "情侣飞行棋在线游戏", "情侣互动游戏", "情侣小游戏",
      "真心话大冒险", "情侣破冰游戏", "情侣升温游戏", "情侣约会游戏", "情侣挑战游戏",
      "异地恋情侣游戏", "情侣游戏app", "情侣游戏手机版", "情侣游戏在线玩", "双人游戏情侣",
      "情侣互动小游戏", "情侣任务游戏", "情侣娱乐游戏", "情侣礼物推荐", "情人节礼物",
      "恋爱游戏", "增进感情的游戏", "情侣桌游", "情侣互动", "甜蜜互动游戏"
    ],
  },
};


export default function SEOContent() {
  // 删除了所有的 useState 和 useEffect
  
  // 删除了 if (!seoData) { ... } 的加载状态判断

  return (
    <div className="seo-content-wrapper">
      {/* 主要内容区域 */}
      <section className="hero-section">
        <h1 className="seo-title">{seoData.hero.title}</h1>
        <p className="seo-subtitle">{seoData.hero.subtitle}</p>
        <div className="features-grid">
          {seoData.hero.features.map((feature, index) => (
            <div key={index} className="feature-tag">
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* 产品特色 */}
      <section className="product-features">
        <h2>{seoData.productFeatures.title}</h2>
        <div className="features-list">
          {seoData.productFeatures.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 游戏亮点 */}
      <section className="game-highlights">
        <h2>{seoData.gameHighlights.title}</h2>
        <div className="highlights-grid">
          {seoData.gameHighlights.highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                {index === 0 && <Gamepad2 />}
                {index === 1 && <Heart />}
                {index === 2 && <Zap />}
                {index === 3 && <Gift />}
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 游戏模式 */}
      <section className="game-modes">
        <h2>{seoData.gameModes.title}</h2>
        <div className="modes-grid">
          {seoData.gameModes.modes.map((mode, index) => (
            <div key={index} className="mode-card">
              <h3>{mode.title}</h3>
              <p>{mode.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 使用场景 */}
      <section className="usage-scenarios">
        <h2>{seoData.usageScenarios.title}</h2>
        <div className="scenarios-grid">
          {seoData.usageScenarios.scenarios.map((scenario, index) => (
            <div key={index} className="scenario-card">
              <h3>{scenario.title}</h3>
              <p>{scenario.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 常见问题 */}
      <section className="faq-section">
        <h2>{seoData.faq.title}</h2>
        <div className="faq-list">
          {seoData.faq.questions.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 用户评价 */}
      <section className="testimonials">
        <h2>{seoData.testimonials.title}</h2>
        <div className="reviews-grid">
          {seoData.testimonials.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="rating">{review.rating}</div>
              <p className="review-content">"{review.content}"</p>
              <div className="reviewer">- {review.reviewer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 相关关键词 */}
      <section className="related-keywords">
        <h2>{seoData.relatedKeywords.title}</h2>
        <div className="keywords-cloud">
          {seoData.relatedKeywords.keywords.map((keyword, index) => (
            <span key={index} className="keyword-tag">
              {keyword}
            </span>
          ))}
        </div>
      </section>

      {/* 平台支持信息 */}
      <section className="platform-support">
        <h2>多平台支持 - 随时随地畅玩情侣飞行棋游戏</h2>
        <div className="platform-grid">
          <div className="platform-card">
            <Smartphone className="platform-icon" />
            <h3>手机版情侣游戏</h3>
            <p>支持iOS和Android系统，情侣飞行棋手机游戏体验流畅，随时随地开启甜蜜互动时光。</p>
          </div>
          <div className="platform-card">
            <Monitor className="platform-icon" />
            <h3>电脑版在线游戏</h3>
            <p>支持Windows、Mac系统浏览器，情侣飞行棋在线游戏画面更大，操作更便捷。</p>
          </div>
        </div>
      </section>
      
      {/* 平台支持信息 */}
      <section className="platform-support">
        <h2>多平台支持 - 随时随地畅玩情侣飞行棋游戏</h2>
        <div className="platform-grid">
          <div className="platform-card">
            <Smartphone className="platform-icon" />
            <h3>手机版情侣游戏</h3>
            <p>支持iOS和Android系统，情侣飞行棋手机游戏体验流畅，随时随地开启甜蜜互动时光。</p>
          </div>
          <div className="platform-card">
            <Monitor className="platform-icon" />
            <h3>电脑版在线游戏</h3>
            <p>支持Windows、Mac系统浏览器，情侣飞行棋在线游戏画面更大，操作更便捷。</p>
          </div>
        </div>
      </section>

      {/* 立即开始游戏的引导 */}
      <section className="cta-section">
        <h2>立即开始你们的情侣飞行棋游戏之旅！</h2>
        <p>无需下载，无需注册，点击开始即可享受最火爆的情侣互动游戏体验！</p>
        <div className="cta-buttons">
          <button className="cta-primary">开始游戏</button>
          <button className="cta-secondary">了解更多</button>
        </div>
      </section>
    </div>
  )
}
