const SearchForm = () => (
  <div className='flex w-full md:order-1 md:w-1/4'>
    <form action='#' className='relative w-full'>
      <span className='absolute left-4 top-3 text-gray-400'>
        <i className='icon-search2'></i>
      </span>
      <input
        className='w-full rounded-full border py-2 pl-10 focus:outline-none focus:ring focus:ring-yellow-500'
        placeholder='Search...'
        type='search'
      />
    </form>
  </div>
);

export default SearchForm;
