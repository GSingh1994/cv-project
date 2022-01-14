import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import mailIcon from "../assets/mail.svg";
import gitHubIcon from "../assets/github.svg";
import locationIcon from "../assets/location.svg";
const uniqid = require("uniqid");

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "black",
  },
  cvHeader: {
    backgroundColor: "#373d48",
    color: "#ffffff",
    padding: "17.25 37.5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 15,
  },
  info: { height: 70 },
  personalInfo: {
    fontSize: 12,
    marginBottom: 6,
  },
  logo: {
    marginRight: 8,
  },

  cvBody: {
    padding: "0 37.5 30 37.5",
  },
  sectionTitle: {
    borderBottom: "1px solid #373d48",
    paddingBottom: 3.75,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 12.06,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
    lineHeight: 1.5,
  },
  skill: {
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    fontSize: 10,
    opacity: 0.7,
    position: "absolute",
    bottom: 1,
    flexDirection: "row",
    margin: "18 36",
  },
});

const PdfCv = ({ headerState, expState, eduState, skillsState }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.cvHeader}>
          <Text style={styles.title}>{headerState.name}</Text>
          <View style={styles.info}>
            <View style={styles.personalInfo}>
              <Image style={styles.logo} src="../assets/test.png" />
              <Text>{headerState.website}</Text>
            </View>
            <View style={styles.personalInfo}>
              <Image style={styles.logo} src={gitHubIcon} />
              <Text> {headerState.address}</Text>
            </View>
            <View style={styles.personalInfo}>
              <Image style={styles.logo} src={gitHubIcon} />
              <Text> {headerState.email}</Text>
            </View>
          </View>
        </View>

        <View style={styles.cvBody}>
          <Text style={styles.sectionTitle}>Professinal Summary</Text>
          <Text style={{ fontSize: 12, lineHeight: 1.5 }}>
            {headerState.summary}
          </Text>

          <Text style={styles.sectionTitle}>Work History</Text>
          {expState.map((exp) => (
            <View key={uniqid()} style={styles.section}>
              <View>
                <Text>{exp.startJob} -</Text>
                <Text>{exp.endJob}</Text>
              </View>

              <View>
                <Text style={{ fontWeight: "bold" }}>{exp.employer}</Text>
                <Text>{exp.jobTitle}</Text>
              </View>

              <View style={{ marginBottom: 10 }}>
                <Text>{exp.city},</Text>
                <Text>{exp.province}</Text>
              </View>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Education</Text>
          {eduState.map((edu) => (
            <View key={uniqid()} style={styles.section}>
              <View>
                <Text>{edu.startSchool} -</Text>
                <Text>{edu.endSchool}</Text>
              </View>

              <View>
                <Text style={{ fontWeight: "bold" }}>{edu.school}</Text>
                <Text>{edu.degree}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text>{edu.city},</Text>
                <Text>{edu.province}</Text>
              </View>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.section}>
            {skillsState.map((skill) => (
              <View style={{ marginBottom: 10 }} key={uniqid()}>
                <Text style={styles.skill}>{skill.skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>{headerState.name}</Text>
          <Text style={{ marginLeft: 130 }}>{headerState.email}</Text>
          <Text style={{ marginLeft: 130 }}>1/1</Text>
        </View>
      </Page>
    </Document>
  );
};
export default PdfCv;
