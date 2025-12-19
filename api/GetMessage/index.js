module.exports = async function (context, req) {
  const date = "2025-12-19T15:15:30.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

