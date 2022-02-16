 export class CardInfoElement extends HTMLElement {

    constructor(){
        super();
        
        this.attachShadow({
            mode:'open'
        })

        this.template = document.querySelector('#card').content
        this.shadowRoot.appendChild(this.template.cloneNode(true))
    }

    connectedCallback(){

        if(!this.nombre){
            this.nombre = "";            
        }
        if(!this.apellidoPaterno){
            this.apellidoPaterno = "";
        }
        if(!this.apellidoMaterno){
            this.apellidoMaterno = "";
        }
        if(!this.imagen){
            this.imagen = "";
        }
        if(!this.color){
            this.color = "";
        }
        if(!this.edad){
            this.edad = "";
        }
    }

    get nombre(){
        return this.getAttribute('nombre')
    }
    set nombre(value){
        this.setAttribute('nombre', value)
    }

    get apellidoPaterno(){
        return this.getAttribute('apellidoPaterno')
    }
    set apellidoPaterno(value){
        this.setAttribute('apellidoPaterno', value)
    }

    get apellidoMaterno(){
        return this.getAttribute('apellidoMaterno')
    }
    set apellidoMaterno(value){
        this.setAttribute('apellidoMaterno', value)
    }

    get imagen(){
        return this.getAttribute('imagen')
    }
    set imagen(value){
        this.setAttribute('imagen', value)
    }

    get color(){
        return this.getAttribute('color')
    }
    set color(value){
        this.setAttribute('color', value)
    }

    get edad(){
        return this.getAttribute('edad')
    }
    set edad(value){
        this.setAttribute('edad', value)
    }

    get city(){
        return this.getAttribute('city')
    }
    set city(value){
        this.setAttribute('city', value)
    }

    
    static get observedAttributes() {
        return ['nombre','apellido-paterno','apellido-materno','imagen', 'color', 'edad', 'city'];
    }
    attributeChangedCallback(attr, viejoValor, nuevoValor){
        /* console.log(`${attr} ha cambiado de ${viejoValor} a ${nuevoValor}`) */
        

        if(viejoValor !== nuevoValor){
            switch(attr) {
                case 'nombre':
                    this.nombre = nuevoValor;
                    this.shadowRoot.querySelector('#nombre').innerText = this.nombre
                    break;
                case 'apellido-paterno':
                    this.apellidoPaterno = nuevoValor;
                    this.shadowRoot.getElementById('apePaterno').innerText = this.apellidoPaterno
                    break;
                case 'apellido-materno':
                    this.apellidoMaterno = nuevoValor;
                    this.shadowRoot.getElementById('apeMaterno').innerText = this.apellidoMaterno
                break;
                case 'imagen':
                    this.img = nuevoValor;
                    this.shadowRoot.getElementById('imagen').src = this.img + ".jpg"
                break;
                case 'color':
                    this.color = nuevoValor;
                    this.shadowRoot.getElementById('color').style.color = this.color
                break;
                case 'edad':
                    this.edad = nuevoValor;
                    this.shadowRoot.getElementById('edad').innerText = this.edad
                break;
                case 'city':
                    this.ciudad = nuevoValor;
                    this.shadowRoot.getElementById('ciudad').innerText = this.ciudad
                break;
           }
        }
    }
    
}

/* Defino mi etiqueta */
window.customElements.define("card-info", CardInfoElement);
/*  */

