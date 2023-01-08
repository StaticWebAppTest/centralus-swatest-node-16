module.exports = async function (context, req) {
  const date = "2023-01-08T13:12:57.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

