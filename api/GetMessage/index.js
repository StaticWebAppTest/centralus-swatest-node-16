module.exports = async function (context, req) {
  const date = "2024-06-12T12:18:49.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

