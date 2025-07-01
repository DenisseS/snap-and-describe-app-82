
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FavoritesList from '@/components/FavoritesList';
import ScrollContainer from '@/components/ScrollContainer';

interface SearchableItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  status: string;
}

interface SearchableListProps {
  items: SearchableItem[];
  onItemSelect: (item: SearchableItem) => void;
  onSearch: (searchTerm: string, items: SearchableItem[]) => SearchableItem[];
  searchPlaceholder: string;
  showLoading?: boolean;
  hasLoaded?: boolean;
}

const SearchableList: React.FC<SearchableListProps> = ({
  items,
  onItemSelect,
  onSearch,
  searchPlaceholder,
  showLoading = false,
  hasLoaded = true
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<SearchableItem[]>(items);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const results = onSearch(value, items);
    setFilteredItems(results);
  };

  // Update filtered items when items prop changes
  React.useEffect(() => {
    const results = onSearch(searchTerm, items);
    setFilteredItems(results);
  }, [items, searchTerm, onSearch]);

  return (
    <div className="h-full flex flex-col">
      {/* Fixed Search Bar */}
      <div className="bg-white px-4 py-3 border-b flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>

      {/* Scrollable Items List */}
      <ScrollContainer>
        <FavoritesList 
          items={filteredItems}
          onItemSelect={onItemSelect}
          showLoading={showLoading}
          hasLoaded={hasLoaded}
        />
      </ScrollContainer>
    </div>
  );
};

export default SearchableList;
