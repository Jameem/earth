import styled from 'styled-components';

const Link = styled.a`
  color: #9924ed;
  text-decoration: none;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #fff;
  font-size: 18px;
  margin-top: 1em;
  line-height: 1.5;
  max-width: 30%;
  text-align: center;
  z-index: 99;
`;

const Social = styled.div`
  display: flex;
  gap: 10px;
  z-index: 99;
`;

export function Footer() {
  return (
    <>
      <Paragraph>
        Developed by{' '}
        <Link href='https://www.jameem.dev/' target='_blank'>
          Jameem Mohammed
        </Link>
      </Paragraph>
      <Social>
        <a href='https://github.com/Jameem'>
          <img src='github.png' alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/jameem/'>
          <img src='linkedin.png' alt='linkedin' />
        </a>
      </Social>
    </>
  );
}
