import React from "react";
import "./style.css";

function Footer(props) {
    console.log(props);

    return (
    <div>
        <footer class="page-footer font-small blue fixed-bottom">
            <div class="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://circuitsyn.github.com/"> CreatureRecall.com</a>
            </div>
        </footer>
    </div>
       
    );
}

export default Footer;