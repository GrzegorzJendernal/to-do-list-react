import { NavList, StyledNavLink } from "./styled";
import React from "react";

const Navigation = () => (
	<nav>
		<NavList>
			<li>
				<StyledNavLink to="/zadania">
					Zadania
				</StyledNavLink>
			</li>
			<li>
				<StyledNavLink to="/autor">
					O autorze
				</StyledNavLink>
			</li>
		</NavList>
	</nav>
);

export default Navigation;