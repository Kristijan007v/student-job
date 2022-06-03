import Avatar from "../../components/Avatar/Avatar";
import IconButton from "../../components/Buttons/Button/IconButton/IconButton";
import ArrowLeftIcon from "../../components/Icons/ArrowLeftIcon";
import ShareIcon from "../../components/Icons/ShareIcon";
import StarIcon from "../../components/Icons/StarIcon";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function Profile() {
  return (
    <Skeleton>
      <div className="flex items-center justify-between p-6">
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>

        <div className="flex items-center space-x-4">
          <StarIcon style="text-yellow-400" size="xxl" />
          <IconButton>
            <ShareIcon />
          </IconButton>
        </div>
      </div>
      <Avatar
        avatarSize={"xl"}
        avatarName="Robert Junior"
        avatarDescription="Student at TVZ"
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Skeleton>
  );
}
