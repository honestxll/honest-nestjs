import { createParamDecorator } from '@nestjs/common';

export const ListOptions = createParamDecorator((data, req) => {
  let { categories, tags, page, limit } = req.query;

  if (categories) {
    categories = categories.split('-');
  }

  if (tags) {
    tags = tags.split('-');
  }

  if (page) {
    page = +page;
  } else {
    page = 1;
  }

  if (limit) {
    limit = +limit;
  } else {
    limit = 1;
  }

  return { categories, tags, page, limit };
});
