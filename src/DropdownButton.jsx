import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrencyDropdownBtn = () => {
  const [currency, setCurrency] = useState('RUPIAH');

  const onSelect = (eventKey, event) => setCurrency(event.target.text);

  return (
    <DropdownButton variant="dark" id="dropdown-basic-button" title={currency} onSelect={onSelect}>
      {currency !== 'BGN' && <Dropdown.Item href="#/action-1">BGN</Dropdown.Item>}
      {currency !== 'EUR' && <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>}
      {currency !== 'USD' && <Dropdown.Item href="#/action-3">USD</Dropdown.Item>}
      {currency !== 'RUPIAH' && <Dropdown.Item href="#/action-3">RUPIAH</Dropdown.Item>}
    </DropdownButton>
  )
}

export { CurrencyDropdownBtn };
