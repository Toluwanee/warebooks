import { NavLink } from "react-router-dom";
import CTAimage from "../../../assets/img/stickman-dark.png";
import CostImg from "../../../assets/img/ebooks-shelf.png";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-home-section-1 max-sm:bg-home-section-1mobile max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
        <h1 className="text-4xl max-sm:text-sm font-extrabold text-black pb-4">
          Pathway To Self-Publishing
        </h1>
        <p className="text-xl items-start leading-normal text-left break-normal max-sm:text-sm text-white max-w-lg pb-6">
          Embark on your journey as an author and discover your pathway to
          self-publishing with WareBooks. Whether you are a first-time writer or
          a seasoned author, we are here to guide you every step of the way.
        </p>
        <NavLink to="register">
          <button
            type="button"
            className="rounded border-2 border-blue-300 px-7 pb-[8px] pt-[10px] text-base font-bold uppercase leading-normal text-blue transition duration-150 ease-in-out hover:border-blue-300 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-blue-300 focus:border-blue-100 focus:text-blue-300 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-blue-300 dark:hover:bg-blue-300 dark:hover:bg-opacity-10"
          >
            Join Now
          </button>
        </NavLink>
      </section>
      <div className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
      Steps to Self-Publishing
      </div>
      <section className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
        Popular Books
      </section>
      <section className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
      Shop Our Bookstore
      </section>
      <section className="flex flex-row justify-around items-start relative overflow-hidden rounded-lg bg-[#eaeded] max-sm:h-[700px] h-[500px] w-[100vhf]  p-12">
        <img src={CostImg} alt="Cost-image" className="h-[450px] w-[500px] pl-5" />
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-2xl max-sm:text-sm font-extrabold text-black pb-4">
            Cost to Publish with wareBooks
          </h1>
          <ul className="list-disc pl-7">
            <li><p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
          Worried about the financial aspect of self-publishing? No upfront charges of cost on you. Come to us with zero monetary
            commitment
          </p></li>
            <li><p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
          Worried about the financial aspect of self-publishing? No upfront charges of cost on you. Come to us with zero monetary
            commitment
          </p></li>
          </ul>
          <h1 className="text-2xl max-sm:text-sm font-extrabold text-black pb-4">
            Cost to Publish with wareBooks
          </h1>
          <ul className="list-disc pl-7">
            <li><p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
          Worried about the financial aspect of self-publishing? No upfront charges of cost on you. Come to us with zero monetary
            commitment
          </p></li>
            <li><p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
          Worried about the financial aspect of self-publishing? No upfront charges of cost on you. Come to us with zero monetary
            commitment
          </p></li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf] px-12 py-12">
        <h1 className="text-2xl max-sm:text-sm font-bold text-black px-10">
          Publish different genre of books
        </h1>
        <div className="flex flex-row h-1/3 items-start">
          <h3 className="text-xl max-sm:text-sm text-black p-8">Educational</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Science</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">
            {"Children's Books"}
          </h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">
            Short Stories
          </h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Religious</h3>
        </div>
        <div className="flex flex-row h1/3 items-start">
          <h3 className="text-xl max-sm:text-sm text-black p-8">Literature</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">History</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Fiction</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Politics</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Thriller</h3>
        </div>
        <div className="flex flex-row h-1/3 items-start">
          <h3 className="text-xl max-sm:text-sm text-black p-8">Romance</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Memoir</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">Fantasy</h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">
            True crime & Horror
          </h3>
          <h3 className="text-xl max-sm:text-sm text-black p-8">
            ...and more!
          </h3>
        </div>
      </section>
      <div id="publisher" className="flex flex-row justify-center items-center relative overflow-hidden rounded-lg bg-no-repeat bg-[#eaeded] max-sm:h-[700px] h-[230px] w-[100vhf]  p-12">
        <h1 className="text-2xl max-sm:text-sm font-extrabold text-black px-1o">
          Ready to Start Publishing your Books?
        </h1>
        <NavLink to="register" className="px-10">
          <button
            type="button"
            className="rounded border-2 border-blue-300 px-7 pb-[8px] pt-[10px] text-base font-bold uppercase leading-normal text-blue transition duration-150 ease-in-out hover:border-blue-300 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-blue-300 focus:border-blue-100 focus:text-blue-300 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-blue-300 dark:hover:bg-blue-300 dark:hover:bg-opacity-10"
          >
            Join Now
          </button>
        </NavLink>
        <img src={CTAimage} alt="CTAimage" className="w-fit h-fit" />
      </div>
    </div>
  );
};

export default Home;
