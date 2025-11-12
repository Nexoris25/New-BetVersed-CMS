export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.url_path?.slug) {
      const subCategorySlug =
        data.sub_category?.slug || 'general';
      data.url_path.full_path = `/knowledge-base/${subCategorySlug}/${data.url_path.slug}`;
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    if (data.url_path?.slug) {
      const subCategorySlug =
        data.sub_category?.slug || 'general';
      data.url_path.full_path = `/knowledge-base/${subCategorySlug}/${data.url_path.slug}`;
    }
  },
};
