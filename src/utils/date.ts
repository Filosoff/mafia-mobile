import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru')

export const convertDateToNice = (date: string) => moment(date, "DD-MM-YYYY").format("DD MMMM YYYY");
export const getFromNow = (date: string) => moment(date, "DD-MM-YYYY").fromNow();