import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string){
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const secondsDifference = timeDifference / 1000;
  if(secondsDifference < 60){
    return `${Math.floor(secondsDifference)} seconds ago`
  } else if(secondsDifference < 3600){
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
  } else {
    const days = Math.floor(secondsDifference / 86400);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  }
}
export function checkIsLiked(likeList: string[], userId: string){
  return likeList.includes(userId);
}

export function formatToDate(dateString: string){
  const date = new Date(dateString);
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }

    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }

    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }

    return Math.floor(seconds) + " seconds";
}