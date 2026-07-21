"use client";

import { useId, useRef, useState } from "react";
import { Upload, File as FileIcon, Trash2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCEPTED_EXTENSIONS,
  MAX_FILE_BYTES,
  MAX_FILES,
  fileHasAcceptedExtension,
  formatBytes,
} from "@/lib/validation";

interface FileDropProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  label?: string;
  maxFiles?: number;
  maxBytes?: number;
}

/**
 * Drag-and-drop uploader for PDF/DWG/DXF. Validates each file client-side and
 * shows a specific reason for every rejection (§6) — never a generic error.
 * The server re-validates size and type; never trust this.
 */
export function FileDrop({
  files,
  onFilesChange,
  label = "Upload plans",
  maxFiles = MAX_FILES,
  maxBytes = MAX_FILE_BYTES,
}: FileDropProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const errorId = useId();

  const acceptAttr = ACCEPTED_EXTENSIONS.join(",");
  const humanExtensions = ACCEPTED_EXTENSIONS.map((e) => e.replace(".", "").toUpperCase()).join(", ");

  function addFiles(incoming: FileList | null) {
    if (!incoming) return;
    const nextErrors: string[] = [];
    const accepted: File[] = [...files];

    for (const file of Array.from(incoming)) {
      if (!fileHasAcceptedExtension(file.name)) {
        nextErrors.push(`"${file.name}" is not a supported type. Accepted: ${humanExtensions}.`);
        continue;
      }
      if (file.size > maxBytes) {
        nextErrors.push(`"${file.name}" is ${formatBytes(file.size)} — over the ${formatBytes(maxBytes)} limit.`);
        continue;
      }
      if (accepted.some((f) => f.name === file.name && f.size === file.size)) {
        continue; // silently skip exact duplicates
      }
      if (accepted.length >= maxFiles) {
        nextErrors.push(`You can attach up to ${maxFiles} files. "${file.name}" was not added.`);
        continue;
      }
      accepted.push(file);
    }

    setErrors(nextErrors);
    onFilesChange(accepted);
  }

  function removeFile(index: number) {
    const next = files.filter((_, i) => i !== index);
    onFilesChange(next);
  }

  function openPicker() {
    inputRef.current?.click();
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-ink">{label}</span>

      <div
        role="button"
        tabIndex={0}
        aria-describedby={errors.length ? errorId : undefined}
        onClick={openPicker}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPicker();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-card border-2 border-dashed px-6 py-10 text-center transition-colors",
          "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
          dragging ? "border-brass bg-brass/5" : "border-mist bg-paper hover:border-brass-dim/60",
        )}
      >
        <Upload size={24} className="text-brass-dim" aria-hidden />
        <p className="text-sm font-medium text-ink">
          Drag files here, or <span className="text-brass-dim underline">browse</span>
        </p>
        <p className="text-xs text-graphite/70">
          {humanExtensions} up to {formatBytes(maxBytes)} each · max {maxFiles} files
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={acceptAttr}
          className="sr-only"
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = ""; // allow re-selecting the same file
          }}
        />
      </div>

      {files.length > 0 && (
        <ul className="flex flex-col gap-2" aria-label="Attached files">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}`}
              className="flex items-center gap-3 rounded-control border border-mist bg-white px-3 py-2"
            >
              <FileIcon size={18} className="shrink-0 text-brass-dim" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-sm text-ink">{file.name}</span>
              <span className="data shrink-0 text-xs text-graphite/70">{formatBytes(file.size)}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded p-1 text-graphite/60 transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                aria-label={`Remove ${file.name}`}
              >
                <Trash2 size={16} aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      )}

      {errors.length > 0 && (
        <ul id={errorId} role="alert" className="flex flex-col gap-1">
          {errors.map((error, i) => (
            <li key={i} className="flex items-start gap-1.5 text-sm text-red-700">
              <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden />
              <span>{error}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
