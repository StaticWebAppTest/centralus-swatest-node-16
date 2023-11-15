module.exports = async function (context, req) {
  const date = "2023-11-15T01:51:22.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

