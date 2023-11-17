module.exports = async function (context, req) {
  const date = "2023-11-17T02:22:54.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

