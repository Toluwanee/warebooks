import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-no-repeat bg-error-card max-sm:bg-error-card-mob max-sm:bg-center bg-fixed bg-cover h-[100vh]  p-12">
      <div className="flex flex-col h-full items-center justify-center text-center text-sm text-blue-900 p-16">
        <h1 className="items-center justify-center max-sm:pt-4 pt-36 pb-8">
          Sorry! You are lost, the page you were looking for is not found.{" "}
          <br /> Please click below to go Home
        </h1>
        <NavLink to="/">
          <button
            type="button"
            className="rounded border-2 border-blue-300 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-blue transition duration-150 ease-in-out hover:border-blue-300 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-blue-300 focus:border-blue-100 focus:text-blue-300 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-blue-300 dark:hover:bg-blue-300 dark:hover:bg-opacity-10"
          >
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};
