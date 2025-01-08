module.exports = async function (context, req) {
  const date = "2025-01-08T19:09:05.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

