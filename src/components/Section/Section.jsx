import PropTypes from 'prop-types';

import { Container, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children && children}
    </Container>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
