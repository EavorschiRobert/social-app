import { Models } from "appwrite";
import React, { useEffect, useState } from "react";
import like from "../../../public/icons/like.svg";
import liked from "../../../public/icons/liked.svg";
import save from "../../../public/icons/save.svg";
import saved from "../../../public/icons/saved.svg";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { checkIsLiked } from "@/lib/utils";
import Loader from "./Loader";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost, isPending: isSavingPost } = useSavePost();
  const { mutate: deleteSavedPost, isPending: isDeletingSaved} = useDeleteSavedPost();
  const { data: currentUser } = useGetCurrentUser();
  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post.$id
  );
  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();
    let newLikes = [...likes];
    const hasLiked = newLikes.includes(userId);
    if(hasLiked){
      newLikes = newLikes.filter((id) => id !== userId);
    } else {
      newLikes.push(userId);
    }
    setLikes(newLikes);
    likePost({postId: post.$id, likesArray: newLikes})
  };
  const handleSavePost = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (savedPostRecord) {
      setIsSaved(false);
      return deleteSavedPost(savedPostRecord.$id);
    }

    savePost({ userId: userId, postId: post.$id });
    setIsSaved(true);
  };
  useEffect(() => {
    setIsSaved(!!savedPostRecord);
  }, [currentUser]);

  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">

                <img
        src={checkIsLiked(likes, userId) ? liked : like}
        width={20}
        height={20}
        alt="like"
        className="cursor-pointer"
        onClick={(e) => {handleLikePost(e)}}
      />

        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>

      <div className="flex gap-2">
      {isSavingPost || isDeletingSaved ? (
          <Loader/>
        ) : 
        <img
          src={isSaved ? saved : save}
          width={20}
          height={20}
          alt="like"
          className="cursor-pointer"
          onClick={handleSavePost}
        />
        }

      </div>
    </div>
  );
};

export default PostStats;
