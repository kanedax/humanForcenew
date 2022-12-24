import JMoment from "jalali-moment";

export const JalaliConvert = (data)=>{
    return JMoment(data).format('jYYYY/jMM/jDD');
};
export const convertToMiladi = (dateOfBirth)=>{
    return JMoment(dateOfBirth, 'jD / jM / jYYYY').format('YYYY-M-D')

}