import toast from 'react-hot-toast';

import { parseGqlErrorMessage } from 'src/utils/errors';

export const captureError = (error: unknown, unknownErrorMsg: string): void => {
    const message = parseGqlErrorMessage(error) ?? unknownErrorMsg;
    console.error('Error', error);
    console.error('Error message', message);
    toast.error(message);
};
