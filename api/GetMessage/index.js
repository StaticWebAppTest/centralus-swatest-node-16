module.exports = async function (context, req) {
  const date = "2023-09-19T18:11:21.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

