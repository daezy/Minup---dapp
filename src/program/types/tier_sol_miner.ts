export type TierSolMiner = {
  "version": "0.1.0",
  "name": "tier_sol_miner",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mineInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeCollector",
          "type": "publicKey"
        },
        {
          "name": "penaltyFeeCollector",
          "type": "publicKey"
        },
        {
          "name": "tokenMint",
          "type": "publicKey"
        },
        {
          "name": "devFee",
          "type": "u64"
        },
        {
          "name": "earlyWithdrawalFee",
          "type": "u64"
        },
        {
          "name": "referralReward",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addTier",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "apy",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "lockDuration",
          "type": "u64"
        }
      ]
    },
    {
      "name": "whitelistAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "expiry",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeStaking",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeStakingWithReferrer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerUserInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeWhitelist",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelistInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increaseStake",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "compound",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "terminateStaking",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimInterest",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penaltyCollector",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penaltyCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "whitelistWithdraw",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penaltyCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawReferralRewards",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateTier",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "minimumTokenAmount",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "apy",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "lockDuration",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "isActive",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "updateMine",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mineInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeCollector",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "penaltyFeeCollector",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "devFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "earlyWithdrawalFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "referralReward",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "isActive",
          "type": {
            "option": "bool"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "mineInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "feeCollector",
            "type": "publicKey"
          },
          {
            "name": "penaltyFeeCollector",
            "type": "publicKey"
          },
          {
            "name": "devFee",
            "type": "u64"
          },
          {
            "name": "earlyWithdrawalFee",
            "type": "u64"
          },
          {
            "name": "referralReward",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "currentTierNonce",
            "type": "u8"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "mineVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "referralInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userInfo",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "earnings",
            "type": "u64"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tierInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minimumTokenAmount",
            "type": "u64"
          },
          {
            "name": "totalLocked",
            "type": "u64"
          },
          {
            "name": "apy",
            "type": "u64"
          },
          {
            "name": "lockDuration",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "nonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "totalLocked",
            "type": "u64"
          },
          {
            "name": "accruedInterest",
            "type": "u64"
          },
          {
            "name": "lockTs",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": "publicKey"
          },
          {
            "name": "isWhitelist",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "whitelistInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "publicKey"
          },
          {
            "name": "tier",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTokenAccount",
      "msg": "Token account is invalid: Might be due to insufficient balance for tier or lack of ownership of the specified account"
    },
    {
      "code": 6001,
      "name": "InactiveTier",
      "msg": "Selected TIER is not active"
    },
    {
      "code": 6002,
      "name": "InvalidMine",
      "msg": "Invalid mine account"
    },
    {
      "code": 6003,
      "name": "InvalidReferrer",
      "msg": "Referral account is invalid"
    },
    {
      "code": 6004,
      "name": "InvalidFeeCollector",
      "msg": "Invalid Fee Collector"
    },
    {
      "code": 6005,
      "name": "ExpiredWhiteList",
      "msg": "Whitelist has expired"
    },
    {
      "code": 6006,
      "name": "InvalidDepositAmount",
      "msg": "Invalid deposit amount"
    },
    {
      "code": 6007,
      "name": "InvalidTier",
      "msg": "Invalid tier: due to inactive tier, nonce mismtatch or user_info tier mismatch"
    },
    {
      "code": 6008,
      "name": "InvalidArgument",
      "msg": "Invalid Argument"
    },
    {
      "code": 6009,
      "name": "OperationNotAllowed",
      "msg": "Operation not allowed"
    },
    {
      "code": 6010,
      "name": "ConversionFailure",
      "msg": "Integer Conversion Failure"
    },
    {
      "code": 6011,
      "name": "MathsError",
      "msg": "Maths Error due to Overflow or Underflow"
    }
  ]
};

