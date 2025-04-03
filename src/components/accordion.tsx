'use client';

import { useState } from 'react';

const AccordionUi = ({
  title,
  content,
  is_list,
  list,
}: {
  title: string;
  list?: string[];
  is_list?: boolean;
  content: string;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='p-4'>
      <div
        className='flex justify-between'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='font-semibold'>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && (
        <div className=' text-xs md:text-sm mt-2'>
          {is_list ? (
            <ul>
              {list?.map((list_item) => (
                <li key={list_item}>{list_item}</li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionUi;
