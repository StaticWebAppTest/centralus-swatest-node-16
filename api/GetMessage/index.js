module.exports = async function (context, req) {
  const date = "2023-03-07T02:35:24.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

