const DATA_NAME_LOCAL = "dataNVs"
const SEP = "Sếp"
const TRUONG_PHONG= "Trưởng phòng"
const NHAN_VIEN= "Nhân viên"
const ERROR_MSG = "Vui lòng nhập thông tin phù hợp"
const REGEX_ACCOUNT = /^\d{4,6}$/ // regex for only digits and length between 4 and 6
const REGEX_NAME = /^[A-Za-zÀ-Ỹà-ỹ\s]+$/
const REGEX_EMAIL =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const REGEX_PASSWORD = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?/~\\-])[A-Za-z\d!@#$%^&*()_+{}:;<>,.?/~\\-]{6,10}$/
const REGEX_DATE= /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/
const REGEX_SALARY= /^(1\d{6}|1\d{7}|20000000)$/
const REGEX_HOURS = /^(8\d|9\d|1\d{2}|200)$/


export {DATA_NAME_LOCAL, SEP, TRUONG_PHONG, NHAN_VIEN, ERROR_MSG, REGEX_ACCOUNT, REGEX_EMAIL, REGEX_NAME, REGEX_PASSWORD, REGEX_DATE, REGEX_SALARY, REGEX_HOURS}