import Link from 'next/link';


export default function ServicesPosts({ title, content, id, date, local }: ServicesPostsProps) {
    return (
        <>
            <div className='flex flex-col gap-4 border-2 w-3/12 p-2 m-2 h-full shadow-lg items-start justify-start'>
                <div className='flex flex-row '>
                    <Link href={`services/${title}`}>
                        {title}
                    </Link>
                </div>

                <div>
                    Data: {date}
                </div>

                <div>
                    Local: {local}
                </div>

                <p>
                    {content}
                </p>

            </div>
        </>
    );
}
