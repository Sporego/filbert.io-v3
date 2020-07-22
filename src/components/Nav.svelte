<script>
	import {
	  Collapse,
	  Navbar,
	  NavbarToggler,
	  NavbarBrand,
	  Nav,
	  NavItem,
	  NavLink,
	  UncontrolledDropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem
	} from 'sveltestrap';
  
	let isOpen = false;
  
	function handleUpdate(event) {
	  isOpen = event.detail.isOpen;
	}
  </script>
  
  <Navbar color="dark" light expand="md">
	<NavbarBrand href=".">Filbert.io</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
	  <Nav class="ml-auto" navbar>
		<NavItem>
		  <NavLink href="about">About</NavLink>
		</NavItem>
		<NavItem>
		  <NavLink href="https://github.com/Sporego">GitHub</NavLink>
		</NavItem>
		<UncontrolledDropdown nav inNavbar>
		  <DropdownToggle nav caret>Projects</DropdownToggle>
		  <DropdownMenu right>
			<DropdownItem href=".">Project Port</DropdownItem>
			<DropdownItem href="https://github.com/Sporego/filbert.io-v3">Github</DropdownItem>
			<DropdownItem divider />
			<DropdownItem href="http://www.triage.care/">Project Golden Pheasanta</DropdownItem>
			<DropdownItem href="https://github.com/Sporego/Project-Golden-Pheasant">Github</DropdownItem>
			<DropdownItem divider />
			<DropdownItem href="https://github.com/Sporego/SpaceColumbus">Unity Game</DropdownItem>
		  </DropdownMenu>
		</UncontrolledDropdown>
	  </Nav>
	</Collapse>
  </Navbar>
  