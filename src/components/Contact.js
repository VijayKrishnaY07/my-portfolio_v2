import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogActions,
  Fab,
} from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "vijay's", // Replace with your EmailJS Service ID
        "template_vqsn8j8", // Replace with your Template ID
        form.current,
        "s-OjtRcMWpJQeY0je" // Replace with your Public Key
      )
      .then(
        () => {
          setPopupMessage(
            "Thank you for reaching out! I’m excited to connect and will respond to your message promptly."
          );
          setShowPopup(true);
        },
        () => {
          setPopupMessage(
            "Oops! Something went wrong. Please try again later."
          );
          setShowPopup(true);
        }
      );

    e.target.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "4rem 2rem", md: "6rem 4rem" },
        backgroundColor: "#0b132b",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Let's Connect
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.2rem", color: "#8892b0", mb: 4 }}
      >
        I’d love to hear from you! Please fill out the form below, and I’ll get
        back to you shortly.
      </Typography>

      <Container maxWidth="sm">
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            backgroundColor: "#1c2541",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "&:hover": { boxShadow: "0px 6px 20px #64ffda" },
          }}
        >
          <TextField
            fullWidth
            label="Name"
            name="user_name"
            variant="outlined"
            required
            sx={{
              mb: 2,
              input: { color: "white" },
              label: { color: "#64ffda" },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="user_email"
            type="email"
            variant="outlined"
            required
            sx={{
              mb: 2,
              input: { color: "white" },
              label: { color: "#64ffda" },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            required
            sx={{
              mb: 3,
              input: { color: "white" },
              label: { color: "#64ffda" },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#64ffda",
              color: "#0b132b",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#3a506b" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>

      {/* Scroll-to-Top Button */}
      {showArrow && (
        <Fab
          color="primary"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: "#64ffda",
            color: "#0b132b",
            "&:hover": { backgroundColor: "#3a506b" },
          }}
        >
          <ArrowUpward />
        </Fab>
      )}

      {/* Popup Modal */}
      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <DialogContent>
          <Typography>{popupMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPopup(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Contact;
