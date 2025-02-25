type TableHeadProps<T> = {
  heads: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function TableHeader<T>({ heads, renderItem }: TableHeadProps<T>) {
  return (
    <thead>
      <tr>{heads.map((head) => renderItem(head))}</tr>
    </thead>
  );
}
