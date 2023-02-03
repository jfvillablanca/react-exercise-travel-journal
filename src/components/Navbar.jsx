import Logo from "../assets/aperture.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt='logo' className='nav--logo' />
            <h1>Travel Photography</h1>
        </nav>
    );
}
