import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useContext } from "react";
import AlertDialog from "../../helper/alertDialog";
import ToastMessage from "../../toast";
import { UserContext } from "../../util/maincontext";
import { formList } from "./formLists";
import RegularForm from "./regularForm";

const RegularPanel = React.memo(({ regularAddedList, pageData, ui, uiRefresh }) => {
    const alertRef = useRef();
    const { scrollRef } = useContext(UserContext);
    const addGeneral = () => {
        let idx = regularAddedList.current.findIndex(rec => typeof rec.saved !== 'undefined');
        if (idx !== -1) {
            ToastMessage({ type: 'error', message: 'Please save regular details!', timeout: 1000 });
            return;
        }
        regularAddedList.current.push({ ...formList.regular, id: nanoid() });
        uiRefresh(Date.now());
        setTimeout(() => scrollRef.current.scrollToBottom(), 200);
    }

    return (
        <div className="w-full">
            <AlertDialog ref={alertRef} title={"Confirm to Delete?"} />
             <div className="flex justify-end">
                <button
                    className="bg-dodge-d px-3 py-1.5 text-white text-sm shadow-md flex items-center hover:bg-dodge-b"
                    onClick={addGeneral}         
                ><i className='bx bx-plus mr-1 text-lg'></i> Add General</button>
            </div>
            {regularAddedList.current.map((item, idx) => (
                <div className="mt-5" key={item.id}>
                    <RegularForm
                        form={item}
                        ui={ui}
                        uiRefresh={uiRefresh}
                        alertRef={alertRef}
                        pageData={pageData}
                        recordIndex={idx}
                        regularAddedList={regularAddedList}
                    />
                </div>
            ))}
        </div>
    );
});

export default RegularPanel;