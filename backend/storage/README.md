# Backend Storage Structure

This directory contains all media files and documents for the ONIX website backend.

## Directory Structure

```
storage/
├── images/                    # Image files
│   ├── avatars/              # User profile pictures
│   ├── logos/                # Company logos and branding
│   └── projects/             # Project-related images
├── videos/                   # Video files
│   ├── promotional/          # Marketing and promotional videos
│   └── projects/             # Project showcase videos
├── documents/                # PDFs, documents, contracts
├── temp/                     # Temporary files during upload/processing
└── README.md                 # This file
```

## File Organization Guidelines

### Images
- **avatars/**: User profile pictures, team member photos
- **logos/**: Company logos, brand assets, icons
- **projects/**: Project screenshots, before/after images, galleries

### Videos
- **promotional/**: Marketing videos, company introductions, testimonials
- **projects/**: Project showcases, construction progress, case studies

### Documents
- Contracts, proposals, technical specifications
- Company documents, policies, reports

### Temp
- Temporary files during upload process
- Files being processed or converted
- Should be cleaned up regularly

## File Naming Conventions

- Use lowercase with hyphens: `project-name-image-01.jpg`
- Include date for time-sensitive files: `2024-01-15-company-logo.png`
- Use descriptive names: `construction-progress-before.jpg`
- Avoid spaces and special characters

## Security Considerations

- Validate file types before storage
- Implement file size limits
- Scan uploaded files for malware
- Use proper access controls
- Regular cleanup of temp files


