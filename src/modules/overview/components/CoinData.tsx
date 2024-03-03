import { palette } from "@/theme/palette";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { CoinGeckoCoinResponse } from "..";
import { useState, useEffect } from "react";

export const CoinData = () => {
  const [coin, setCoin] = useState<CoinGeckoCoinResponse | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const coinId = "cosmos";
  /* eslint-disable */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        const data = await response.json();
        console.log(data);
        setCoin(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [coinId]);

  if (isLoading) {
    return <Skeleton variant="rectangular" width="100%" height={200} />;
  }

  if (error) {
    return <Typography color="error">Error fetching coin data</Typography>;
  }

  const formatPriceChange = (value: number) => {
    return `${(value * 100).toFixed(2)}%`;
  };

  return (
    <Grid container mb={3}>
      {coin ? (
        <>
          <Grid item>
            <Box display="flex" alignItems="center" mb={1.5}>
              <img src={coin.image?.small} alt={coin?.name} />
              <Typography variant="h3" ml={1}>
                {coin.name}
              </Typography>
            </Box>
            <Stack>
              <Box display="flex">
                <Typography variant="h6">Rank #</Typography>
                <Typography variant="h6" fontWeight={600}>
                  {coin?.market_cap_rank}
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Current Price</Typography>
                <Typography variant="h6">
                  {coin?.market_data?.current_price?.usd}
                </Typography>
              </Box>
            </Stack>
            <Stack>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Price Change 24h</Typography>
                <Typography
                  variant="h6"
                  color={
                    coin?.market_data?.price_change_24h > 0
                      ? palette.success.main
                      : palette.error.main
                  }
                >
                  {formatPriceChange(coin?.market_data?.price_change_24h)}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item ml={2}></Grid>
        </>
      ) : (
        <Skeleton variant="rounded" animation="wave" />
      )}
    </Grid>
  );
};
