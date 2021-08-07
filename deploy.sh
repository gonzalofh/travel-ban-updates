gcloud functions deploy travelBanUpdates \
    --runtime nodejs12 \
    --trigger-http \
    --allow-unauthenticated \
    --entry-point default \
    --env-vars-file .env