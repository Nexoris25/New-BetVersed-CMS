export default {
  async beforeCreate(event: any) {
    const { data } = event.params;

    if (data.slug) {
      let countrySlug = '';

      // Fetch the country relation to get the slug
      if (data.country) {
        const countryId = typeof data.country === 'object' 
          ? data.country.id 
          : data.country;

        if (countryId) {
          const country = await strapi.entityService.findOne(
            'api::country.country', // Adjust to your actual country content type
            countryId,
            { fields: ['slug'] }
          );
          
          if (country?.slug) {
            countrySlug = country.slug;
          }
        }
      }

      // Build the full path
      const fullPath = countrySlug 
        ? `/${countrySlug}/casino-bonuses/${data.slug}`
        : `/casino-bonuses/${data.slug}`;
      
      // Set it in the component field
      if (!data.url_path) {
        data.url_path = {};
      }
      data.url_path.path = fullPath;
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;

    if (data.slug) {
      let countrySlug = '';

      // Fetch the country relation to get the slug
      if (data.country) {
        const countryId = typeof data.country === 'object' 
          ? data.country.id 
          : data.country;

        if (countryId) {
          const country = await strapi.entityService.findOne(
            'api::country.country', // Adjust to your actual country content type
            countryId,
            { fields: ['slug'] }
          );
          
          if (country?.slug) {
            countrySlug = country.slug;
          }
        }
      }

      // Build the full path
      const fullPath = countrySlug 
        ? `/${countrySlug}/casino-bonuses/${data.slug}`
        : `/casino-bonuses/${data.slug}`;
      
      // Set it in the component field
      if (!data.url_path) {
        data.url_path = {};
      }
      data.url_path.path = fullPath;
    }
  },
};