import { FastField } from 'formik';
import JMoment from "jalali-moment";
import React, { useEffect, useState } from 'react';
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const months = [
    { id: 1, value: "فروردین" },
    { id: 2, value: "اردیبهشت" },
    { id: 3, value: "خرداد" },
    { id: 4, value: "تیر" },
    { id: 5, value: "مرداد" },
    { id: 6, value: "شهریور" },
    { id: 7, value: "مهر" },
    { id: 8, value: "آبان" },
    { id: 9, value: "آذر" },
    { id: 10, value: "دی" },
    { id: 11, value: "بهمن" },
    { id: 12, value: "اسفند" },
]
const years = [1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401]
const DatePickerNew = ({ formik, name, className }) => {

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [show, setShow] = useState(false)

    useEffect(() => {
        let now = JMoment();
        setDay(now.jDate());
        setMonth(now.jMonth() + 1);
        setYear(now.jYear());
    }, [])

    const handleShowDateConfig = () => {
        setShow(true)
    }
    const handleSetInputDate = (e) => {
        e.stopPropagation()
        formik.setValues({
            ...formik.values,
            [name]: `${day} / ${month} / ${year}`
        })
        setShow(false)
    }


    return (
        <div className="form-date-part col s4 input-field">
            <span onClick={handleShowDateConfig}>
                <FastField disabled={true} className={className} id="dateofbirth"
                    type="text" name={name}
                />
            </span>
                    <div className='form-part-date'>
                        <div className='col s4 day-container'>
                            <select className='' value={day} onChange={(e) => setDay(e.target.value)}>
                                {days.map(d => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col s4 month-container'>
                            <select className='' value={month} onChange={(e) => setMonth(e.target.value)}>
                                {months.map(m => (
                                    <option key={m.id} value={m.id}>{m.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col s4 year-container'>
                            <select className='' value={year} onChange={(e) => setYear(e.target.value)}>
                                {years.map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col s1 icon-date' onClick={handleSetInputDate}>
                            <i className='fa fa-check'></i>
                        </div>
                    </div>
        </div>
    );
}

export default DatePickerNew;