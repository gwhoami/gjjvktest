import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useContext } from "react";
import AlertDialog from "../../helper/alertDialog";
import ToastMessage from "../../toast";
import { UserContext } from "../../util/maincontext";
import { formList } from "./formLists";
import OtherForm from "./otherForm";

const OtherPanel = React.memo(({ medicationAddedList, pageData, ui, uiRefresh }) => {
    const alertRef = useRef();
    const { scrollRef } = useContext(UserContext);
    const addMedication = () => {
        let idx = medicationAddedList.current.findIndex(rec => typeof rec.saved !== 'undefined');
        if (idx !== -1) {
            ToastMessage({ type: 'error', message: 'Please save medication details!', timeout: 1000 });
            return;
        }
        medicationAddedList.current.push({ ...formList.medication, id: nanoid() });
        uiRefresh(Date.now());
        setTimeout(() => scrollRef.current.scrollToBottom(), 200);
    }

    return (
        <div className="w-full">
            <AlertDialog ref={alertRef} title={"Confirm to Delete?"} />
            <div className="flex justify-end">
                <button
                    className="bg-dodge-d px-3 py-1.5 text-white text-sm shadow-md flex items-center hover:bg-dodge-b"
                    onClick={addMedication}
                ><i className='bx bx-plus mr-1 text-lg'></i> Add Medication</button>
            </div>
            {medicationAddedList.current.map((item, idx) => (
                <div className="mt-5" key={item.id}>
                    
                    <OtherForm
                        form={item}
                        ui={ui}
                        uiRefresh={uiRefresh}
                        alertRef={alertRef}
                        pageData={pageData}
                        recordIndex={idx}
                        medicationAddedList={medicationAddedList}
                    />
                </div>
            ))}
        </div>
    );
});

export default OtherPanel;