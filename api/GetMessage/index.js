module.exports = async function (context, req) {
  const date = "2023-07-15T13:14:34.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

