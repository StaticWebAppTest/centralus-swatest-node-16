module.exports = async function (context, req) {
  const date = "2025-09-21T08:14:30.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

