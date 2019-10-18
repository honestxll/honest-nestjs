import { createParamDecorator } from '@nestjs/common';
import { ListOptionsInterface } from '../interfaces/list-options.interface';

export const ListOptions = createParamDecorator((data: Partial<ListOptionsInterface> = {}, req) => {
  let { categories, tags, page, limit, sort, order } = req.query;

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

  if (sort) {
    sort = sort;
  } else {
    sort = 'created';
  }

  if (order) {
    order = order.toUpperCase();
  } else {
    order = 'DESC';
  }

  return { categories, tags, page, limit, sort, order };
});
