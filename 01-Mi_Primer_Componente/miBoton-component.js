export class MiBotonElement extends HTMLElement {  
    
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        const boton = document.createElement('button');
        boton.textContent = 'Incrementar';

        const slot = document.createElement('slot')

        this.shadowRoot.appendChild(boton);
        this.shadowRoot.appendChild(slot);

        boton.addEventListener('click', ()=>{
            console.log("escuchando boton dentro del componente")
            this.dispatchEvent(new CustomEvent('mi-boton-click',{
                bubbles: true,
                composed: true,
                detail:'click en el boton'
            }))
        })
    }
}

customElements.define("mi-boton", MiBotonElement);