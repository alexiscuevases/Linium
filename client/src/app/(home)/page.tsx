import { getVideos } from "@/actions/video";
import AppConfigs from "@/configs/app";
import { type Video } from "@/types/video";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home - Linium",
	description: "Silence is golden",
};

const Home = async () => {
	const videos: Video[] = await getVideos();

	return (
		<section className="py-8">
			<div className="container">
				<div className="bg-black/50 rounded-2xl p-6 w-full max-w-[866px] flex flex-col gap-6">
					<h2>Hey, take a break & enjoy our virtual SPA...</h2>
					<ul className="flex flex-col gap-6">
						{videos.map((video: Video, index: number) => (
							<li key={index}>
								<Link
									href={`${AppConfigs.appUrl}/videos/${video.id}`}
									className="flex flex-col sm:flex-row gap-8 py-6 px-6 bg-black/40 rounded-2xl">
									<div className="w-full sm:w-2/6">
										<Image
											src={video.image as string}
											className="rounded-2xl w-full"
											height={720}
											width={1280}
											alt={video.title as string}
										/>
									</div>
									<div className="w-full sm:w-4/6">
										<h4 className="text-lg mb-2">{video.title}</h4>
										<p className="text-sm font-light">{video.description}</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Home;
