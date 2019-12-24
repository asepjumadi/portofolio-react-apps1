import React from 'react';
import {Link} from 'react-router-dom';
function MobileNav() { 
    return(
        <div>
        <header className="nav-top">
	<span className="hamburger material-icons" id="ham">menu</span>
</header>

<nav className="nav-drill">
  <ul className="nav-items nav-level-1">
    <li className="nav-item nav-expand">
			<a className="nav-link nav-expand-link" href="#">
				Menu
			</a>
			<ul className="nav-items nav-expand-content">
				<li className="nav-item">
					<a className="nav-link" href="#">
						Level 2
					</a>
				</li>
				<li className="nav-item nav-expand">
					<a className="nav-link nav-expand-link" href="#">
						Menu
					</a>
					<ul className="nav-items nav-expand-content">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Level 3
							</a>
						</li>
						<li className="nav-item nav-expand">
							<a className="nav-link nav-expand-link" href="#">
								Menu
							</a>
							<ul className="nav-items nav-expand-content">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Level 4
									</a>
								</li>
								<li className="nav-item nav-expand">
									<a className="nav-link nav-expand-link" href="#">
										Menu
									</a>
									<ul className="nav-items nav-expand-content">
										<li className="nav-item">
											<a className="nav-link" href="#">
												Level 5 Directory
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#">
												Level 5 Contact
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#">
												Level 5 Quick links
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#">
												Level 5 Launchpad
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Level 4 Directory
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Level 4 Contact
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Level 4 Quick links
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Level 4 Launchpad
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Level 3 Directory
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Level 3 Contact
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Level 3 Quick links
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Level 3 Launchpad
							</a>
						</li>
					</ul>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Level 2 Directory
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Level 2 Contact
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Level 2 Quick links
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Level 2 Launchpad
					</a>
				</li>
			</ul>
		</li>
    <li className="nav-item">
			<a className="nav-link" href="#">
				Directory
			</a>
		</li>
    <li className="nav-item">
			<a className="nav-link" href="#">
				Contact
			</a>
		</li>
    <li className="nav-item">
			<a className="nav-link" href="#">
				Quick links
			</a>
		</li>
    <li className="nav-item">
			<a className="nav-link" href="#">
				Launchpad
			</a>
		</li>
  </ul>
</nav>
</div>
    );
}
export default MobileNav;