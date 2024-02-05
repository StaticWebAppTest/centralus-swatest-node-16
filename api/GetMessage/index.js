module.exports = async function (context, req) {
  const date = "2024-02-05T19:07:57.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

