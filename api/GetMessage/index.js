module.exports = async function (context, req) {
  const date = "2024-07-15T05:10:41.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

