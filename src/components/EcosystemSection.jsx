import React, { useState } from 'react';
import './EcosystemSection.css';

const ZOHO_PRODUCTS = [
  { id: 'survey', name: 'Zoho Survey', icon: '/zoho-official-svgs/survey.svg' },
  { id: 'sprints', name: 'Zoho Sprints', icon: '/zoho-official-svgs/sprints.svg' },
  { id: 'social', name: 'Zoho Social', icon: '/zoho-official-svgs/social.svg' },
  { id: 'sign', name: 'Zoho Sign', icon: '/zoho-official-svgs/sign.svg' },
  { id: 'sheet', name: 'Zoho Sheet', icon: '/zoho-official-svgs/sheet.svg' },
  { id: 'recruit', name: 'Zoho Recruit', icon: '/zoho-official-svgs/recruit.svg' },
  { id: 'projects', name: 'Zoho Projects', icon: '/zoho-official-svgs/projects.svg' },
  { id: 'people', name: 'Zoho People', icon: '/zoho-official-svgs/people.svg' },
  { id: 'pagesense', name: 'Zoho PageSense', icon: '/zoho-official-svgs/pagesense.svg' },
  { id: 'one', name: 'Zoho One', icon: '/zoho-official-svgs/one.svg' },
  { id: 'meeting', name: 'Zoho Meeting', icon: '/zoho-official-svgs/meeting.svg' },
  { id: 'mail', name: 'Zoho Mail', icon: '/zoho-official-svgs/mail.svg' },
  { id: 'fsm', name: 'Zoho FSM', icon: '/zoho-official-svgs/fsm.svg' },
  { id: 'flow', name: 'Zoho Flow', icon: '/zoho-official-svgs/flow.svg' },
  { id: 'desk', name: 'Zoho Desk', icon: '/zoho-official-svgs/desk.svg' },
  { id: 'creator', name: 'Zoho Creator', icon: '/zoho-official-svgs/creator.svg' },
  { id: 'cliq', name: 'Zoho Cliq', icon: '/zoho-official-svgs/cliq.svg' },
  { id: 'catalyst', name: 'Catalyst by Zoho', icon: '/zoho-official-svgs/catalyst.svg' },
  { id: 'campaigns', name: 'Zoho Campaigns', icon: '/zoho-official-svgs/campaigns.svg' },
  { id: 'books', name: 'Zoho Books', icon: '/zoho-official-svgs/books.svg' },
  { id: 'assist', name: 'Zoho Assist', icon: '/zoho-official-svgs/assist.svg' },
  { id: 'analytics', name: 'Zoho Analytics', icon: '/zoho-official-svgs/analytics.svg' },
  { id: 'crm', name: 'Zoho CRM', icon: '/zoho-official-svgs/crm.svg' },
  { id: 'subscriptions', name: 'Zoho Subscriptions', icon: '/zoho-official-svgs/subscriptions.svg' },
  { id: 'salesiq', name: 'Zoho SalesIQ', icon: '/zoho-official-svgs/salesiq.svg' },
  { id: 'invoice', name: 'Zoho Invoice', icon: '/zoho-official-svgs/invoice.svg' },
  { id: 'inventory', name: 'Zoho Inventory', icon: '/zoho-official-svgs/inventory.svg' },
  { id: 'expense', name: 'Zoho Expense', icon: '/zoho-official-svgs/expense.svg' },
  { id: 'billing', name: 'Zoho Billing', icon: '/zoho-official-svgs/billing.svg' },
  { id: 'bigin', name: 'Bigin by Zoho CRM', icon: '/zoho-official-svgs/bigin.svg' },
  { id: 'writer', name: 'Zoho Writer', icon: '/zoho-official-svgs/writer.svg' },
  { id: 'workdrive', name: 'Zoho WorkDrive', icon: '/zoho-official-svgs/workdrive.svg' },
];

