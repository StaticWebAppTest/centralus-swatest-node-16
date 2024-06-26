module.exports = async function (context, req) {
  const date = "2024-06-26T13:12:52.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

