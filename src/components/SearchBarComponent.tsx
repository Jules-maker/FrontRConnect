import { useState } from "react";

interface SearchBarProps<T extends object> {
    data: T[];
    onSearch: (filteredData: T[]) => void;
    itemToFilter: keyof T;
  }

const SearchBarComponent = <T extends object>({ data, onSearch, itemToFilter }: SearchBarProps<T>) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        const filteredData = data.filter((item) =>
        (item[itemToFilter] as string)
            .toLowerCase()
            .includes(term.toLowerCase())
        );
        onSearch(filteredData);
    };

    return (
        <label className="rounded-md border-2 border-primary flex gap-2 bg-white items-center p-2">
            <svg className="h-5 w-5 fill-black" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9139 22L13.2139 14.3C12.6028 14.7889 11.9 15.1759 11.1056 15.4611C10.3111 15.7463 9.46574 15.8889 8.56944 15.8889C6.34907 15.8889 4.46991 15.1199 2.93194 13.5819C1.39398 12.044 0.625 10.1648 0.625 7.94444C0.625 5.72407 1.39398 3.84491 2.93194 2.30694C4.46991 0.768982 6.34907 0 8.56944 0C10.7898 0 12.669 0.768982 14.2069 2.30694C15.7449 3.84491 16.5139 5.72407 16.5139 7.94444C16.5139 8.84074 16.3713 9.68611 16.0861 10.4806C15.8009 11.275 15.4139 11.9778 14.925 12.5889L22.625 20.2889L20.9139 22ZM8.56944 13.4444C10.0972 13.4444 11.3958 12.9097 12.4653 11.8403C13.5347 10.7708 14.0694 9.47222 14.0694 7.94444C14.0694 6.41667 13.5347 5.11806 12.4653 4.04861C11.3958 2.97917 10.0972 2.44444 8.56944 2.44444C7.04167 2.44444 5.74306 2.97917 4.67361 4.04861C3.60417 5.11806 3.06944 6.41667 3.06944 7.94444C3.06944 9.47222 3.60417 10.7708 4.67361 11.8403C5.74306 12.9097 7.04167 13.4444 8.56944 13.4444Z" />
            </svg>
            <input type="search" name="search" id="seach" value={searchTerm} onChange={handleSearch} className="w-full outline-none text-gray-700" placeholder="Rechercher ..." />
        </label>
    )
}

export default SearchBarComponent;