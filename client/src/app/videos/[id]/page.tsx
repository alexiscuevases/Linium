import { getVideoById } from "@/actions/video";
import { type Video as VideoType } from "@/types/video";

const Video = async ({ params }: { params: { id: number } }) => {
	const video: VideoType = await getVideoById(params.id);

	return (
		<section>
			<div className="container">
				<div className="bg-black/50 rounded-2xl p-6 w-full max-w-[866px] flex flex-col gap-6">
					<h1 className="text-2xl">{video.title}</h1>
					<iframe
						height="460"
						className="rounded-2xl"
						src="https://www.youtube.com/embed/aSk-D86aOtc"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
					<p className="text-sm">{video.description}</p>
				</div>
			</div>
		</section>
	);
};

export default Video;
