import Card from "@/components/card";
import Link from 'next/link'

export default function ArchivedNotifications() {
    return <Card>
        <div className="flex flex-col">
        <div>Archived Notifications</div>
            <Link className="text-blue-600" href='/complex-dashboard'>Default</Link>
        </div>
    </Card>
}