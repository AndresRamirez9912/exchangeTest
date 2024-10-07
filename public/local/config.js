window.APEXWebConfig = {
  global: {
    siteName: 'KIIEX',
    theme: 'dark',
    products: [],
    instruments: [],
    //gateway: 'wss://api.kiire.alphaprod.net/WSGateway',
    gateway: 'wss://api.kiire.apstage.net/WSGateway',
    siteLogo: 'KIIEX-ExchangeLogo.png'
  },
  Deposit: {
    AccountProviderDisplayKey: "AccountProviderName",
    hideDepositBankInfo: false,
    USD: {
      bankName: 'My USD Bank',
      bankWireNumber: '1234567890',
      bankAccountNumber: '123456',
    },
    COP: {
      instructions: {
        "text": ["Próximamente habilitaremos la función de depósito en KIIEX."],
        /*"link": {
          "url": "https://chase.com/",
          "text": "How to deposit USD to my account via bank transfer"
        }*/
      },
      bankName: 'My COP Bank',
      bankWireNumber: '1234567890',
      bankAccountNumber: '123456',
    },

  },
  Withdraw:{
    AccountProviderDisplayKey: "AccountProviderName",
    WithdrawDetails:[
      {
        "text":
        "La transacción realizada puede tomar hasta 2 días hábiles en hacerse efectiva.",
        "useLink": false,
        "linkAddress": ""
      }
    ]
  },

TradingView: {
  timezon: "America/New_York",
  locale: "en",
    disabled_features: []
  },
  KYC: {
    verificationRequiredUrl: "/settings/verification-level",
    UpfrontKYC: true,
    MinimumVerificationLevel: 1,
    type: "Jumio",
    requestIdentifier: "",
    levels: [
      {
        level: 0,
        label: 'Level 0',
        description: {
          benefits: ['Deposits and withdrawls are not permitted in crypto',
                    'Deposits and withdrawls are not permitted through fiduciary coin'],
          requirements: 'Verificiation of email with a valid password, and a registered phone number. Only allowed to see the exchange.'
        },
        verifiedMessage:  'Verified for Level 1',
        underReviewMessage: 'Application under review. Check back later.',
        steps: [
          {
            nextPageLabel: 'Continue to ID verification',
            sections: [
              {
                label: 'Personal Information',
                form: [
                  {
                    label: 'First Name',
                    name: 'firstName',
                    validators: []
                  },
                  {
                    label: 'Middle Name',
                    name: 'middleName',
                    validators: []
                  },
                  {
                    label: 'Last Name',
                    name: 'lastName',
                    validators: []
                  },
                  {
                    label: 'Date of Birth',
                    name: 'dob',
                    validators: []
                  }
                ]
              },
              {
                label: 'Billing Information',
                form: [
                  {
                    label: 'Billing Phone',
                    name: 'phone',
                    validators: []
                  },
                  {
                    label: 'Billing Country',
                    name: 'billingCountry',
                    validators: []
                  },
                  {
                    label: 'Billing Street Address',
                    name: 'billingStreetAddress',
                    info: '(100 Washington Way)',
                    validators: []
                  },
                  {
                    label: 'Billing State',
                    name: 'state',
                    info: 'Abbreviation only',
                    validators: []
                  },
                  {
                    label: 'Billing City',
                    name: 'billingCity',
                    validators: []
                  },
                  {
                    label: 'Billing Zip',
                    name: 'billingZip',
                    type: 'text',
                    validators: []
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Upload your ID',
            sections: [
              {
                label: 'ID Verification',
                form: [
                  {
                    label: 'Type of ID you want to upload',
                    name: 'DocumentType',
                    validators: []
                  },
                  {
                    label: 'Document Country',
                    name: 'DocumentCountry',
                    validators: []
                  },
                  {
                    label: 'Document State',
                    name: 'DocumentState',
                    validators: []
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Last step',
            sections: [
              {
                label: 'ID Verification',
                form: [
                  {
                    label: '',
                    name: 'scandata',
                    validators: []
                  },
                  {
                    label: 'Image of the back of your Drivers License',
                    name: 'backsideimagedata',
                    type: 'country',
                    validators: ['required']
                  },
                  {
                    placeholder: 'Upload selfie',
                    name: 'faceimages'
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Confirm and Submit',
            sections: [
              {
                label: 'ID Verification',
                form: [
                  {
                    label: 'Nationality',
                    name: 'memo1',
                    type: 'text',
                    validators: ['required']
                  },
                  {
                    label: 'Country of Birth',
                    name: 'memo2',
                    type: 'country',
                    validators: ['required']
                  },
                  {
                    label: 'Tax ID',
                    name: 'memo3',
                    type: 'text',
                    validators: ['required']
                  },
                  {
                    label: 'Tax Country',
                    name: 'memo4',
                    type: 'country',
                    validators: ['required']
                  },
                  {
                    label: 'Sources of Funds',
                    name: 'memo5',
                    type: 'text',
                    validators: ['required']
                  },
                  {
                    label: 'Sources of Wealth',
                    name: 'memo6',
                    type: 'text',
                    validators: ['required']
                  }
                ]
              },
              {
                label: 'ID Verification',
                form: [
                  {
                    label: 'Proof of address',
                    name: 'memo7',
                    type: 'upload',
                    validators: ['required'],
                    maxSize: 3.8
                  },
                  {
                    label: 'Bank Statement',
                    name: 'memo8',
                    type: 'upload',
                    validators: ['required'],
                    maxSize: 3.8
                  },
                  {
                    label: 'Proof of Funds',
                    name: 'memo9',
                    type: 'upload',
                    validators: ['required'],
                    maxSize: 3.8
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        level: 1,
        label: "Level 1",
        description: {
          benefits: ['Allows for unlimited deposits in cryptocurrencies.',
                    'Allows for withdrawals of up to $100,000 daily in cryptocurrencies.'],
          requirements: 'Users must upload to the system an official identification document from their country of birth, ID, or passport. At the same time, they must complete the data from the previous level.'
        },
        verifiedMessage: "Verified for Level 1",
        underReviewMessage: "Application under review. Check back later.",
        steps: [
          {
            nextPageLabel: "Continue to ID verification",
            sections: [
              {
                label: "Personal Information",
                form: [
                  {
                    label: "First Name",
                    name: "firstName",
                    validators: []
                  },
                  {
                    label: "Middle Name",
                    name: "middleName",
                    validators: []
                  },
                  {
                    label: "Last Name",
                    name: "lastName",
                    validators: []
                  },
                  {
                    label: "Date of Birth",
                    name: "dob",
                    validators: []
                  }
                ]
              },
              {
                label: "Billing Information",
                form: [
                  {
                    label: "Billing Phone",
                    name: "phone",
                    validators: []
                  },
                  {
                    label: "Billing Country",
                    name: "billingCountry",
                    validators: []
                  },
                  {
                    label: "Billing Street Address",
                    name: "billingStreetAddress",
                    info: "(100 Washington Way)",
                    validators: []
                  },
                  {
                    label: "Billing State",
                    name: "state",
                    info: "Abbreviation only",
                    validators: []
                  },
                  {
                    label: "Billing City",
                    name: "billingCity",
                    validators: []
                  },
                  {
                    label: "Billing Zip",
                    name: "billingZip",
                    type: "text",
                    validators: []
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: "Go Back",
            nextPageLabel: "Upload your ID",
            sections: [
              {
                label: "ID Verification",
                form: [
                  {
                    label: "Type of ID you want to upload",
                    name: "DocumentType",
                    validators: []
                  },
                  {
                    label: "Document Country",
                    name: "DocumentCountry",
                    validators: []
                  },
                  {
                    label: "Document State",
                    name: "DocumentState",
                    validators: []
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: "Go Back",
            nextPageLabel: "Last step",
            sections: [
              {
                label: "ID Verification",
                form: [
                  {
                    label: "",
                    name: "scandata",
                    validators: []
                  },
                  {
                    label: "Image of the back of your Drivers License",
                    name: "backsideimagedata",
                    type: "country",
                    validators: ["required"]
                  },
                  {
                    placeholder: "Upload selfie",
                    name: "faceimages"
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: "Go Back",
            nextPageLabel: "Confirm and Submit",
            sections: [
              {
                label: "ID Verification",
                form: [
                  {
                    label: "Nationality",
                    name: "memo1",
                    type: "text",
                    validators: ["required"]
                  },
                  {
                    label: "Country of Birth",
                    name: "memo2",
                    type: "country",
                    validators: ["required"]
                  },
                  {
                    label: "Tax ID",
                    name: "memo3",
                    type: "text",
                    validators: ["required"]
                  },
                  {
                    label: "Tax Country",
                    name: "memo4",
                    type: "country",
                    validators: ["required"]
                  },
                  {
                    label: "Sources of Funds",
                    name: "memo5",
                    type: "text",
                    validators: ["required"]
                  },
                  {
                    label: "Sources of Wealth",
                    name: "memo6",
                    type: "text",
                    validators: ["required"]
                  }
                ]
              },
              {
                label: "ID Verification",
                form: [
                  {
                    label: "Proof of address",
                    name: "memo7",
                    type: "upload",
                    validators: ["required"],
                    maxSize: 3.8
                  },
                  {
                    label: "Bank Statement",
                    name: "memo8",
                    type: "upload",
                    validators: ["required"],
                    maxSize: 3.8
                  },
                  {
                    label: "Proof of Funds",
                    name: "memo9",
                    type: "upload",
                    validators: ["required"],
                    maxSize: 3.8
                  }
                ]
              }
            ]
          }
        ]
      }

    ],
    "highlightStyle": "star"
  },
  Settings: {
    demoMode: true
  },
  SimpleExchange: {
    active: true,
    route: '/external-exchange'
  },
  TradingLayout: {
    chart: "LightWeight",
  },
  SignupForm: {
    /*useEmailAsUsername: false,
    additionalFields: [{
      label: "First Name",
      name: "firstName",
      type: "text",
      validators: ["required"]
    }],*/
    privacyPolicyLink: "https://www.kiiex.io/politicadeprivacidad",
    termsAndServicesLink: "https://www.kiiex.io/terminosycondiciones",
    active: true
  },
};
