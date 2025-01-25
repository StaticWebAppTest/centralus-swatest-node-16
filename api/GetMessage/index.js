module.exports = async function (context, req) {
  const date = "2025-01-25T12:19:20.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

