module.exports = async function (context, req) {
  const date = "2025-05-25T08:15:41.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

