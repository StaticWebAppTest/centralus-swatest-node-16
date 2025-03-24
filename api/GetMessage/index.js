module.exports = async function (context, req) {
  const date = "2025-03-24T13:22:51.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

