import { Link } from "react-router-dom";
import { UserLogin } from "./user-login";

export function Home() {
  return (
    <div>
      <div id="mainDiv" style={{ backgroundImage:"url(ameerpet1.jpg)", backgroundSize:"cover"}}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="container-fluid d-flex justify-content-between">
            <h1 className="text-primary ms-3 fw-bold" style={{marginTop:"20px", fontSize:"50px"}}>AMEERPET COLLECTION</h1>
            {/* <svg viewBox="0 0 880 20"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg> */}
              <div className="me-4" style={{marginTop:"35px"}}>
              <form className="input-group h-50">
                <span className="bi bi-translate input-group-text bg-transparent text-white border-0"></span>
                <select className="form-select bg-transparent text-white border-dark rounded-3">
                  <option className="bg-dark" value="english">English</option>
                  <option className="bg-dark" value="hindi">Hindi</option>
                </select>
                <Link to="/admin-login" className="btn btn-danger ms-3 rounded-2">Admin</Link>
              </form>
            </div>
          </div>
          <div style={{ marginTop: "200px", paddingBottom:"100px" }}>
            <h1 className="text-white fw-bold">
              The biggest Indian Institutes. Ready to watch here from ₹145.
            </h1>
            <h5 className="text-white mt-5">
              Join today. Cancel anytime.
              <br />
              <br /> Ready to watch? Enter your email or mobile number to create or restart your membership.
            </h5>
            <UserLogin />         
            <div className="d-flex" style={{marginTop:'200px'}}>
              <div className="text-white" style={{marginLeft:"200px", paddingTop:'170px'}}>
                <h1 className="fw-bold">Enjoy on your TV</h1>
                <p className="fw-bold mt-4">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,</p>
                <p className="fw-bold">Blu-ray players and more.</p>
              </div>
              <div className="w-50" >
                <video
                  style={{position: "absolute",  paddingLeft: '80px', paddingTop: "90px"}} autoPlay playsInline muted loop >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    anonymous="crossorigin"
                    type="video/mp4"
                  /> 
                </video>
                <img src="tv.png" alt="" className=" rounded-4" style={{ position:"relative" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage:"url(ameerpet2.jpg)", backgroundSize:"cover" }}>
        <div style={{backgroundColor:"rgba(0,0,0,0.7)"}}>
          <div className="d-flex" style={{ paddingBottom:"200px", paddingTop:"200px", paddingLeft:"50px"}}>
            <div className="text-white" style={{marginLeft:"200px", paddingTop:"170px"}}>
              <h1 className="fw-bold">Watch everywhere</h1>
              <p className="fw-bold mt-4">Stream unlimited Course Videos on your </p>
              <p className="fw-bold">phone, tablet, laptop, and TV.</p>
            </div>
            <div className="w-50" style={{paddingLeft:"150px"}} >
              <video style={{position: "absolute",  paddingLeft: '110px', paddingTop: "40px", width:"525px"}} autoPlay playsInline muted loop >
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
              </video>
              <img src="netflixTV-2.png" alt="" style={{ position:"relative"}} />
            </div>
          </div>
          <div className="text-white" style={{paddingBottom:"300px"}}>
            <h3>Ready to watch? Enter your email or mobile number to create or restart your membership.</h3>
            <UserLogin /> 
          </div>
        </div>
      </div>
    </div>  
  )
}
