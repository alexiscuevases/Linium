import AppConfigs from "@/configs/app";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="py-8">
			<div className="container">
				<Link href={AppConfigs.appUrl}>
					<Image src={`${AppConfigs.appUrl}/images/logo.png`} className="h-28 w-auto ml-auto" height={720} width={1280} alt="Linum Logo"></Image>
				</Link>
			</div>
		</header>
	);
};

export default Header;
