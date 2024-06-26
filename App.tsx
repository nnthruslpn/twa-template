import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
//import { Counter } from "./components/Counter";
import  NFTCollection  from "./components/NFTCollection";
//import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  
  background-color: #e8e8e8;
  color: black;


  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }

 
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px 20px;
  overflow: hidden;
`;

const AppContainer = styled.div`
    max-width: auto;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          <NFTCollection />
          
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
