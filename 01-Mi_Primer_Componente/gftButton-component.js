
const template = document.createElement('template');
template.innerHTML = `  <style> 
                            #boton{
                                background-color: #f44336;
                                padding: 15px;
                                border-radius: 15px;
                                color: white;
                                border-color: tomato;  
                                border-width: 1px;
                            }
                        </style>

                        <button id="boton">Incrementar edad</button>`


export class GftButtonElement extends HTMLElement {  
    
    constructor(){
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.getElementById('boton').addEventListener('click', event => {
            var edad = parseInt( document.querySelector('card-info').getAttribute('edad'))
            document.querySelector('card-info').setAttribute('edad', edad + 1)
        })
    }

    connectedCallback(){
        console.log("boton");

        if(!this.color ){
            this.color = "";    
        }

        if(!this.bordeado ){
            this.bordeado = "";    
        }
    }

    get color(){
        return this.getAttribute('color')
    }
    set color(value){
        this.setAttribute('color',value)
    }

    get bordeado(){
        return this.getAttribute('bordeado')
    }
    set bordeado(value){
        this.setAttribute('bordeado',value)
    }

    static get observedAttributes(){
        return ['color', 'bordeado']
    }
    attributeChangedCallback(attr, valorViejo, valorNuevo) {
        if(valorViejo !== valorNuevo){
            console.log(`${attr} ah cambiado de ${valorViejo} a ${valorNuevo}`)
            
            switch(attr){
                case 'color':
                    this.color = valorNuevo;
                    this.shadowRoot.getElementById('boton').style.backgroundColor = this.color;
                break;
                case 'bordeado':
                    this.bordeado = valorNuevo;
                    this.shadowRoot.getElementById('boton').style.borderWidth = this.bordeado + "px";
                break;
            }
        }
    }    

}

window.customElements.define("gft-button", GftButtonElement);