import React from "react";
import icon from "../images/Vector (1).svg";
import image from "../images/Ellipse 8 (1).svg";
import Charts from "./Charts";
import TableContent from "./TableContent";
import PieChart from "./PieChart";

const Home = () => {
  return (
    <div
      style={{
        height: "1354px",
        backgroundColor: "rgba(2, 171, 108, 0.04)",
       
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "64px",
          padding: "0px 20px",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
          boxSizing:"border-box"
        }}
      >
        <div
          style={{
            display: "flex",
            height: "64px",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
              fill="#02AB6C"
            />
            <path
              d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
              fill="#02AB6C"
            />
            <path
              d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
              fill="#02AB6C"
            />
            <path
              d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
              fill="#02AB6C"
            />
            <path
              d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z"
              fill="#02AB6C"
            />
          </svg>
          <p
            style={{
              color: "#000",
              fontFamily: "HelveticaNeue",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Category-1
          </p>
        </div>
        <div
          style={{
            display: "flex",
            height: "56px",
            padding: "8px 16px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={image}></img>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 8L12 16L19 8H5Z"
              fill="#474444"
            />
          </svg>
          <div
            style={{
              display: "flex",
              borderRadius: "8px",
              border: "1px solid #EBEBEB",
              background: "#FFF",
              width: "40px",
              height: "40px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={icon} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "99.7px",
        }}
      >
        <select style={{ textAlign: "right", border: "1px solid #02AB6C",marginTop:"28px" }}>
          <option value="data1">Show Time: March23-April23</option>
          <option value="data1">Show Time: March23-April23</option>
          <option value="data1">Show Time: March23-April23</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding:"30px 104px 10px 24px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFF",
            padding: "10px 20px 10px 20px",
            gap:"24px",
             borderRadius: "10px",
            width:"209px",
            textAlign:"left"
            
          }}
        >
          <div>
            <p style={{fontSize:"14px"}}>Purchased goods and Services</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"space-around",
              alignSelf: "stretch",
              border: "1px solid #E03021",
              borderRadius: "8px",
              backgroundColor: "#ffd5d4",
             borderLeft: "6px solid #E03021",
            }}
          >
            
            <p style={{
textAlign: "center",
fontFamily: "HelveticaNeue",

fontSize: "15px",
fontStyle: "normal",
fontWeight: "400"}}>39699 CO2e</p>
            <p style={{color: "rgba(171, 2, 2, 0.67)",
textAlign: "center",
fontFamily: "HelveticaNeue",
fontSize: "11px",
fontStyle: "normal",

fontWeight: "400"
}}>7.6%YOY↑</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFF",
            padding: "10px 20px 10px 20px",
            gap:"24px",
             borderRadius: "10px",
            width:"209px",
            textAlign:"left"
          }}
        >
          <div>
            <p>Revenue to Emission Ratio</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"space-between",
              paddingLeft:"15px",
              paddingRight:"20px",
              alignSelf: "stretch",
              border: "1px solid #FFC400",
              borderRadius: "8px",
              backgroundColor: "#fcf2d2",
             borderLeft: "6px solid #FFC400",
            }}
          >
            
            <p style={{
textAlign: "center",
fontFamily: "HelveticaNeue",

fontSize: "15px",
fontStyle: "normal",
fontWeight: "400"}}>136.0</p>
            <p style={{color: "rgba(171, 2, 2, 0.67)",
textAlign: "center",
fontFamily: "HelveticaNeue",
fontSize: "11px",
fontStyle: "normal",

fontWeight: "400"
}}>3.7%YOY↑</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFF",
            padding: "10px 20px 10px 20px",
            gap:"24px",
             borderRadius: "10px",
            width:"209px",
            textAlign:"left"
          }}
        >
          <div>
            <p style={{fontSize:"14px"}}
            >Category 1</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft:"15px",
              alignSelf: "stretch",
              border: "1px solid #02AB6C",
              borderRadius: "8px",
              backgroundColor: "#ccf5e6",
             borderLeft: "6px solid #02AB6C",
            }}
          >
            
            <p style={{
textAlign: "center",
fontFamily: "HelveticaNeue",

fontSize: "15px",
fontStyle: "normal",
fontWeight: "400"}}>32% of Scope3</p>

          </div>
        </div>
        <div
          style={{
            width:"130px",
            backgroundColor: "#02AB6C",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <p style={{fontSize:"14px",fontWeight:"400"}}>Total number of reached suppliers</p>
          <p >143</p>
        </div>
      </div>
      <div style={{paddingLeft:"24px"}}>
      <Charts />
      </div>
      <div style={{display:"flex",paddingLeft:"24px",marginTop:"15px",gap:"21px"}}>
        <div>
            <PieChart />
        </div>
        <div>
            <TableContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
