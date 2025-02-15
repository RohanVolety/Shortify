package com.url.shortner.dtos;

import java.time.LocalDate;

public class ClickEventDTO {
    public LocalDate getClickDate() {
        return clickDate;
    }

    public void setClickDate(LocalDate clickDate) {
        this.clickDate = clickDate;
    }

    public Long getCount() {
        return Count;
    }

    public void setCount(Long count) {
        Count = count;
    }

    public ClickEventDTO(LocalDate clickDate, Long count) {
        this.clickDate = clickDate;
        Count = count;
    }

    public ClickEventDTO() {
    }

    private LocalDate clickDate;

    @Override
    public String toString() {
        return "ClickEventDTO{" +
                "clickDate=" + clickDate +
                ", Count=" + Count +
                '}';
    }

    private Long Count;
}
