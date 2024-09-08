export type FiltersCarsProps = {
    setFilters: (filterName: string, filtersValue: string ) =>void;
    clearFilters: () => void;
    filters: {
        type: string;
        transmission: string;
        engine: string;
        people: string;
    };
};