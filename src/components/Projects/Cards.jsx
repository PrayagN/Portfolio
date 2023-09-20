import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 100px;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: white;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  z-index: 9999;
`;
const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  position: relative; /* Make the card container relative */

  /* Add styles for the hover effect */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  }

  /* Add styles for the button when hovering */
  &:hover ${Button} {
    display: block;
    position: absolute;
    top: 50%; /* Adjust the vertical position of the button */
    left: 50%; /* Adjust the horizontal position of the button */
    transform: translate(-50%, -50%); /* Center the button */
    z-index: 2; /* Ensure the button is above the blur overlay */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: rgba(133, 76, 230, 0.2);;
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Cards = ({ project, setOpenModal }) => {
  return (
    <Card
      key={project}
      onClick={() => {
        setOpenModal({ state: true, project: project });
        console.log("This code is executed when the card is clicked.");
      }}
    >
      <Image src={project?.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project?.title}</Title>
        <Date>{project?.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {/* <Button>View More</Button> */}
    </Card>
  );
};

export default Cards;
