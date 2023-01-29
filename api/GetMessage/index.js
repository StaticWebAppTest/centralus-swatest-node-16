module.exports = async function (context, req) {
  const date = "2023-01-29T00:55:41.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

