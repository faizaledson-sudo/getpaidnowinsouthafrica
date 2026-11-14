import { createFileRoute } from "@tanstack/react-router";
import { AgeVerificationView } from "@/components/AgeVerificationView";

export const Route = createFileRoute("/age-verification")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => search,
  head: () => ({
    meta: [
      { title: "Age Verification — South Africa" },
      {
        name: "description",
        content: "Please confirm that you are 18 years of age or older to continue.",
      },
    ],
  }),
  component: AgeVerificationPage,
});

function AgeVerificationPage() {
  return <AgeVerificationView />;
}
