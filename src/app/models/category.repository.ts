import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [
      { id: 1, name: 'Adventure' },
      { id: 2, name: 'Romantic' },
      { id: 3, name: 'Sci-Fi' },
      { id: 4, name: 'Comedy' },
    ];
  }

  GetCategories() {
    return this.categories;
  }
}
