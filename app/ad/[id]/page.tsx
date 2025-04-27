import AdDetails from "../../../src/features/Ad/AdDetails";

const AdDetail = ({ params }: { params: { id: string } }) => {
  return <AdDetails params={params} />;
};

export default AdDetail;
