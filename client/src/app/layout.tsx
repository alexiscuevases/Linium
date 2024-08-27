import { Inter } from "next/font/google";
import "@/styles/app.css";
import Image from "next/image";
import AppConfigs from "@/configs/app";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<Image
						src={`${AppConfigs.appUrl}/images/background.png`}
						width={1280}
						height={720}
						className="fixed h-screen w-screen object-cover z-[-2]"
						alt="Summer"
					/>
					<div className="fixed h-screen w-screen bg-black/25 z-[-1]"></div>
				</div>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
