import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Save, 
  Eye, 
  Send,
  CheckCircle2,
  AlertCircle,
  Info
} from "lucide-react";

// Dummy components (replace with your actual tab components)
const BasicInfoTab = ({ data, updateData, onComplete }) => {
  const [title, setTitle] = useState(data.tripTitle || "");
  const [overview, setOverview] = useState(data.tripOverview || "");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!title.trim() || !overview.trim()) {
      setError("Trip Title and Overview are required.");
      return;
    }
    updateData("tripTitle", title);
    updateData("tripOverview", overview);
    onComplete();
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Trip Title *</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Trip Overview *</label>
        <textarea
          className="form-control"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />
      </div>
      {error && <div className="text-danger mb-2">{error}</div>}
      <button className="btn btn-primary" onClick={handleNext}>
        Save & Continue
      </button>
    </div>
  );
};

export function AddTripForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic");
  const [completedTabs, setCompletedTabs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    tripTitle: "",
    tripOverview: "",
    destination: "",
    pricing: 0,
    // add more as needed
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const markTabComplete = (tabId) => {
    if (!completedTabs.includes(tabId)) {
      setCompletedTabs((prev) => [...prev, tabId]);
    }
  };

  const tabs = [
    { id: "basic", label: "Basic Info", icon: Info },
    { id: "itinerary", label: "Itinerary", icon: CheckCircle2 },
    { id: "media", label: "Media", icon: Eye },
    { id: "pricing", label: "Pricing", icon: Save },
    { id: "details", label: "Details", icon: AlertCircle },
    { id: "policies", label: "Policies", icon: Send },
  ];

  const progress = (completedTabs.length / tabs.length) * 100;

  const handlePublish = async () => {
    if (!formData.tripTitle || !formData.tripOverview) {
      toast.error("Please complete required fields before publishing.");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const tripId = Math.random().toString(36).substring(2, 8);
      toast.success("Trip published successfully!");
      navigate(`/trip/${tripId}`);
    } catch (error) {
      toast.error("Failed to publish trip. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h4 fw-bold">Add New Trip</h1>
          <p className="text-muted">Create a comprehensive travel package</p>
        </div>
        <div className="text-end">
          <p className="mb-1 small fw-medium">Progress</p>
          <div className="progress" style={{ height: "6px", width: "150px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="small text-muted mt-1">
            {completedTabs.length} of {tabs.length} completed
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="card shadow-sm">
        <div className="card-header fw-bold">Trip Information</div>
        <div className="card-body">
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                  className={`nav-link ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={16} className="me-1" />
                  {tab.label}
                  {completedTabs.includes(tab.id) && (
                    <CheckCircle2 size={14} className="text-success ms-1" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div style={{ minHeight: "400px" }}>
            {activeTab === "basic" && (
              <BasicInfoTab
                data={formData}
                updateData={updateFormData}
                onComplete={() => markTabComplete("basic")}
              />
            )}
            {activeTab !== "basic" && (
              <div className="text-muted">
                Demo placeholder: implement {activeTab} tab here
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
            <div>
              <span className="badge bg-secondary me-2">
                {completedTabs.length}/{tabs.length} sections complete
              </span>
              {progress === 100 && (
                <span className="badge bg-success">Ready to publish</span>
              )}
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary">
                <Save size={16} className="me-1" />
                Save Draft
              </button>
              <button className="btn btn-outline-primary">
                <Eye size={16} className="me-1" />
                Preview
              </button>
              <button
                className="btn btn-success"
                disabled={progress < 100 || isLoading}
                onClick={handlePublish}
              >
                <Send size={16} className="me-1" />
                {isLoading ? "Publishing..." : "Publish Trip"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
