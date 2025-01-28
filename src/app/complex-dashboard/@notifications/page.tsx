import Card from "@/components/card";
import Link from 'next/link'

export default function Notifications() {
    return <Card>
        <div className="flex flex-col">
        <div>Notifications</div>
            <Link className="text-blue-600" href='/complex-dashboard/archived'>Archived</Link>
        </div>
    </Card>
}