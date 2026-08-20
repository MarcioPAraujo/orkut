import { useMemo } from "react";
import { IOption } from "@/interfaces/Option";

const normalizeString = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

export function useFilteredOptions<T>(
  options: IOption<T>[],
  searchValue: string,
): IOption<T>[] {
  return useMemo(() => {
    const normaizedSearchValue = normalizeString(searchValue);
    if (!normaizedSearchValue) return options;

    const newOptions = options
      .filter((option) =>
        normalizeString(option.label).includes(normaizedSearchValue),
      )
      .sort((a, b) => {
        const normalizedA = normalizeString(a.label);
        const normalizedB = normalizeString(b.label);

        const aStarts = normalizedA.startsWith(normaizedSearchValue);
        const bStarts = normalizedB.startsWith(normaizedSearchValue);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return normalizedA.localeCompare(normalizedB);
      });

    if (newOptions.length > 0) {
      return newOptions;
    }
    return options;
  }, [searchValue, options]);
}
