"use client"

import { Heart, Users, Gift, Gamepad2, Smartphone, Monitor, Zap } from "lucide-react"
import seoData from './seo-data.json'; // 导入JSON数据

export default function SEOContent() {
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
        <h2>多平台支持 </h2>
        <div className="platform-grid">
          <div className="platform-card">
            <Smartphone className="platform-icon" />
            <h3>游戏</h3>
            <p>支持N多系统，v1版本开始体验流畅。</p>
          </div>
          <div className="platform-card">
            <Monitor className="platform-icon" />
            <h3>在线游戏</h3>
            <p>嘿嘿</p>
          </div>
        </div>
      </section>
      
      {/* 立即开始游戏的引导 */}
      <section className="cta-section">
        <h2>xxx</h2>
        <p>嘿嘿</p>
        <div className="cta-buttons">
          <button className="cta-primary">开始游戏</button>
          <button className="cta-secondary">了解更多</button>
        </div>
      </section>
    </div>
  )
}
