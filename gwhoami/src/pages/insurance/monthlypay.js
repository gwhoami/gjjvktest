import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useContext } from "react";
import AlertDialog from "../../helper/alertDialog";
import ToastMessage from "../../toast";
import { UserContext } from "../../util/maincontext";
import { formList } from "./formLists";
import MonthlypayForm from "./monthlypayForm";

const MonthlypayPanel = React.memo(({ monthlypayAddedList, pageData, ui, uiRefresh }) => {
    const alertRef = useRef();
    const { scrollRef } = useContext(UserContext);
    const addMonthlypay = () => {
        let idx = monthlypayAddedList.current.findIndex(rec => typeof rec.saved !== 'undefined');
        if (idx !== -1) {
            ToastMessage({ type: 'error', message: 'Please save Monthlypay details!', timeout: 1000 });
            return;
        }
        monthlypayAddedList.current.push({ ...formList.monthlypay, id: nanoid() });
        uiRefresh(Date.now());
        setTimeout(() => scrollRef.current.scrollToBottom(), 200);
    }

    return (
        <div className="w-full">
            <AlertDialog ref={alertRef} title={"Confirm to Delete?"} />
             <div className="flex justify-end">
             <div className="w-3/4 justify-center">
                    <h1>Monthly Payment</h1>
                </div>
                <button
                    className="bg-dodge-d px-3 py-1.5 text-white text-sm shadow-md flex items-center hover:bg-dodge-b"
                    onClick={addMonthlypay}         
                ><i className='bx bx-plus mr-1 text-lg'></i> Add Monthly-Payment</button>
            </div>
            {monthlypayAddedList.current.map((item, idx) => (
                <div className="mt-5" key={item.id}>
                    <MonthlypayForm
                        form={item}
                        ui={ui}
                        uiRefresh={uiRefresh}
                        alertRef={alertRef}
                        pageData={pageData}
                        recordIndex={idx}
                        monthlypayAddedList={monthlypayAddedList}
                    />
                </div>
            ))}
        </div>
    );
});

export default MonthlypayPanel;