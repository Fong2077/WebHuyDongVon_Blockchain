import crowdFunding from"./CrowdFunding.json";
import web3Modal from "web3modal";


//crowdFunding marketplace
export const CrowdFundingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const CrowdFundingABI = crowdFunding.abi;

//network

// const network ={
//     // polygon_amoy: {
//     //     chainId: `0x${Number(80002).toString(16)}`,
//     //     chainName: "Polygon Amoy",
//     //     nativeCurrency:{
//     //         name: "MATIC",
//     //         symbol: "MATIC",
//     //         decimals: 18,
//     //     },
//     //     rpcUrls: ["https://rpc-amoy.polygon.technology/"],
//     //     blockExplorerUrls: ["https://www.oklink.com/amoy"],
//     // },

// //     localhost:{
// //         chainId: `0x${Number(31337).toString(16)}`,
// //         chainName: "Localhost",
// //         nativeCurrency:{
// //             name: "GO",
// //             symbol: "GO",
// //             decimals: 18,
// //         },
// //             rpcUrls: ["http://127.0.0.1:8545/"],
// //             blockExplorerUrls: ["http://bscscan.com"],
// //     },
// // };

// // const changeNetwork = async ({networkName}) => {
// //     try {
// //         if (!window.ethereum) throw new Error("No crypto wallet found");
// //         await window.ethereum.request({
// //             method: "wallet_addEthereumChain",
// //             params: [
// //                 {
// //                     chainId: network[networkName].chainId,
// //                     chainName: network[networkName].chainName,
// //                     nativeCurrency: network[networkName].nativeCurrency,
// //                     rpcUrls: network[networkName].rpcUrls,
// //                     blockExplorerUrls: network[networkName].blockExplorerUrls,
// //                 },
// //             ],
// //         });
// //     } catch (err) {
// //         console.error("Error changing network: ", err);
// //     }
// // };

// // export const handleNetworkSwitch = async () => {
// //     const networkName = "localhost";
// //     await changeNetwork({networkName});
// // }