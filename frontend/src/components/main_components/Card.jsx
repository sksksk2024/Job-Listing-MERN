import formatRelativeTime from '../../utils/formatRelativeTime';

const Card = ({ job, onEdit, onDelete, onFilterClick }) => {
  const {
    featured,
    logo,
    company,
    position,
    new: isNew,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  } = job;

  const handleFilterClick = (filter) => {
    if (Array.isArray(filter)) filter = filter.join(' ');
    if (typeof filter === 'string' && filter.trim() !== '') {
      onFilterClick?.(filter.toLowerCase());
    } else {
      console.error('Invalid filter clicked:', filter);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center w-[90dvw] max-w-container-1500 h-400H sm:h-320H lg:h-160H border-white bg-white shadow-xl relative object-fit lg:overflow-clip rounded-5BR px-24P sm:px-32P mt-16M">
      {featured && (
        <span className="absolute left-0 h-full w-2 bg-desaturated-dark-cyan-bg rounded-l-5BR"></span>
      )}

      <div className="flex justify-center items-center gap-4">
        <img
          src={logo || 'default-logo.png'}
          className="absolute lg:static -top-48I left-48I w-[5.5rem] h-[5.5rem] rounded-full"
          alt={`${company} company`}
        />

        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex flex-wrap justify-start items-center gap-2">
            <h2 className="font-bold text-desaturated-dark-cyan-bg">
              {company}
            </h2>
            {isNew && (
              <p className="font-bold rounded-40BR bg-desaturated-dark-cyan-bg px-8P pt-4P uppercase text-white">
                New!
              </p>
            )}

            {featured && (
              <p className="font-bold rounded-40BR bg-black px-8P pt-4P uppercase text-white">
                Featured
              </p>
            )}
          </div>

          <h1 className="font-bold text-black text-lg cursor-pointer hover:text-desaturated-dark-cyan-bg">
            {position}
          </h1>

          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="text-dark-grayish-cyan">
              {formatRelativeTime(postedAt)}
            </li>
            <li className="relative">
              <div className="absolute w-1 h-1 rounded-50BR bg-dark-grayish-cyan border-dark-grayish-cyan opacity-70"></div>
            </li>
            <li className="text-dark-grayish-cyan">{contract}</li>
            <li className="relative">
              <div className="absolute w-1 h-1 rounded-50BR bg-dark-grayish-cyan border-dark-grayish-cyan opacity-70"></div>
            </li>
            <li className="text-dark-grayish-cyan">{location}</li>
          </ul>
        </div>
      </div>

      <hr className="block lg:hidden w-full h-[0.1rem] bg-dark-grayish-cyan my-16M" />

      <ul className="flex flex-wrap justify-start lg:justify-center items-center gap-4">
        <li
          key="role"
          onClick={() => handleFilterClick(role)}
          className="font-bold px-8P py-4P text-desaturated-dark-cyan-bg bg-light-grayish-cyan-filter-tables rounded-5BR cursor-pointer hover:bg-desaturated-dark-cyan-bg hover:text-light-grayish-cyan-filter-tables"
        >
          {role}
        </li>
        {[level, ...languages, ...tools]
          .filter((filter) => typeof filter === 'string' && filter.trim())
          .map((filter, index) => (
            <li
              key={index}
              onClick={() => handleFilterClick(filter)}
              className="font-bold px-8P py-4P text-desaturated-dark-cyan-bg bg-light-grayish-cyan-filter-tables rounded-5BR cursor-pointer hover:bg-desaturated-dark-cyan-bg hover:text-light-grayish-cyan-filter-tables"
            >
              {filter}
            </li>
          ))}
      </ul>

      {/* Edit and Delete Buttons */}
      <div className="flex justify-end items-center gap-4 mt-4">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 uppercase font-bold tracking-wide"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 uppercase font-bold tracking-wide"
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default Card;
