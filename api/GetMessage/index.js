module.exports = async function (context, req) {
  const date = "2023-02-01T00:57:41.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

