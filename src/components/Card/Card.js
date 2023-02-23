import React from "react";
import { Github } from "../../assets/allSvgs/AllSvgs";

import {
  Box,
  Title,
  Description,
  Tags,
  Tag,
  Footer,
  Link,
  Git,
  Item,
} from "../../assets/StyledComponent/CardStyled";

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link href={demo} target="_blank">
          Visit
        </Link>
        <Git href={github} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
