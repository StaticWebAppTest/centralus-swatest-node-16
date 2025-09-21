module.exports = async function (context, req) {
  const date = "2025-09-21T03:02:26.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

