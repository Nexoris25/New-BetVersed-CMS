import type { Schema, Struct } from '@strapi/strapi';

export interface CasinoCasinoBonusTypes extends Struct.ComponentSchema {
  collectionName: 'components_casino_casino_bonus_types';
  info: {
    displayName: 'Casino Bonus Types';
  };
  attributes: {
    hasBirthdayBonus: Schema.Attribute.Boolean;
    hasCashbackBonus: Schema.Attribute.Boolean;
    hasCashRaceBonus: Schema.Attribute.Boolean;
    hasCryptoBonus: Schema.Attribute.Boolean;
    hasDepositMatchBonus: Schema.Attribute.Boolean;
    hasDropsAndWins: Schema.Attribute.Boolean;
    hasFreeSpinsBonus: Schema.Attribute.Boolean;
    hasGameProviderBonus: Schema.Attribute.Boolean;
    hasHighRollerBonus: Schema.Attribute.Boolean;
    hasLiveCasinoBonus: Schema.Attribute.Boolean;
    hasLossRebateBonus: Schema.Attribute.Boolean;
    hasLoyaltyProgram: Schema.Attribute.Boolean;
    hasMobileExclusiveOffers: Schema.Attribute.Boolean;
    hasMysteryBonus: Schema.Attribute.Boolean;
    hasNoDepositBonus: Schema.Attribute.Boolean;
    hasReferralBonus: Schema.Attribute.Boolean;
    hasReloadBonus: Schema.Attribute.Boolean;
    hasSlotTournaments: Schema.Attribute.Boolean;
    hasVIPRewards: Schema.Attribute.Boolean;
    hasWeeklyFreeSpins: Schema.Attribute.Boolean;
    hasWelcomeBonus: Schema.Attribute.Boolean;
    hasWheelOfFortuneBonus: Schema.Attribute.Boolean;
  };
}

export interface CasinoCasinoFeatures extends Struct.ComponentSchema {
  collectionName: 'components_casino_casino_features';
  info: {
    displayName: 'Casino Features';
  };
  attributes: {
    bingo_available: Schema.Attribute.Boolean;
    jackpot_games_available: Schema.Attribute.Boolean;
    live_casino_available: Schema.Attribute.Boolean;
    lottery_available: Schema.Attribute.Boolean;
    provably_fair_games_available: Schema.Attribute.Boolean;
    slots_available: Schema.Attribute.Boolean;
    table_games_available: Schema.Attribute.Boolean;
    vip_program_available: Schema.Attribute.Boolean;
    virtual_games_available: Schema.Attribute.Boolean;
  };
}

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

export interface ContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_content_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
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
    lead_paragraph: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
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

