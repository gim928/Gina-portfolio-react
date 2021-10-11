import React, { useState } from "react";
import { jsPDF } from "jspdf";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const Resume = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  function generatePdf() {
    const doc = new jsPDF();
    //add image of pdf below to replace hello world text
    //first 10 below is margin to left and second is margin to the top
    doc.text("Hello world!", 10, 10);
    doc.text("This is awesome", 10, 30);
    doc.save("Resume_GI.pdf");
  }

  return (
    <div>
      <button onClick={generatePdf}>download resume</button>
      {/* <Document file="Resume_GI.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
};

export default Resume;
