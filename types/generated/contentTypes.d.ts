import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutUsAboutUs extends Struct.SingleTypeSchema {
  collectionName: 'about_uses';
  info: {
    displayName: 'About Us';
    pluralName: 'about-uses';
    singularName: 'about-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-us.about-us'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAffiliateDisclosureAffiliateDisclosure
  extends Struct.SingleTypeSchema {
  collectionName: 'affiliate_disclosures';
  info: {
    displayName: 'Affiliate Disclosure';
    pluralName: 'affiliate-disclosures';
    singularName: 'affiliate-disclosure';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::affiliate-disclosure.affiliate-disclosure'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'page_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    displayName: 'Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    article_title: Schema.Attribute.String;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fact_checked_by: Schema.Attribute.Relation<
      'manyToOne',
      'api::author.author'
    >;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    howToSchema: Schema.Attribute.Component<'content.how-to-schema', false>;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.DynamicZone<
      ['content.rich-text', 'content.heading']
    >;
    post_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::category.category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    relatedArticles: Schema.Attribute.Relation<
      'manyToMany',
      'api::article.article'
    >;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    source_refernces: Schema.Attribute.Component<
      'content.source-reference',
      true
    >;
    tldr_summary: Schema.Attribute.Component<'shared.tldr', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    writtenBy: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    casino_bonus: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-bonus.casino-bonus'
    >;
    casino_bonuses: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-bonus.casino-bonus'
    >;
    casino_review: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-review.casino-review'
    >;
    casino_reviews: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-review.casino-review'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    factCheckedArticles: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    >;
    fullBio: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Enumeration<['Reviewer', 'Fact Checker', 'Editor']>;
    shortBio: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    slug: Schema.Attribute.UID<'name'>;
    socialMedia: Schema.Attribute.Component<'socials.social-links', true>;
    sportsbook_bonus: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    sportsbook_bonuses: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    sportsbook_review: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-review.sportsbook-review'
    >;
    sportsbook_reviews: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-review.sportsbook-review'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBusinessModelBusinessModel extends Struct.SingleTypeSchema {
  collectionName: 'business_models';
  info: {
    displayName: 'Business Model';
    pluralName: 'business-models';
    singularName: 'business-model';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lastUpdated: Schema.Attribute.Date;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::business-model.business-model'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCasinoBonusCasinoBonus extends Struct.CollectionTypeSchema {
  collectionName: 'casino_bonuses';
  info: {
    displayName: 'Casino Bonus';
    pluralName: 'casino-bonuses';
    singularName: 'casino-bonus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alternatives: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    casino_bonus_types: Schema.Attribute.Component<
      'casino.casino-bonus-types',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fact_checked_by: Schema.Attribute.Relation<
      'manyToOne',
      'api::author.author'
    >;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    highlighted_bonus_offer: Schema.Attribute.Component<
      'content.highligted-bonus-offer',
      false
    >;
    isFeatured: Schema.Attribute.Boolean;
    isRecommended: Schema.Attribute.Boolean;
    last_tested_date: Schema.Attribute.Date;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-bonus.casino-bonus'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    more_content_options: Schema.Attribute.DynamicZone<
      [
        'unit.label-and-value',
        'shared.cta-button',
        'content.rich-text',
        'content.bonus-offer',
        'content.trust-signals',
      ]
    >;
    operator_country: Schema.Attribute.Relation<
      'manyToOne',
      'api::operator-country.operator-country'
    >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    related_casino_review: Schema.Attribute.Relation<
      'oneToOne',
      'api::casino-review.casino-review'
    >;
    related_sportsbook_bonus: Schema.Attribute.Relation<
      'oneToOne',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    review_summary: Schema.Attribute.Component<'content.review-summary', false>;
    reviewed_by: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    source_refernces: Schema.Attribute.Component<
      'content.source-reference',
      false
    >;
    sportsbook_review: Schema.Attribute.Relation<
      'oneToOne',
      'api::sportsbook-review.sportsbook-review'
    >;
    tldr_summary: Schema.Attribute.Component<'shared.tldr', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCasinoGameCasinoGame extends Struct.CollectionTypeSchema {
  collectionName: 'casino_games';
  info: {
    displayName: 'Casino Game';
    pluralName: 'casino-games';
    singularName: 'casino-game';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    casino_reviews: Schema.Attribute.Relation<
      'manyToMany',
      'api::casino-review.casino-review'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    game_type: Schema.Attribute.Enumeration<
      [
        'Slots',
        'Live Dealer',
        'Table Games',
        'Video Poker',
        'Crash & Instant Games',
        'Fishing & Arcade',
        'Virtual Sports',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-game.casino-game'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    rtp: Schema.Attribute.Decimal;
    slug: Schema.Attribute.UID<'title'>;
    software_provider: Schema.Attribute.Relation<
      'manyToOne',
      'api::software-provider.software-provider'
    >;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    volatility: Schema.Attribute.Enumeration<['Low', 'Medium', 'High']>;
  };
}

export interface ApiCasinoReviewCasinoReview
  extends Struct.CollectionTypeSchema {
  collectionName: 'casino_reviews';
  info: {
    displayName: 'Casino Review';
    pluralName: 'casino-reviews';
    singularName: 'casino-review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alternatives: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    casino_bonus: Schema.Attribute.Relation<
      'oneToOne',
      'api::casino-bonus.casino-bonus'
    >;
    casino_features: Schema.Attribute.Component<
      'casino.casino-features',
      false
    >;
    casino_games: Schema.Attribute.Relation<
      'manyToMany',
      'api::casino-game.casino-game'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fact_checked_by: Schema.Attribute.Relation<
      'manyToOne',
      'api::author.author'
    >;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    highlighted_bonus_offer: Schema.Attribute.Component<
      'content.highligted-bonus-offer',
      false
    >;
    isFeatured: Schema.Attribute.Boolean;
    isRecommended: Schema.Attribute.Boolean;
    last_tested_date: Schema.Attribute.Date;
    leadParagraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-review.casino-review'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.DynamicZone<
      [
        'content.rich-text',
        'shared.cta-button',
        'unit.label-and-value',
        'unit.responsible-gambling',
        'content.highligted-bonus-offer',
        'content.heading',
      ]
    >;
    operator_country: Schema.Attribute.Relation<
      'manyToOne',
      'api::operator-country.operator-country'
    >;
    pageTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    review_summary: Schema.Attribute.Component<'content.review-summary', false>;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    software_providers: Schema.Attribute.Relation<
      'manyToMany',
      'api::software-provider.software-provider'
    >;
    source_refernces: Schema.Attribute.Component<
      'content.source-reference',
      true
    >;
    sportsbook_bonus: Schema.Attribute.Relation<
      'oneToOne',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    sportsbook_review: Schema.Attribute.Relation<
      'oneToOne',
      'api::sportsbook-review.sportsbook-review'
    >;
    tldr_summary: Schema.Attribute.Component<'shared.tldr', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    written_by: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    category_title: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    parent_category: Schema.Attribute.Relation<
      'manyToOne',
      'api::category.category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'contact_uses';
  info: {
    displayName: 'Contact Us';
    pluralName: 'contact-uses';
    singularName: 'contact-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contact_form: Schema.Attribute.Component<'shared.contact-form', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    social_media_links: Schema.Attribute.Component<
      'socials.social-links',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCookiePolicyCookiePolicy extends Struct.SingleTypeSchema {
  collectionName: 'cookie_policies';
  info: {
    displayName: 'Cookie Policy';
    pluralName: 'cookie-policies';
    singularName: 'cookie-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lastUpdated: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cookie-policy.cookie-policy'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'page_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCountryPageCountryPage extends Struct.CollectionTypeSchema {
  collectionName: 'country_pages';
  info: {
    displayName: 'Country Page';
    pluralName: 'country-pages';
    singularName: 'country-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featuredImage: Schema.Attribute.Media<'images' | 'files'>;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country-page.country-page'
    > &
      Schema.Attribute.Private;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    responsibleGambling: Schema.Attribute.Component<
      'shared.responsible-gambling',
      false
    >;
    review_type: Schema.Attribute.Enumeration<
      ['Sportsbook Review', 'Casino Review', 'Sportsbook Bonus', 'Casino Bonus']
    >;
    richText: Schema.Attribute.Component<'content.rich-text', false>;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'page_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    displayName: 'Country';
    pluralName: 'countries';
    singularName: 'country';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    country_pages: Schema.Attribute.Relation<
      'oneToMany',
      'api::country-page.country-page'
    >;
    countryCode: Schema.Attribute.String;
    countryName: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flag: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    > &
      Schema.Attribute.Private;
    operator_countries: Schema.Attribute.Relation<
      'oneToMany',
      'api::operator-country.operator-country'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEditorialPolicyEditorialPolicy
  extends Struct.SingleTypeSchema {
  collectionName: 'editorial_policies';
  info: {
    displayName: 'Editorial Policy';
    pluralName: 'editorial-policies';
    singularName: 'editorial-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lastUpdated: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::editorial-policy.editorial-policy'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    displayName: 'Footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    columns: Schema.Attribute.Component<'footer.footer-column', true>;
    copyright_text: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footer_note: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    social_links: Schema.Attribute.Component<'socials.social-links', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalSettingGlobalSetting extends Struct.SingleTypeSchema {
  collectionName: 'global_settings';
  info: {
    displayName: 'Global Setting';
    pluralName: 'global-settings';
    singularName: 'global-setting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    affiliateDisclosure: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    ageWarning: Schema.Attribute.String;
    analytics_and_tracking: Schema.Attribute.Component<
      'global.analytics-and-tracking',
      false
    >;
    brand_information: Schema.Attribute.Component<
      'global.brand-information',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    default_seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    global_url_and_local_setting: Schema.Attribute.Component<
      'global.global-ur-ls-and-locale-settings',
      false
    >;
    legal_and_compliance: Schema.Attribute.Component<
      'global.legal-and-compliance',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-setting.global-setting'
    > &
      Schema.Attribute.Private;
    maintenance_mode: Schema.Attribute.Component<
      'global.maintenance-mode',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    responsibleGamblingMessage: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    social_media_links: Schema.Attribute.Component<
      'socials.social-links',
      true
    >;
    supportOrganizations: Schema.Attribute.Component<
      'unit.responsible-gambling',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    displayName: 'Home';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    >;
    featured_brands: Schema.Attribute.Relation<
      'oneToMany',
      'api::operator-brand.operator-brand'
    >;
    featured_countries: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    >;
    hero_section: Schema.Attribute.Component<'content.hero-section', false>;
    homepage_categories: Schema.Attribute.Component<
      'content.homepage-category-block',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    responsibleGambling: Schema.Attribute.Component<
      'shared.responsible-gambling',
      false
    >;
    richText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavigationNavigation extends Struct.SingleTypeSchema {
  collectionName: 'navigations';
  info: {
    displayName: 'Navigation';
    pluralName: 'navigations';
    singularName: 'navigation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    > &
      Schema.Attribute.Private;
    main_navbar: Schema.Attribute.Component<'navigation.navbar-group', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOperatorBrandOperatorBrand
  extends Struct.CollectionTypeSchema {
  collectionName: 'operator_brands';
  info: {
    displayName: 'Brand';
    pluralName: 'operator-brands';
    singularName: 'operator-brand';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    headquarters: Schema.Attribute.String;
    is_licensed: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::operator-brand.operator-brand'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    operator_countries: Schema.Attribute.Relation<
      'oneToMany',
      'api::operator-country.operator-country'
    >;
    parent_company: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    year_founded: Schema.Attribute.String;
  };
}

export interface ApiOperatorCountryOperatorCountry
  extends Struct.CollectionTypeSchema {
  collectionName: 'operator_countries';
  info: {
    displayName: 'Bookmaker';
    pluralName: 'operator-countries';
    singularName: 'operator-country';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alternatives: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    brand: Schema.Attribute.Relation<
      'manyToOne',
      'api::operator-brand.operator-brand'
    >;
    casino_bonus: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-bonus.casino-bonus'
    >;
    casino_bonuses: Schema.Attribute.Relation<
      'manyToMany',
      'api::casino-bonus.casino-bonus'
    >;
    casino_review: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-review.casino-review'
    >;
    casino_reviews: Schema.Attribute.Relation<
      'manyToMany',
      'api::casino-review.casino-review'
    >;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currency: Schema.Attribute.String;
    entry_year: Schema.Attribute.String;
    is_active: Schema.Attribute.Boolean;
    license_detail: Schema.Attribute.Component<'shared.license-detail', true>;
    local_name: Schema.Attribute.String;
    local_support: Schema.Attribute.Component<'shared.contact-detail', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::operator-country.operator-country'
    > &
      Schema.Attribute.Private;
    operating_company: Schema.Attribute.String;
    operator_countries: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    operator_country_cta: Schema.Attribute.Component<'shared.cta-button', true>;
    operator_country_features: Schema.Attribute.Component<
      'operator-country.operator-country-features',
      false
    >;
    payment_methods: Schema.Attribute.Relation<
      'manyToMany',
      'api::payment-method.payment-method'
    >;
    publishedAt: Schema.Attribute.DateTime;
    short_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    sportsbook_bonus: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    sportsbook_bonuses: Schema.Attribute.Relation<
      'manyToMany',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    sportsbook_review: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-review.sportsbook-review'
    >;
    sportsbook_reviews: Schema.Attribute.Relation<
      'manyToMany',
      'api::sportsbook-review.sportsbook-review'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOurReviewProcessOurReviewProcess
  extends Struct.SingleTypeSchema {
  collectionName: 'our_review_processes';
  info: {
    displayName: 'Our Review Process';
    pluralName: 'our-review-processes';
    singularName: 'our-review-process';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lastUpdated: Schema.Attribute.Date;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::our-review-process.our-review-process'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageNotFoundPageNotFound extends Struct.SingleTypeSchema {
  collectionName: 'page_not_founds';
  info: {
    displayName: 'Page Not Found';
    pluralName: 'page-not-founds';
    singularName: 'page-not-found';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    illustration_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-not-found.page-not-found'
    > &
      Schema.Attribute.Private;
    public_url: Schema.Attribute.Component<'shared.public-url', false>;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaymentChannelPaymentChannel
  extends Struct.CollectionTypeSchema {
  collectionName: 'payment_channels';
  info: {
    displayName: 'Payment Channel';
    pluralName: 'payment-channels';
    singularName: 'payment-channel';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::payment-channel.payment-channel'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    payment_methods: Schema.Attribute.Relation<
      'manyToMany',
      'api::payment-method.payment-method'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<
      ['e-Wallet', 'Bank Transfer', 'Card', 'USSD', 'Crypto', 'Mobile Money']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPaymentMethodPaymentMethod
  extends Struct.CollectionTypeSchema {
  collectionName: 'payment_methods';
  info: {
    displayName: 'Payment Method';
    pluralName: 'payment-methods';
    singularName: 'payment-method';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    crypto_payments_supported: Schema.Attribute.Boolean;
    fees: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::payment-method.payment-method'
    > &
      Schema.Attribute.Private;
    max_payout: Schema.Attribute.String;
    min_deposit: Schema.Attribute.String;
    operator_countries: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    payment_channels: Schema.Attribute.Relation<
      'manyToMany',
      'api::payment-channel.payment-channel'
    >;
    publishedAt: Schema.Attribute.DateTime;
    shortSummary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
    transaction_time: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Struct.SingleTypeSchema {
  collectionName: 'privacy_policies';
  info: {
    displayName: 'Privacy Policy';
    pluralName: 'privacy-policies';
    singularName: 'privacy-policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lastUpdated: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::privacy-policy.privacy-policy'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'page_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRedirectRedirect extends Struct.CollectionTypeSchema {
  collectionName: 'redirects';
  info: {
    displayName: 'Redirect';
    pluralName: 'redirects';
    singularName: 'redirect';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::redirect.redirect'
    > &
      Schema.Attribute.Private;
    new_url: Schema.Attribute.String;
    old_url: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    redirect_type: Schema.Attribute.Enumeration<
      ['Permanent (301)', 'Temporary (302)']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResponsibleGamblingResponsibleGambling
  extends Struct.SingleTypeSchema {
  collectionName: 'responsible_gamblings';
  info: {
    displayName: 'Responsible Gambling';
    pluralName: 'responsible-gamblings';
    singularName: 'responsible-gambling';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::responsible-gambling.responsible-gambling'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'page_title'>;
    support_organizations: Schema.Attribute.Component<
      'unit.responsible-gambling',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSoftwareProviderSoftwareProvider
  extends Struct.CollectionTypeSchema {
  collectionName: 'software_providers';
  info: {
    displayName: 'Software Provider';
    pluralName: 'software-providers';
    singularName: 'software-provider';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    casino_games: Schema.Attribute.Relation<
      'oneToMany',
      'api::casino-game.casino-game'
    >;
    casino_reviews: Schema.Attribute.Relation<
      'manyToMany',
      'api::casino-review.casino-review'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::software-provider.software-provider'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSportsbookBonusSportsbookBonus
  extends Struct.CollectionTypeSchema {
  collectionName: 'sportsbook_bonuses';
  info: {
    displayName: 'Sportsbook Bonus';
    pluralName: 'sportsbook-bonuses';
    singularName: 'sportsbook-bonus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alternatives: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    casino_bonus: Schema.Attribute.Relation<
      'oneToOne',
      'api::casino-bonus.casino-bonus'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fact_checked_by: Schema.Attribute.Relation<
      'manyToOne',
      'api::author.author'
    >;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    highlighted_bonus_offer: Schema.Attribute.Component<
      'content.highligted-bonus-offer',
      false
    >;
    isFeatured: Schema.Attribute.Boolean;
    isRecommended: Schema.Attribute.Boolean;
    last_tested_date: Schema.Attribute.Date;
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-bonus.sportsbook-bonus'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    more_content_options: Schema.Attribute.DynamicZone<
      [
        'content.rich-text',
        'content.highligted-bonus-offer',
        'shared.cta-button',
        'unit.label-and-value',
        'content.heading',
      ]
    >;
    operator_country: Schema.Attribute.Relation<
      'manyToOne',
      'api::operator-country.operator-country'
    >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    related_casino_review: Schema.Attribute.Relation<
      'oneToOne',
      'api::casino-review.casino-review'
    >;
    review_summary: Schema.Attribute.Component<'content.review-summary', false>;
    reviewed_by: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    short_title: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'short_title'>;
    source_refernces: Schema.Attribute.Component<
      'content.source-reference',
      false
    >;
    sportsbook_bonus_types: Schema.Attribute.Component<
      'sportsbook.sportsbook-bonus-types',
      false
    >;
    sportsbook_review: Schema.Attribute.Relation<
      'oneToOne',
      'api::sportsbook-review.sportsbook-review'
    >;
    tldr_summary: Schema.Attribute.Component<'shared.tldr', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSportsbookReviewSportsbookReview
  extends Struct.CollectionTypeSchema {
  collectionName: 'sportsbook_reviews';
  info: {
    displayName: 'Sportsbook Review';
    pluralName: 'sportsbook-reviews';
    singularName: 'sportsbook-review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    alternatives: Schema.Attribute.Relation<
      'manyToMany',
      'api::operator-country.operator-country'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fact_checked_by: Schema.Attribute.Relation<
      'manyToOne',
      'api::author.author'
    >;
    faqs: Schema.Attribute.Component<'shared.fa-qs-section', false>;
    highlighted_bonus_offer: Schema.Attribute.Component<
      'content.highligted-bonus-offer',
      false
    >;
    isFeatured: Schema.Attribute.Boolean;
    isRecommended: Schema.Attribute.Boolean;
    last_tested_date: Schema.Attribute.Date;
    leadParagraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sportsbook-review.sportsbook-review'
    > &
      Schema.Attribute.Private;
    mainContent: Schema.Attribute.DynamicZone<
      ['content.rich-text', 'content.heading']
    >;
    operator_country: Schema.Attribute.Relation<
      'manyToOne',
      'api::operator-country.operator-country'
    >;
    pageTitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    related_casino_bonus: Schema.Attribute.Relation<
      'oneToOne',
      'api::casino-bonus.casino-bonus'
    >;
    related_casino_review: Schema.Attribute.Relation<
      'oneToOne',
      'api::casino-review.casino-review'
    >;
    related_sportsbook_bonus: Schema.Attribute.Relation<
      'oneToOne',
      'api::sportsbook-bonus.sportsbook-bonus'
    >;
    review_summary: Schema.Attribute.Component<'content.review-summary', false>;
    reviewed_by: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    shortTitle: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'shortTitle'>;
    source_refernces: Schema.Attribute.Component<
      'content.source-reference',
      true
    >;
    sportsbook_features: Schema.Attribute.Component<
      'sportsbook.sportsbook-features',
      false
    >;
    tldr_summary: Schema.Attribute.Component<'shared.tldr', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTermsAndConditionTermsAndCondition
  extends Struct.SingleTypeSchema {
  collectionName: 'terms_and_conditions';
  info: {
    displayName: 'Terms and Condition';
    pluralName: 'terms-and-conditions';
    singularName: 'terms-and-condition';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    lastUpdated: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::terms-and-condition.terms-and-condition'
    > &
      Schema.Attribute.Private;
    main_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    page_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seoMeta: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'page_title'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::affiliate-disclosure.affiliate-disclosure': ApiAffiliateDisclosureAffiliateDisclosure;
      'api::article.article': ApiArticleArticle;
      'api::author.author': ApiAuthorAuthor;
      'api::business-model.business-model': ApiBusinessModelBusinessModel;
      'api::casino-bonus.casino-bonus': ApiCasinoBonusCasinoBonus;
      'api::casino-game.casino-game': ApiCasinoGameCasinoGame;
      'api::casino-review.casino-review': ApiCasinoReviewCasinoReview;
      'api::category.category': ApiCategoryCategory;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::cookie-policy.cookie-policy': ApiCookiePolicyCookiePolicy;
      'api::country-page.country-page': ApiCountryPageCountryPage;
      'api::country.country': ApiCountryCountry;
      'api::editorial-policy.editorial-policy': ApiEditorialPolicyEditorialPolicy;
      'api::footer.footer': ApiFooterFooter;
      'api::global-setting.global-setting': ApiGlobalSettingGlobalSetting;
      'api::home.home': ApiHomeHome;
      'api::navigation.navigation': ApiNavigationNavigation;
      'api::operator-brand.operator-brand': ApiOperatorBrandOperatorBrand;
      'api::operator-country.operator-country': ApiOperatorCountryOperatorCountry;
      'api::our-review-process.our-review-process': ApiOurReviewProcessOurReviewProcess;
      'api::page-not-found.page-not-found': ApiPageNotFoundPageNotFound;
      'api::payment-channel.payment-channel': ApiPaymentChannelPaymentChannel;
      'api::payment-method.payment-method': ApiPaymentMethodPaymentMethod;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::redirect.redirect': ApiRedirectRedirect;
      'api::responsible-gambling.responsible-gambling': ApiResponsibleGamblingResponsibleGambling;
      'api::software-provider.software-provider': ApiSoftwareProviderSoftwareProvider;
      'api::sportsbook-bonus.sportsbook-bonus': ApiSportsbookBonusSportsbookBonus;
      'api::sportsbook-review.sportsbook-review': ApiSportsbookReviewSportsbookReview;
      'api::terms-and-condition.terms-and-condition': ApiTermsAndConditionTermsAndCondition;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
