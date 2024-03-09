//use client-side rendering
'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const DeleteBlock = ({ id }) => {
    const router = useRouter();

    const deleteTicket = async () => {
        const res = await fetch(
            `https://intuitive-ticketing.vercel.app/${id}`,
            {
                method: 'DELETE',
            }
        );

        if (res.ok) {
            router.refresh();
        }
    };
    return (
        <FontAwesomeIcon
            icon={faX}
            className="mb-1 text-red-400 hover:cursor-pointer hover:text-red-600"
            onClick={deleteTicket}
        />
    );
};

export default DeleteBlock;
