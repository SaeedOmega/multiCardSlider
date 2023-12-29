// #region Imports
import bg1 from "./assets/Rectangle42.png";
import bg2 from "./assets/Subtract.svg";
import add from "./assets/add.svg";
import Substract from "./assets/minus.svg";
import redCircle from "./assets/Ellipse 8.svg";
import blueCircle from "./assets/Ellipse 7.svg";
import greenCircle from "./assets/Ellipse 6.svg";
import yasiCircle from "./assets/Ellipse 5.svg";
import image1 from "./assets/image 8.png";
import heart from "./assets/Heart.svg";
import send from "./assets/Send.svg";
import { useState, useRef } from "react";
// #endregion

function App() {
  // #region States
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(true);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const itemContainer = useRef<HTMLDivElement>(null);
  const scrollDiv = useRef<HTMLDivElement>(null);
  // #endregion

  // #region Func
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const maxLeftSlider = (x: HTMLDivElement, y: HTMLDivElement): any => {
    if (x.childElementCount * 172 + 154 <= y.offsetWidth) return false;
    return x.childElementCount * 172 + 154 - y.offsetWidth;
  };
  window.onresize = (): void => {
    if (itemContainer.current && scrollDiv.current) {
      if (!maxLeftSlider(itemContainer.current, scrollDiv.current)) {
        setShowLeftArrow(false);
        setShowRightArrow(false);
      } else setShowLeftArrow(true);
    }
  };
  window.onload = (): void => {
    if (itemContainer.current && scrollDiv.current) {
      if (!maxLeftSlider(itemContainer.current, scrollDiv.current)) {
        setShowLeftArrow(false);
        setShowRightArrow(false);
      } else setShowLeftArrow(true);
    }
  };
  // #endregion

  return (
    <>
      <div className="bg-img absolute top-[450px] h-40 w-full" />
      <div ref={scrollDiv} className=" overflow-x-auto overflow-y-visible mt-[401px]">
      <div
        className={`h-72 relative 
        `}
        
        onScroll={(): void => {
          if (scrollDiv.current && itemContainer.current) {
            if (scrollDiv.current.scrollLeft == 0) {
              setShowRightArrow(false);
            } else {
              setShowRightArrow(true);
            }
            if (
              scrollDiv.current.scrollLeft ==
              maxLeftSlider(itemContainer.current, scrollDiv.current)
            ) {
              setShowLeftArrow(false);
            } else {
              setShowLeftArrow(true);
            }
          }
        }}
      >
        {
          //#region boxGhableItemha
        }
        <div
          className={`text-[12px] left-0 right-0 w-full items-center text-center h-40 absolute top-[49px] flex font-vazir font-light text-white`}
        >
          <div className="m-[30px] flex-shrink-0">
            تخفیف استثنایی
            <br />
            انواع محصولات درجه یک
            <div className="w-[106px] h-7 mt-5 rounded-[4px] ">
              <img src={bg1} />
              <p className="z-10 text-[10px] relative font-normal font-vazir top-[-21px] text-[#30303A]">
                نمایش همه
              </p>
            </div>
          </div>
        </div>
        {
          //#endregion
        }
        {
          //#region Items
        }
        <div
          className={`font-vazir absolute left-[170px] flex-shrink-0 gap-4 flex h-64`}
          ref={itemContainer}
        >
          <div className="w-[156px] hover:cursor-pointer hover:scale-125 flex flex-col justify-start items-start flex-shrink-0 bg-white border-['#C9CBD1'] inner-border-[2.5px] border-t-white rounded-lg h-64">
            <div className="relative">
              <img src={bg2} />
              <img src={image1} className="absolute top-0 left-[22px]" />
              <img src={redCircle} className="absolute top-2 left-[140px]" />
              <img src={blueCircle} className="absolute top-6 left-[140px]" />
              <img src={greenCircle} className="absolute top-10 left-[140px]" />
              <img src={yasiCircle} className="absolute top-14 left-[140px]" />
              <img src={heart} className="absolute top-2 left-[9px]" />
              <img src={send} className="absolute top-2 left-[26.67px]" />
            </div>
            <div className="flex relative top-[-10px] flex-col items-start p-2 pb-0 w-full h-full">
              <p className="text-[#30303A] font-medium self-end">
                کوی/ سویشرت زنانه{" "}
              </p>
              <p className="text-[#30303A] self-end text-right text-[8px] font-vazir font-light flex-grow">
                سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی قابل سفارش در چهار رنگ
              </p>
              <p dir="rtl" className="text-black/60 line-through">
                {(670000).toLocaleString("fa-ir") + " تومان"}
              </p>
              <p dir="rtl" className="text-black font-vazir font-medium">
                {`${(536000).toLocaleString("fa-ir")} تومان`}
              </p>
              <div className="flex justify-between w-full mt-2">
                <div className="bg-[#30303A] rounded text-[10px] font-normal w-[60px] py-1.5 text-white text-center">
                  خرید
                </div>
                <div className="flex gap-2 border-[2px] border-[#EDEDED] rounded">
                  <img
                    src={Substract}
                    className="border-r-[2px] border-[#EDEDED]"
                  />
                  <p className="text-[#30303A] font-medium leading-6">
                    {(1).toLocaleString("fa-ir")}
                  </p>
                  <img src={add} className="border-l-[2px] border-[#EDEDED]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[156px] flex flex-col justify-start items-start flex-shrink-0 bg-white border-['#C9CBD1'] inner-border-[2.5px] border-t-white rounded-lg h-64">
            <div className="relative">
              <img src={bg2} />
              <img src={image1} className="absolute top-0 left-[22px]" />
              <img src={redCircle} className="absolute top-2 left-[140px]" />
              <img src={blueCircle} className="absolute top-6 left-[140px]" />
              <img src={greenCircle} className="absolute top-10 left-[140px]" />
              <img src={yasiCircle} className="absolute top-14 left-[140px]" />
              <img src={heart} className="absolute top-2 left-[9px]" />
              <img src={send} className="absolute top-2 left-[26.67px]" />
            </div>
            <div className="flex relative top-[-10px] flex-col items-start p-2 pb-0 w-full h-full">
              <p className="text-[#30303A] font-medium self-end">
                کوی/ سویشرت زنانه{" "}
              </p>
              <p className="text-[#30303A] self-end text-right text-[8px] font-vazir font-light flex-grow">
                سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی قابل سفارش در چهار رنگ
              </p>
              <p dir="rtl" className="text-black/60 line-through">
                {(670000).toLocaleString("fa-ir") + " تومان"}
              </p>
              <p dir="rtl" className="text-black font-vazir font-medium">
                {`${(536000).toLocaleString("fa-ir")} تومان`}
              </p>
              <div className="flex justify-between w-full mt-2">
                <div className="bg-[#30303A] rounded text-[10px] font-normal w-[60px] py-1.5 text-white text-center">
                  خرید
                </div>
                <div className="flex gap-2 border-[2px] border-[#EDEDED] rounded">
                  <img
                    src={Substract}
                    className="border-r-[2px] border-[#EDEDED]"
                  />
                  <p className="text-[#30303A] font-medium leading-6">
                    {(1).toLocaleString("fa-ir")}
                  </p>
                  <img src={add} className="border-l-[2px] border-[#EDEDED]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[156px] flex flex-col justify-start items-start flex-shrink-0 bg-white border-['#C9CBD1'] inner-border-[2.5px] border-t-white rounded-lg h-64">
            <div className="relative">
              <img src={bg2} />
              <img src={image1} className="absolute top-0 left-[22px]" />
              <img src={redCircle} className="absolute top-2 left-[140px]" />
              <img src={blueCircle} className="absolute top-6 left-[140px]" />
              <img src={greenCircle} className="absolute top-10 left-[140px]" />
              <img src={yasiCircle} className="absolute top-14 left-[140px]" />
              <img src={heart} className="absolute top-2 left-[9px]" />
              <img src={send} className="absolute top-2 left-[26.67px]" />
            </div>
            <div className="flex relative top-[-10px] flex-col items-start p-2 pb-0 w-full h-full">
              <p className="text-[#30303A] font-medium self-end">
                کوی/ سویشرت زنانه{" "}
              </p>
              <p className="text-[#30303A] self-end text-right text-[8px] font-vazir font-light flex-grow">
                سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی قابل سفارش در چهار رنگ
              </p>
              <p dir="rtl" className="text-black/60 line-through">
                {(670000).toLocaleString("fa-ir") + " تومان"}
              </p>
              <p dir="rtl" className="text-black font-vazir font-medium">
                {`${(536000).toLocaleString("fa-ir")} تومان`}
              </p>
              <div className="flex justify-between w-full mt-2">
                <div className="bg-[#30303A] rounded text-[10px] font-normal w-[60px] py-1.5 text-white text-center">
                  خرید
                </div>
                <div className="flex gap-2 border-[2px] border-[#EDEDED] rounded">
                  <img
                    src={Substract}
                    className="border-r-[2px] border-[#EDEDED]"
                  />
                  <p className="text-[#30303A] font-medium leading-6">
                    {(1).toLocaleString("fa-ir")}
                  </p>
                  <img src={add} className="border-l-[2px] border-[#EDEDED]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[156px] flex flex-col justify-start items-start flex-shrink-0 bg-white border-['#C9CBD1'] inner-border-[2.5px] border-t-white rounded-lg h-64">
            <div className="relative">
              <img src={bg2} />
              <img src={image1} className="absolute top-0 left-[22px]" />
              <img src={redCircle} className="absolute top-2 left-[140px]" />
              <img src={blueCircle} className="absolute top-6 left-[140px]" />
              <img src={greenCircle} className="absolute top-10 left-[140px]" />
              <img src={yasiCircle} className="absolute top-14 left-[140px]" />
              <img src={heart} className="absolute top-2 left-[9px]" />
              <img src={send} className="absolute top-2 left-[26.67px]" />
            </div>
            <div className="flex relative top-[-10px] flex-col items-start p-2 pb-0 w-full h-full">
              <p className="text-[#30303A] font-medium self-end">
                کوی/ سویشرت زنانه{" "}
              </p>
              <p className="text-[#30303A] self-end text-right text-[8px] font-vazir font-light flex-grow">
                سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی قابل سفارش در چهار رنگ
              </p>
              <p dir="rtl" className="text-black/60 line-through">
                {(670000).toLocaleString("fa-ir") + " تومان"}
              </p>
              <p dir="rtl" className="text-black font-vazir font-medium">
                {`${(536000).toLocaleString("fa-ir")} تومان`}
              </p>
              <div className="flex justify-between w-full mt-2">
                <div className="bg-[#30303A] rounded text-[10px] font-normal w-[60px] py-1.5 text-white text-center">
                  خرید
                </div>
                <div className="flex gap-2 border-[2px] border-[#EDEDED] rounded">
                  <img
                    src={Substract}
                    className="border-r-[2px] border-[#EDEDED]"
                  />
                  <p className="text-[#30303A] font-medium leading-6">
                    {(1).toLocaleString("fa-ir")}
                  </p>
                  <img src={add} className="border-l-[2px] border-[#EDEDED]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[156px] flex flex-col justify-start items-start flex-shrink-0 bg-white border-['#C9CBD1'] inner-border-[2.5px] border-t-white rounded-lg h-64">
            <div className="relative">
              <img src={bg2} />
              <img src={image1} className="absolute top-0 left-[22px]" />
              <img src={redCircle} className="absolute top-2 left-[140px]" />
              <img src={blueCircle} className="absolute top-6 left-[140px]" />
              <img src={greenCircle} className="absolute top-10 left-[140px]" />
              <img src={yasiCircle} className="absolute top-14 left-[140px]" />
              <img src={heart} className="absolute top-2 left-[9px]" />
              <img src={send} className="absolute top-2 left-[26.67px]" />
            </div>
            <div className="flex relative top-[-10px] flex-col items-start p-2 pb-0 w-full h-full">
              <p className="text-[#30303A] font-medium self-end">
                کوی/ سویشرت زنانه{" "}
              </p>
              <p className="text-[#30303A] self-end text-right text-[8px] font-vazir font-light flex-grow">
                سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی قابل سفارش در چهار رنگ
              </p>
              <p dir="rtl" className="text-black/60 line-through">
                {(670000).toLocaleString("fa-ir") + " تومان"}
              </p>
              <p dir="rtl" className="text-black font-vazir font-medium">
                {`${(536000).toLocaleString("fa-ir")} تومان`}
              </p>
              <div className="flex justify-between w-full mt-2">
                <div className="bg-[#30303A] rounded text-[10px] font-normal w-[60px] py-1.5 text-white text-center">
                  خرید
                </div>
                <div className="flex gap-2 border-[2px] border-[#EDEDED] rounded">
                  <img
                    src={Substract}
                    className="border-r-[2px] border-[#EDEDED]"
                  />
                  <p className="text-[#30303A] font-medium leading-6">
                    {(1).toLocaleString("fa-ir")}
                  </p>
                  <img src={add} className="border-l-[2px] border-[#EDEDED]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[156px] flex flex-col justify-start items-start flex-shrink-0 bg-white border-['#C9CBD1'] inner-border-[2.5px] border-t-white rounded-lg h-64">
            <div className="relative">
              <img src={bg2} />
              <img src={image1} className="absolute top-0 left-[22px]" />
              <img src={redCircle} className="absolute top-2 left-[140px]" />
              <img src={blueCircle} className="absolute top-6 left-[140px]" />
              <img src={greenCircle} className="absolute top-10 left-[140px]" />
              <img src={yasiCircle} className="absolute top-14 left-[140px]" />
              <img src={heart} className="absolute top-2 left-[9px]" />
              <img src={send} className="absolute top-2 left-[26.67px]" />
            </div>
            <div className="flex relative top-[-10px] flex-col items-start p-2 pb-0 w-full h-full">
              <p className="text-[#30303A] font-medium self-end">
                کوی/ سویشرت زنانه{" "}
              </p>
              <p className="text-[#30303A] self-end text-right text-[8px] font-vazir font-light flex-grow">
                سویشرت زنانه کوی مدل ۲۰۰ رنگ یاسی قابل سفارش در چهار رنگ
              </p>
              <p dir="rtl" className="text-black/60 line-through">
                {(670000).toLocaleString("fa-ir") + " تومان"}
              </p>
              <p dir="rtl" className="text-black font-vazir font-medium">
                {`${(536000).toLocaleString("fa-ir")} تومان`}
              </p>
              <div className="flex justify-between w-full mt-2">
                <div className="bg-[#30303A] rounded text-[10px] font-normal w-[60px] py-1.5 text-white text-center">
                  خرید
                </div>
                <div className="flex gap-2 border-[2px] border-[#EDEDED] rounded">
                  <img
                    src={Substract}
                    className="border-r-[2px] border-[#EDEDED]"
                  />
                  <p className="text-[#30303A] font-medium leading-6">
                    {(1).toLocaleString("fa-ir")}
                  </p>
                  <img src={add} className="border-l-[2px] border-[#EDEDED]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          //#endregion
        }
      </div>
      </div>
      
      {
        //#region ArrowButton
      }
      {showRightArrow && (
        <div
          className={`absolute bg-[#EDEDED] rounded p-1 top-[660px] left-[130px]`}
          onClick={(): void => {
            if (scrollDiv.current) {
              if (scrollDiv.current.scrollLeft - 50 > 0) {
                scrollDiv.current.scrollLeft -= 50;
                setShowRightArrow(true);
                setShowLeftArrow(true);
              } else {
                setShowRightArrow(false);
                scrollDiv.current.scrollLeft = 0;
              }
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 7 12" fill="#EDEDED">
            <path
              d="M1.1333 10.6663C1.1333 10.6663 5.79997 7.90367 5.79997 5.99967C5.79997 4.09634 1.1333 1.33301 1.1333 1.33301"
              stroke="#30303A"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {showLeftArrow && (
        <div
          className={`absolute bg-[#EDEDED] rounded p-1 top-[660px] left-[75px]`}
          onClick={(): void => {
            if (itemContainer.current) {
              if (scrollDiv.current) {
                if (
                  scrollDiv.current.scrollLeft + 50 <
                  maxLeftSlider(itemContainer.current, scrollDiv.current)
                ) {
                  scrollDiv.current.scrollLeft += 50;
                  setShowLeftArrow(true);
                  setShowRightArrow(true);
                } else {
                  setShowLeftArrow(false);
                  scrollDiv.current.scrollLeft = maxLeftSlider(
                    itemContainer.current,
                    scrollDiv.current
                  );
                }
              }
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 7 12" fill="none">
            <path
              d="M5.86645 10.6663C5.86645 10.6663 1.19979 7.90367 1.19979 5.99967C1.19979 4.09634 5.86646 1.33301 5.86646 1.33301"
              stroke="#30303A"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {
        //#endregion
      }
    </>
  );
}

export default App;
