import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Alert,
  Chip,
} from "@mui/material";
import { RefreshRounded, CheckCircle, Cancel } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { YesNoResponse } from "./types";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const [data, setData] = useState<YesNoResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestCount, setRequestCount] = useState(0);

  const fetchYesNoData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://yesno.wtf/api");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: YesNoResponse = await response.json();
      setData(result);
      setRequestCount((prev) => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getAnswerColor = (answer: string) => {
    return answer.toLowerCase() === "yes" ? "success" : "error";
  };

  const getAnswerIcon = (answer: string) => {
    return answer.toLowerCase() === "yes" ? <CheckCircle /> : <Cancel />;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Yes/No Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Get random yes/no answers with fun GIFs!
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mb={4}>
          <Button
            variant="contained"
            size="large"
            onClick={fetchYesNoData}
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={20} /> : <RefreshRounded />
            }
            sx={{ minWidth: 200, py: 1.5 }}
          >
            {loading ? "Getting Answer..." : "Get Next Answer"}
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {data && (
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              gap={3}
            >
              <Box flex={1}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image={data.image}
                    alt={`${data.answer} GIF`}
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
              </Box>
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                p={2}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  textAlign="center"
                >
                  Answer
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={3}
                >
                  <Chip
                    icon={getAnswerIcon(data.answer)}
                    label={data.answer.toUpperCase()}
                    color={getAnswerColor(data.answer)}
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      px: 2,
                      py: 1,
                      height: "auto",
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    Forced Answer: {data.forced ? "Yes" : "No"}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Request #{requestCount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        )}

        {!data && !loading && (
          <Paper
            elevation={1}
            sx={{
              p: 4,
              textAlign: "center",
              backgroundColor: "grey.50",
              border: "2px dashed",
              borderColor: "grey.300",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Click "Get Next Answer" to start fetching data!
            </Typography>
          </Paper>
        )}

        <Box mt={4} textAlign="center">
          <Typography variant="caption" color="text.secondary">
            Powered by{" "}
            <a
              href="https://yesno.wtf/api"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.palette.primary.main }}
            >
              yesno.wtf API
            </a>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
