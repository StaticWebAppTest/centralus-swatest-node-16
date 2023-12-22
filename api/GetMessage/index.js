module.exports = async function (context, req) {
  const date = "2023-12-22T00:42:41.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

