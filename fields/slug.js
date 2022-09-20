import formatSlug from '../utilities/formatSlug';
import deepMerge from '../utilities/deepMerge';


// By dynamically building fields in code configurations are reusable and concise
const slug= (fieldToUse = 'title', overrides) => deepMerge(
  {
    name: 'slug',
    label: 'Slug',
    type: 'text',
		localized: true,
     admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [
        formatSlug(fieldToUse),
      ],
    },
  },
  overrides,
);

export default slug;
