module.exports = async function (context, req) {
  const date = "2025-01-09T14:11:02.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

