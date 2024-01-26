module.exports = async function (context, req) {
  const date = "2024-01-26T13:09:12.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

