module.exports = async function (context, req) {
  const date = "2024-09-09T08:16:13.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

