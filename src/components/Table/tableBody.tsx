type TableBodyProps<T> = {
  rows: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function TableBody<T>({ renderItem, rows }: TableBodyProps<T>) {
  return <tbody>{rows.map((row) => renderItem(row))}</tbody>;
}
