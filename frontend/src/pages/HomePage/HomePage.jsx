import { Card, Avatar, Typography, Space, Row, Col } from "antd";
import {
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import s from "./HomePage.module.css";

const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Row gutter={[16, 16]} align="middle">
          <Col span={6}>
            <Avatar size={120} icon={<UserOutlined />} className={s.avatar} />
          </Col>
          <Col span={18}>
            <Title level={2} className={s.title}>
              Belinska Lesia
            </Title>
            <Row className={s.textContainer}>
              <Text className={s.subtitle}>Frontend Developer</Text>
              <Text className={s.location}>Kyiv, Ukraine</Text>
            </Row>
          </Col>
        </Row>
        <Space direction="vertical" size="small" className={s.section}>
          <Title level={4} className={s.sectionTitle}>
            About Me
          </Title>
          <Text className={s.info}>Love programming and traveling</Text>
          <Title level={4} className={s.skillsTitle}>
            Skills
          </Title>
          <ul className={s.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>GitHub & GitLab</li>
            <li>PHP - basic</li>
          </ul>
          <Title level={4} className={s.contactTitle}>
            Contact Me
          </Title>
          <Space>
            <a
              href="https://github.com/LesiaBelinska"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined className={s.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/lesia-belinska-2b31121bb/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined className={s.icon} />
            </a>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default HomePage;
