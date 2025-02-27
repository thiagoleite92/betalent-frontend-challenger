type TableBodyProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function TableBody<T>({ renderItem, data }: TableBodyProps<T>) {
  return <tbody>{data.map((row) => renderItem(row))}</tbody>;
}
