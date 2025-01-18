module.exports = async function (context, req) {
  const date = "2025-01-18T13:12:40.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

