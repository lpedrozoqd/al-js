class AnyClass{
    constructor(element){
        //permite tener una ref. débil de un objeto a otro y así
        //evitar que el garbage-collector de js lo 'recoja'
        this.ref = new WeakRef(element); 
    }
}