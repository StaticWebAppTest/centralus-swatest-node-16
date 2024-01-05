module.exports = async function (context, req) {
  const date = "2024-01-05T14:08:57.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

