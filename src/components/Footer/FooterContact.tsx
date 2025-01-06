import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function FooterContact() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          contact@ciphermarketing.com
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-5 h-5" />
          (555) 123-4567
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          123 Digital Street, Tech City, TC 12345
        </li>
      </ul>
    </div>
  );
}