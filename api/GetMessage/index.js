module.exports = async function (context, req) {
  const date = "2022-03-05T00:43:42.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

