import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrencyDropdownBtn = () =>
  <DropdownButton id="dropdown-basic-button" title="RUPIAH" variant="secondary">
    <Dropdown.Item href="#/action-1">BGN</Dropdown.Item>
    <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
    <Dropdown.Item href="#/action-3">USD</Dropdown.Item>
  </DropdownButton>

export { CurrencyDropdownBtn };
