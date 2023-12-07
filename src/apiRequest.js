

const aipRequest = async (url = '', optionObj = null, errM = null) => {
    try {
        const response = await fetch(url, optionObj);
        if (!response.ok) throw Error('Error! reload the app')
    } catch(err) {
         errM = err.message;
     }finally {
        return errM;
     }
}


export default aipRequest;