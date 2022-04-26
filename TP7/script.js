const container = document.querySelector('.container');
const contentMenu = document.querySelector('.content-menu');
fabars = document.querySelector('.fa-bars');

    siteBar = document.createElement('div');
    siteBarText = document.createElement('div');
    // sous_ul = document.createElement('ul');
    li = document.createElement('li');
    sousLi = document.createElement('li');
    ul = document.createElement('ul');
    li.classList.add("mes_list");
    sousLi.classList.add("sousLi");
    siteBar.setAttribute("class","siteBar");
    siteBarText.setAttribute("class","siteBarText");

/*---------------------functions-------------------------------*/

function sideBars() {

    menu=[
            {
                'icon':'fa-gauge-high',
                'text':'Dashboard',
                'badge':'',
                'flech':'fa-angle-down',
                'sous_li':[]
            }        
        ,

        {
        
                'icon':'fa-gauge-high',
                'text':'Widgets',
                'badge':'New',
                'flech':'fa-angle-down',
                'sous_li':[]
        }, 

        {
                    
                'icon':'fa-copy',
                'text':'Layout Option',
                'badge':'10',
                'flech':'fa-angle-down',
                'sous_li':[]
    
        }, 

        {
        
                'icon':'fa-chart-pie',
                'text':'Charts',
                'badge':'',
                'flech':'fa-angle-down',            
                'sous_li' : [ 
                    
                    {
                        'icon':'fa-circle',
                        'text' :'ChartJs',
                        'badge':'',
                        'flech':''
                    },
                                
                    {
                        'icon':'fa-circle',
                        'text':'Float',
                        'badge':'',
                        'flech':''
                    },
                
                    {
                        'icon':'fa-circle',
                        'text' :'Inline',
                        'badge':'',
                        'flech':''
                    },
                
                    {
                        'icon':'fa-circle',
                        'text':'Uplot',
                        'badge':'',
                        'flech':''
                    }
                ]
            },

            {
                'icon':'fa-tree',
                'text':'UI Elements',
                'badge':'',
                'flech':'fa-angle-down',
                'sous_li':[]

            },
        
            {
                'icon':'fa-pen-to-square',
                'text':'Forms',
                'badge':'',
                'flech':'fa-angle-down',
                'sous_li':[]

            },

            {
                'icon':'fa-table',
                'text':'Tables',
                'badge':'',
                'flech':'fa-angle-down',
                'sous_li':[]
            }
    ] 

    createMenu(menu);

    return li; 
}

function createMenu(tab,ul) {
    ul = document.createElement('ul');
    
    tab.forEach(elt => {

        const contentList = document.createElement('div')
        contentList.setAttribute("class","contentList");
        let i1 = document.createElement('i');
        let a = document.createElement('a');
        let span = document.createElement('span');
        let i2 = document.createElement('i');

        i1.classList.add('fa');
        i1.classList.add(elt['icon']);
        a.href='#';
        
        a.innerHTML =elt['text'] ;
        span.innerHTML =elt['badge'] ;

        i2.classList.add('fa');
        if (elt['sous_li'] != null) {
            i2.classList.add(elt['flech']);
            
        }
    
        contentList.appendChild(i1);
        contentList.appendChild(i1);
        contentList.appendChild(a);
        contentList.appendChild(span);
        if(elt['sous_li'] != null){
            ul = document.createElement('ul');
            createMenu(elt["sous_li"],ul);
        }
        contentList.appendChild(i2);

        li.appendChild(contentList);

    });
    siteBarText.appendChild(ul);

}

/* ---------------------Events----------------------*/


fabars.addEventListener('click',()=> {
    
    container.appendChild(contentMenu);
    contentMenu.appendChild(siteBar);
    siteBar.appendChild(siteBarText);
    siteBarText.appendChild(ul);
    
    sideBars();
    ul.appendChild(li);

})