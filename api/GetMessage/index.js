module.exports = async function (context, req) {
  const date = "2024-02-20T15:08:41.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

