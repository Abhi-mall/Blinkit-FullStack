import React, { useEffect, useState } from "react";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { useLocation } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import CardLoading from "../components/CardLoading";
import InfiniteScroll from "react-infinite-scroll-component";
import noDataImage from "../assets/nothing here yet.webp";

const Searchpage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const loadingArrayCard = new Array(10).fill(null);
  const params = useLocation();
  const searchText = params?.search?.slice(3);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.searchProduct,
        data: {
          search: searchText,
          page: page,
        },
      });

      const { data: responseData } = response;

      if (responseData.success) {
        if (responseData.page == 1) {
          setData(responseData.data);
        } else {
          setData((preve) => {
            return [...preve, ...responseData.data];
          });
        }
        setTotalPage(responseData.totalPage);
        console.log(responseData);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [page, searchText]);

  const handleFetchMore = () => {
    if (totalPage > page) {
      setPage((preve) => preve + 1);
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto p-4">
        <p>Search Result:{data.length} </p>
        <InfiniteScroll
          dataLength={data.length}
          hasMore={true}
          next={handleFetchMore}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4 gap-4">
            {data.map((p, index) => {
              return (
                <CardProduct data={p} key={p?._id + "searchProduct" + index} />
              );
            })}

            {/*loading*/}
            {loading &&
              loadingArrayCard.map((_, index) => {
                <CardLoading key={"loadingsearchpage" + index} />;
              })}
          </div>
        </InfiniteScroll>

        {
          //no data
          !data[0] && !loading && (
            <div className="flex flex-col justify-center items-center w-full mx-auto">
              <img
                src={noDataImage}
                className="w-full h-full max-w-xs max-h-xs block"
              />
              <p className="font-semibold my-2">No Data found</p>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Searchpage;
