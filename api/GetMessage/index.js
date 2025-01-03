module.exports = async function (context, req) {
  const date = "2025-01-03T13:18:04.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

