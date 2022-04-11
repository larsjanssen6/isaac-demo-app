import { useMemo, useState } from "react";
import User from "../types/User";

type Sort = {
  key: string,
  direction: string
}

const useSortableDataHook = (items: Array<User>, config: Sort|null = null) => {
  const [sortConfig, setSortConfig] = useState<Sort|null>(config);

  const sortedItems = useMemo(() => {
    let sortableItems: Array<User> = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a: User, b: User) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableDataHook;