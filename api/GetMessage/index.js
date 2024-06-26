module.exports = async function (context, req) {
  const date = "2024-06-26T21:10:32.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

