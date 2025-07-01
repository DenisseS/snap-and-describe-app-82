
import { Searchable, FilterCriteria, QueryOptions, QueryResult, FilterDefinition } from '@/types/search';

export class QueryEngine<T extends Searchable> {
  private filterRegistry: Map<string, FilterDefinition> = new Map();

  registerFilter(definition: FilterDefinition) {
    this.filterRegistry.set(definition.type, definition);
  }

  executeQuery(items: T[], options: QueryOptions = {}): QueryResult<T> {
    let filteredItems = [...items];
    const appliedFilters: FilterCriteria[] = [];

    // Apply text search first
    if (options.searchTerm && options.searchTerm.trim()) {
      const searchTerm = options.searchTerm.toLowerCase().trim();
      filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        (item as any).category?.toLowerCase().includes(searchTerm)
      );
    }

    // Apply filters
    if (options.filters) {
      for (const filter of options.filters) {
        const filterDef = this.filterRegistry.get(filter.type);
        if (filterDef) {
          filteredItems = filterDef.applyFilter(filteredItems, filter) as T[];
          appliedFilters.push(filter);
        }
      }
    }

    // Apply sorting
    if (options.sortBy) {
      filteredItems.sort((a, b) => {
        const aValue = (a as any)[options.sortBy!];
        const bValue = (b as any)[options.sortBy!];
        
        if (options.sortOrder === 'desc') {
          return bValue > aValue ? 1 : -1;
        }
        return aValue > bValue ? 1 : -1;
      });
    }

    return {
      items: filteredItems,
      totalCount: filteredItems.length,
      appliedFilters
    };
  }

  getRegisteredFilters(): FilterDefinition[] {
    return Array.from(this.filterRegistry.values());
  }
}
