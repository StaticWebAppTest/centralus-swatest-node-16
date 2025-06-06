module.exports = async function (context, req) {
  const date = "2025-06-06T13:25:53.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

