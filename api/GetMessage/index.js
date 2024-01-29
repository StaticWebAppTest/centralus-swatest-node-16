module.exports = async function (context, req) {
  const date = "2024-01-29T15:08:41.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

