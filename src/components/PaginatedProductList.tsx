import React, { useState, useMemo } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';
import ScrollContainer from '@/components/ScrollContainer';
import FavoritesList from '@/components/FavoritesList';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';

interface Item {
  id: string;
  name: string;
  image: string;
  rating: number;
  status: string;
}

interface PaginatedProductListProps {
  items: Item[];
  onItemSelect: (item: Item) => void;
  onSearch: (searchTerm: string, items: Item[]) => Item[];
  searchPlaceholder: string;
}

const itemsPerPageOptions = [10, 20, 50, 100];

const generatePagination = (currentPage: number, pageCount: number, isMobile: boolean): (number | string)[] => {
  if (pageCount <= 1) return pageCount === 1 ? [1] : [];

  const delta = isMobile ? 1 : 2;
  const pages = new Set<number>();

  pages.add(1);
  if (pageCount > 1) {
    pages.add(pageCount);
  }

  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i > 1 && i < pageCount) {
      pages.add(i);
    }
  }
  
  if (currentPage > 1) pages.add(currentPage);
  if (currentPage < pageCount) pages.add(currentPage);

  const sortedPages = Array.from(pages).sort((a, b) => a - b);
  const result: (number | string)[] = [];
  let lastPage: number | null = null;

  for (const page of sortedPages) {
    if (lastPage !== null && page - lastPage > 1) {
      result.push('...');
    }
    result.push(page);
    lastPage = page;
  }

  return result;
};


const PaginatedProductList: React.FC<PaginatedProductListProps> = ({
  items,
  onItemSelect,
  onSearch,
  searchPlaceholder
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[1]);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();

  // Search and filter
  const filteredItems = useMemo(() => {
    return onSearch(searchTerm, items);
  }, [searchTerm, items, onSearch]);

  // Pagination calculation
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  // Reset to first page on itemsPerPage or search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, searchTerm]);

  const paginatedItems = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  const paginationRange = useMemo(() => {
    return generatePagination(currentPage, pageCount, isMobile);
  }, [currentPage, pageCount, isMobile]);

  // Pagination navigation
  const goToPage = (page: number) => {
    if (page >= 1 && page <= pageCount) setCurrentPage(page);
  };

  // Info text
  const showingFrom = filteredItems.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const showingTo = Math.min(currentPage * itemsPerPage, filteredItems.length);

  return (
    <div className="h-full flex flex-col">
      {/* Top controls: Only Search */}
      <div className="bg-white px-4 py-3 border-b flex-shrink-0 flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-3 pr-3 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 text-sm"
            style={{ minWidth: 120 }}
          />
        </div>
      </div>

      {/* Showing info */}
      <div className="px-4 py-2 text-xs text-gray-500">
        {filteredItems.length > 0
          ? t('showingItems', 
            {
              from: showingFrom, 
              to: showingTo, 
              total: filteredItems.length,
              defaultValue: `Showing ${showingFrom}–${showingTo} of ${filteredItems.length} products`
            }
          )
          : t('noResults', 'No products found')}
      </div>

      {/* Scrollable product list */}
      <ScrollContainer>
        <FavoritesList
          items={paginatedItems}
          onItemSelect={onItemSelect}
          showLoading={false}
          hasLoaded={true}
        />
      </ScrollContainer>

      {/* Pagination controls & Items per page selector */}
      <div className="flex justify-between items-center my-2 mb-3 px-4 gap-2 flex-row">
          {/* Pagination controls with items per page selector (all in one row) */}
          <Pagination className="flex items-center gap-2 flex-1">
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  aria-label={t('previousPage', 'Previous page')}
                  onClick={() => goToPage(currentPage - 1)}
                  tabIndex={currentPage === 1 ? -1 : 0}
                  aria-disabled={currentPage === 1}
                  style={currentPage === 1 ? { opacity: 0.5, pointerEvents: 'none' } : {}}
                  size="sm"
                  className="px-2 h-7 md:h-8"
                >
                  <span className="hidden md:inline">{t('previous', 'Previous')}</span>
                </PaginationPrevious>
              </PaginationItem>

              {paginationRange.map((page, index) => {
                if (typeof page === 'string') {
                  return (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis className="h-7 w-6 md:h-8 md:w-8" />
                    </PaginationItem>
                  );
                }
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      aria-label={t('goToPage', { page, defaultValue: `Go to page ${page}` })}
                      onClick={() => goToPage(page)}
                      size="icon"
                      className="text-xs w-7 h-7 md:w-8 md:h-8"
                      style={pageCount <= 1 ? { pointerEvents: 'none' } : {}}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}


              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  aria-label={t('nextPage', 'Next page')}
                  onClick={() => goToPage(currentPage + 1)}
                  tabIndex={currentPage >= pageCount ? -1 : 0}
                  aria-disabled={currentPage >= pageCount}
                  style={currentPage >= pageCount ? { opacity: 0.5, pointerEvents: 'none' } : {}}
                  size="sm"
                  className="px-2 h-7 md:h-8"
                >
                  <span className="hidden md:inline">{t('next', 'Next')}</span>
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
            {/* Items per page selector: placed at the end of the same flex row */}
            <div className="flex items-center gap-2 ml-4">
              <label htmlFor="itemsPerPage" className="text-xs text-gray-500 hidden md:inline">
                {t('itemsPerPage', 'Items per page')}:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={e => setItemsPerPage(Number(e.target.value))}
                className="border rounded text-sm px-2 py-1"
              >
                {itemsPerPageOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </Pagination>
        </div>
    </div>
  );
};

export default PaginatedProductList;
