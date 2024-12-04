import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div className="vendingMachine">
      {/* <nav>
        <Link to="/chips">Potato-licious</Link>
        <Link to="/bars">The Bar-istocrats</Link>
        <Link to="/sodas">Soda-licious</Link>
        <Link to="/cookies">Dough-Main</Link>
      </nav> */}

      <Link to="/chips" className="vending-item">
        <h3>Potato-licious</h3>
      </Link>

      <Link to="/bars" className="vending-item">
        <h3>The Bar-istocrats</h3>
      </Link>

      <Link to="/sodas" className="vending-item">
        <h3>Soda-licious</h3>
      </Link>

      <Link to="/cookies" className="vending-item">
        <h3>Dough-Main</h3>
      </Link>
    </div>
  );
};
export default VendingMachine;
