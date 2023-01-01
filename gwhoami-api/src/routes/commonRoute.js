const { request, response } = require("express");
const express = require("express");
const path = require('path');
var fs = require('fs');
const { default: mongoose } = require("mongoose");
const { EducationList } = require("../models/educationModel");
const { ProfileList } = require("../models/profileModel");
const { InsuranceList } = require("../models/insuranceModel");
const { MedicalList } = require("../models/medicalModel");
const { PropertyList } = require("../models/propertyModel");
const { BankcreditList } = require("../models/bankcreaditModel");
const { CertificateList } = require("../models/certificateModel");
const commonRouter = express.Router();

const findParser = (request) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let modal = getModal(request);
            let result = {}
            let _mode = request.body._mode||'multiple';
            let _search = JSON.parse(request.body._search||{});
            if (_mode === 'id') {
                result = await modal.findById(_search);
            } else if (_mode === 'single') {
                result = await modal.findOne(_search);
            } else if (_mode === 'multiple') {
                result = await modal.find(_search);
            } else {
                reject({message: 'Search parameters failed'});
            }
            modal = null;
            resolve(result);
        } catch(err) {
            reject({message: err.message});
        }
    })

}
commonRouter.post('/common_find', async(request, response)=> {
    try {
        response.json(await findParser(request));
    } catch(err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.post('/common_combine', async(request, response) => {
    try {
        let searchlist = JSON.parse(request.body._list);
        const values = await Promise.all(searchlist.map(itm=>{
            let obj = {body: {}}
            obj.body._modal = itm._modal;
            obj.body._mode = itm._mode;
            obj.body._search = itm._search;
            return findParser(obj);
        }));
        response.json(values);
    } catch(err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.post('/setting_add', async(request, response)=> {
    try {
        const id = require('mongodb').ObjectId;
        const isNew = (request.body._id ? false : true);
        const datainfo = {...request.body.data}
        delete datainfo['_subid'];
        if (isNew) {
            datainfo._id = new id();
            const info = {name: request.body.name, _id: new id(), data: [datainfo]}
            await new SettingList(info).save();
            response.json(info);
        } else {
            datainfo._id = new id();
            await SettingList.updateOne({_id: request.body._id}, {$push: {data: datainfo}})
            response.json(datainfo);
        }
    } catch (err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.post('/common_insert', async(request, response) => {
    try {
        const id = require('mongodb').ObjectId;
        const _data = JSON.parse(request.body._data);
        _data._id = new id();
        let modal = getModal(request);
        const output = await new modal(_data).save();
        response.json(output);
    } catch (err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.post('/common_update',async(request, response) => {
    try {
        let modal = getModal(request);
        const _data = request.body._data;
        const output = await modal.updateOne({_id: _data._id}, JSON.parse(_data.data));
        response.json(output);
    } catch(err) {
        response.status(500).json({success: false, message: err.message});
    }
});
const searchParser = ({_modal, _mode = 'multiple', _find, _select=''}) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let modal = getModal(_modal);
            let result;
            if (_mode === 'single') {
                result = await _select ? modal.findOne({..._find}, _select) : modal.findOne({..._find});
            } else {
                result = await _select ? modal.find({..._find}, _select) : modal.find({..._find});
            }
            modal = null;
            resolve(result);
        }catch(err) {
            reject({message: err.message});
        }
    });
}
commonRouter.post('/common_search', async(request, response) => {
    try {
        let searchlist = request.body._list;
        if (searchlist.length === 1) {
            const single = await searchParser(searchlist[0]);
            response.json(single||[]);
        } else {
            const multi = await Promise.all(searchlist.map(itm=>searchParser(itm)));
            response.json(multi);
        }
    } catch(err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.post('/common_add', async(request, response)=> {
    try {
        let modal = getModal(request);
        let find = {...request.body._find}
        if (find._id === '') {
            const id = require('mongodb').ObjectId;
            find._id = new id();
        }
        const output = await modal.updateOne(find, {...request.body._data},{upsert: true});
        response.json(output);
    } catch (err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.post('/pagination', async(request, response) => {
    try {
        let modal = getModal(request);
        let page = parseInt(request.body._page||'0');
        let limit = parseInt(request.body._limit || '10');
        let select = request.body._select||'';
        modal.find(request.body._find).select(select).sort(request.body._sort).skip(page * limit).limit(limit).exec((err, doc)=>{
            if (err) {
                return response.json(err);
            }
            if (!doc || doc.length === 0) return response.json({total: 0, result: []})
            if (request.body._getcount) {
                modal.countDocuments(request.body._find).exec((count_err, count)=> {
                    if (count_err) {
                        return response.json(err);
                    }
                    return response.json({
                        total: count,
                        result: doc
                    });
                });
            } else return response.json({
                result: doc
            });
        });
    } catch (err) {
        response.status(500).json({success: false, message: err.message});
    }
});

commonRouter.get('/getlogo', async (request, response ) => {
    const file = path.join(__dirname, 'public', "logos\\62b732eaffe1b955aecf7577.png");
    var bitmap = await fs.readFileSync(file, 'base64');
    response.send(bitmap);
});

// commonRouter.post('/pusharray', async(request, response)=>{
//     try {
//         let modal = getModal(request);
//         let find = {...request.body._find}
//         MachineUserList.updateOne()
//     } catch (err) {
//         response.status(500).json({success: false, message: err.message});
//     }
// });

commonRouter.get('/test',async (request, response ) => {
    const ObjectId = mongoose.Types.ObjectId;
    const res = await ProductsList.aggregate([{$match: { _id: ObjectId('62bf02aef91ab27c21cf7627') }}, {$project:{count:{$size:"$accordion"}}}])
    
    response.json(res[0].count);
});

commonRouter.post('/arraypagination', async(request, response) => {
    try {
        let modal = getModal(request);
        let page = parseInt(request.body._page||'0');
        let limit = parseInt(request.body._limit || '10');
        let arraykey = request.body._countKey;
        let filter = {}
        filter[arraykey] = {$slice: [page * limit, limit]}
        modal.findOne(request.body._find, filter).select(request.body._select||'').exec((err, doc)=>{
            if (err) {
                return response.json(err);
            }
            if (!doc || doc.length === 0) return response.json({total: 0, result: []})
            if (request.body._getcount) {
                let find = request.body._find;
                if (request.body._convertId) {
                    find[request.body._convertId] = mongoose.Types.ObjectId(request.body._find[request.body._convertId]);
                }
                modal.aggregate([{$match: find }, {$project:{count:{$size:`$${request.body._countKey}`}}}]).then((output, count_err)=>{
                    if (count_err) {
                        return response.json(err);
                    }
                    return response.json({
                        total: output[0].count,
                        result: doc
                    });
                })
            } else return response.json({
                result: doc
            });
        });
    } catch (err) {
        response.status(500).json({success: false, message: err.message});
    }
});

const insertParser = ({_modal, _find = {}, _data, _condition, _options = {}}) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let modal = getModal(_modal);
            if (_condition === 'new') {
                const id = require('mongodb').ObjectId;
                _find._id = new id();
            }
            if (_options.upsert === undefined)(
                _options.upsert = true
            )
            let result = await modal.updateOne(_find, {..._data}, {..._options});
            modal = null;
            resolve(result);
        }catch(err) {
            reject({message: err.message});
        }
    });
}

commonRouter.post('/common_mutiple_insert', async(request, response)=> {
    try {
        let insertlist = request.body._list;
        if (insertlist.length === 1) {
            const single = await insertParser(insertlist[0]);
            response.json(single);
        } else {
            const multi = await Promise.all(insertlist.map(itm=>insertParser(itm)));
            response.json(multi);
        }

    } catch (err) {
        response.status(500).json({success: false, message: err.message});
    }
});

const getModal = (request) => {
    let modal = undefined;
    switch(request.body ? request.body._modal : request) {
        case 'EductionList': modal = EducationList; break;
        case 'ProfileList': modal = ProfileList; break;
        case 'InsuranceList': modal = InsuranceList; break;
        case 'MedicalList': modal = MedicalList; break;
        case 'PropertyList': modal = PropertyList; break;
        case 'BankcreditList': modal = BankcreditList; break;
        case 'CertificateList': modal = CertificateList; break;
        default: modal = undefined; break;
    }
    return modal;
}

module.exports = commonRouter;