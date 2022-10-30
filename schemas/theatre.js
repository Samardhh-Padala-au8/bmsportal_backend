export default {
    name: 'theatre',
    title: 'Theatre',
    type: 'object',
    fields: [
      {
        name: 'theatreName',
        title: 'Theatre Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'timings',
        title: 'Timings',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
              {title: '9:00am', value: '9:00am'},
              {title: '10:00am', value: '10:00am'},
              {title: '11:00am', value: '11:00am'},
              {title: '12:00pm', value: '12:00pm'},
              {title:'1:00pm',value:'1:00pm'},
              {title:'2:00pm',value:'2:00pm'},
              {title:'3:00pm',value:'3:00pm'},
              {title:'4:00pm',value:'4:00pm'},
              {title:'5:00pm',value:'5:00pm'},
              {title:'6:00pm',value:'6:00pm'},
              {title:'7:00pm',value:'7:00pm'},
              {title:'8:00pm',value:'8:00pm'},
              {title: '9:00pm', value: '9:00pm'},
              {title: '10:00pm', value: '10:00pm'},
              {title: '11:00pm', value: '11:00pm'},
            ]
          }
      },
      
    ],
  }
  