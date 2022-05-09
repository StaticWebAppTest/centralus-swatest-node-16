module.exports = async function (context, req) {
  const date = "2022-05-09T00:55:46.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

