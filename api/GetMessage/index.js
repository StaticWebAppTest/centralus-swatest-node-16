module.exports = async function (context, req) {
  const date = "2023-05-24T21:06:41.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

