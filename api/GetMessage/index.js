module.exports = async function (context, req) {
  const date = "2024-04-26T16:12:47.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

