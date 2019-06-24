import React from "react";

// link : http://www.valorex.com/

// Open a Chrome window
// In the URL bar enter Chrome://net-internals
// Click on "Domain Security Policy" in the side-bar
// Add the domain name which you want to always be able to access in http form into the "Add HSTS/PKP domain" section

const Iframe = () => {
    return (
        <div className="iframe-container">
          <iframe src="https://www.bakasable.fr/" className="iframe"></iframe>
        </div>
    )
}

export default Iframe;