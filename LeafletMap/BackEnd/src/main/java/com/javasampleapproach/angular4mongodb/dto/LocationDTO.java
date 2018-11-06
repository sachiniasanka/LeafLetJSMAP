package com.javasampleapproach.angular4mongodb.dto;

public class LocationDTO {

    private String id;
    private String lat;
    private String lng;

    public LocationDTO() {
    }

    public LocationDTO(String id, String lat, String lng) {
        this.setId(id);
        this.setLat(lat);
        this.setLng(lng);
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    @Override
    public String toString() {
        return "LocationDTO{" +
                "id='" + id + '\'' +
                ", lat='" + lat + '\'' +
                ", lng='" + lng + '\'' +
                '}';
    }
}
