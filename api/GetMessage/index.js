module.exports = async function (context, req) {
  const date = "2023-08-05T02:22:04.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

