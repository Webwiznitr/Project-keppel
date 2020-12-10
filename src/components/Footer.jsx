import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				<h3>Web<span>Wiz</span></h3>

				<p className="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">About</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">WebWiz © 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the Club</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
  );
}

export default FooterPage;