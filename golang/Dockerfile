FROM golang:1.20-alpine AS builder

WORKDIR /usr/src/app

COPY hello.go .
RUN CGO_ENABLED=0 GOOS=linux  go build -o hello hello.go

FROM scratch

COPY --from=builder /usr/src/app/hello ./

CMD ["/hello"]