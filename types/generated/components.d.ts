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

export interface FooterFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'Footer Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.footer-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GlobalAnalyticsAndTracking extends Struct.ComponentSchema {
  collectionName: 'components_global_analytics_and_trackings';
  info: {
    displayName: 'Analytics & Tracking';
  };
  attributes: {
    platform: Schema.Attribute.Component<'unit.label-and-value', true>;
  };
}

export interface GlobalBrandInformation extends Struct.ComponentSchema {
  collectionName: 'components_global_brand_informations';
  info: {
    displayName: 'Brand Information';
  };
  attributes: {
    favicon: Schema.Attribute.Media<'images' | 'files'>;
    primary_color: Schema.Attribute.String;
    secondary_color: Schema.Attribute.String;
    site_logo: Schema.Attribute.Media<'images' | 'files'>;
    site_name: Schema.Attribute.String;
  };
}

export interface GlobalContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_global_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    phone_number: Schema.Attribute.String;
  };
}

export interface GlobalCountry extends Struct.ComponentSchema {
  collectionName: 'components_global_countries';
  info: {
    displayName: 'Country';
  };
  attributes: {
    country_code: Schema.Attribute.String;
    country_locale: Schema.Attribute.String;
    country_name: Schema.Attribute.String;
    is_active: Schema.Attribute.Boolean;
    slug_prefix: Schema.Attribute.String;
  };
}

export interface GlobalGlobalUrLsAndLocaleSettings
  extends Struct.ComponentSchema {
  collectionName: 'components_global_global_ur_ls_and_locale_settings';
  info: {
    displayName: 'Global URLs and Locale Settings';
  };
  attributes: {
    countries: Schema.Attribute.Component<'global.country', true>;
    default_locale: Schema.Attribute.Enumeration<['en']> &
      Schema.Attribute.DefaultTo<'en'>;
    site_url: Schema.Attribute.String;
  };
}

export interface GlobalLegalAndCompliance extends Struct.ComponentSchema {
  collectionName: 'components_global_legal_and_compliances';
  info: {
    displayName: 'Legal & Compliance';
  };
  attributes: {
    privacy_policy_url: Schema.Attribute.String;
    responsible_gambling_url: Schema.Attribute.String;
    terms_of_use_url: Schema.Attribute.String;
  };
}

export interface GlobalMaintenanceMode extends Struct.ComponentSchema {
  collectionName: 'components_global_maintenance_modes';
  info: {
    displayName: 'Maintenance Mode';
  };
  attributes: {
    is_maintenance_mode: Schema.Attribute.Boolean;
    maintenance_message: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface NavigationNavbarDropdown extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navbar_dropdowns';
  info: {
    displayName: 'Navbar Dropdown';
  };
  attributes: {
    links: Schema.Attribute.Component<'navigation.navbar-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavigationNavbarGroup extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navbar_groups';
  info: {
    displayName: 'Navbar Group';
  };
  attributes: {
    items: Schema.Attribute.Component<'navigation.navbar-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavigationNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navbar_items';
  info: {
    displayName: 'Navbar Item';
  };
  attributes: {
    dropdown: Schema.Attribute.Component<'navigation.navbar-dropdown', false>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'navigation.navbar-link', false>;
    type: Schema.Attribute.Enumeration<['link', 'dropdown']>;
  };
}

export interface NavigationNavbarLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navbar_links';
  info: {
    displayName: 'Navbar Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
    path: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        'content-manager': {
          editable: true;
          visible: true;
        };
      }>;
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
      'footer.footer-column': FooterFooterColumn;
      'footer.footer-link': FooterFooterLink;
      'global.analytics-and-tracking': GlobalAnalyticsAndTracking;
      'global.brand-information': GlobalBrandInformation;
      'global.contact-information': GlobalContactInformation;
      'global.country': GlobalCountry;
      'global.global-ur-ls-and-locale-settings': GlobalGlobalUrLsAndLocaleSettings;
      'global.legal-and-compliance': GlobalLegalAndCompliance;
      'global.maintenance-mode': GlobalMaintenanceMode;
      'navigation.navbar-dropdown': NavigationNavbarDropdown;
      'navigation.navbar-group': NavigationNavbarGroup;
      'navigation.navbar-item': NavigationNavbarItem;
      'navigation.navbar-link': NavigationNavbarLink;
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