export const IDL: TierSolMiner = {
  "version": "0.1.0",
  "name": "tier_sol_miner",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "initializer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mineInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeCollector",
          "type": "publicKey"
        },
        {
          "name": "penaltyFeeCollector",
          "type": "publicKey"
        },
        {
          "name": "tokenMint",
          "type": "publicKey"
        },
        {
          "name": "devFee",
          "type": "u64"
        },
        {
          "name": "earlyWithdrawalFee",
          "type": "u64"
        },
        {
          "name": "referralReward",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addTier",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "apy",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "lockDuration",
          "type": "u64"
        }
      ]
    },
    {
      "name": "whitelistAccount",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "beneficiary",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "expiry",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeStaking",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeStakingWithReferrer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerUserInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeWhitelist",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelistInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tierNonce",
          "type": "u8"
        },
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increaseStake",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "compound",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "terminateStaking",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimInterest",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penaltyCollector",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penaltyCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "whitelistWithdraw",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penaltyCollector",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawReferralRewards",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tierInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mineVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeCollector",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateTier",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tierInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mineInfo",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "minimumTokenAmount",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "apy",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "lockDuration",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "isActive",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "updateMine",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mineInfo",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeCollector",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "penaltyFeeCollector",
          "type": {
            "option": "publicKey"
          }
        },
        {
          "name": "devFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "earlyWithdrawalFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "referralReward",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "isActive",
          "type": {
            "option": "bool"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "mineInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "feeCollector",
            "type": "publicKey"
          },
          {
            "name": "penaltyFeeCollector",
            "type": "publicKey"
          },
          {
            "name": "devFee",
            "type": "u64"
          },
          {
            "name": "earlyWithdrawalFee",
            "type": "u64"
          },
          {
            "name": "referralReward",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "currentTierNonce",
            "type": "u8"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "mineVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "referralInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userInfo",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "earnings",
            "type": "u64"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tierInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minimumTokenAmount",
            "type": "u64"
          },
          {
            "name": "totalLocked",
            "type": "u64"
          },
          {
            "name": "apy",
            "type": "u64"
          },
          {
            "name": "lockDuration",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "nonce",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "totalLocked",
            "type": "u64"
          },
          {
            "name": "accruedInterest",
            "type": "u64"
          },
          {
            "name": "lockTs",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": "publicKey"
          },
          {
            "name": "isWhitelist",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "whitelistInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "publicKey"
          },
          {
            "name": "tier",
            "type": "publicKey"
          },
          {
            "name": "expiry",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidTokenAccount",
      "msg": "Token account is invalid: Might be due to insufficient balance for tier or lack of ownership of the specified account"
    },
    {
      "code": 6001,
      "name": "InactiveTier",
      "msg": "Selected TIER is not active"
    },
    {
      "code": 6002,
      "name": "InvalidMine",
      "msg": "Invalid mine account"
    },
    {
      "code": 6003,
      "name": "InvalidReferrer",
      "msg": "Referral account is invalid"
    },
    {
      "code": 6004,
      "name": "InvalidFeeCollector",
      "msg": "Invalid Fee Collector"
    },
    {
      "code": 6005,
      "name": "ExpiredWhiteList",
      "msg": "Whitelist has expired"
    },
    {
      "code": 6006,
      "name": "InvalidDepositAmount",
      "msg": "Invalid deposit amount"
    },
    {
      "code": 6007,
      "name": "InvalidTier",
      "msg": "Invalid tier: due to inactive tier, nonce mismtatch or user_info tier mismatch"
    },
    {
      "code": 6008,
      "name": "InvalidArgument",
      "msg": "Invalid Argument"
    },
    {
      "code": 6009,
      "name": "OperationNotAllowed",
      "msg": "Operation not allowed"
    },
    {
      "code": 6010,
      "name": "ConversionFailure",
      "msg": "Integer Conversion Failure"
    },
    {
      "code": 6011,
      "name": "MathsError",
      "msg": "Maths Error due to Overflow or Underflow"
    }
  ]
};
