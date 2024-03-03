import { useState, useEffect } from "react";
import { Grid, Skeleton } from "@mui/material";
import { CardBlocks } from "./CardBlocks";
import { formatDate } from "@/utils";
import { ResponseBlocksLatest } from "..";
import { interval } from "rxjs";
import { switchMap } from "rxjs/operators";
import { axios } from "@/libs/axios";

export const LatestBlocks = () => {
  const [blockData, setBlockData] = useState<ResponseBlocksLatest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const subscription = interval(5000)
      .pipe(switchMap(() => axios.get<ResponseBlocksLatest>("/blocks/latest")))
      .subscribe({
        next: (response) => {
          setBlockData(response.data);
          setIsLoading(false);
        },
        error: (error) => {
          console.error("Error fetching latest block:", error);
          setIsLoading(false);
        },
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return isLoading || !blockData ? (
    <Grid container spacing={3} mb={3}>
      <Grid item lg={4}>
        <Skeleton variant="rectangular" height={118} />
      </Grid>

      <Grid item lg={4}>
        <Skeleton variant="rectangular" height={118} />
      </Grid>

      <Grid item lg={4}>
        <Skeleton variant="rectangular" height={118} />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={3} mb={4}>
      <Grid item lg={4}>
        <CardBlocks
          title="BLOCK HEIGHT"
          amount={blockData?.block?.header?.height ?? ""}
        />
      </Grid>
      <Grid item lg={4}>
        <CardBlocks
          title="TIME"
          amount={formatDate(blockData?.block?.header?.time ?? "")}
        />
      </Grid>
      <Grid item lg={4}>
        <CardBlocks
          title="CHAIN ID"
          amount={blockData?.block?.header?.chain_id ?? ""}
        />
      </Grid>
    </Grid>
  );
};
