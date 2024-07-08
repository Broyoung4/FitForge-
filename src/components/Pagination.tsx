import { useState } from 'react';

const Pagination: React.FC<{ data: any[] }> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='flex list-none mt-6 justify-center'>
      {pageNumbers.map((number) => (
        <li key={number} className="mx-10">
          <button onClick={() => {
          paginate(number)
          
                                 }
          } className={`rounded-full outline-none px-[10px] text-md font-bold  text-slate-gray ${number === currentPage ? 'border border-sea-green bg-[#333]' : '' }`}>{number}</button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination;