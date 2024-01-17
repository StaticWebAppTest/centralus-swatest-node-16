module.exports = async function (context, req) {
  const date = "2024-01-17T08:12:35.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

