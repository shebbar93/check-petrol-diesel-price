import { Icon } from '@iconify/react'
import fuel from '@iconify/icons-mdi/fuel-pump'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={fuel} /> Check Petrol & Diesel Price [ Credits : &copy;  Economic times]</h1>
        </header>
    )
}

export default Header