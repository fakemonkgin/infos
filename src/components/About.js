// 在文件顶部添加
import '../styles/About.css';

// Import Assets
import profile from '../assets/profile.png';

const About = () => {
    return (
        <section className='about'>
            <h2>About Me</h2>
            
            <p>
                Transitioned from energy sales and music into Web3 development in 2021. Deep experience across major blockchains and DeFi protocols, with proven track record in high-return investments (10x-100x projects like RACA and CHIKN). Active in smart contract security - won multiple Code4rena auditing contests and received zkSync airdrops. Currently developing music NFT platforms and various NFT DApps.
            </p>
            
            <hr />
            
            <div>
                <h3>Tech Stack:</h3>
            </div>
            
            <p>
                Next.js • React • Tailwindcss • Solidity • Ethers • Javascript • Foundry
            </p>
        </section>
    );
}

export default About;