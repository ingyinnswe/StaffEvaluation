import React from "react";
import PropTypes from "prop-types";

function Info(props) {
  return (
    <div className="w-full h-90 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-20">
      <img
        src={props.imageURL}
        alt="Profile"
        className="mx-auto rounded-2xl w-full p-4"
      />

      <div className="px-5 pb-5">
        <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
          {props.name}
        </h3>
        <p className="text-sm leading-6 text-gray-400">{props.jobTitle}</p>
        <p className="text-base leading-7 text-gray-800">{props.nickname}</p>

        <div className="my-4">
          <a
            type="button"
            class="text-gray-900 bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
          >
            Euphoric
          </a>
          <a
            type="button"
            class="text-gray-900 bg-gray-300 hover:bg-gray-500  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
          >
            Innovative
          </a>
          <button
            type="button"
            class="text-gray-900 bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
          >
            Supervision
          </button>
          <button
            type="button"
            class="text-gray-900 bg-gray-300 hover:bg-gray-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
          >
            Counter Balance
          </button>
        </div>
      </div>
    </div>
  );
}
Info.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

Info.defaultProps = {
  name: "Ajarn",
  nickname: "unknown",
  jobTitle: "Officer",
};
export default Info;
