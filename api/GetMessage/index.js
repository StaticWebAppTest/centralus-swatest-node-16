module.exports = async function (context, req) {
  const date = "2023-05-21T02:07:29.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

