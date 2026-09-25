import { useEffect, useState } from "react";

const formatRating = (value) =>
    Number(value).toLocaleString("es-ES", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });

export const useGoogleRating = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let alive = true;
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/google-reviews`)
            .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
            .then((d) => {
                if (alive && d?.configured && d.rating != null) setData(d);
            })
            .catch(() => {});
        return () => {
            alive = false;
        };
    }, []);

    return {
        rating: data ? formatRating(data.rating) : null,
        mapsUrl: data?.googleMapsUri || null,
    };
};
