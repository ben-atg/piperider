FROM python:3.9-slim
ARG PIPERIDER_VERSION

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates curl uuid-runtime git \
    && apt-get purge -y --auto-remove \
    && rm -rf /var/lib/apt/lists/*

# Install yq@4
RUN curl -L https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -o /bin/yq && chmod +x /bin/yq

RUN if [ -n "$PIPERIDER_VERSION" ]; then \
        pip install --no-cache-dir piperider==${PIPERIDER_VERSION}; \
    else \
        pip install --no-cache-dir piperider; \
    fi

WORKDIR /usr/src/github/

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
