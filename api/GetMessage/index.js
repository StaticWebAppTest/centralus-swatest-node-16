module.exports = async function (context, req) {
  const date = "2024-12-26T02:13:28.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

