import React from 'react'
import '../../css/Navbar.css'

export default function Navbar() {
	return (
		<nav className="nav-main">
			<div className="nav-main--left">
				<a href="/">Logo</a>
			</div>
			<div className="nav-main--right">
				<ul>
					<li>jeden</li>
					<li>dwa</li>
					<li>trzy</li>
				</ul>
			</div>

		</nav>
	)
}
