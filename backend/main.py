from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from uuid import uuid4, UUID
import json
from fastapi.encoders import jsonable_encoder



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT"],
    allow_headers=["*"],
)

issues = []

class Issue(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    status: str
    priority: Optional[str] = None
    assignee: Optional[str] = None
    created_at: datetime = None
    updated_at: Optional[datetime] = None


# Api Endpoints
@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/issues")
def get_issues(
    search: Optional[str] = Query(None, description="Search term for issue titles"),
    status: Optional[str] = Query(None, description="Filter issues by status"),
    priority: Optional[str] = Query(None, description="Filter issues by priority"),
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(10, ge=1, le=100, description="Number of issues per page"),
    sort_by: Optional[str] = Query("created_at", description="Field to sort by"),
    sort_order: Optional[str] = Query("desc", description="Sort order")
):
    filtered_issues = issues

    if search:
        filtered_issues = [i for i in filtered_issues if search.lower() in i.title.lower()]
    if status:
        filtered_issues = [i for i in filtered_issues if status == i.status.lower()]
    if priority:
        filtered_issues = [i for i in filtered_issues if priority == i.priority]
    
    if sort_by:
        valid_sort_fields = {"title", "created_at", "updated_at", "priority", "status"}
        if sort_by not in valid_sort_fields:
            sort_by = "created_at"
        reverse_order = sort_order == "desc"
        print(issues)
        filtered_issues.sort(key=lambda x: getattr(x, sort_by), reverse=reverse_order)

    start = (page - 1) * page_size
    end = start + page_size
    return filtered_issues[start:end]

@app.get("/issues/{issue_id}")
def get_issue(issue_id: str):
    for issue in issues:
        if issue.id == issue_id:
            return issue
    raise HTTPException(status_code=404, detail="Issue not found")


@app.post("/issues")
# def create_issue(issue: Issue):
#     issue.created_at = datetime.now()
#     issue.updated_at = datetime.now()
#     issues.append(issue)
#     return issue
def create_issue(issue: Issue):
    issue.id = str(uuid4())
    issue.created_at = datetime.now()
    issue.updated_at = datetime.now()
    issues.append(issue)
    return issue


@app.post("/issues/bulk")
def create_issues_bulk():
    issues.clear()  # reset global array

    with open("samples.json", "r") as f:
        sample_issues = json.load(f)

    for sample in sample_issues:
        issue = Issue(
            id=str(uuid4()),
            title=sample['title'],
            description=sample.get('description'),
            status=sample['status'],
            priority=sample.get('priority'),
            assignee=sample.get('assignee'),
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        issues.append(issue)

    # Return list of Issue objects as JSON
    return jsonable_encoder(issues)
# def create_issues_bulk(new_issues: List[Issue]):
#     for issue in new_issues:
#         issue.created_at = datetime.now()
#         issue.updated_at = datetime.now()
#         issues.append(issue)
#     return new_issues


@app.put("/issues/{issue_id}")
def update_issue(issue_id: str):
    for index, issue in enumerate(issues):
        if issue.id == issue_id:
            issues[index].updated_at = datetime.now()
            return issues[index]
    raise HTTPException(status_code=404, detail="Issue not found")