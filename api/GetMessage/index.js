module.exports = async function (context, req) {
  const date = "2024-04-29T01:49:41.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

