// WillingHelp.jsx
import React, { useState } from "react";
import "../styles/WillingHelp.css";
import {
  Slider,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Picture1 from "../assets/donation_intro/Picture1.png";
import Picture2 from "../assets/donation_intro/Picture2.png";
import Picture3 from "../assets/donation_intro/Picture3.png";

// 定义标签映射
const willingnessLabels = [
  "Extremely unlikely",
  "Unlikely",
  "Slightly unlikely",
  "Either",
  "Slightly likely",
  "Likely",
  "Extremely likely",
];
function WillingHelp(props) {
  const [willingness_first, setWillingnessFirst] = useState(1);

  const handleSliderChange = (event, newValue) => {
    setWillingnessFirst(newValue);
  };

  const handleNext = () => {
    const selectedLabel = willingnessLabels[willingness_first - 1]; // 将整数值转换为标签
    props.handleNext(selectedLabel);
  };

  return (
    <div className="willing-help-container">
      {/* Introduction Section */}
      <Typography variant="h5" component="div" className="introduction">
        <strong>Join us to help! There are many other ways!</strong>
      </Typography>

      {/* Introduction Section */}
      <div className="introduction-text">
        Donating money is just one way to make a difference. There are many
        other ways you can get involved in charity work, such as volunteering
        your time, advocating for important causes, and participating in
        community activities.
      </div>
      <div className="introduction-text">
        Below are a few key ways you can help.
      </div>

      {/* Three Main Sections with Cards */}
      <Grid container spacing={3} className="help-sections">
        {/* Section 1 */}
        <Grid item xs={12} md={4}>
          <Card className="help-card">
            <CardMedia
              component="img"
              height="200"
              image={Picture1}
              alt="Join SCAN"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Join Save the Children Action Network (SCAN)
              </Typography>
              <Typography variant="body2" color="textSecondary">
                As the political voice for children, SCAN is working to ensure
                that all children in the U.S. have access to high-quality early
                childhood education, keeping children safe at the southern
                border, and ensuring that girls around the world are given
                opportunities to lead.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} md={4}>
          <Card className="help-card">
            <CardMedia
              component="img"
              height="200"
              image={Picture2}
              alt="Policy and Advocacy"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Engage in Policy and Advocacy Work
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Support Save the Children's Public Policy and Advocacy team as
                they educate and influence policymakers to adopt policies and
                programs that improve children's lives, such as educating all
                refugee children and promoting global gender equality.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} md={4}>
          <Card className="help-card">
            <CardMedia
              component="img"
              height="200"
              image={Picture3}
              alt="Stop the War on Children"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Join the "Stop the War on Children" Campaign
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Participate in the #STOPTHEWARONCHILDREN campaign to stand up
                and speak out for the millions of children in danger around the
                world. Help raise awareness and drive change through social
                media advocacy, signing petitions, or participating in events.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Willingness to Help Content */}
      <div className="willing-help-content">
        <Card className="willing-help-slider-card">
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              className="willing-help-title"
            >
              Join us to Help 🤝
            </Typography>
            <Typography variant="body1" className="willing-help-text">
              Please indicate your willingness to join these activities if
              approached by the charity.
            </Typography>
            <Slider
              value={willingness_first}
              onChange={handleSliderChange}
              aria-labelledby="willingness-slider"
              // valueLabelDisplay="on" //暂时不用了
              step={0.5}
              min={0}
              max={3}
              valueLabelDisplay="auto"
              marks
              sx={{
                width: "80%",
              }}
            />
          </CardContent>
        </Card>
      </div>
      <Button
        onClick={handleNext}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "8px 16px", // 加大按钮的尺寸
          fontSize: "1rem", // 增大字体
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)", // 更立体的阴影
          transition: "background-color 0.2s ease, transform 0.1s ease",
          textTransform: "none",
          marginTop: "20px",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
        }}
        onMouseDown={(e) => {
          e.target.style.transform = "scale(0.8)"; // 模拟按下的效果
          e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
        }}
        onMouseUp={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default WillingHelp;
