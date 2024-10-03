const Footer = () => (
  <footer className='mt-10 bg-gray-100 text-gray-700'>
    <div className='container mx-auto px-4 py-8'>
      <h4 className='mb-4 text-center text-lg font-semibold'>
        Subscribe to Our Newsletter
      </h4>
      <div className='flex justify-center'>
        <input
          type='email'
          placeholder='Enter your email address'
          className='w-1/3 rounded-l-md border p-2 focus:outline-none focus:ring-2 focus:ring-gray-300'
        />
        <button className='rounded-r-md bg-blue-500 px-4 text-white'>
          Subscribe
        </button>
      </div>
      <div className='mt-8 text-center text-sm'>
        &copy; 2024 Your Company Name. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
