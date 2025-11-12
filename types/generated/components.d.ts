import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBonusOffer extends Struct.ComponentSchema {
  collectionName: 'components_content_bonus_offers';
  info: {
    displayName: 'Bonus Offer';
  };
  attributes: {
    bonus_amount: Schema.Attribute.String;
    bonus_detail: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    bonus_name: Schema.Attribute.String;
    exclusive_code: Schema.Attribute.Boolean;
    promo_code: Schema.Attribute.String;
  };
}

export interface ContentHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.cta-button', true>;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentHighligtedBonusOffer extends Struct.ComponentSchema {
  collectionName: 'components_content_highligted_bonus_offers';
  info: {
    displayName: 'Highligted Bonus Offer';
  };
  attributes: {
    bonus_amount_percentage: Schema.Attribute.String;
    bonus_detail: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    bonus_name: Schema.Attribute.String;
    cta_button: Schema.Attribute.Component<'shared.cta-button', false>;
    exclusive_code: Schema.Attribute.Boolean;
    promo_code: Schema.Attribute.String;
  };
}

export interface ContentPaymentMethod extends Struct.ComponentSchema {
  collectionName: 'components_content_payment_methods';
  info: {
    displayName: 'payment-method';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'deposit',
        'withdrawal',
        'deposit and withdrawal',
        'e-wallet',
        'bank',
        'card',
        'crypto',
        'voucher',
      ]
    >;
  };
}

export interface ContentReviewSummary extends Struct.ComponentSchema {
  collectionName: 'components_content_review_summaries';
  info: {
    displayName: 'Review Summary';
  };
  attributes: {
    rating: Schema.Attribute.Decimal;
    review_summary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ContentRichText extends Struct.ComponentSchema {
  collectionName: 'components_content_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    richText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ContentSourceReference extends Struct.ComponentSchema {
  collectionName: 'components_content_source_references';
  info: {
    displayName: 'Source Reference';
  };
  attributes: {
    accessed_date: Schema.Attribute.Date;
    source_title: Schema.Attribute.String;
    source_url: Schema.Attribute.String;
  };
}

export interface ContentTrustSignals extends Struct.ComponentSchema {
  collectionName: 'components_content_trust_signals';
  info: {
    displayName: 'Trust Signals';
  };
  attributes: {
    data_protection_measures: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    license_verified: Schema.Attribute.Boolean;
    responsible_gambling_link: Schema.Attribute.Component<
      'unit.responsible-gambling',
      true
    >;
    security_features: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'contact_form';
  };
  attributes: {
    consent_label: Schema.Attribute.String;
    email_label: Schema.Attribute.String;
    failure_message: Schema.Attribute.String;
    form_title: Schema.Attribute.String;
    intro_text: Schema.Attribute.String;
    isConsented: Schema.Attribute.Boolean;
    message_content: Schema.Attribute.Text;
    message_subject: Schema.Attribute.String;
    name_label: Schema.Attribute.String;
    receipient_email: Schema.Attribute.Email;
    submit_butten_text: Schema.Attribute.String;
    success_message: Schema.Attribute.String;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'ctaButton';
  };
  attributes: {
    ctaLinkText: Schema.Attribute.String;
    ctaURL: Schema.Attribute.String;
  };
}

export interface SharedFaQsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_fa_qs_sections';
  info: {
    displayName: 'FAQs Section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.faqs-item', true>;
    faqsTitle: Schema.Attribute.String;
  };
}

export interface SharedFaqsItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs_items';
  info: {
    displayName: 'Faqs Item';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface SharedLicenceDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_licence_details';
  info: {
    displayName: 'Licence Detail';
  };
  attributes: {
    licenseNumber: Schema.Attribute.String;
    licensingAuthority: Schema.Attribute.String;
    website_url: Schema.Attribute.String;
  };
}

export interface SharedProsCons extends Struct.ComponentSchema {
  collectionName: 'components_shared_pros_cons';
  info: {
    displayName: 'prosCons';
  };
  attributes: {
    Cons: Schema.Attribute.Component<'unit.label', true>;
    Pros: Schema.Attribute.Component<'unit.label', true>;
  };
}

export interface SharedPublicUrl extends Struct.ComponentSchema {
  collectionName: 'components_shared_public_urls';
  info: {
    displayName: 'Public URL';
  };
  attributes: {
    path: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    robotsDirectives: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'index, follow'>;
  };
}

export interface SocialsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_socials_social_links';
  info: {
    displayName: 'SocialLinks';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Platform: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface UnitCurrenciesSupported extends Struct.ComponentSchema {
  collectionName: 'components_unit_currencies_supporteds';
  info: {
    displayName: 'Currencies Supported';
  };
  attributes: {
    currency: Schema.Attribute.String;
    currency_code: Schema.Attribute.String;
    currency_symbol: Schema.Attribute.String;
  };
}

export interface UnitGameName extends Struct.ComponentSchema {
  collectionName: 'components_unit_game_names';
  info: {
    displayName: 'Game Name';
  };
  attributes: {
    category: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface UnitLabel extends Struct.ComponentSchema {
  collectionName: 'components_unit_labels';
  info: {
    displayName: 'label';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface UnitLabelAndValue extends Struct.ComponentSchema {
  collectionName: 'components_unit_label_and_values';
  info: {
    displayName: 'Label and Value';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UnitResponsibleGambling extends Struct.ComponentSchema {
  collectionName: 'components_unit_responsible_gamblings';
  info: {
    displayName: 'Organization Name';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    website_url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.bonus-offer': ContentBonusOffer;
      'content.hero-section': ContentHeroSection;
      'content.highligted-bonus-offer': ContentHighligtedBonusOffer;
      'content.payment-method': ContentPaymentMethod;
      'content.review-summary': ContentReviewSummary;
      'content.rich-text': ContentRichText;
      'content.source-reference': ContentSourceReference;
      'content.trust-signals': ContentTrustSignals;
      'shared.contact-form': SharedContactForm;
      'shared.cta-button': SharedCtaButton;
      'shared.fa-qs-section': SharedFaQsSection;
      'shared.faqs-item': SharedFaqsItem;
      'shared.licence-detail': SharedLicenceDetail;
      'shared.pros-cons': SharedProsCons;
      'shared.public-url': SharedPublicUrl;
      'shared.seo': SharedSeo;
      'socials.social-links': SocialsSocialLinks;
      'unit.currencies-supported': UnitCurrenciesSupported;
      'unit.game-name': UnitGameName;
      'unit.label': UnitLabel;
      'unit.label-and-value': UnitLabelAndValue;
      'unit.responsible-gambling': UnitResponsibleGambling;
    }
  }
}
