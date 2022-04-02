AFRAME.registerComponent("tour",{
    schema:{
        state:{type:"string",default:"places-list"},
        selectedCard:{type:"string",default:"#place1"}
    },
    tick:function(){
        const {state} = this.el.getAttribute("tour")
        if(state==="view"){
            this.hideEl([this.placesContainer]);
            this.showView();
        }
    },
    init:function(){
        this.placesContainer = this.el;
        this.createPlace();
    },
    hideEl:function(){
        elList.map((e)=>{
            el.setAttribute("visible",false)
        })
    },
    showView:function(){
        const {selectedCard} = this.data;
        const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material",{
            src:`./assets/360_images/${selectedCard}/place-${id}.jpg`
        })
    },
    createPlace:function(){
        const details = {
            garden:{
                position:{x:8,y:-2,z:-5},
                rotation:{x:0,y:-90,z:0},
                src:"./assets/thumbnails/garden.png",
                title:"Garden",
                id:"garden"
            },
            main_gate:{
                position:{x:-4.6,y:-5.5, z:125},
                rotation:{x:180,y:0,z:0},
                src:'./assets/thumbnails/main_gate.png',
                title:'Main Gate',
                id:'main_gate'
            },
            home:{
                position:{x:-9,y:34,z:-100},
                rotation:{x:0,y:0,z:0},
                src:'./assets/thumbnails/home.png',
                title:"Home",
                id:"home"
            }
        };

        for(var key in details){
            const item = details[key];
            const thumbNail = this.createThumbnail(item);
            const title = this.createTitle(item);
            thumbNail.appendChild(title);
            this.placesContainer.appendChild(thumbNail);
        }
    },
    createThumbnail:function(item){
        const entityEl = document.createElement("a-entity");
        const id = `place-${item.id}`;
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("id",id);
        entityEl.setAttribute("geometry",{
            primitive:"circle",
            radius:1
        });
        entityEl.setAttribute("position",item.position);
        entityEl.setAttribute("rotation",item.rotation);
        entityEl.setAttribute("material",{src:item.src, opacity:0.6});
        entityEl.setAttribute("cursor-listener",{});
        return entityEl;
    },
    createTitle:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:25,
            color:"e65100",
            value:item.title
        })
        const elPosition = {x:-2,y:-2,z:-2};
        entityEl.setAttribute("position",elPosition);
        entityEl.setAttribute("visible",true);
        return entityEl;
    },
})