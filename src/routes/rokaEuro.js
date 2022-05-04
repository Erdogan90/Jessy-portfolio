import pdf from "../Pdf/Roka_whole.pdf"
import React from "react";
import css from "../styles/rokapdf.module.css"
import {Document, Page, pdfjs,} from "react-pdf"
import { useState } from "react";
import {Button} from "react-bootstrap";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function RokaEuro() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };


    return (
<div className={css.div}>

  <Document className={css.pdf} file={pdf} 
    onLoadSuccess={onDocumentLoadSuccess}
    onContextMenu={(e) => e.preventDefault()}>
  <Page className={css.pdfPage} pageNumber={pageNumber}/>
  </Document>
  <div className={css.controls}>
  <Button variant="dark" className={css.buttons} onClick={prevPage} disabled={pageNumber === 1}>
          Prev
  </Button>
        <Button variant="dark" className={css.buttons} onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </Button>

  </div>
      <p className={css.page}>
        Page {pageNumber} of {numPages}
      </p>
      </div>
    );
  }

  export default RokaEuro