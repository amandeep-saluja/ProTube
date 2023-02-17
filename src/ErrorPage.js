import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { status, internal, statusText, error, data } = useRouteError();

    return (
        <div className="text-left flex justify-center content-center flex-col">
            <div className="text-3xl font-bold m-auto text-red-500"> Error Occurred </div>
            <table className="border mx-auto my-6" border="2">
                <tr>
                    <th className="p-2 m-2">Status</th>
                    <td>{status}</td>
                </tr>
                <tr>
                    <th className="p-2 m-2">Status Text</th>
                    <td>{statusText}</td>
                </tr>
                {/* <tr>
                    <th className="p-2 m-2">Internal</th>
                    <td>{internal.toString()}</td>
                </tr>
                <tr>
                    <th className="p-2 m-2">Data</th>
                    <td>{data}</td>
                </tr> */}
                <tr>
                    <th className="p-2 m-2">Error Message</th>
                    <td>{error.message}</td>
                </tr>
            </table>
        </div>
    );
};

export default ErrorPage;
