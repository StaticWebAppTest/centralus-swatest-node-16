module.exports = async function (context, req) {
  const date = "2023-12-04T09:10:17.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

