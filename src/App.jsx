import "./App.css";
import Image from "./components/Image";
import Logo from "./assets/logo.png";
import Button from "./components/Button";
import Container from "./components/Container";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <Container className={"py-3"}>
        <Flex className={"justify-between"}>
          <Image imgSrc={Logo} />
          <div className="">
            <ul className="flex gap-x-6 text-[18px] font-semibold text-[#29313D]">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>Price</li>
              <li>Blog</li>
            </ul>
          </div>
          <Button className={"px-[28px] py-[14px]"} btnText={"Contact Us"} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
