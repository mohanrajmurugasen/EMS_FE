import { FormType } from '../Types/FormType'

const formCountState = {
  formCount: 'call',
}

export const formCountReducer = (state = formCountState, { type, payload }) => {
  switch (type) {
    case FormType.FORMCOUNT:
      return {
        ...state,
        formCount: payload,
      }
    default:
      return state
  }
}

const formValueState = {
  formValue: {
    firstName: '',
    sureName: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    telePhone: '',
    aadhar: '',
    DOB: '',
    age: '',
    gender: '',
    medicalInsurance: '',
    typeOfInsurance: '',
    govt_ins_Id: '',
    coverage_Amount: '',
    private_ins_id: '',
    private_benefits: '',
    hospital_chart_no: '',
    commends: '',
    benifits: '',
    hospitals: '',
    timeNotified: '',
    timeEnroute: '',
    timeAtScene: '',
    crewPatient: '',
    timeOutScene: '',
    timeAtDestination: '',
    available: '',
    backArea: '',
    responseToScene: '',
    responseFromScene: '',
    crewType: '',
    mileage: '',
    patientContact: '',
    destinationDeterminant: '',
    startDate: '',
    endDate: '',
    dateModified: '',
    serviceCode: '',
    serviceType: '',
    dateOfIncident: '',
    timeOfIncident: '',
    incidentLocation_street: '',
    incidentLocation_city: '',
    incidentLocation_state: '',
    incidentLocation_postalCode: '',
    inci_destinationDeterminant: '',
    graphicLocator: '',
    sceneLocationType: '',
    destinationFacility: '',
    sceneFacility: '',
    destinationLocation_street: '',
    destinationLocation_city: '',
    destinationLocation_state: '',
    destinationLocation_postalCode: '',
    servicePayment_responsibility: '',
    servicePayment_number: '',
    EMS: '',
    patientDisposition: '',
    destinationLocationType: '',
    serviceCodeType: '',
    dateOfInjury: '',
    timeOfInjury: '',
    coResponders: '',
    treatmentRendered: '',
    patientCondition: '',
    patientDisplacement: '',
    suspectedIntoxication: '',
    chiefComplaint: '',
    neroResponse: '',
    bodySystem: '',
    glasGlow: '',
    generalAssessment: '',
    airway: '',
    symptoms: '',
    respiration: '',
    seizure: '',
    toxicExposure: '',
    cardiacArrest: '',
    chestPain: '',
    neonatal: '',
    obstetric: '',
    trauma: '',
    procedureStartTime: '',
    procedureType: '',
    procedureEndTime: '',
    deviceMethod: '',
    technicianID: '',
    deviceSize: '',
    outcome: '',
    successfull: '',
    treatment: '',
    totalTime: '',
    treatmentType: '',
    administrativeRoute: '',
    assessmentTime: '',
    consciousnessLevel: '',
    pulseRate: '',
    siteOfPulseCheck: '',
    temperature: '',
    siteOfTemperatureCheck: '',
    skinColor: '',
    moisture: '',
    systolic: '',
    diastolic: '',
    treatment_respiration: '',
    bloodGlucose: '',
    bloodPressure: '',
    oxygenSaturation: '',
    preOxygen: '',
    postOxygen: '',
    diatolic: '',
    skinCondition: '',
  },
}

export const formValueReducer = (state = formValueState, { type, payload }) => {
  switch (type) {
    case FormType.FORMVALUE:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          [payload.name]: payload.value,
        },
      }
    case FormType.FORMALL:
      return { ...state, formValue: payload }
    default:
      return state
  }
}
