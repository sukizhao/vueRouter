export default function () {
    // let arr =[
    //     {
    //         title:'学习',
    //         children:[
    //             {
    //                 title: "杂志",
    //                 children:[
    //                     {
    //                         title:"电脑杂志",
    //                         children:[

    //                             {title:"大众软件"}
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 title: "纸质书"
    //             },
    //             {
    //                 title:'电子书',
    //                 children:[
    //                     {
    //                         title:'文学',                                         
    //                         children:[
    //                             {
    //                                 title:'茶馆'                                                   
    //                             },
    //                             {
    //                                 title:'红与黑'
    //                             },
    //                             {
    //                                 title: "傅雷家书"
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }

    //         ]
    //     },
    //     {
    //         title:'电影',
    //         children:[
    //             {
    //                 title:'美国电影3'
    //             },
    //             {
    //                 title:'日本电影'
    //             },
    //             {
    //                 title:"23"
    //             }
    //         ]                  
    //     }
    // ]
    let arr = [{
        id: "a",
        title: "北京",
        expand: true,
        nodeKey: 0,
        children: [{
                id: "a1",
                nodeKey: 1,
                title: "大兴",
                expand: true,
                children: [{
                        id: "a1-1",
                        title: "西城区",
                        nodeKey: 2,
                        expand: true,
                        children: [{
                                id: "a1-1-1",
                                nodeKey: 3,
                                title: "北京西站"
                            },
                            {
                                id: "a1-1-2",
                                nodeKey: 4,
                                title: "湾子站"
                            }
                        ]
                    },
                    {
                        id: "a1-2",
                        nodeKey: 5,
                        title: "朝阳区"
                    }
                ]
            },
            {
                id: "a2",
                title: "上海",
                nodeKey: 6,
                expand: true,
                children: [{
                        id: "a2-1",
                        nodeKey: 7,
                        title: "北京南站"
                    },
                    {
                        id: "a2-1",
                        nodeKey: 8,
                        title: "大港区"
                    }
                ]
            }
        ]
    }]
    return arr;
} // end function