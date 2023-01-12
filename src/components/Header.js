// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Jing" />

            <div className='header__content'>
                <h1>Hi, I'm Jing Li</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Tel: 18823417610</button>
            </div>
        </section>
    );
}

export default Header;