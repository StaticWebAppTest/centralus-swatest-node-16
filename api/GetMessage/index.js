module.exports = async function (context, req) {
  const date = "2025-01-19T19:08:18.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

