import { cn } from "@/lib/utils";

const VideoPlayer = ({
  video,
  className,
}: {
  video: string;
  className?: string;
}) => (
  <video
    autoPlay
    loop
    muted
    playsInline
    src={video}
    className={cn(`w-full h-full object-cover `, className)}
  />
);

export default VideoPlayer;