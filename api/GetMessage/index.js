module.exports = async function (context, req) {
  const date = "2022-06-05T06:12:17.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

