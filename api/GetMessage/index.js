module.exports = async function (context, req) {
  const date = "2023-03-20T00:53:41.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

