FROM python:3.13-slim
WORKDIR /backend
COPY . .
EXPOSE 8000
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
ENTRYPOINT ["uvicorn", "fast_main:app", "--host", "0.0.0.0", "--reload"]