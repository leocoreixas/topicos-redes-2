import React from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

import Icon from '../icon';

interface IProps {
    page: number
    onPageChange: (selectedItem: { selected: number }) => void
    totalPages: number
}

const Pagination = (props: IProps) => {
    const { page, onPageChange, totalPages } = props;

    const style = {
        wrapper: 'm-0 flex gap-1 justify-end',
        navItem: 'w-6 h-6',
        navLink: 'w-full h-full flex items-center justify-center text-label-sm text-black',
        activeLink: '[&>a]:bg-primary-m [&>a]:text-white [&>a]:rounded-full [&>a]:text-label-md',
    }

    return (
        <ReactPaginate
          previousLabel={<Icon name='chevronLeft' size={16} />}
          nextLabel={<Icon name='chevronRight' size={16} />}
          forcePage={page - 1}
          onPageChange={onPageChange}
          pageCount={totalPages}
          breakLabel='...'
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName={style.activeLink}
          pageClassName={style.navItem}
          breakClassName={style.navItem}
          nextLinkClassName={style.navLink}
          pageLinkClassName={style.navLink}
          breakLinkClassName={style.navLink}
          previousLinkClassName={style.navLink}
          nextClassName={classNames('ml-2 bg-white rounded-full', style.navItem)}
          previousClassName={classNames('mr-2 bg-white rounded-full', style.navItem)}
          containerClassName={style.wrapper}
        />
    )
}

export default Pagination