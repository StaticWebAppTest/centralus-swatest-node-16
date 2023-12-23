module.exports = async function (context, req) {
  const date = "2023-12-23T16:10:29.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

