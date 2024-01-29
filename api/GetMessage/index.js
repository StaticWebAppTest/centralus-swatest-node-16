module.exports = async function (context, req) {
  const date = "2024-01-29T19:06:59.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

