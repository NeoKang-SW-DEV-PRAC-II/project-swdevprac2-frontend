'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { debounce } from '@mui/material';

interface SearchBarProps {
  className?: string;
  basePath?: string;
  onSearchChange?: (key: string, value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ className, basePath, onSearchChange }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPath = basePath || pathName.split('/').pop() || '';
  const defaultValue = searchParams.get('q') || '';

  const debouncedSearch = debounce((value: string) => {
    if (value) {
      router.push(`/${currentPath}`);
    } else {
      router.push(`/${currentPath}`);
    }
  }, 300);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);

    if (onSearchChange) {
      onSearchChange('q', value);
    }
  };

  return (
    <input
      type="text"
      defaultValue={defaultValue}
      className='w-full max-w-xs pr-10'
      placeholder="Search the library"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;
