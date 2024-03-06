import React, {useContext} from "react";
import { UserIdContext, UserDataContext} from '@/App';

const Popup = ({ imageURL,name, jobTitle, nickname, onClose }) => {

    const storeRate = () => { 
        console.log('store rate');
    }
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom text-center bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
            <img
              src={imageURL}
              alt="Profile"
              className="mx-auto rounded-2xl w-auto h-56 p-4"
            />
            <h4 className="mb-3 text-lg font-semibold">{name}</h4>
            <p className="mb-2 text-sm text-gray-600">{jobTitle}</p>
            <p className="mb-4 text-base font-semibold text-gray-800">{nickname}</p>
            <p className="mb-4 text-green-600 text-sm italic">He finds an inspiring haven where passion and productivity seamlessly converge at his workspace.</p>
            

            {/* rating buttons */}
            <a type="button" onClick={storeRate} className="mr-2 mb-2 hover:bg-violet-200 p-2 rounded-full"><img src="/src/assets/Emotions/emo-1.png" alt="" srcset="" /></a>
            <a type="button" onClick={storeRate} className="mr-2 mb-2 hover:bg-sky-200 p-2 rounded-full"><img src="/src/assets/Emotions/emo-2.png" alt="" srcset="" /></a>
            <a type="button" onClick={storeRate} className="mr-2 mb-2 hover:bg-green-200 p-2 rounded-full"><img src="/src/assets/Emotions/emo-3.png" alt="" srcset="" /></a>
            <a type="button" onClick={storeRate} className="mr-2 mb-2 hover:bg-orange-200 p-2 rounded-full"><img src="/src/assets/Emotions/emo-4.png" alt="" srcset="" /></a>
            <a type="button" onClick={storeRate} className="mr-2 mb-2 hover:bg-red-200 p-2 rounded-full"><img src="/src/assets/Emotions/emo-5.png" alt="" srcset="" /></a>
            
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
