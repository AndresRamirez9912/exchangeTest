function CreateProvider(){
    return new ethers.providers.JsonRpcProvider("https://a.sentry.testnet.kiivalidator.com:8645/");
}

function CreateSigner(provider){
    return new ethers.Wallet(process.env.REACT_APP_AUTH_KEY!, provider);
}

function CreateContractInstance(signer){
    return new ethers.Contract(
    process.env.CONTRACT_ADDRESS!,
    certificationAbi,
    signer
  );    
}

async function SignTC(signTC, usuario, email){
    try {
        const tx = await signTC.createCertification(
        usuario,
        email,
        new Date().toUTCString()
    );
    const receipt = await tx.wait();
    console.log("Receipt", receipt);
    return receipt;
    } catch (error) {
        console.error("Error signing T&C",error)
    }
}