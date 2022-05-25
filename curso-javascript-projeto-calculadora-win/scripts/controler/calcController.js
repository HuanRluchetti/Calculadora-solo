class calcController {
    //a inha te ama ama ama ama.
    
    constructor () {
        this._displayCalc = document.querySelector('#display')
        this._thisOperation = []
        this.viewfinder()
        this.btnIdentify()
    }

    viewfinder() {
        this.displayCalc = 0
    }

    clearAll() {
        this._thisOperation = []
    }

    clearEntry() {
        this._thisOperation.pop()
    }

    backspace() {

    }

    addEventListenerAll(elements, events, fn) {

        events.split(' ').forEach(events => {
            elements.addEventListener(events, fn, false)
        })
    }

    btnIdentify() {
        const buttons = document.querySelectorAll('.row > button')
    
        buttons.forEach((button, index) => {
            this.addEventListenerAll(button, 'click drag', e=>{

                const textBtn = button.outerHTML.replace('</button>','')
                .replace('<button type="button" class="btn btn-number col-sm">','')
                .replace('<button type="button" class="btn btn-others col-sm">','')

                this.execBtn(textBtn)
            })
        })
    }

    execBtn(value) {

        switch(value) {
            case "CE":
                this.clearEntry()
            break

            case "C":
                this.clearAll()
            break

            case "←":
                this.backspace()
            break

            case "X":
                this.operation('*')
            break
            case "-":
                this.operation('-')
            break
            case "+":
                this.operation('+')
            break
            case "÷":
                this.operation('/')
            break
            case "%":
                this.operation('%')
            break

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.operation(value)
            break        
        }   
    }

    operation(value) {

        if (isNaN(value)) {
            
            if (!this.isAnOperator(value)) {
                this._thisOperation.push(value)
                console.log('operador => ', value, 'array => ', this._thisOperation)
            } else {
                console.log('deu ruim')
            }

        } else {
            console.log(value)

            const last = this._thisOperation.pop()
            console.log('valor do last', last)

            if (last != undefined) {
                this._thisOperation = [last + value]
                console.log('array => ',this._thisOperation)

            } else {              
                this._thisOperation.push(value)
                console.log(this._thisOperation)      
            }                          
        }
    }

    isAnOperator(value) {
        if (['+','-','*','/','%'].indexOf(value) > -1) true
    }

    get displayCalc () {
        return this._displayCalc.innerHTML
    }

    set displayCalc (value) {
        return this._displayCalc.innerHTML = value
    }
}