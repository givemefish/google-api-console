import { Book } from './book.model';

export interface BookCollection {
  kind: string;

  totalItems: number;

  items: Book[];
}
