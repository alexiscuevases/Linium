"use server";

import { Video } from "@/types/video";

export const getVideos = async () => {
	const data = await fetch("http://localhost:4000/videos");
	const videos: Video[] = await data.json();

	return videos;
};

export const getVideoById = async (video_id: number) => {
	const data = await fetch(`http://localhost:4000/videos/${video_id}`);
	const video: Video = await data.json();

	return video;
};
