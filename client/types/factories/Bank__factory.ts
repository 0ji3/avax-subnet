/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Bank, BankInterface } from "../Bank";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allBills",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "enum Bank.BillStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "beforeDueDate",
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
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "cashBill",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "completeBill",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "discountRate",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "dishonoredAddresses",
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
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getAmountToCashBill",
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
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getAmountToPayBill",
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
    name: "getBalance",
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
    name: "getNumberOfBills",
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
    name: "getNumberOfDishonoredAddresses",
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
    name: "interestRate",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "issueBill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "lockToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "term",
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
] as const;

const _bytecode =
  "0x608060405261184c806100136000396000f3fe6080604052600436106100e75760003560e01c80639d4b54d41161008a578063e5bb0b2c11610059578063e5bb0b2c146102e0578063e6c0e6d51461031d578063ef857f2014610348578063fb4de28314610385576100e7565b80639d4b54d414610231578063a10ffbed1461026e578063b11df68014610299578063dac67efa146102c4576100e7565b806353ebde5f116100c657806353ebde5f146101825780635f868417146101bf5780637c3a00fd146101ea57806380f2036314610215576100e7565b806249f41a146100ec57806312065fe01461012e57806333179dfe14610159575b600080fd5b3480156100f857600080fd5b50610113600480360381019061010e91906111a2565b6103a1565b60405161012596959493929190611296565b60405180910390f35b34801561013a57600080fd5b5061014361043a565b60405161015091906112f7565b60405180910390f35b34801561016557600080fd5b50610180600480360381019061017b919061133e565b610481565b005b34801561018e57600080fd5b506101a960048036038101906101a491906111a2565b610605565b6040516101b6919061137e565b60405180910390f35b3480156101cb57600080fd5b506101d4610644565b6040516101e191906112f7565b60405180910390f35b3480156101f657600080fd5b506101ff610651565b60405161020c91906112f7565b60405180910390f35b61022f600480360381019061022a91906111a2565b610656565b005b34801561023d57600080fd5b50610258600480360381019061025391906111a2565b610752565b60405161026591906112f7565b60405180910390f35b34801561027a57600080fd5b506102836108ba565b60405161029091906112f7565b60405180910390f35b3480156102a557600080fd5b506102ae6108c1565b6040516102bb91906112f7565b60405180910390f35b6102de60048036038101906102d991906111a2565b6108cd565b005b3480156102ec57600080fd5b50610307600480360381019061030291906111a2565b610a85565b60405161031491906112f7565b60405180910390f35b34801561032957600080fd5b50610332610c09565b60405161033f91906112f7565b60405180910390f35b34801561035457600080fd5b5061036f600480360381019061036a91906111a2565b610c0e565b60405161037c91906113b4565b60405180910390f35b61039f600480360381019061039a91906111a2565b610d73565b005b600081815481106103b157600080fd5b90600052602060002090600502016000915090508060000154908060010154908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60006040518060c0016040528060008054905081526020018481526020014281526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600060048111156104f1576104f061121f565b5b8152509050600081908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff021916908360048111156105f9576105f861121f565b5b02179055505050505050565b6001818154811061061557600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600180549050905090565b600a81565b600080828154811061066b5761066a6113cf565b5b90600052602060002090600502019050600061068683610752565b90508034146106ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c19061145b565b60405180910390fd5b60018260040160146101000a81548160ff021916908360048111156106f2576106f161121f565b5b021790555034600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461074691906114aa565b92505081905550505050565b60008060008381548110610769576107686113cf565b5b90600052602060002090600502016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff1660048111156108715761087061121f565b5b60048111156108835761088261121f565b5b8152505090506064600a606461089991906114aa565b82602001516108a891906114de565b6108b2919061154f565b915050919050565b624f1a0081565b60008080549050905090565b60008082815481106108e2576108e16113cf565b5b90600052602060002090600502019050600060048111156109065761090561121f565b5b8160040160149054906101000a900460ff16600481111561092a5761092961121f565b5b148061096b5750600160048111156109455761094461121f565b5b8160040160149054906101000a900460ff1660048111156109695761096861121f565b5b145b6109aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a1906115cc565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3390611638565b60405180910390fd5b60028160040160146101000a81548160ff02191690836004811115610a6457610a6361121f565b5b02179055506000610a7483610a85565b9050610a8033826110b6565b505050565b60008060008381548110610a9c57610a9b6113cf565b5b90600052602060002090600502016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff166004811115610ba457610ba361121f565b5b6004811115610bb657610bb561121f565b5b815250509050610bc583610c0e565b15610bfb576064600a6064610bda9190611658565b8260200151610be991906114de565b610bf3919061154f565b915050610c04565b80602001519150505b919050565b600a81565b60008060008381548110610c2557610c246113cf565b5b90600052602060002090600502016040518060c00160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff166004811115610d2d57610d2c61121f565b5b6004811115610d3f57610d3e61121f565b5b815250509050624f1a008160400151610d5891906114aa565b4211610d68576001915050610d6e565b60009150505b919050565b6000808281548110610d8857610d876113cf565b5b9060005260206000209060050201905060006004811115610dac57610dab61121f565b5b8160040160149054906101000a900460ff166004811115610dd057610dcf61121f565b5b1480610e11575060026004811115610deb57610dea61121f565b5b8160040160149054906101000a900460ff166004811115610e0f57610e0e61121f565b5b145b80610e51575060016004811115610e2b57610e2a61121f565b5b8160040160149054906101000a900460ff166004811115610e4f57610e4e61121f565b5b145b610e90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e87906116d8565b60405180910390fd5b610e9982610c0e565b15610ed9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed090611744565b60405180910390fd5b6000610ee483610752565b9050600260008360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548111610ffc5780600260008460030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fc39190611658565b9250508190555060038260040160146101000a81548160ff02191690836004811115610ff257610ff161121f565b5b02179055506110b1565b60048260040160146101000a81548160ff021916908360048111156110245761102361121f565b5b021790555060018260030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050565b60008273ffffffffffffffffffffffffffffffffffffffff16826040516110dc90611795565b60006040518083038185875af1925050503d8060008114611119576040519150601f19603f3d011682016040523d82523d6000602084013e61111e565b606091505b5050905080611162576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611159906117f6565b60405180910390fd5b505050565b600080fd5b6000819050919050565b61117f8161116c565b811461118a57600080fd5b50565b60008135905061119c81611176565b92915050565b6000602082840312156111b8576111b7611167565b5b60006111c68482850161118d565b91505092915050565b6111d88161116c565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611209826111de565b9050919050565b611219816111fe565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005811061125f5761125e61121f565b5b50565b60008190506112708261124e565b919050565b600061128082611262565b9050919050565b61129081611275565b82525050565b600060c0820190506112ab60008301896111cf565b6112b860208301886111cf565b6112c560408301876111cf565b6112d26060830186611210565b6112df6080830185611210565b6112ec60a0830184611287565b979650505050505050565b600060208201905061130c60008301846111cf565b92915050565b61131b816111fe565b811461132657600080fd5b50565b60008135905061133881611312565b92915050565b6000806040838503121561135557611354611167565b5b60006113638582860161118d565b925050602061137485828601611329565b9150509250929050565b60006020820190506113936000830184611210565b92915050565b60008115159050919050565b6113ae81611399565b82525050565b60006020820190506113c960008301846113a5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f416d6f756e74206973206e6f7420636f72726563740000000000000000000000600082015250565b60006114456015836113fe565b91506114508261140f565b602082019050919050565b6000602082019050818103600083015261147481611438565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114b58261116c565b91506114c08361116c565b92508282019050808211156114d8576114d761147b565b5b92915050565b60006114e98261116c565b91506114f48361116c565b92508282026115028161116c565b915082820484148315176115195761151861147b565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061155a8261116c565b91506115658361116c565b92508261157557611574611520565b5b828204905092915050565b7f537461747573206973206e6f74204973756564206f7220506169640000000000600082015250565b60006115b6601b836113fe565b91506115c182611580565b602082019050919050565b600060208201905081810360008301526115e5816115a9565b9050919050565b7f596f757220617265206e6f7420726563697069656e7400000000000000000000600082015250565b60006116226016836113fe565b915061162d826115ec565b602082019050919050565b6000602082019050818103600083015261165181611615565b9050919050565b60006116638261116c565b915061166e8361116c565b92508282039050818111156116865761168561147b565b5b92915050565b7f42696c6c20697320616c726561647920636f6d706c6574656400000000000000600082015250565b60006116c26019836113fe565b91506116cd8261168c565b602082019050919050565b600060208201905081810360008301526116f1816116b5565b9050919050565b7f4265666f72652064756520646174650000000000000000000000000000000000600082015250565b600061172e600f836113fe565b9150611739826116f8565b602082019050919050565b6000602082019050818103600083015261175d81611721565b9050919050565b600081905092915050565b50565b600061177f600083611764565b915061178a8261176f565b600082019050919050565b60006117a082611772565b9150819050919050565b7f4661696c656420746f2073656e6420746f6b656e000000000000000000000000600082015250565b60006117e06014836113fe565b91506117eb826117aa565b602082019050919050565b6000602082019050818103600083015261180f816117d3565b905091905056fea2646970667358221220679bd53fe138425cda2962e9b82aac7300e008907bea46d84382a083812dc30264736f6c63430008110033";

type BankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bank__factory extends ContractFactory {
  constructor(...args: BankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Bank> {
    return super.deploy(overrides || {}) as Promise<Bank>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bank {
    return super.attach(address) as Bank;
  }
  override connect(signer: Signer): Bank__factory {
    return super.connect(signer) as Bank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankInterface {
    return new utils.Interface(_abi) as BankInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bank {
    return new Contract(address, _abi, signerOrProvider) as Bank;
  }
}
