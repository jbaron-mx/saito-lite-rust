const ChatManagerSmallTemplateGeneric = (call_type) => {
    return `
      <div class="small-video-chatbox" id="small-video-chatbox">
          <div class="control-panel">
              <div class="timer">
                  <p class="counter"> 00.00 </p>
                  <div class="users-on-call">
                      <div class="image-list">
                          
                      </div>
                      <p > <span class="users-on-call-count">1</span> on call </p>
                  </div>
              </div>  
              <div class="control-list">
                 <span class="icon_click_area">
                  <i class="audio-control fa fa-microphone" > </i>
                  </span>
                  <span class="icon_click_area" style=" background-color: ${call_type === "audio" ?  "grey" : "white"}">
                  <i  style=" cursor :${call_type === "audio" ? "none" : "pointer" }; color:${call_type === "audio" ? "black" : "green" }  " class=" video_control  fas fa-video"> </i>
                  </span>
                  <span class="icon_click_area">
                  <i class="disconnect_btn  fas fa-phone"> </i>
                  </span>
              </div>
          </div>
      </div>`
}

module.exports = ChatManagerSmallTemplateGeneric;


// <main>
// <section class="footer">
//   <i class="audio-control fa fa-microphone" aria-hidden="true"></i>
//   <i class="video_control fas fa-video" aria-hidden="true"></i>
//   <button class="disconnect_btn ">Disconnect</div>
// </section>
// </main>