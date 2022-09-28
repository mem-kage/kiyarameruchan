import React from "react";

// interface Props {
//   status: boolean | undefined;
//   setStatus: React.Dispatch<React.SetStateAction<boolean>> | undefined;
//   btnTxt: String;
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined;
// }

const CommonModalBtn: React.VFC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const clickKcBtn = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <p className="kc-about-btn" onClick={clickKcBtn}><img src={`${process.env.PUBLIC_URL}/images/kc_about_btn.png`} alt="きやらめるちゃんって？" /></p>
      <div className={`modal-wrap ${isOpen ? 'modal--open' : 'modal--close'}`}>
        <div className="modal-bg"></div>
        <div className="modal-item">
          {/* <p><img src={`${process.env.PUBLIC_URL}/images/jikosyokai/kc_jikosyokai_sp.png`} alt="" /></p> */}
          <p className="modal-close-btn" onClick={clickKcBtn}>
            <img src={`${process.env.PUBLIC_URL}/images/jikosyokai/icon_close.svg`} alt="" />
          </p>
          <div className="modal-item--pc">
            <p><img src={`${process.env.PUBLIC_URL}/images/jikosyokai/kc_jikosyokai_pc.png`} alt=""></img></p>
          </div>
          <div className="modal-item--sp">
            <p><img src={`${process.env.PUBLIC_URL}/images/jikosyokai/kc_jikosyokai_sp.png`} alt=""></img></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonModalBtn;
