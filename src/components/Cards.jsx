import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 파일 import
function Cards(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPage));
  }, [itemOffset, itemsPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="row  gy-3 gap-5 ">
        {currentItems.map((image) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={image.url}
                style={{ height: '300px' }}
              />
              <Card.Body>sds</Card.Body>
            </Card>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default Cards;
