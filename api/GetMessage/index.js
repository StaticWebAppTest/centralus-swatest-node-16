module.exports = async function (context, req) {
  const date = "2023-01-05T14:09:17.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

