import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  content: yup.string().required(),
  category: yup.string().required(),
  user_id: yup.string().nullable(),
});
