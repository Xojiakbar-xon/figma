import styled from "styled-components";

export const SearchInputStyled = styled.div`
    .input--search {
      display: flex;

      padding: 17px;
      border-bottom: 1px solid #F4F5F7;


      .input {
        margin-left: 18px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #8992A9;
        border: 0;
        height: 10px;
        width: 100%;
        input {
          border: none;
          height: 17px;
          width: 100%;
          input:onclick {
          }

          &:focus {
            outline: none;
          }
        }

      }
    }
`;
