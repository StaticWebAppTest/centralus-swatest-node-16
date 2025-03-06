module.exports = async function (context, req) {
  const date = "2025-03-06T03:21:48.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

