import React from "react";
import Link from "./Link";

function Footer() {
    return (
        <footer className="px-3 pb-3 pt-5">
            <h3>Additional Information</h3>
            <div>500 Saratoga Avenue</div>
            <div>San Jose, California</div>
            <Link url="mailto:oeconomia@students.harker.org?subject=Oeconomia Inquiry!">oeconomia@students.harker.org</Link>
            <div className="mt-5 text-muted text-center">Made with ❤️ by Nelson Gou and Andy Chung. Inspired by <Link url="https://oeconomia.harker.org">Harker Oeconomia's website</Link>.</div>
            <div className="text-muted text-center">&copy; Oeconomia Economics Society 2022</div>
        </footer>
    );
}

export default Footer;