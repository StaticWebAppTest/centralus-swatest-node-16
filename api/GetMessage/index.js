module.exports = async function (context, req) {
  const date = "2023-01-26T09:09:20.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

