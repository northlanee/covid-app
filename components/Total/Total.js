import React from "react";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { selectors } from "../../redux/selectors";
import { Spinner } from "../index";

const Total = () => {
  const loading = useSelector(selectors.total.getLoading);
  const overall = useSelector(selectors.total.getOverall);
  const { confirmed, deaths, critical, recovered, date } = overall;

  if (loading) return <Spinner />;
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="relative flex justify-between items-center px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Latest total information
        </h3>
        <div>
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Options
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div>
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Confirmed
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <NumberFormat
                value={confirmed}
                displayType={"text"}
                thousandSeparator={true}
              />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Critical
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <NumberFormat
                value={critical}
                displayType={"text"}
                thousandSeparator={true}
              />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Recovered
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <NumberFormat
                value={recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Deaths
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <NumberFormat
                value={deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Date
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {date}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Total;
