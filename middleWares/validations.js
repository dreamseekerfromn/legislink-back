//ny zip
//6390	6390
//10001	14975
const zipValidation = async (req, res, next) => {
    const zip = Number(req.body.zip)
    if(Number.isInteger(zip)){
        if((zip >= 10001 && zip <= 14975) || zip === 6390){
            next();
        } else {
            return res.status(400).json({error : "zip code is not from NY"});
        }
    } else {
        return res.status(400).json({error : "zip is invalid"});
    }
};