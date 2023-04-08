module.exports = async function (context, req) {
  const date = "2023-04-08T00:43:44.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

