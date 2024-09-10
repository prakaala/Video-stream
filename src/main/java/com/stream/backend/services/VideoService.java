package com.stream.backend.services;

import com.stream.backend.entities.Video;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VideoService {


    //get the videos
    Video get(String videoId);
    //save the videos
    Video save(Video video, MultipartFile file);

    //get the videos by title
    Video getByTitle(String title);

    //get all videos


    List<Video> getAll();
}
