module.exports = async function (context, req) {
  const date = "2024-08-31T21:09:14.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

