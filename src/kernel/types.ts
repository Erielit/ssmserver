export type Entity<TIdentifier extends number | string> = {
  id?: TIdentifier;
};
export type PaginationType = {
  filter: string;
  page: number;
  offset?: number;
  order?: string;
  sortBy?: string;
};

export type Consult<EntityType> = {
  entities: EntityType[];
  total: number;
};
