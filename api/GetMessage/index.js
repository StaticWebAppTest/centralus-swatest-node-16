module.exports = async function (context, req) {
  const date = "2024-12-04T02:58:17.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

