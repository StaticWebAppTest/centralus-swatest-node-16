module.exports = async function (context, req) {
  const date = "2022-03-14T00:43:32.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

