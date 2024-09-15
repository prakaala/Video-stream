import React, { useState } from "react";
import videoLogo from "../assets/upload.png";
import { Card, FileInput, Label, Textarea, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  function handleFileChange(event) {
    console.log(event.target.files[0]);
  }

  function handleForm(formEvent) {
    console.log("Button Clicked");
  }

  return (
    <div className="text-cyan-50">
      <Card className="flex flex-col items-center ">
        <h2> Upload Video</h2>
        <div>
          <form className="flex flex-col space-y-5" onSubmit={handleForm}>
            <div>
              <div>
                <Label htmlFor="file-upload-helper-text" value="Video Title" />
              </div>
              <TextInput placeholder="Enter Title" />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Description" />
              </div>
              <Textarea
                id="comment"
                placeholder="What the video about???"
                required
                rows={4}
              />
            </div>

            <div className=" flex items-center space-x-5 justify-center">
              <div class="shrink-0">
                <img
                  class="h-16 w-16 object-cover rounded-full"
                  src={videoLogo}
                  alt="Upload Icon"
                />
              </div>
              <label class="block">
                <span class="sr-only">Choose Video File</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </div>
          </form>
        </div>

        <Button onClick={handleForm}> Upload </Button>
      </Card>
    </div>
  );
}

export default VideoUpload;
