module.exports = async function (context, req) {
  const date = "2024-08-04T12:17:41.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

