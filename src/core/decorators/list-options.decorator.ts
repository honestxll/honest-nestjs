import { createParamDecorator } from '@nestjs/common';
import { ListOptionsInterface } from '../interfaces/list-options.interface';

export const ListOptions = createParamDecorator((data: Partial<ListOptionsInterface> = {}, req) => {
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
  } else if (limit === undefined && data.limit) {
    limit = data.limit;
  } else {
    limit = 1;
  }

  return { categories, tags, page, limit };
});
