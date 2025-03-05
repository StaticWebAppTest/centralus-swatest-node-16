module.exports = async function (context, req) {
  const date = "2025-03-05T13:20:45.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

