import JMoment from "jalali-moment";

export const JalaliConvert = (data)=>{
    return JMoment(data).format('jYYYY/jMM/jDD');
};