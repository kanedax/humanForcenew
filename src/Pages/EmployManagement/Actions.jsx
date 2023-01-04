import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditPersonelContext } from "../../Context/EditPersonelContext";



const Action = ({ rowData }) => {
    const { setEditId } = useContext(EditPersonelContext)
    const navigate = useNavigate()
    return (
        <>
            <i className="fas fa-project-diagram pointer blue-text accent-3 table-icon"
                title="ثبت و ویرایش اطلاعات نظامی"
                to={'/isarmy'}
                onClick={()=> 
                    navigate("/isarmy", {
                        state : {
                            person : rowData,
                        },
                    })
                }
                >
            </i>
            <Link className="fas fa-edit pointer yellow-text accent-3 table-icon"
                title="ویرایش پرسنل"
                to={'/editemploy'}
                onClick={() => setEditId(rowData.id)}
            >
            </Link>
            <i className="fas fa-list pointer green-text accent-3 table-icon "
                title="ویرایش و افزودن مشخصات"
                to={'/useroptions'}
                onClick={()=>
                    navigate('/useroptions', {
                        state : {
                            person : rowData ,
                        },
                    })}
                >
            </i>
            <i className="fas fa-times pointer red-text accent-3 table-icon"
                title="حذف پرسنل">
            </i>
        </>
    );
}

export default Action;