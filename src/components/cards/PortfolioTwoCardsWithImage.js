import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SeveralKits from "images/kits.jpeg";
import Executives from "images/chapters.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pt-20 lg:pt-24 pb-12 lg:pb-16`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`xl:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const ThreeColumn = tw.div`flex flex-wrap`;
// const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-3xl lg:text-3xl text-center md:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 w-full mt-6`;

export default ({
  subheading = "AUesome Chapters",
  headingHtmlComponent = (
    <>
      Neurodiversity <span tw="text-primary-500">advocacy</span> & outreach
    </>
  ),
  description = "AUesome's goal is to make personalized, accessible, and interactive therapy resources. If you're a student interested in being a leader that wants to learn more and advocate for neurodiversity while supporting your local community, be sure to check out our chapters initiative! Join a network global of students, get curated resources and opportunities, and make an impact on those around you.",
  linkText = "AUesome Chapters",
  textOnLeft = false,
}) => {
  const cards = [
    {
      imageSrc: Executives,
      company: "Learn About Chapters",
      type: "Advocacy",
      title: "Explore our initiative and view existing chapters",
      durationText: "Self-paced",
      locationText: "Local community",
      cardLinkText: "Learn More",
      url: "/chapters",
    },
    {
      imageSrc: SeveralKits,
      company: "Create a Chapter",
      type: "Join today!",
      title: "Sign up to create your own chapter in your community",
      durationText: "Helping others",
      locationText: "Global Impact",
      cardLinkText: "Sign Up",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeTuVnWaGl2MJXEgeM2AsB3mSU9oPEVWGXymL4_joRiTr2vhg/viewform",
    },
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink href="/chapters">
                {linkText} <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  {/* <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta> */}
                  <CardAction
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = card.url;
                    }}
                  >
                    {card.cardLinkText}
                  </CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
