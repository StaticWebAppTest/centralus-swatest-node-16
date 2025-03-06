module.exports = async function (context, req) {
  const date = "2025-03-06T15:12:54.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

