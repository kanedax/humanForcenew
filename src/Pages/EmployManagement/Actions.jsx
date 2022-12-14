

const Action = ({ rowData }) => {
    return (
        <>
            <i className="fas fa-project-diagram pointer blue-text accent-3 table-icon"
                title="زیرمجموعه">
            </i>
            <i className="fas fa-edit pointer yellow-text accent-3 table-icon"
                title="ویرایش دسته">
            </i>
            <i className="fas fa-list pointer green-text accent-3 table-icon "
                title="افزودن ویژگی">
            </i>
            <i className="fas fa-times pointer red-text accent-3 table-icon"
                title="حذف پرسنل">
            </i>
        </>
    );
}

export default Action;