export interface ContentHomepageCategoryBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_homepage_category_blocks';
  info: {
    displayName: 'Homepage Category Block';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    category_title: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    short_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
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
    processing_time: Schema.Attribute.String;
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

export interface ContentSupportedPaymentMethods extends Struct.ComponentSchema {
  collectionName: 'components_content_supported_payment_methods';
  info: {
    displayName: 'supported_payment_methods';
  };
  attributes: {
    payment_methods_title: Schema.Attribute.String;
    payment_options: Schema.Attribute.Component<'content.payment-method', true>;
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

export interface OperatorCountryOperatorCountryFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_operator_country_operator_country_features';
  info: {
    displayName: 'Operator Country Features';
  };
  attributes: {
    android_app_available: Schema.Attribute.Boolean;
    casino_available: Schema.Attribute.Boolean;
    huawei_app_available: Schema.Attribute.Boolean;
    ios_app_available: Schema.Attribute.Boolean;
    lotto_available: Schema.Attribute.Boolean;
    responsible_gambling_tools: Schema.Attribute.Boolean;
    sportsbook_available: Schema.Attribute.Boolean;
    windows_app_available: Schema.Attribute.Boolean;
  };
}

export interface SharedContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_details';
  info: {
    displayName: 'contact_detail';
  };
  attributes: {
    contact_channel: Schema.Attribute.Component<'unit.label-and-value', true>;
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

export interface SharedLicenseDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_license_details';
  info: {
    displayName: 'License Detail';
  };
  attributes: {
    license_type: Schema.Attribute.Enumeration<
      ['Local License', 'Foreign License']
    >;
    license_type_and_number: Schema.Attribute.Component<
      'unit.label-and-value',
      false
    >;
    regulator: Schema.Attribute.String;
    regulator_website: Schema.Attribute.String;
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

export interface SharedProsConsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_pros_cons_sections';
  info: {
    displayName: 'prosConsSection';
  };
  attributes: {
    prosConsSection: Schema.Attribute.Component<'shared.pros-cons', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPublicUrl extends Struct.ComponentSchema {
  collectionName: 'components_shared_public_urls';
  info: {
    displayName: 'Public URL';
  };
  attributes: {
    full_url_path: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        'content-manager': {
          editable: true;
          visible: true;
        };
      }>;
    slug: Schema.Attribute.String;
  };
}

export interface SharedResponsibleGambling extends Struct.ComponentSchema {
  collectionName: 'components_shared_responsible_gamblings';
  info: {
    displayName: 'responsibleGambling';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    organization: Schema.Attribute.Component<'unit.responsible-gambling', true>;
    title: Schema.Attribute.String;
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
    og_description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    og_image: Schema.Attribute.Media<'images' | 'files'>;
    og_title: Schema.Attribute.String;
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
    site_name: Schema.Attribute.String;
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

export interface SportsbookSportsbookBonusTypes extends Struct.ComponentSchema {
  collectionName: 'components_sportsbook_sportsbook_bonus_types';
  info: {
    displayName: 'Sportsbook Bonus Types';
  };
  attributes: {
    hasAccaBonus: Schema.Attribute.Boolean;
    hasBetAndGetBonus: Schema.Attribute.Boolean;
    hasBirthdayBonus: Schema.Attribute.Boolean;
    hasCashbackBonus: Schema.Attribute.Boolean;
    hasCashOutFeatureBonus: Schema.Attribute.Boolean;
    hasEarlyPayoutBonus: Schema.Attribute.Boolean;
    hasFreeBetBonus: Schema.Attribute.Boolean;
    hasInsuranceBonus: Schema.Attribute.Boolean;
    hasJackpotBonus: Schema.Attribute.Boolean;
    hasLosingStreakBonus: Schema.Attribute.Boolean;
    hasLoyaltyProgram: Schema.Attribute.Boolean;
    hasMobileExclusiveOffers: Schema.Attribute.Boolean;
    hasOddsBoost: Schema.Attribute.Boolean;
    hasReferralBonus: Schema.Attribute.Boolean;
    hasReloadBonus: Schema.Attribute.Boolean;
    hasSeasonalSportBonus: Schema.Attribute.Boolean;
    hasVIPRewards: Schema.Attribute.Boolean;
    hasWelcomeBonus: Schema.Attribute.Boolean;
  };
}

export interface SportsbookSportsbookFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sportsbook_sportsbook_features';
  info: {
    displayName: 'Sportsbook Features';
  };
  attributes: {
    acca_insurance_available: Schema.Attribute.Boolean;
    bet_builder_available: Schema.Attribute.Boolean;
    boosted_odds_available: Schema.Attribute.Boolean;
    cashout_available: Schema.Attribute.Boolean;
    is_1up_available: Schema.Attribute.Boolean;
    is2up_available: Schema.Attribute.Boolean;
    live_betting_available: Schema.Attribute.Boolean;
    live_streaming_available: Schema.Attribute.Boolean;
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
      'casino.casino-bonus-types': CasinoCasinoBonusTypes;
      'casino.casino-features': CasinoCasinoFeatures;
      'content.bonus-offer': ContentBonusOffer;
      'content.heading': ContentHeading;
      'content.hero-section': ContentHeroSection;
      'content.highligted-bonus-offer': ContentHighligtedBonusOffer;
      'content.homepage-category-block': ContentHomepageCategoryBlock;
      'content.payment-method': ContentPaymentMethod;
      'content.review-summary': ContentReviewSummary;
      'content.rich-text': ContentRichText;
      'content.source-reference': ContentSourceReference;
      'content.supported-payment-methods': ContentSupportedPaymentMethods;
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
      'operator-country.operator-country-features': OperatorCountryOperatorCountryFeatures;
      'shared.contact-detail': SharedContactDetail;
      'shared.contact-form': SharedContactForm;
      'shared.cta-button': SharedCtaButton;
      'shared.fa-qs-section': SharedFaQsSection;
      'shared.faqs-item': SharedFaqsItem;
      'shared.license-detail': SharedLicenseDetail;
      'shared.pros-cons': SharedProsCons;
      'shared.pros-cons-section': SharedProsConsSection;
      'shared.public-url': SharedPublicUrl;
      'shared.responsible-gambling': SharedResponsibleGambling;
      'shared.seo': SharedSeo;
      'socials.social-links': SocialsSocialLinks;
      'sportsbook.sportsbook-bonus-types': SportsbookSportsbookBonusTypes;
      'sportsbook.sportsbook-features': SportsbookSportsbookFeatures;
      'unit.currencies-supported': UnitCurrenciesSupported;
      'unit.game-name': UnitGameName;
      'unit.label': UnitLabel;
      'unit.label-and-value': UnitLabelAndValue;
      'unit.responsible-gambling': UnitResponsibleGambling;
    }
  }
}
