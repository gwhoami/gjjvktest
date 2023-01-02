import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Tabs from 'react-responsive-tabs';
import { useParams } from "react-router-dom";
import { Spinner } from "../../component/forms";
import { apiPostCall } from "../../helper/API";
import ToastMessage from "../../toast";
import MyLocalStorage from "../../util/mylocalStorage";
import IncomePanel from "./income";
import ReligiousPanel from "./religious";
import IdentityPanel from "./identity";
import EducationPanel from "./education";


const PropertiesTabs = React.memo(() => {
    const [ui, uiRefresh] = useState(-1);
    const pageData = useRef({ init: false, _id: '' });
    const incomeAddedList = useRef([]);
    const religiousAddedList = useRef([]);
    const identityAddedList = useRef([]);
    const educationAddedList = useRef([]);
    
    const { tabid } = useParams();
    useEffect(() => {
        (async () => {
            let search = [{ _modal: 'FinancialList', _find: { userid: MyLocalStorage.getUserId() }, _mode: 'single', _select: 'income religious identity education' }];
            const res = await apiPostCall('/api/common/common_search', { _list: search });
            if (res.isError) {
                ToastMessage({ type: "error", message: res.Error.response.data.message, timeout: 2000 });
                return;
            } else {
                if (res && res.length === 0) {
                    const newrecord = await apiPostCall('/api/common/common_mutiple_insert', { _list: [{ _modal: 'FinancialList', _condition: 'new', _data: { userid: MyLocalStorage.getUserId(), income: [], religious: [], identity: [], education: [] } }] });
                    pageData.current._id = newrecord.upsertedId;
                } else {
                    pageData.current._id = res._id;
                    incomeAddedList.current = res.income || [];
                    religiousAddedList.current = res.religious || [];
                    identityAddedList.current = res.identity || [];
                    educationAddedList.current = res.education || [];
                    
                    
                }
                pageData.current.init = true;
                uiRefresh(Date.now());
            }
        })();
        return () => null;
    }, []);
    if (!pageData.current.init) return <div className="flex w-full h-full justify-center items-center"><Spinner size="60" /></div>
    else return (
        <div className="flex px-6 w-full container justify-center mx-auto pb-5">
            <div className="sm:w-full md:w-full xl:w-3/5 mt-20">
                <Tabs
                    selectedTabKey={tabid === 'income' ? 0 : tabid === 'religious' ? 1 : tabid === 'identity' ? 2 : tabid === 'education' ? 3 : 0} 
                    transformWidth={600}
                    tabClassName="bg-red-100"
                    items={[{
                        title: 'Income',
                        tabClassName: 'customtab',
                        panelClassName: 'custompanel',
                        getContent: () => {
                            return <IncomePanel incomeAddedList={incomeAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                        }
                    }, {
                        title: 'Assets',
                        tabClassName: 'customtab',
                        panelClassName: 'custompanel',
                        getContent: () => {
                            return <ReligiousPanel  religiousAddedList={religiousAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                        }
                    }, {
                        title: 'Liability',
                        tabClassName: 'customtab',
                        panelClassName: 'custompanel',
                        getContent: () => {
                            return <IdentityPanel identityAddedList={identityAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                        }
                    }, {
                        title: 'Monthly_Expense',
                        tabClassName: 'customtab',
                        panelClassName: 'custompanel',
                        getContent: () => {
                            return <EducationPanel educationAddedList={educationAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                        }
                    
                    }]} />
            </div>
        </div>
    );
});

export default PropertiesTabs;
