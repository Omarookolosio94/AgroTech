import { sidenavLink } from "core/const/styling";

const Loader = ({ message = "Loading, please wait" }: { message?: string }) => {
  return (
    <div
      className="fixed w-full h-full bg-dark transition-all duration-500 ease-in-out"
      style={{
        zIndex: 1000,
      }}
    >
      <div className="flex h-full w-full items-center justify-center ">
        <p className={sidenavLink}>{message}</p>
      </div>
    </div>
  );
};

export default Loader;
