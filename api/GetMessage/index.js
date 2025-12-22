module.exports = async function (context, req) {
  const date = "2025-12-22T12:30:15.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

