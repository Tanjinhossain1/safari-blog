import { CategoryTypes } from "@/types/category";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function CategoryListComponent({
  category,
}: {
  category: CategoryTypes[];
}) {
    const history = useRouter();
  return (
    <>
      <Container sx={{ bgcolor: "#bd047c", p: 1 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#f5f5f5" }}>
          Categories
        </Typography>
      </Container>

      {category.map((value: CategoryTypes) => {
        return (
          <Typography
            sx={{
              p: 1,
              backgroundColor: "#f2e4ea",
              ":hover": { backgroundColor: "#f584b7" },
              cursor: "pointer",
              borderBottom: "1px solid white",
            }}
            key={value.id}
            onClick={() => {
              history.push(`/category/${value.title}`);
            }}
          >
            {value.title}
          </Typography>
        );
      })}
    </>
  );
}
