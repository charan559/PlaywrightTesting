

function generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomGmail(): string {
    const username = generateRandomString(8);
    const gmailAddress = `${username}@gmail.com`;
    return gmailAddress;
}


const randomGmail = generateRandomGmail();
console.log(`Random Gmail address: ${randomGmail}`);

export default randomGmail;