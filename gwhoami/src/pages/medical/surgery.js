import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useContext } from "react";
import AlertDialog from "../../helper/alertDialog";
import ToastMessage from "../../toast";
import { UserContext } from "../../util/maincontext";
import { formList } from "./formLists";
import SurgeryForm from "./surgeryForm";

const SurgeryPanel = React.memo(({ surgeryAddedList, pageData, ui, uiRefresh }) => {
    const alertRef = useRef();
    const { scrollRef } = useContext(UserContext);
    const addSurgery = () => {
        let idx = surgeryAddedList.current.findIndex(rec => typeof rec.saved !== 'undefined');
        if (idx !== -1) {
            ToastMessage({ type: 'error', message: 'Please save Surgery details!', timeout: 1000 });
            return;
        }
        surgeryAddedList.current.push({ ...formList.surgery, id: nanoid() });
        uiRefresh(Date.now());
        setTimeout(() => scrollRef.current.scrollToBottom(), 200);
    }

    return (
        <div className="w-full">
            <AlertDialog ref={alertRef} title={"Confirm to Delete?"} />
             <div className="flex w-full">
                <div className="w-3/4 justify-center">
                    <h1>Surgery Details</h1>
                </div>
                <div className="w-1/4 justify-end">
                <button
                    className="bg-dodge-d px-3 py-1.5 text-white text-sm shadow-md flex items-end hover:bg-dodge-b"
                    onClick={addSurgery}
                ><i className='bx bx-plus mr-1 text-lg'></i> Add Surgery Details</button>
                </div>
            </div>
            {surgeryAddedList.current.map((item, idx) => (
                <div className="mt-5" key={item.id}>
                    <SurgeryForm
                        form={item}
                        ui={ui}
                        uiRefresh={uiRefresh}
                        alertRef={alertRef}
                        pageData={pageData}
                        recordIndex={idx}
                        surgeryAddedList={surgeryAddedList}
                    />
                </div>
            ))}
        </div>
    );
});

export default SurgeryPanel;