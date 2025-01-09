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
  Backdrop,
  Grow,
} from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setShowArrow(rect.top < window.innerHeight / 2);
      }
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
          setShowBackdrop(true);
        },
        () => {
          setPopupMessage(
            "Oops! Something went wrong. Please try again later."
          );
          setShowPopup(true);
          setShowBackdrop(true);
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
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={3}
        sx={{ color: "#64ffda" }}
      >
        Let's Connect
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem",
          color: "#8892b0",
          mb: 4,
        }}
      >
        I’d love to hear from you! Please fill out the form below, and I’ll get
        back to you shortly.
      </Typography>

      <Container maxWidth="md">
        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            backgroundColor: "#1c2541",
            padding: "3rem",
            borderRadius: "12px",
            boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "800px",
            "&:hover": { boxShadow: "0px 6px 30px #64ffda" },
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
              "& .MuiOutlinedInput-root": {
                color: "#8892b0",
                "& fieldset": { borderColor: "#8892b0" },
                "&:hover fieldset": { borderColor: "#64ffda" },
                "&.Mui-focused fieldset": { borderColor: "#64ffda" },
              },
              "& .MuiInputLabel-root": { color: "#64ffda" },
              "& .Mui-focused .MuiInputLabel-root": {
                color: "#64ffda !important",
              },
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
              "& .MuiOutlinedInput-root": {
                color: "#8892b0",
                "& fieldset": { borderColor: "#8892b0" },
                "&:hover fieldset": { borderColor: "#64ffda" },
                "&.Mui-focused fieldset": { borderColor: "#64ffda" },
              },
              "& .MuiInputLabel-root": { color: "#64ffda" },
              "& .Mui-focused .MuiInputLabel-root": {
                color: "#64ffda !important",
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={6}
            variant="outlined"
            required
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                color: "#8892b0",
                "& fieldset": { borderColor: "#8892b0" },
                "&:hover fieldset": { borderColor: "#64ffda" },
                "&.Mui-focused fieldset": { borderColor: "#64ffda" },
              },
              "& .MuiInputLabel-root": { color: "#64ffda" },
              "& .Mui-focused .MuiInputLabel-root": {
                color: "#64ffda !important",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#64ffda",
              color: "#0b132b",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "10px 25px",
              "&:hover": {
                boxShadow: "0px 6px 25px rgba(100, 255, 218, 0.7)",
                backgroundColor: "#64ffda",
              },
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
            backgroundColor: "#3a506b",
            color: "#0b132b",
            "&:hover": {
              boxShadow: "0px 6px 20px rgba(100, 255, 218, 0.7)",
              backgroundColor: "#3a506b",
              color: "#64ffda",
            },
          }}
        >
          <ArrowUpward />
        </Fab>
      )}

      {/* Popup Modal with Enhanced Styling */}
      <Backdrop
        open={showBackdrop}
        sx={{ zIndex: 1200, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Dialog
        open={showPopup}
        onClose={() => {
          setShowPopup(false);
          setShowBackdrop(false);
        }}
        TransitionComponent={Grow}
        transitionDuration={400}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#0b132b",
            color: "#64ffda",
            padding: "1.5rem",
            textAlign: "center",
            boxShadow: "0px 0px 25px rgba(100, 255, 218, 0.9)",
            borderRadius: "12px",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        <DialogContent>
          <Typography sx={{ color: "#8892b0", fontSize: "1.2rem" }}>
            {popupMessage}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => setShowPopup(false)}
            sx={{
              backgroundColor: "#64ffda",
              color: "#0b132b",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Contact;
