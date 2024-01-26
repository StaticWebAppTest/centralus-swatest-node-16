module.exports = async function (context, req) {
  const date = "2024-01-26T07:08:05.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

