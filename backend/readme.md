# Backend Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Mac/Linux
   # venv\Scripts\activate for Windows
    ```

2. Install dependencies:
    ```bash
   pip install -r requirements.txt
   ```

3. Run the backend server:
   ```bash
    uvicorn main:app --reload
   ```