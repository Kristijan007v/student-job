import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Buttons/Button/Button";
import IconButton from "../../components/Buttons/Button/IconButton/IconButton";
import ArrowLeftIcon from "../../components/Icons/ArrowLeftIcon";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import ChatIcon from "../../components/Icons/ChatIcon";
import EducationIcon from "../../components/Icons/EducationIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import IconBlock from "../../components/Icons/IconBlock/IconBlock";
import PhoneIcon from "../../components/Icons/PhoneIcon";
import ShareIcon from "../../components/Icons/ShareIcon";
import StarIcon from "../../components/Icons/StarIcon";
import SuitcaseIcon from "../../components/Icons/SuitcaseIcon";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import Overlay from "../../components/Overlay/Overlay";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function Profile() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Skeleton>
      <div className="bg-background-primary-light pb-10 dark:bg-background-primary-dark">
        <div className="flex items-center justify-between p-6">
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>

          <div className="flex items-center space-x-4">
            <StarIcon style="text-yellow-400" size="xxl" />
            <IconButton>
              <ShareIcon
                onclick={() => {
                  setShowOverlay(true);
                }}
              />
            </IconButton>
          </div>
        </div>
        <Avatar
          avatarSize={"xl"}
          avatarName="Robert Junior"
          avatarDescription="Student at TVZ"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />

        <div className="mt-6 flex justify-center space-x-5">
          <IconBlock text="Chat" color="bg-green-light">
            <ChatIcon size="xl" style="text-heading-light" />
          </IconBlock>
          <IconBlock text="Email" color="bg-blue-light">
            <EmailIcon size="xl" style="text-heading-light" />
          </IconBlock>
          <IconBlock text="Call" color="bg-gray-light">
            <PhoneIcon size="xl" style="text-heading-light" />
          </IconBlock>
        </div>
      </div>

      <div className="border-t border-secondary-light p-4 dark:border-transparent">
        <h3 className="text-center">Details</h3>
        <div className="mt-6 flex flex-col space-y-4">
          <InfoBlock infoLabel="Date of birth" infoValue="07.03.2000">
            <CalendarIcon size="md" />
          </InfoBlock>
          <InfoBlock infoLabel="Education" infoValue="Gimnazija Sesvete">
            <EducationIcon size="xl" />
          </InfoBlock>
          <InfoBlock infoLabel="Work history" infoValue="RTL Hrvatska d.o.o">
            <SuitcaseIcon size="lg" />
          </InfoBlock>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
          <Button text="Download full resume" />
        </div>
      </div>

      {/* Social share */}
      {showOverlay && (
        <Overlay
          closeOverlay={() => {
            setShowOverlay(false);
          }}
        >
          <div className="rounded-lg bg-white p-6">
            <h3 className="text-center text-black">Share Robert's profile</h3>
            <div></div>
          </div>
        </Overlay>
      )}
    </Skeleton>
  );
}
