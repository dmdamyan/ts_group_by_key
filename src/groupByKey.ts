type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  if (items.length === 0) {
    return {};
  }

  const result: object = [...items];

  return result.filter((item) => item.includs(item.key));
}
