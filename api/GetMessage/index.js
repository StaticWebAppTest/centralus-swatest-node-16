module.exports = async function (context, req) {
  const date = "2022-12-05T00:50:32.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

