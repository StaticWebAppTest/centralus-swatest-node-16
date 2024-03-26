module.exports = async function (context, req) {
  const date = "2024-03-26T12:17:01.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

