import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <nav className=".showNavigation">
        <h1><Link to="/transactions">Transactions</Link></h1>
        <button><Link to="/transactions/new">New Transaction</Link></button>
    </nav>
    )
}