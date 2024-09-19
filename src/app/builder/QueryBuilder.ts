import { FilterQuery, Query } from 'mongoose';

class Querybuilder<T> {
  public modelQuery: Query<T[], T>; //modle like (student)  is the   modelQuery
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  //Search Query
  //   search(searchAblefields: string[]) {
  //     let searchTerm = (this.query?.searchTerm as string) || '';
  //     this.modelQuery = this.modelQuery.find({
  //       $or: searchAblefields.map(
  //         (field) =>
  //           ({
  //             [field]: { $regex: searchTerm, $options: 'i' },
  //           }) as FilterQuery<T>,
  //       ),
  //     });

  //     return this;

  //     //for search this is other way
  //     // search() {
  //     //   if (this.query['search']) {
  //     //     const search = this.query['search'] as string;
  //     //     this.modelQuery = this.modelQuery.find({
  //     //       $text: { $search: search, $caseSensitive: false },
  //     //     });
  //     //   }
  //     //   return this;
  //     // }
  //   }

  //Filter Query
  filter() {
    const queryObj = { ...this.query };
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  //Sorting Query
  sort() {
    //sort :- name,email
    //sort :- name email
    const sort = (this.query?.sort as string)?.split(',')?.join() || 'id';
    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }

  //pagination Query
  pagination() {
    const limit = (this.query?.limit as number) || 10;
    const page = (this.query?.page as number) || 1;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  //limit Query
  limit() {
    const limit = (this.query?.limit as number) || 1;
    this.modelQuery = this.modelQuery.limit(limit);
    return this;
  }

  //fileds Filtering query
  fields() {
    //fields :- name,email (this.query?.fields as string)?.split(',').join(' ')  ['name','email'] => 'name email'
    //fields :- name email
    const fields = (this.query?.fields as string)?.split(',')?.join(' ') || ' ';
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
  async countTotal() {
    // const totalQueries = this.modelQuery.getFilter();
    const total = await this.modelQuery.model.countDocuments();
    const page = Number(this.query?.page) || 1;
    const limit = Number(this.query?.limit) || 10;
    const totalPages = Math.ceil(total / limit);
    return { page, limit, total, totalPages };
  }
}

export default Querybuilder;
