module.exports = async function (context, req) {
  const date = "2024-04-05T03:10:58.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

