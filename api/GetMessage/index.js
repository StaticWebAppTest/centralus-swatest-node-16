module.exports = async function (context, req) {
  const date = "2024-08-26T12:20:20.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

