import { GenericContractsDeclaration } from "@/lib/utils"

const deployedContracts = {
	31337: {
		LidyNFT: {
			address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
			abi: [
				{
					inputs: [],
					stateMutability: "nonpayable",
					type: "constructor",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "approved",
							type: "address",
						},
						{
							indexed: true,
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "Approval",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "operator",
							type: "address",
						},
						{
							indexed: false,
							internalType: "bool",
							name: "approved",
							type: "bool",
						},
					],
					name: "ApprovalForAll",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "previousOwner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "newOwner",
							type: "address",
						},
					],
					name: "OwnershipTransferred",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							indexed: true,
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "Transfer",
					type: "event",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "approve",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "owner",
							type: "address",
						},
					],
					name: "balanceOf",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "currentSupply",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "getApproved",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "ipfsURIPrefix",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "ipfsURISuffix",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							internalType: "address",
							name: "operator",
							type: "address",
						},
					],
					name: "isApprovedForAll",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "addressToQuery",
							type: "address",
						},
					],
					name: "isWhitelisted",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "maxSupply",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "name",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "owner",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "ownerOf",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "pauseSale",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "paused",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "price",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_tokenURI",
							type: "string",
						},
					],
					name: "publicMint",
					outputs: [],
					stateMutability: "payable",
					type: "function",
				},
				{
					inputs: [],
					name: "publicMintable",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address[]",
							name: "addresses",
							type: "address[]",
						},
					],
					name: "removeFromWhitelist",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "renounceOwnership",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "_tokenId",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "_salePrice",
							type: "uint256",
						},
					],
					name: "royaltyInfo",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "safeTransferFrom",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
						{
							internalType: "bytes",
							name: "data",
							type: "bytes",
						},
					],
					name: "safeTransferFrom",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "operator",
							type: "address",
						},
						{
							internalType: "bool",
							name: "approved",
							type: "bool",
						},
					],
					name: "setApprovalForAll",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "receiver_",
							type: "address",
						},
						{
							internalType: "uint96",
							name: "fee_",
							type: "uint96",
						},
					],
					name: "setDefaultRoyalty",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_ipfsURIPrefix",
							type: "string",
						},
					],
					name: "setIpfsURIPrefix",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_ipfsURISuffix",
							type: "string",
						},
					],
					name: "setIpfsURISuffix",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "bool",
							name: "_state",
							type: "bool",
						},
					],
					name: "setPublicMintable",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "bool",
							name: "_state",
							type: "bool",
						},
					],
					name: "setWhitelistMintable",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "bytes4",
							name: "interfaceId",
							type: "bytes4",
						},
					],
					name: "supportsInterface",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "symbol",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "_tokenId",
							type: "uint256",
						},
					],
					name: "tokenURI",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "transferFrom",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "newOwner",
							type: "address",
						},
					],
					name: "transferOwnership",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "unpauseSale",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address[]",
							name: "addresses",
							type: "address[]",
						},
					],
					name: "whitelistAddresses",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_tokenURI",
							type: "string",
						},
					],
					name: "whitelistMint",
					outputs: [],
					stateMutability: "payable",
					type: "function",
				},
				{
					inputs: [],
					name: "whitelistMintable",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "withdraw",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
			],
			inheritedFunctions: {},
		},
	},
	11155111: {
		LidyNFT: {
			address: "0xe1c9E8F6519aFB7B1fC365734970C55246B62De0",
			abi: [
				{
					inputs: [],
					stateMutability: "nonpayable",
					type: "constructor",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "approved",
							type: "address",
						},
						{
							indexed: true,
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "Approval",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "operator",
							type: "address",
						},
						{
							indexed: false,
							internalType: "bool",
							name: "approved",
							type: "bool",
						},
					],
					name: "ApprovalForAll",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "previousOwner",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "newOwner",
							type: "address",
						},
					],
					name: "OwnershipTransferred",
					type: "event",
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							indexed: true,
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							indexed: true,
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "Transfer",
					type: "event",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "approve",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "owner",
							type: "address",
						},
					],
					name: "balanceOf",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "currentSupply",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "getApproved",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "ipfsURIPrefix",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "ipfsURISuffix",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "owner",
							type: "address",
						},
						{
							internalType: "address",
							name: "operator",
							type: "address",
						},
					],
					name: "isApprovedForAll",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "addressToQuery",
							type: "address",
						},
					],
					name: "isWhitelisted",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "maxSupply",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "name",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "owner",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "ownerOf",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "pauseSale",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "paused",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "price",
					outputs: [
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_tokenURI",
							type: "string",
						},
					],
					name: "publicMint",
					outputs: [],
					stateMutability: "payable",
					type: "function",
				},
				{
					inputs: [],
					name: "publicMintable",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address[]",
							name: "addresses",
							type: "address[]",
						},
					],
					name: "removeFromWhitelist",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "renounceOwnership",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "_tokenId",
							type: "uint256",
						},
						{
							internalType: "uint256",
							name: "_salePrice",
							type: "uint256",
						},
					],
					name: "royaltyInfo",
					outputs: [
						{
							internalType: "address",
							name: "",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "",
							type: "uint256",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "safeTransferFrom",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
						{
							internalType: "bytes",
							name: "data",
							type: "bytes",
						},
					],
					name: "safeTransferFrom",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "operator",
							type: "address",
						},
						{
							internalType: "bool",
							name: "approved",
							type: "bool",
						},
					],
					name: "setApprovalForAll",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "receiver_",
							type: "address",
						},
						{
							internalType: "uint96",
							name: "fee_",
							type: "uint96",
						},
					],
					name: "setDefaultRoyalty",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_ipfsURIPrefix",
							type: "string",
						},
					],
					name: "setIpfsURIPrefix",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_ipfsURISuffix",
							type: "string",
						},
					],
					name: "setIpfsURISuffix",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "bool",
							name: "_state",
							type: "bool",
						},
					],
					name: "setPublicMintable",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "bool",
							name: "_state",
							type: "bool",
						},
					],
					name: "setWhitelistMintable",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "bytes4",
							name: "interfaceId",
							type: "bytes4",
						},
					],
					name: "supportsInterface",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "symbol",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "uint256",
							name: "_tokenId",
							type: "uint256",
						},
					],
					name: "tokenURI",
					outputs: [
						{
							internalType: "string",
							name: "",
							type: "string",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "from",
							type: "address",
						},
						{
							internalType: "address",
							name: "to",
							type: "address",
						},
						{
							internalType: "uint256",
							name: "tokenId",
							type: "uint256",
						},
					],
					name: "transferFrom",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address",
							name: "newOwner",
							type: "address",
						},
					],
					name: "transferOwnership",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [],
					name: "unpauseSale",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "address[]",
							name: "addresses",
							type: "address[]",
						},
					],
					name: "whitelistAddresses",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
				{
					inputs: [
						{
							internalType: "string",
							name: "_tokenURI",
							type: "string",
						},
					],
					name: "whitelistMint",
					outputs: [],
					stateMutability: "payable",
					type: "function",
				},
				{
					inputs: [],
					name: "whitelistMintable",
					outputs: [
						{
							internalType: "bool",
							name: "",
							type: "bool",
						},
					],
					stateMutability: "view",
					type: "function",
				},
				{
					inputs: [],
					name: "withdraw",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function",
				},
			],
			inheritedFunctions: {},
		},
	},
} as const

export default deployedContracts satisfies GenericContractsDeclaration
