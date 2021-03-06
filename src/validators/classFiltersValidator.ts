import { celebrate, Segments, Joi } from 'celebrate';

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    week_day: Joi.number().min(0).max(7),
    subject: Joi.string(),
    time: Joi.string().regex(
      /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/,
      'HH:mm',
    ),
    page: Joi.number(),
  }),
});
