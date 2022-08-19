import styled from "styled-components";
import SearchIcon from "../../assets/icon/SearchIcon";

//
// import search from "../../assets/icon/search.svg"

export function Input(){
    return(
        <StyledInput>
          <div className="card">
        <div className="input-wrap">
            <SearchIcon/>
            {/* <img src={search} className='icon icon-search' alt="img" /> */}
            <input className="search" type="text" placeholder="Search Name, Date, Number..." />
        </div>
    </div>  
        </StyledInput>
        
    )
}
const StyledInput = styled.div`
    .card{
    height: 40px;
    padding: 15px 18px;
    border-bottom: 1px solid #F4F5F7;
}
.input-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 18px;
        
    }
    .search{
        width: 100%;
        height: 24px;
        border: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #8992A9;
}
`