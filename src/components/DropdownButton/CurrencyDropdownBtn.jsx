import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const CurrencyDropdownBtn = () => {
  const [currency, setCurrency] = useState('RUPIAH');

  const onSelect = (eventKey, event) => setCurrency(event.target.text);

  return (
    <DropdownButton variant={"dark"} id="dropdown-basic-button" title={currency} onSelect={onSelect}>
      {currency !== 'BGN' && <Dropdown.Item href="#">BGN</Dropdown.Item>}
      {currency !== 'EUR' && <Dropdown.Item href="#">EUR</Dropdown.Item>}
      {currency !== 'USD' && <Dropdown.Item href="#">USD</Dropdown.Item>}
      {currency !== 'RUPIAH' && <Dropdown.Item href="#">RUPIAH</Dropdown.Item>}
    </DropdownButton>
  )
}

export { CurrencyDropdownBtn };
