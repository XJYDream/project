class Login {
	constructor(btn) {
		// 找到点击弹框按钮
		// 传参或者直接查找根据实际情况决定
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
		this.timer = false;
		this.startTime = 0;
		this.endTime = 0;
	}
	
	/* bindEvents () {
		// 给登录弹框按钮绑定事件
		this.btn.onclick = this.btnClick.bind(this);
	}
	btnClick () {
		console.log(this);
	} */
	
	bindEvents () {
		// 给登录弹框按钮绑定事件
		/* this.btn.onclick = () => {
			console.log(this);
		} */
		let _this = this;
		this.btn.onclick = function () {
			_this.container.innerHTML =  '<div><span id = "a4">X</span><input type="textarea" id = "a2"><input type = "submit" id = "a3" value = "确认发布"><input type = "button" id = "a6" value = "是否撤销"/></div>';
			// 让container显示并且居中
			tools.showCenter(_this.container);
			// 创建模态层
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);		
		}
		
		// 给删除按钮绑事件（委托给container）
		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			
			var str = '';
			if(_this.container.querySelector("#a2").value !== ""){
				let time = new Date();
				_this.startTime = time.getTime();
			}
			// 利用case穿透
			switch(target.id) {
				// console.log(11);
				case "a3":
				console.log(11);
					str = document.querySelector("#a2").value;
					document.body.innerHTML = str;
					// --- 发送后端进行登录 ----
					console.log(str);
					break;
				case "a4" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
					break;
			}	
			let time = new Date();
			this.endTime = time.getTime();
			let disTime = this.endTime - _this.startTime;
			console.log(this.endTime);
			console.log(_this.startTime);

			if(disTime < 120000){
				if(target.id = "a6"){
						_this.container.querySelector("#a2").value = "";
				}
				// console.log(11);			
			}else{
				_this.container.querySelector("div").querySelector("#a6").setAttribute("display","none");
			}
		}
	}
}
