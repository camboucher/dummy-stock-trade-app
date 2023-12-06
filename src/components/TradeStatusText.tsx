import { useEffect, useMemo, useState } from "react";
import { SubmissionStatus } from "../types";

interface Props {
  submissionStatus: SubmissionStatus;
}

export const TradeStatusText = ({ submissionStatus }: Props) => {
  const [showStatus, setShowStatus] = useState(
    submissionStatus !== SubmissionStatus.NONE
  );

  useEffect(() => {
    setShowStatus(submissionStatus !== SubmissionStatus.NONE);
  }, [submissionStatus]);

  const { text, color } = useMemo(() => {
    switch (submissionStatus) {
      case SubmissionStatus.PENDING:
        return { text: "Submitting Trade...", color: "black" };
      case SubmissionStatus.FAILED:
        return { text: "Trade Submission Failed", color: "red" };
      case SubmissionStatus.SUCCESS:
        return { text: "Trade Submitted Successfully!", color: "green" };
      default:
        return { text: "", color: "black" };
    }
  }, [submissionStatus]);

  return (
    showStatus && (
        <h5 style={{ color }}>{text}</h5>
    )
  );
};
