module.exports = async function (context, req) {
  const date = "2023-06-12T12:17:03.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

