AFRAME.registerComponent("cursor-listener",{
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        this.handleMouseClickEvents();
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
                const placeContainer = document.querySelector("#places-container");
                const { state }  = placeContainer.getAttribute("tour");
                if(state === "places-list"){
                    this.handlePlacesListState();
                }
        });
    },
    handlePlacesListState:function(){
        const id = this.el.getAttribute("id");
        const placesId = ["place-home","place-garden","place-main-gate"];
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            });
            this.el.setAttribute("material",{
                opacity:1
            })
        }
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if(id == selectedItemId){
                    el.setAttribute("material",{
                        color:"#0077cc",
                        opacity:1
                    })
                }
            }
        })
    },

    handleMouseClickEvents:function(){
        this.el.addEventListener("click",e=>{
            const placeContainer = document.querySelector("#places-container");
            const {state} = placeContainer.getAttribute("tour");
            if(state=="places-list"){
                const id = this.el.getAttribute("id");
                const placesId = [
                    "place-home","place-garden","place-main-gate"
                ]
                if(placesId.includes(id)){
                    placeContainer.setAttribute("tour",{
                        state:"view",
                        selectedCard:id
                    })
                }
            }
        })
    }
})