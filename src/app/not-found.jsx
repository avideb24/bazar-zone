import Link from "next/link";



const NotFoundPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Not Found</h1>
            <Link href={'/'}>
                <button className="px-3 py-1 font-semibold bg-primary">Go Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;