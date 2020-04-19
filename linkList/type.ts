export interface List<T> {
  head: Node<T> | null;
  insertToHead(value: T): void;
  insertToTail(value: T): void;
  // insertToIndex(value: T, index: number): void;
  // findByValue(value: T): Node<T> | null;
  // findByIndex(index: number): Node<T> | null;
  // removeByValue(value: T): Boolean;
  // removeByIndex(index: number): Boolean;
  // toString(): string;
}

export interface Node<T> {
  value: T;
  prev?: Node<T> | null;
  next: Node<T> | null;
}
