"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
  isFollowing: boolean;
  stream: Stream;
  user: User & { stream: Stream | null };
}

export const StreamPlayer = ({
  isFollowing,
  stream,
  user,
}: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !name || !identity) {
    return (
      <div>Cannot watch the stream</div>
    )
  }
  return <div>Allowed to watch de stream</div>;
};
