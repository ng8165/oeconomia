import React from "react";
import Link from "./Link";

function Footer() {
    return (
        <footer className="px-3 pb-3 pt-5">
            <h3>Additional Information</h3>
            <div>500 Saratoga Avenue</div>
            <div>San Jose, California</div>
            <Link url="mailto:oeconomia@students.harker.org?subject=Oeconomia Inquiry!">oeconomia@students.harker.org</Link>
            <div className="mt-5 text-muted text-center">Made with ❤️ by Nelson Gou and Andy Chung.</div>
        </footer>
    );
}

export default Footer;