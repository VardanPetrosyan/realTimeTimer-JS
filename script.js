class Timer {
	constructor(timeWhen){
		this.setTime = timeWhen
		this._sec = 0;
		this._startTime = 0;
		this._timeOut = false
	}
	get sec(){
		return this._sec
	}
	set sec(value){
		return this._sec = value
	}
	get startTime(){
		return this._startTime
	}
	set startTime(value){

		return this._startTime = value
	}
    start(){
    	this._timeOut = true
    	this.timer(this._sec)
    }

    stop(){
    	this._timeOut = false
    }
    reset(){
		this._timeOut = false
		this.sec = 0
		document.querySelector('#timer-box').innerHTML = this.sec
    }
    timer(passed = 0){
    	let that = this
    	let passedTime =  passed
		this.startTime = Date.now()
    	setTimeout(()=>{
    		if(that._timeOut === true && that.sec < this.setTime){
    			passedTime += Math.round((Date.now() - that.startTime)/1000)
    			that.sec = passedTime
		 		document.querySelector('#timer-box').innerHTML = that.sec
    			that.timer(passedTime)
    		}else{
    			clearTimeout()
    		}
    	}, 1000)
    	
    }
}
let timer1 = new Timer(40); //Date format will be
// timer1.start(); // starts timer
// timer1.stop(); //stops timer at that point
// timer1.reset(); //sets timer to 0
let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let resetBtn = document.querySelector('#reset')
startBtn.addEventListener('click', ()=>{
	timer1.start();
})
stopBtn.addEventListener('click', ()=>{
	timer1.stop();
})
resetBtn.addEventListener('click', ()=>{
	timer1.reset();
})

