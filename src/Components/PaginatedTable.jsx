import React, { useEffect, useState } from 'react';
import Waiting from './Waiting';

const PaginatedTable = ({ children, data, dataInfo, additionalField, numOfPages, searchParams, loading }) => {

    const [initData, setInitData] = useState(data)
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [seacrhChart, setSearchChart] = useState("");

    useEffect(() => {
        let pCount = Math.ceil(initData.length / numOfPages);
        setPageCount(pCount);
        let pArry = []
        for (let i = 1; i <= pCount; i++) pArry = [...pArry, i];
        setPages(pArry);
    }, [initData])

    useEffect(() => {
        let start = (currentPage * numOfPages) - numOfPages
        let end = (currentPage * numOfPages)
        setTableData(initData.slice(start, end))
    }, [currentPage, initData])

    useEffect(() => {
        setInitData(data.filter(d => d[searchParams.searchField].includes(seacrhChart)));
        setCurrentPage(1);
    }, [seacrhChart, data])

    return (
        <div className='table-search-container'>
            <div className='table-add-new-person'>
                <i className='fas fa-plus'></i>
            </div>
            <div className="search-container">
                <div className="search-child">
                    <div className="input-field">
                        <input
                            type="text"
                            className="validate"
                            placeholder={searchParams.placeholder}
                            onChange={(e) => setSearchChart(e.target.value)}
                        />
                        {/* <label className="">{searchParams.title}</label> */}
                    </div>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
            <div className='table-container'>
                {
                    loading ? (
                        <Waiting />
                    ) : data.length ? (
                        <table className="paginated-table">
                            <thead className="thead">
                                <tr>
                                    {dataInfo.map(i => (
                                        <th key={i.field} >{i.title}</th>
                                    ))}
                                    {
                                        additionalField ? additionalField.map((a, index) => (
                                            <th key={a.id + "__" + index} >{a.title}</th>
                                        )) : null
                                    }
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                {tableData.map(d => (
                                    <tr key={d.id} >
                                        {dataInfo.map(i => (
                                            <th key={i.field + "_" + d.id} >{d[i.field]}</th>
                                        ))}
                                        {
                                            additionalField ? additionalField.map((a, index) => (
                                                <td key={a.id + "_" + index} >{a.elements(d)}</td>
                                            )) : null
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h4 className='' >هیچ کارمندی یافت نشد</h4>
                    )
                }
                {
                    pages.length > 1 ? (
                        <nav aria-label="Page navigation example" className="pagination-container">
                            <ul className="pagination">
                                <li className="pagination-child pointer">
                                    <span className={` ${currentPage == 1 ? "disable" : ""}`}
                                        aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </span>
                                </li>
                                {
                                    pages.map(page => (
                                        <li className="pagination-child pointer" key={page}>
                                            <span className={`${currentPage == page ? "in-page" : ""}`} onClick={() => setCurrentPage(page)}>
                                                {page}
                                            </span>
                                        </li>
                                    ))
                                }

                                <li className="pagination-child pointer">
                                    <span className={` ${currentPage == pageCount ? "disable" : ""}`}
                                        aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    ) : null
                }
            </div>
        </div>
    );
}

export default PaginatedTable;