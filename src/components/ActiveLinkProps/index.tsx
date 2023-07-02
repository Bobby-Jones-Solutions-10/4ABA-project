import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
    children: React.ReactNode;
} & LinkProps;

const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {

    const pathname = usePathname();

    const isCurrentPath = pathname === href;
    
    const activeBg = <Link {...rest} href={href} className="flex gap-7 font-semibold bg-background-color py-4 pl-6 rounded-l-3xl shadow-activeLink shadow-black" prefetch={true}>{children}</Link>

    const inativeBg = <Link {...rest} href={href} className="flex gap-7 font-semibold py-4 pl-6 rounded-l-3xl" prefetch={true}>{children}</Link>

    return isCurrentPath ? activeBg : inativeBg
}

export default ActiveLink;