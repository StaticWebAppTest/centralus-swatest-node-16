module.exports = async function (context, req) {
  const date = "2024-03-31T02:19:43.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

