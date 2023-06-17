import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent {
  blogData = [ {
    id: 1,
    title: 'UX review presentations',
    subtitle: "How do you create compleling presentations that wow your collegues and impress you managers? look no futher.",
    imageUrl: 'https://rvs-blog-page.vercel.app/assets/img/Article-1-Image.png',
    date: '20 June, 2020',
    author: 'Olivia Rhye',
    category: 'Desgin'
  },
  {
    id: 1,
    title: 'Best books on scalling your startup',
    subtitle: "This is a collectionimpress you managers? look no futher.",
    imageUrl: 'https://rvs-blog-page.vercel.app/assets/img/Article-2-Image.png',
    date: '19 June, 2020',
    author: 'Phoenix Baker',
    category: 'Desgin'
  },
  {
    id: 1,
    title: '5 Tips for Better Branding',
    subtitle: "From SEO to integrating with Paid Advertising, this article covers it all.",
    imageUrl: 'https://rvs-blog-page.vercel.app/assets/img/Article-3-Image.png',
    date: '19 June, 2023',
    author: 'Ken Baker',
    category: 'Technology'
  },
]
}
