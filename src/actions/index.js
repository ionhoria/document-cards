import { FETCH_CARDS } from './types'

export const fetchCards = () => dispatch => {
  // asyncAPIRequest.then(...
  dispatch({
    type: FETCH_CARDS,
    payload: [
      {
        id: 1,
        name: 'Useful Utility Token',
        type: 'Application Form',
        status: 'Draft',
        graphics: 'form',
        actions: ['Open draft', 'Delete draft']
      },
      {
        id: 2,
        name: 'BioMedical Startup',
        type: 'Application Form',
        status: 'Submitted',
        graphics: 'form',
        actions: ['View transaction', 'View Document', 'Cancel application']
      },
      {
        id: 3,
        name: 'BioMedical Startup',
        type: 'Application Form',
        status: 'Rejected',
        graphics: 'form',
        actions: ['View transaction', 'View Document'],
        alert
      },
      {
        id: 4,
        name: 'BioMedical Startup',
        type: 'Application Form',
        status: 'Approved',
        graphics: 'form',
        actions: []
      },
      {
        id: 5,
        name: 'BioMedical Startup',
        type: 'Share Certificate',
        status: 'Issued',
        graphics: 'certificate',
        actions: []
      }
    ]
  })
}
