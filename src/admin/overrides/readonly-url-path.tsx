import React, { useEffect, useState } from 'react';
import { Field, TextInput } from '@strapi/design-system';
import { useForm } from '@strapi/admin/strapi-admin';

const ReadonlyUrlPath: React.FC<any> = (props) => {
  const form = useForm('ReadonlyUrlPath', (state) => state); 
  const values = form?.values || {};

  const incomingValue = props?.value;
  const incomingPath =
    typeof incomingValue === 'object' && incomingValue !== null
      ? incomingValue.path
      : incomingValue || '';

  const [urlPath, setUrlPath] = useState<string>(incomingPath);

  useEffect(() => {
    const pathname = window.location?.pathname || '';
    const collectionMatch =
      pathname.match(/collectionType(?:s)?\/(api::[^/]+)/) ||
      pathname.match(/collection-types\/(api::[^/]+)/);
    const contentType = collectionMatch?.[1] || '';

    let basePath = '';
    if (contentType.includes('sportsbook-review')) basePath = 'sportsbook-reviews';
    else if (contentType.includes('casino-review')) basePath = 'casino-reviews';
    else if (contentType.includes('sportsbook-bonus')) basePath = 'sportsbook-bonuses';
    else if (contentType.includes('casino-bonus')) basePath = 'casino-bonuses';
    else if (contentType.includes('kb-article')) basePath = 'knowledge-base';

    const countrySlug = values?.country?.slug || '';
    const subCategorySlug = values?.sub_category?.slug || '';
    const categorySlug = values?.category?.slug || '';
    const category = countrySlug || subCategorySlug || categorySlug || '';
    const slug = values?.slug || '';

    let finalPath = '';
    if (basePath && category && slug) finalPath = `/${category}/${basePath}/${slug}`;
    else if (basePath && slug) finalPath = `/${basePath}/${slug}`;
    else if (slug) finalPath = `/${slug}`;

    setUrlPath(finalPath || incomingPath || '');
  }, [
    values?.slug,
    values?.country?.slug,
    values?.sub_category?.slug,
    values?.category?.slug,
    incomingPath,
    window.location?.pathname,
  ]);

  return (
    <Field.Root name={props.name || 'url_path'} hint="Automatically generated full URL path">
      <Field.Label>Full URL Path</Field.Label>
      <TextInput
        value={urlPath}
        onChange={() => {}}
        disabled
        placeholder="URL will be generated automatically"
      />
      <Field.Hint />
      <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
        Debug: {urlPath || 'No path generated'}
      </div>
    </Field.Root>
  );
};

export default ReadonlyUrlPath;
