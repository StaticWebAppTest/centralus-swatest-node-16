module.exports = async function (context, req) {
  const date = "2025-08-16T12:25:32.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

