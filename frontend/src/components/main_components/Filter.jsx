import removeIcon from './../../images/icon-remove.svg';

const Filter = ({ filters, removeFilter, clearFilters }) => {
  console.log('Current Filters:', filters);

  return (
    <section className="relative -top-32I flex justify-between items-center gap-4 px-32P py-16P bg-white w-[90dvw] max-w-container-1500 mb-64M rounded-5BR">
      <ul className="flex flex-wrap justify-center items-center gap-4">
        {filters.map((filter, index) => (
          <li
            key={index}
            className="flex justify-center items-center gap-2 font-bold pl-8P text-desaturated-dark-cyan-bg bg-light-grayish-cyan-filter-tables rounded-5BR"
          >
            {filter}
            <img
              src={removeIcon}
              onClick={() => removeFilter(filter)}
              className="p-8P bg-desaturated-dark-cyan-bg rounded-r-5BR cursor-pointer hover:bg-very-dark-grayish-cyan"
              alt={`remove ${filter}`}
            />
          </li>
        ))}
      </ul>

      <button
        onClick={clearFilters}
        className="relative group font-bold text-desaturated-dark-cyan-bg"
      >
        Clear
        <span className="absolute top-4 left-0 bottom-0 w-0 h-2H bg-desaturated-dark-cyan-bg group-hover:w-full transition-all duration-300"></span>
      </button>
    </section>
  );
};

export default Filter;
