import React from "react";
import videoLogo from "../assets/upload.png";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

function VideoUpload() {
  return (
    <div className="text-cyan-50">
      <Card className="flex flex-col items-center ">
        <h2> Upload Video</h2>
        <div>
          <form class="flex items-center space-x-6">
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
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </form>
        </div>
          
          <Button> Upload </Button>
        
      </Card>
    </div>
  );
}

export default VideoUpload;
