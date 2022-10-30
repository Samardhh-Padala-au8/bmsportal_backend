import {UserIcon} from '@sanity/icons'

export default {
  name: 'moviedetails',
  title: 'Movie Details',
  type: 'object',
  icon: UserIcon,
  fields: [
    {
      name: 'locationame',
      title: 'Location Name',
      type: 'string',
    },
    {
     name: 'theatre',
    title: 'Theatre',
    type: 'array',
    of:[{type:'theatre'}]
      },
  ],
  
}
