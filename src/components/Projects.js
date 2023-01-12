// Import Assets
import nft from '../assets/nft.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Ebay NFT Marketplace</h3>
                    <img src={nft} alt="NFT Landing Page" />
                    <p>
                        Next.js/Tailwindcss/Thirdweb  <br />
                        Add to inventory(create items), list items, auction listing & direct listing, make a bid or purchase items
                    </p>

                    <a href="https://ebaynftmarketplace.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fakemonkgin/ebaynftmarketplace" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;