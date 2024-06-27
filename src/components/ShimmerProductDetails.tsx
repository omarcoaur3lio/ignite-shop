import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export function ShimmerProductDetails() {
  return (
    <>
      <Skeleton
        borderRadius={4}
        height={656}
        width={520}
        baseColor="#1b1b1d"
        highlightColor="#202022"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Skeleton
              borderRadius={4}
              height={24}
              width={"100%"}
              baseColor="#1b1b1d"
              highlightColor="#202022"
            />
            <Skeleton
              borderRadius={4}
              height={32}
              width={150}
              baseColor="#1b1b1d"
              highlightColor="#202022"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Skeleton
              borderRadius={4}
              height={16}
              width={"100%"}
              baseColor="#1b1b1d"
              highlightColor="#202022"
            />
            <Skeleton
              borderRadius={4}
              height={16}
              width={"100%"}
              baseColor="#1b1b1d"
              highlightColor="#202022"
            />
            <Skeleton
              borderRadius={4}
              height={16}
              width={"100%"}
              baseColor="#1b1b1d"
              highlightColor="#202022"
            />
            <Skeleton
              borderRadius={4}
              height={16}
              width={"50%"}
              baseColor="#1b1b1d"
              highlightColor="#202022"
            />
          </div>
        </div>
        <Skeleton
          borderRadius={4}
          height={54}
          width={"100%"}
          baseColor="#1b1b1d"
          highlightColor="#202022"
        />
      </div>
    </>
  );
}
