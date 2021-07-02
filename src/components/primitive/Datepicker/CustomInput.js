import React, { forwardRef } from 'react';

const CustomDateInput = ({ value, onClick }, ref) => {
  return (
    <div className="datepicker-control" ref={ref} onClick={onClick}>
      <input value={value} readOnly />
      <span className="datepicker-suffix">
        {/* TODO: use reat-inlinesvg after */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="36.447px" height="36.447px" viewBox="0 0 36.447 36.447" xmlSpace="preserve">
          <g>
            <g>
              <path d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75    c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75    c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24    c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25    c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75    c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75    c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z     M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z"/>
              <rect x="6.724" y="14.626" width="4.595" height="4.089"/>
              <rect x="12.857" y="14.626" width="4.596" height="4.089"/>
              <rect x="18.995" y="14.626" width="4.595" height="4.089"/>
              <rect x="25.128" y="14.626" width="4.596" height="4.089"/>
              <rect x="6.724" y="20.084" width="4.595" height="4.086"/>
              <rect x="12.857" y="20.084" width="4.596" height="4.086"/>
              <rect x="18.995" y="20.084" width="4.595" height="4.086"/>
              <rect x="25.128" y="20.084" width="4.596" height="4.086"/>
              <rect x="6.724" y="25.54" width="4.595" height="4.086"/>
              <rect x="12.857" y="25.54" width="4.596" height="4.086"/>
              <rect x="18.995" y="25.54" width="4.595" height="4.086"/>
              <rect x="25.128" y="25.54" width="4.596" height="4.086"/>
            </g>
          </g>
        </svg>
      </span>
    </div>
  )
};

export default forwardRef(CustomDateInput);
