package com.stream.backend.services.impl;

import com.stream.backend.entities.Video;
import com.stream.backend.services.VideoService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.StandardReflectionParameterNameDiscoverer;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;


@Service
public class VideoServiceImpl implements VideoService {

    @Value("${files.video}")
    String DIR;


    @PostConstruct
    public void init(){
        File file = new File(DIR);

        if(!file.exists()){
            file.mkdir();
            System.out.println("Folder Created");
        }else{
            System.out.println("Folder already present");
        }

    }





    @Override
    public Video save(Video video, MultipartFile file) {
        try{
            //return original fileName
            String filename = file.getOriginalFilename();
            String contentType = file.getContentType();
            InputStream inputStream = file.getInputStream();

            //folder path : create
            String cleanFileName = StringUtils.cleanPath(filename);
            String cleanFolder = StringUtils.cleanPath(DIR);
            //folder path with fileName
            Path path = Paths.get(cleanFolder, cleanFileName);

            System.out.println(contentType);
//            System.out.println(inputStream);
            System.out.println(path);






            //copy file to the folder
            Files.copy(inputStream, path, StandardCopyOption.REPLACE_EXISTING);


            //video metadata


            //saving metadata to our database
        }catch(IOException e){
            e.printStackTrace();
        }




        return null;
    }


    @Override
    public Video get(String videoId) {





        return null;
    }

    @Override
    public Video getByTitle(String title) {
        return null;
    }

    @Override
    public List<Video> getAll() {
        return null;
    }
}
