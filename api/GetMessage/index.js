module.exports = async function (context, req) {
  const date = "2023-01-23T13:17:59.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

