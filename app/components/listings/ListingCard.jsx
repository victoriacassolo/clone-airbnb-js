"use client";

import useCountries from "@/app/hooks/useCountries";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const ListingCard = ({
  data,
  reservation,
  disabled,
  actionLabel,
  actionId,
  currentUser,
  onAction = () => {},
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data?.locationValue);
  const handleCancel = useCallback(() => {
    if (disabled) {
      return;
    }

    onAction?.(actionId);
  }, [onAction, actionId]);

  return <div>Listing Card</div>;
};

export default ListingCard;
