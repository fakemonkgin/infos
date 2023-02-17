// Import Assets
import nft from '../assets/nft.png';
import amazon from "../assets/amazon.png";
import domain from "../assets/domain.png"
import wishingwell from "../assets/wishingwell.png"

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

                <div className="projects__card">
                    <h3>Web3 Amazon Ecommerce</h3>
                    <img src={amazon} alt="E-commerce" />
                    <p>
                        React/Solidity/hardhat/ethers  <br />
                        write solidity smart contract with no template, connect wallet, list items, purchase items
                    </p>

                    <a href="https://web3amazon.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fakemonkgin/web3amazon" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Web3 Domain Name</h3>
                    <img src={domain} alt="Domain" />
                    <p>
                        React/Solidity/hardhat/ethers  <br />
                        write solidity smart contract with no template, connect wallet, list items, purchase items
                    </p>

                    <a href="https://web3domainname.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fakemonkgin/web3domainname" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Web3 CrowdFunding Platform</h3>
                    <img src={wishingwell} alt="CrowdFunding" />
                    <p>
                        React/Solidity/thirdweb/ethers  <br />
                        write solidity smart contract with no template, initiate a campaign, raise fund
                    </p>

                    <a href="https://fantasy-gamma.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fakemonkgin/fantasy" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;