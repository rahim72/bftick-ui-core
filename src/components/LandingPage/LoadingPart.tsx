import style from "@/styles/loadingPart.module.css";
export default function LoadingPart() {
  return (
    <>
      <div className={` ${style.parent} ${style.preloaderBody} w-full`}>
        <div className={style.loader}></div>
      </div>
    </>
  );
}
