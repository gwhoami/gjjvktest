export const formList = {
    regular: {
        saved: false,
        isSubmit: true,
        firstName: '',
        lastName: '',
        regularName:'',
        regularType: '',
        blood:'',
        age:'',
        country: '',
        state: '',
        zipcode: '',
        dob: '',
        bodyMI:'',
        bcbs:'',
        medicalShop:'',
        isRecentRegular: true,
        regularComments: '',
        documents: []
    },
    regularMenu: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    regularType: ['Male', 'Female', 'Other'],
    localeByCountry: {
        'IN': 'en-IN',
        'US': 'en-US'
    },
    currencyByCountry: {
        'IN': 'INR',
        'US': 'USD'
    },
    hospitalName:['Medi Cure', 'Medi Care', 'Miniute Clinic'],
    bloodGroup:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    doctorName:['Rajashekar', 'Vijaya', 'Latha'],
    immuneName:['Covid', 'Flu' , 'Booster'],
    apgarScore:['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
    otherScore:['A+', 'A', 'B+'],
    immune: {
        saved: false,
        isSubmit: true,
        hospitalName: '',
        from:'',
        country: '',
        state: '',
        zipcode: '',
        lastDose: '',
        doseName:'',
        immuneDose:true,
        age:'',
        isRecentImmune: true,
        immuneComments: '',
        documents: [],
    },
    doseName:['first','second'],
    immuneType: ['Flu','Covid'],
    optDose:['Yes', 'No'],
    secondDose:['Yes', 'No'],
    optDoseValues:['Yes', 'No'],
    allergi: {
        saved: false,
        isSubmit: true,
        country: '',
        state: '',
        zipcode: '',
        from: '',
        isRecentBusiness: true,
        allergiComments: '',
        documents: [],
    },
    
    healthinfo: {
        saved: false,
        isSubmit: true,
        firstName: '',
        lastName: '',
        height:'',
        weight:'',
        age:'',
        country: '',
        state: '',
        zipcode: '',
        from: '',
        bloodPressure:'',
        bodymIndex:'',
        bcbs:'',
        medicalShop:'',
        isRecentRegular: true,
        healthinfoComments: '',
        documents: []
    },
    healthinfoType: ['TB', 'Flue', 'FEver'],
    surgery: {
        saved: false,
        isSubmit: true,
        hospitalName: '',
        dischargeDate:'',
        surgeryUnit:'',
        insuranceHelp:true,
        insureCovered:'',
        isRecentSurgery: true,
        surgeryComments: '',
        documents: [],
    },
    surgeryType: ['LLC', 'Ortho'],
    status:['Yes', 'No'],
    medication: {
        saved: false,
        isSubmit: true,
        medicineName: '',
        medicineDose: '',
        providerName:'',
        pharmacyDetail:'',
        from: '',
        to: '',
        isRecentMedication: true,
        isNeedRefill:true,
        medicationComments: '',
        documents: [],
    },
    medicationType: ['Flu' , 'Cold'],
    refill:['Yes' , 'No'],
    college: {
        collegeName: '',
        saved: false,
        isSubmit: true,
        blood:'',
        year:'',
        place:'',
        country:'',
        state:'',
        zipcode:'',
        documents: []
        

        // majors: [
        //     {major: '', year: '', place: '', country: '', state: '', zipcode: ''}
        // ]
    },
    collegeMenu: ['Computer Science', 'Communications', 'Government/Political Science', 'Biology']
};