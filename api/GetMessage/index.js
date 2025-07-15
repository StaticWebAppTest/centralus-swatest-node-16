module.exports = async function (context, req) {
  const date = "2025-07-15T23:13:27.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

