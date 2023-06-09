import { SortingState } from "@tanstack/react-table";

export type Options<I> = {
  totalRegisters: number;
  page: number;
  items: I[];
  itemsPerPage?: number;
  siblingsCount?: number;
  sorting?: SortingState;
};

export type Pagination<I> = {
  pageItems: I[];
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  lastPage: number;
  nextPages: number[];
  previousPages: number[];
  siblingsCount: number;
};

export interface BasePagination {
  page: number;
  /**
   * If you paginate your list in server use this
   * prop to pass the total length of list.
   */
  totalRegisters: number;
  /** Listener change page */
  onPageChange: (page: number) => void;
}
