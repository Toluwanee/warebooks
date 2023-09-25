import { NavLink } from "react-router-dom";
import CTAimage from "../../../assets/img/stickman-dark.png";
import CostImg from "../../../assets/img/ebooks-shelf.png";
import ManuscriptImg from "../../../assets/img/manuscript.png";
import UserImg from "../../../assets/img/register.png";
import UploadImg from "../../../assets/img/cloud-computing.png";
import ReviewImg from "../../../assets/img/agree.png";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-home-section-1 max-sm:bg-home-section-1mobile max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
        <h1 className="text-4xl max-sm:text-sm font-extrabold text-white pb-4">
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
      <div className="flex flex-col justify-around relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[750px] h-[480px] w-[100vhf]  p-16">
        <div className="flex justify-center items-center">
          <h1 className="justify-center text-2xl max-sm:text-sm font-extrabold text-black pt-4 pb-4">
            Steps to Self-Publishing with wareBooks
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={ManuscriptImg}
              alt="Manuscript-image"
              className="h-[128px] w-[128px] p-4"
            />
            <h1 className="text-xl max-sm:text-sm font-bold text-black pb-4">
              Manuscript Preparation
            </h1>
            <p className="text-base leading-normal text-center break-normal max-sm:text-sm text-black max-w-lg px-6 pb-4">
              Ensure your manuscript is polished and edited for grammar,
              spelling, and content. Format your manuscript according to
              WareBook's guidelines for a professional appearance.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={UserImg}
              alt="User-image"
              className="h-[128px] w-[128px] p-4"
            />
            <h1 className="text-xl max-sm:text-sm font-bold text-black pb-4">
              Register/Login
            </h1>
            <p className="text-base leading-normal text-center break-normal max-sm:text-sm text-black max-w-lg px-6 pb-4">
              Create a WareBook account or log in if you already have one. Then
              navigate to your dashboard to access the submission feature for
              publishers
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={UploadImg}
              alt="Upload-image"
              className="h-[128px] w-[128px] p-4"
            />
            <h1 className="text-xl max-sm:text-sm font-bold text-black pb-4">
              Upload and Customize
            </h1>
            <p className="text-base leading-normal text-center break-normal max-sm:text-sm text-black max-w-lg px-6 pb-4">
              Upload your manuscript and cover design (if applicable) through
              the user-friendly interface. Customize your book's metadata,
              including title, author name, description, keywords, price and
              distribution options.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={ReviewImg}
              alt="Review-image"
              className="h-[128px] w-[128px] p-4"
            />
            <h1 className="text-xl max-sm:text-sm font-bold text-black pb-4">
              Review and Approval
            </h1>
            <p className="text-base leading-normal text-center break-normal max-sm:text-sm text-black max-w-lg px-6 pb-4">
              After submission, wareBooks team will review and approve the final
              version of your book. You will be notified of our decision.
            </p>
          </div>
        </div>
        <div className="py-4">
          <NavLink to="register" className="px-10">
              <button
                type="button"
                className="rounded border-2 border-blue-300 px-7 pb-[8px] pt-[10px] text-base font-bold uppercase leading-normal text-blue transition duration-150 ease-in-out hover:border-blue-300 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-blue-300 focus:border-blue-100 focus:text-blue-300 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-blue-300 dark:hover:bg-blue-300 dark:hover:bg-opacity-10"
              >
                Get Started
              </button>
            </NavLink>
          </div>
      </div>
      {/* <section className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
        Popular Books
      </section>
      <section className="flex flex-col justify-start items-start relative overflow-hidden rounded-lg bg-no-repeat bg-book-types-bg max-sm:bg-book-types-bg max-sm:bg-center max-sm:h-[700px] h-[380px] w-[100vhf]  p-12">
        Shop Our Bookstore
      </section> */}
      <section className="flex flex-row justify-around items-start relative overflow-hidden rounded-lg bg-[#eaeded] max-sm:h-[700px] h-[500px] w-[100vhf]  p-12">
        <img
          src={CostImg}
          alt="Cost-image"
          className="h-[450px] w-[500px] pl-5"
        />
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-2xl max-sm:text-sm font-extrabold text-black pb-4">
            Earn Publishing with wareBooks
          </h1>
          <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
                Worried about the financial aspect of self-publishing? No
                upfront charges of cost on you. Come to us with zero monetary
                commitment
              </p>
          <ul className="list-disc pl-7">
            <li>
              <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
                Earn up to 80% loyalty on eBooks sold on wareBooks
              </p>
            </li>
            <li>
              <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
                Earn up to 60% loyalty on paperback and hardcover books sold on wareBooks
              </p>
            </li>
            <li>
              <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black max-w-lg pb-6">
                Opportunity to earn advertisement revenue share
              </p>
            </li>
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
      <div
        id="publisher"
        className="flex flex-row justify-center items-center relative overflow-hidden rounded-lg bg-no-repeat bg-[#eaeded] max-sm:h-[700px] h-[230px] w-[100vhf]  p-12"
      >
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
