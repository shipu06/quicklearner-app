import styled from "styled-components/native";
import GlobalStyle from "../constants/GlobalStyle";

export const OTPInputContainer = styled.View`
 justify-content: center;
 align-items: center;
`;

export const TextInputHidden = styled.TextInput`
  position: absolute;
  opacity: 0;
  width: 250px;
  height: 50px;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
 width: 80%;
 flex-direction: row;
 justify-content: space-evenly;
`;
export const SplitBoxes = styled.View`
 border-color: #e5e5e5;
 border-width: 2px;
 border-radius: 5px;
 padding: 12px;
 min-width: 50px;
 margin: 30px;
`;

export const SplitBoxText = styled.Text`
 font-size: 20px;
 text-align: center;
 color: #e5e5e5;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
 border-color: ${GlobalStyle.primaryColor};
`;