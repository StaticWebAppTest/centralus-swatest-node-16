module.exports = async function (context, req) {
  const date = "2023-08-02T03:08:59.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

