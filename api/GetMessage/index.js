module.exports = async function (context, req) {
  const date = "2024-07-22T18:13:41.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