const OTHER_TOOLS = [
  { id: 'd-tools', name: 'D-Tools', icon: '/other-tools-svgs/d-tools.svg' },
  { id: 'n8n', name: 'n8n', icon: '/other-tools-svgs/n8n.svg' },
  { id: 'aws', name: 'Amazon Web Services', icon: '/other-tools-svgs/amazonwebservices.svg' },
  { id: 'google-workspace', name: 'Google Workspace', icon: '/other-tools-svgs/googleworkspace.svg' },
  { id: 'hubspot', name: 'HubSpot', icon: '/other-tools-svgs/hubspot.svg' },
  { id: 'magento', name: 'Magento', icon: '/other-tools-svgs/magento.svg' },
  { id: 'make', name: 'Make', icon: '/other-tools-svgs/make.svg' },
  { id: 'microsoft-365', name: 'Microsoft 365', icon: '/other-tools-svgs/microsoft365.svg' },
  { id: 'quickbooks', name: 'QuickBooks', icon: '/other-tools-svgs/quickbooks.svg' },
  { id: 'salesforce', name: 'Salesforce', icon: '/other-tools-svgs/salesforce.svg' },
  { id: 'shopify', name: 'Shopify', icon: '/other-tools-svgs/shopify.svg' },
  { id: 'slack', name: 'Slack', icon: '/other-tools-svgs/slack.svg' },
  { id: 'stripe', name: 'Stripe', icon: '/other-tools-svgs/stripe.svg' },
  { id: 'twilio', name: 'Twilio', icon: '/other-tools-svgs/twilio.svg' },
  { id: 'xero', name: 'Xero', icon: '/other-tools-svgs/xero.svg' },
  { id: 'zapier', name: 'Zapier', icon: '/other-tools-svgs/zapier.svg' },
  { id: 'zendesk', name: 'Zendesk', icon: '/other-tools-svgs/zendesk.svg' },
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState('zoho');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section id="ecosystem" className="ecosystem-section" aria-label="Zoho Ecosystem Expertise and Integration Tools">
      {/* Ambient background glows */}
      <div className="ecosystem-ambient-glow glow-top" aria-hidden="true" />
      <div className="ecosystem-ambient-glow glow-center" aria-hidden="true" />
      <div className="ecosystem-ambient-glow glow-bottom" aria-hidden="true" />
      <div className="ecosystem-grid-mesh" aria-hidden="true" />

      <div className="ecosystem-container">
        {/* Header */}
        <div className="ecosystem-header">
          <div className="ecosystem-eyebrow">
            <span className="eyebrow-sparkle">✦</span>
            <span>INTEGRATED SUITE & CAPABILITIES</span>
          </div>
          <h2 className="ecosystem-title">
            Zoho Ecosystem Expertise & <span className="title-gold-gradient">Integration Tools</span>
          </h2>
          <div className="ecosystem-gold-divider">
            <span className="divider-sparkle" />
          </div>
          <p className="ecosystem-subtitle">
            Unifying end-to-end business workflows across the extensive Zoho suite, industry-leading third-party platforms, and modern enterprise technologies.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="ecosystem-tabs-wrapper" role="tablist" aria-label="Ecosystem Category Tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'zoho'}
            className={`ecosystem-tab-btn ${activeTab === 'zoho' ? 'active' : ''}`}
            onClick={() => setActiveTab('zoho')}
          >
            <span className="tab-indicator" />
            <span className="tab-label">ZOHO Products</span>
            <span className="tab-count">32</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'other'}
            className={`ecosystem-tab-btn ${activeTab === 'other' ? 'active' : ''}`}
            onClick={() => setActiveTab('other')}
          >
            <span className="tab-indicator" />
            <span className="tab-label">Other Tools</span>
            <span className="tab-count">17</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'tech'}
            className={`ecosystem-tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <span className="tab-indicator" />
            <span className="tab-label">Technologies</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="ecosystem-tab-panel">
          {activeTab === 'zoho' && (
            <div className="zoho-products-grid">
              {ZOHO_PRODUCTS.map((prod) => {
                const isHovered = hoveredProduct === prod.id;
                return (
                  <div
                    key={prod.id}
                    className={`zoho-product-card ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredProduct(prod.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    title={prod.name}
                  >
                    {/* Glowing highlight aura */}
                    <div className="card-ambient-aura" aria-hidden="true" />

                    {/* Official Zoho SVG (already contains logo + text vector) */}
                    <img
                      src={prod.icon}
                      alt={prod.name}
                      className="product-icon-img"
                      loading="lazy"
                    />

                    {/* Border glow shine */}
                    <div className="card-border-glow" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'other' && (
            <div className="other-tools-grid">
              {OTHER_TOOLS.map((tool) => {
                const isHovered = hoveredProduct === tool.id;
                return (
                  <div
                    key={tool.id}
                    className={`other-tool-card ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredProduct(tool.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    title={tool.name}
                  >
                    {/* Glowing highlight aura */}
                    <div className="card-ambient-aura" aria-hidden="true" />

                    {/* Tool Brand Icon */}
                    <div className="tool-icon-wrapper">
                      <img
                        src={tool.icon}
                        alt={`${tool.name} logo`}
                        className="tool-icon-img"
                        loading="lazy"
                      />
                    </div>

                    {/* Tool Brand Label Name */}
                    <span className="tool-name-label">{tool.name}</span>

                    {/* Border glow shine */}
                    <div className="card-border-glow" aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="ecosystem-placeholder-card">
              <div className="placeholder-icon-circle">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="placeholder-title">Technologies & Stacks</h3>
              <p className="placeholder-text">
                Custom Deluge scripting, REST APIs, Webhook architectures, serverless Catalyst functions, React web apps, Node.js microservices, and enterprise automation pipelines.
              </p>
              <div className="placeholder-badge">Technology Stacks Loading Soon</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
