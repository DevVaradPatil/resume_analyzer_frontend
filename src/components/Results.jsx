import React, { useState } from "react";
import {
  BarChart3,
  Trophy,
  Zap,
  TrendingUp,
  CheckCircle,
  Brain,
  Lightbulb,
  AlertTriangle,
  Award,
  FileText,
  Users,
  Star,
  ThumbsUp,
  Check,
  Target,
  Shield,
  PieChart,
  BookOpen,
  Briefcase,
  User,
  Gauge,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  Newspaper,
} from "lucide-react";

function Results({ data }) {
  const [expandedSections, setExpandedSections] = useState({
    comprehensive: true,
    ats: true,
    gaps: true,
    sections: true,
    industry: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return <Trophy className="text-emerald-600" size={48} />;
    if (score >= 60) return <ThumbsUp className="text-yellow-600" size={48} />;
    return <TrendingUp className="text-red-600" size={48} />;
  };

  const getQualityColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case "A":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "B":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "C":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "D":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "F":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Enhanced Summary Insights Card */}
      {data.summary_insights && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Award size={28} />
              Resume Analysis Summary
            </h2>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Overall Grade */}
              <div
                className={`rounded-xl border-2 p-6 text-center ${getGradeColor(
                  data.summary_insights.overall_grade
                )}`}
              >
                <div className="text-4xl font-bold mb-2">
                  {data.summary_insights.overall_grade}
                </div>
                <div className="text-sm font-medium">Overall Grade</div>
              </div>

              {/* ATS Readiness */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {Math.round(data.summary_insights.ats_readiness || 0)}%
                </div>
                <div className="text-sm font-medium text-blue-700">
                  ATS Ready
                </div>
              </div>

              {/* Market Competitiveness */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="text-emerald-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">
                  {Math.round(data.summary_insights.competitiveness || 0)}%
                </div>
                <div className="text-sm font-medium text-emerald-700">
                  Competitive
                </div>
              </div>

              {/* Match Score */}
              <div
                className={`rounded-xl border-2 p-6 text-center ${getScoreColor(
                  data.score
                )}`}
              >
                <div className="flex items-center justify-center mb-2">
                  {getScoreIcon(data.score)}
                </div>
                <div className="text-2xl font-bold mb-1">{data.score}%</div>
                <div className="text-sm font-medium">Job Match</div>
              </div>
            </div>

            {/* Top Strengths */}
            {data.summary_insights.top_strengths &&
              data.summary_insights.top_strengths.length > 0 && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Star className="text-green-600" size={16} />
                    Top Strengths
                  </h4>
                  <div className="space-y-1">
                    {data.summary_insights.top_strengths.map(
                      (strength, index) => (
                        <div key={index} className="text-sm text-green-700">
                          • {strength}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* Priority Actions */}
            {data.summary_insights.priority_actions &&
              data.summary_insights.priority_actions.length > 0 && (
                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-orange-600" size={16} />
                    Priority Actions
                  </h4>
                  <div className="space-y-2">
                    {data.summary_insights.priority_actions.map(
                      (action, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                              action.priority
                            )}`}
                          >
                            {action.priority}
                          </span>
                          <div className="text-sm text-orange-700">
                            <span className="font-medium">{action.area}:</span>{" "}
                            {action.recommendation}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
      )}

      {/* Main Score Card - Enhanced */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <BarChart3 size={28} />
            Analysis Results
          </h2>
          {data.enhancement?.job_category && (
            <p className="text-emerald-100 mt-2">
              Job Category:{" "}
              <span className="font-semibold">
                {data.enhancement.job_category}
              </span>
              <span className="ml-2 text-sm">
                ({Math.round(data.enhancement.category_confidence * 100)}%
                confidence)
              </span>
            </p>
          )}
        </div>

        <div className="p-8">
          <div
            className={`rounded-2xl border-2 p-8 text-center ${getScoreColor(
              data.score
            )}`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-shrink-0">{getScoreIcon(data.score)}</div>
              <div>
                <div className="text-5xl font-bold">{data.score}%</div>
                <div className="text-lg font-medium mt-2">Job Match Score</div>
              </div>
            </div>
            <div className="w-full bg-white rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${data.score}%`,
                  backgroundColor:
                    data.score >= 80
                      ? "#10b981"
                      : data.score >= 60
                      ? "#f59e0b"
                      : "#ef4444",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Analysis */}
      {data.comprehensive_analysis && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 cursor-pointer"
            onClick={() => toggleSection("comprehensive")}
          >
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PieChart size={24} />
                Comprehensive Analysis
                <span className="ml-2 text-lg">
                  {Math.round(data.comprehensive_analysis.overall_score || 0)}%
                </span>
              </div>
              {expandedSections.comprehensive ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </h3>
          </div>

          {expandedSections.comprehensive && (
            <div className="p-6">
              {/* Detailed Metrics */}
              {data.comprehensive_analysis.detailed_metrics && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {Object.entries(
                    data.comprehensive_analysis.detailed_metrics
                  ).map(([metric, details]) => (
                    <div key={metric} className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700 capitalize">
                          {metric.replace(/_/g, " ")}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {Math.round(details.score || 0)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                        <div
                          className={`h-2 rounded-full ${getQualityColor(
                            details.score || 0
                          )} transition-all duration-500`}
                          style={{ width: `${details.score || 0}%` }}
                        ></div>
                      </div>
                      {details.details && (
                        <div className="text-xs text-slate-600">
                          {Object.entries(details.details)
                            .slice(0, 2)
                            .map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span>{key.replace(/_/g, " ")}:</span>
                                <span>
                                  {typeof value === "number"
                                    ? Math.round(value)
                                    : value}
                                </span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Strengths and Weaknesses */}
              <div className="grid md:grid-cols-2 gap-4">
                {data.comprehensive_analysis.strengths &&
                  data.comprehensive_analysis.strengths.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={16} />
                        Strengths
                      </h4>
                      <div className="space-y-1">
                        {data.comprehensive_analysis.strengths.map(
                          (strength, index) => (
                            <div key={index} className="text-sm text-green-700">
                              • {strength}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {data.comprehensive_analysis.weaknesses &&
                  data.comprehensive_analysis.weaknesses.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="text-red-600" size={16} />
                        Areas for Improvement
                      </h4>
                      <div className="space-y-1">
                        {data.comprehensive_analysis.weaknesses.map(
                          (weakness, index) => (
                            <div key={index} className="text-sm text-red-700">
                              • {weakness}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ATS Analysis */}
      {data.ats_analysis && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 cursor-pointer"
            onClick={() => toggleSection("ats")}
          >
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield size={24} />
                ATS Compatibility
                <span className="ml-2 text-lg">
                  {Math.round(data.ats_analysis.score || 0)}%
                </span>
              </div>
              {expandedSections.ats ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </h3>
          </div>

          {expandedSections.ats && (
            <div className="p-6">
              {/* ATS Keyword Match */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      Keyword Match
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {Math.round(
                        data.ats_analysis.keyword_match?.percentage || 0
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                    <div
                      className={`h-2 rounded-full ${getQualityColor(
                        data.ats_analysis.keyword_match?.percentage || 0
                      )} transition-all duration-500`}
                      style={{
                        width: `${
                          data.ats_analysis.keyword_match?.percentage || 0
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      ATS Score
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {Math.round(data.ats_analysis.score || 0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                    <div
                      className={`h-2 rounded-full ${getQualityColor(
                        data.ats_analysis.score || 0
                      )} transition-all duration-500`}
                      style={{ width: `${data.ats_analysis.score || 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Format Issues */}
              {data.ats_analysis.format_issues &&
                data.ats_analysis.format_issues.length > 0 && (
                  <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-red-600" size={16} />
                      Format Issues
                    </h4>
                    <div className="space-y-1">
                      {data.ats_analysis.format_issues.map((issue, index) => (
                        <div key={index} className="text-sm text-red-700">
                          • {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Keyword Analysis */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Matching Keywords */}
                {data.ats_analysis.keyword_match?.matches &&
                  data.ats_analysis.keyword_match.matches.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={16} />
                        Matching Keywords
                      </h4>
                      <div className="space-y-1">
                        {data.ats_analysis.keyword_match.matches.map(
                          (keyword, index) => (
                            <div key={index} className="text-sm text-green-700">
                              • {keyword}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Missing Keywords */}
                {data.ats_analysis.keyword_match?.missing &&
                  data.ats_analysis.keyword_match.missing.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="text-yellow-600" size={16} />
                        Missing Keywords
                      </h4>
                      <div className="space-y-1">
                        {data.ats_analysis.keyword_match.missing.map(
                          (keyword, index) => (
                            <div
                              key={index}
                              className="text-sm text-yellow-700"
                            >
                              • {keyword}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>

              {/* ATS Recommendations */}
              {data.ats_analysis.recommendations &&
                data.ats_analysis.recommendations.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="text-blue-600" size={16} />
                      ATS Recommendations
                    </h4>
                    <div className="space-y-1">
                      {data.ats_analysis.recommendations.map((rec, index) => (
                        <div key={index} className="text-sm text-blue-700">
                          • {rec}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      )}

      {/* Gap Analysis */}
      {data.gap_analysis && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4 cursor-pointer"
            onClick={() => toggleSection("gaps")}
          >
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target size={24} />
                Gap Analysis
              </div>
              {expandedSections.gaps ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </h3>
          </div>

          {expandedSections.gaps && (
            <div className="p-6">
              {/* Identified Gaps */}
              {data.gap_analysis.identified_gaps &&
                data.gap_analysis.identified_gaps.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <BookOpen className="text-blue-600" size={16} />
                      Identified Gaps
                    </h4>
                    <div className="grid gap-3">
                      {data.gap_analysis.identified_gaps.map((gap, index) => (
                        <div
                          key={index}
                          className="flex items-start p-3 bg-slate-50 border border-slate-200 rounded-lg"
                        >
                          <span className="font-medium text-slate-700">
                            {gap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Learning Paths */}
              {data.gap_analysis.learning_paths &&
                data.gap_analysis.learning_paths.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Briefcase className="text-green-600" size={16} />
                      Learning Paths
                    </h4>
                    {data.gap_analysis.learning_paths.map((path, index) => (
                      <div
                        key={index}
                        className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                      >
                        <div className="font-medium text-yellow-800 mb-2">
                          Gap: {path.gap}
                        </div>
                        {path.recommendations &&
                          path.recommendations.length > 0 && (
                            <div className="text-sm text-yellow-700">
                              <div className="font-medium mb-1">
                                Recommendations:
                              </div>
                              <ul className="space-y-1">
                                {path.recommendations.map(
                                  (recommendation, idx) => (
                                    <li key={idx} className="ml-4 list-disc">
                                      {recommendation}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}
        </div>
      )}

      {/* Section Feedback */}
      {data.section_feedback && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4 cursor-pointer"
            onClick={() => toggleSection("sections")}
          >
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={24} />
                Section-by-Section Feedback
              </div>
              {expandedSections.sections ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </h3>
          </div>

          {expandedSections.sections && (
            <div className="p-6">
              <div className="grid gap-4">
                {Object.entries(data.section_feedback).map(
                  ([section, feedback]) => {
                    // Skip empty feedback
                    if (!feedback) return null;

                    // Handle both string and object formats
                    const feedbackContent =
                      typeof feedback === "object"
                        ? feedback.feedback || ""
                        : feedback;

                    const scoreValue =
                      typeof feedback === "object" ? feedback.score : null;

                    // Select appropriate icon based on section name
                    const getSectionIcon = (sectionName) => {
                      const sectionLower = sectionName.toLowerCase();
                      if (
                        sectionLower.includes("summary") ||
                        sectionLower.includes("profile")
                      ) {
                        return <FileText className="text-blue-600" size={16} />;
                      } else if (sectionLower.includes("education")) {
                        return (
                          <BookOpen className="text-indigo-600" size={16} />
                        );
                      } else if (
                        sectionLower.includes("experience") ||
                        sectionLower.includes("work")
                      ) {
                        return (
                          <Briefcase className="text-green-600" size={16} />
                        );
                      } else if (
                        sectionLower.includes("skills") ||
                        sectionLower.includes("technologies")
                      ) {
                        return <Zap className="text-yellow-600" size={16} />;
                      } else if (sectionLower.includes("projects")) {
                        return <Target className="text-purple-600" size={16} />;
                      } else if (
                        sectionLower.includes("achievement") ||
                        sectionLower.includes("award")
                      ) {
                        return <Trophy className="text-orange-600" size={16} />;
                      } else if (sectionLower.includes("certification")) {
                        return <Award className="text-emerald-600" size={16} />;
                      } else if (sectionLower.includes("language")) {
                        return <Globe className="text-cyan-600" size={16} />;
                      } else if (
                        sectionLower.includes("volunteer") ||
                        sectionLower.includes("community")
                      ) {
                        return <Users className="text-pink-600" size={16} />;
                      } else if (
                        sectionLower.includes("publication") ||
                        sectionLower.includes("research")
                      ) {
                        return (
                          <Newspaper className="text-indigo-600" size={16} />
                        );
                      } else {
                        return <User className="text-blue-600" size={16} />;
                      }
                    };

                    return (
                      <div
                        key={section}
                        className="border border-slate-200 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-800 capitalize flex items-center gap-2">
                            {getSectionIcon(section)}
                            {section.replace(/_/g, " ")}
                          </h4>
                          {scoreValue && (
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                scoreValue >= 80
                                  ? "bg-green-100 text-green-800"
                                  : scoreValue >= 60
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {Math.round(scoreValue)}%
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">
                          {feedbackContent}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Industry Insights */}
      {data.industry_insights && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-600 to-yellow-600 px-6 py-4 cursor-pointer"
            onClick={() => toggleSection("industry")}
          >
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp size={24} />
                Industry Insights
              </div>
              {expandedSections.industry ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </h3>
          </div>

          {expandedSections.industry && (
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Industry Trends */}
                {data.industry_insights.industry_trends &&
                  data.industry_insights.industry_trends.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Industry Trends
                      </h4>
                      <div className="space-y-1">
                        {data.industry_insights.industry_trends.map(
                          (trend, index) => (
                            <div key={index} className="text-sm text-blue-700">
                              • {trend}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* Industry Recommendations */}
                {data.industry_insights.recommendations &&
                  data.industry_insights.recommendations.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Industry Recommendations
                      </h4>
                      <div className="space-y-1">
                        {data.industry_insights.recommendations.map(
                          (recommendation, index) => (
                            <div key={index} className="text-sm text-green-700">
                              • {recommendation}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Resume Quality Metrics */}
      {data.enhancement?.quality_metrics && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award size={24} />
              Resume Quality Analysis
              <span className="ml-auto text-lg">
                {Math.round(data.enhancement.overall_quality_score)}%
              </span>
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(data.enhancement.quality_metrics).map(
                ([metric, score]) => (
                  <div key={metric} className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 capitalize">
                        {metric.replace("_", " ")}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {Math.round(score)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getQualityColor(
                          score
                        )} transition-all duration-500`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Analysis Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Matching Skills */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle size={24} />
              Matching Skills (
              {data.skills_analysis?.matching_skills?.length || 0})
            </h3>
          </div>
          <div className="p-6">
            {data.skills_analysis?.matching_skills &&
            data.skills_analysis.matching_skills.length > 0 ? (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {data.skills_analysis.matching_skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={14} />
                      <span className="text-slate-700 text-sm leading-relaxed font-medium">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <div className="w-16 h-16 mx-auto mb-3 bg-slate-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-slate-400" size={32} />
                </div>
                <p>No matching skills found</p>
              </div>
            )}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle size={24} />
              Missing Skills (
              {data.skills_analysis?.missing_skills?.length || 0})
            </h3>
          </div>
          <div className="p-6">
            {data.skills_analysis?.missing_skills &&
            data.skills_analysis.missing_skills.length > 0 ? (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {data.skills_analysis.missing_skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <AlertTriangle
                      className="text-red-500 flex-shrink-0 mt-0.5"
                      size={14}
                    />
                    <div className="flex-1">
                      <span className="text-slate-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <div className="w-16 h-16 mx-auto mb-3 bg-slate-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="text-slate-400" size={32} />
                </div>
                <p>No missing skills identified</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Skills */}
      {data.skills_analysis?.additional_skills &&
        data.skills_analysis.additional_skills.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mt-6">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap size={24} />
                Additional Skills (
                {data.skills_analysis.additional_skills.length})
              </h3>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {data.skills_analysis.additional_skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Improvement Suggestions */}
      {data.enhancement?.suggestions &&
        data.enhancement.suggestions.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Lightbulb size={24} />
                Improvement Suggestions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {data.enhancement.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <Star
                        className="text-blue-600 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <div>
                        <h4 className="font-semibold text-blue-800">
                          {suggestion.title}
                        </h4>
                        <p className="text-blue-700 text-sm mt-1">
                          {suggestion.description}
                        </p>
                        {suggestion.type && (
                          <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {suggestion.type.replace("_", " ")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Enhanced General Recommendations */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Users size={24} />
            Recommendations & Next Steps
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {/* Score-based recommendations */}
            {data.score < 60 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="text-red-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-red-800">
                      Critical Improvements Needed
                    </h4>
                    <p className="text-red-700 text-sm mt-1">
                      Your resume needs significant improvements to match job
                      requirements. Focus on adding relevant skills, quantified
                      achievements, and industry keywords.
                    </p>
                    <div className="mt-2 text-xs text-red-600">
                      <div>
                        • Add 3-5 quantified achievements with specific numbers
                      </div>
                      <div>
                        • Include missing technical skills from the job
                        description
                      </div>
                      <div>• Improve professional language and formatting</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {data.score >= 60 && data.score < 80 && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <ThumbsUp
                    className="text-yellow-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-yellow-800">
                      Good Foundation - Room for Enhancement
                    </h4>
                    <p className="text-yellow-700 text-sm mt-1">
                      You're on the right track! Focus on highlighting specific
                      achievements with quantifiable results and ensure all
                      relevant technical skills are prominently featured.
                    </p>
                    <div className="mt-2 text-xs text-yellow-600">
                      <div>• Add more specific metrics and percentages</div>
                      <div>• Enhance keyword optimization for ATS systems</div>
                      <div>• Strengthen professional summary section</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {data.score >= 80 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Trophy
                    className="text-green-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Excellent Match - Interview Ready!
                    </h4>
                    <p className="text-green-700 text-sm mt-1">
                      Your resume aligns very well with the job requirements.
                      You're a strong candidate! Consider applying with
                      confidence and prepare for technical interviews.
                    </p>
                    <div className="mt-2 text-xs text-green-600">
                      <div>• Fine-tune any remaining weak areas</div>
                      <div>
                        • Prepare for behavioral and technical interviews
                      </div>
                      <div>• Consider applying to similar roles</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ATS-specific recommendations */}
            {data.ats_analysis && data.ats_analysis.overall_ats_score < 80 && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      ATS Optimization Needed
                    </h4>
                    <p className="text-blue-700 text-sm mt-1">
                      Your resume's ATS compatibility score is{" "}
                      {Math.round(data.ats_analysis.overall_ats_score)}%.
                      Improve formatting and keyword usage to ensure it passes
                      through applicant tracking systems.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Quality-based recommendations */}
            {data.comprehensive_analysis &&
              data.comprehensive_analysis.overall_score < 70 && (
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Gauge
                      className="text-purple-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-purple-800">
                        Content Quality Enhancement
                      </h4>
                      <p className="text-purple-700 text-sm mt-1">
                        Your overall resume quality score is{" "}
                        {Math.round(data.comprehensive_analysis.overall_score)}
                        %. Focus on the specific improvements identified in the
                        comprehensive analysis above.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {/* Success indicators */}
            {data.summary_insights &&
              data.summary_insights.overall_grade &&
              ["A", "B"].includes(data.summary_insights.overall_grade) && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Award
                      className="text-emerald-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-emerald-800">
                        Strong Performance - Grade{" "}
                        {data.summary_insights.overall_grade}
                      </h4>
                      <p className="text-emerald-700 text-sm mt-1">
                        Your resume demonstrates strong quality and alignment
                        with job requirements. Continue leveraging your
                        strengths while addressing any remaining improvement
                        areas.
                      </p>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
