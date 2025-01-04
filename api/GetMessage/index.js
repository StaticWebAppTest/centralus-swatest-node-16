module.exports = async function (context, req) {
  const date = "2025-01-04T16:12:45.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

