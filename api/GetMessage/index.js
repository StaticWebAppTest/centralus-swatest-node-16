module.exports = async function (context, req) {
  const date = "2024-05-04T01:43:46.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

