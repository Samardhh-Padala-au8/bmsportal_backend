export default{
    name:'movies',
    title:'Movies',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'cast',
            title:'Cast',
            type:'string'
        },
        {
            name:'language',
            title:'Language',
            type:'string'
        },
        {
            name:'genre',
            title:'Genre',
            type:'string'
        },
        {
            name:'locations',
            title:'Locations',
            type:'number'
        },
        {
            name: 'moviedetails',
            title: 'Movie Details',
            type: 'array',
            of: [{type: 'moviedetails'}],
          },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}