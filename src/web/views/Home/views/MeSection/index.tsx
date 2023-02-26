import Image from "next/image";
import {
  DescriptionProfile,
  HolderImageProfile,
  InfosHolder,
  MeSectionHolder,
  ProfessionText,
  ProfileNameText,
  SaudationText,
} from "./styles";

const dricoImage = require("../../../../../../public/svgs/drico-image-2.svg");

export const MeSection = () => {
  return (
    <MeSectionHolder>
      <InfosHolder>
        <SaudationText>Hello, I’m</SaudationText>
        <ProfileNameText>Adriano Castro</ProfileNameText>
        <ProfessionText>Web and Mobile Developer Jr</ProfessionText>
        <DescriptionProfile>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using Content here, content
          here, making it look like readable English. Lorem Ipsum is simply
          dummy text of the printing.
        </DescriptionProfile>
      </InfosHolder>
      <HolderImageProfile>
        <Image src={dricoImage} alt="profileImg" width={400} />
      </HolderImageProfile>
    </MeSectionHolder>
  );
};
