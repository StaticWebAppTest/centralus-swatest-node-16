module.exports = async function (context, req) {
  const date = "2022-08-13T00:55:38.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

