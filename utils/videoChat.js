let Disp = require("./Dispatcher");
let videoChat = new Disp();
videoChat.onCallVideo = function (context, payload){
			const { to } = payload;
			const chatType = "contact";
			const type = chatType === "contact" ? "singleChat" : "groupChat";
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			if(chatType === "contact"){
				// this.setState({
				//     showWebRTC: true
				// })
				//WebIM.call.caller = userInfo.userId;
				//WebIM.call.makeVideoCall(to, null, payload.rec, payload.recMerge);
			}
		}
	

module.exports = videoChat