module.exports = async function (context, req) {
  const date = "2025-01-24T12:21:43.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

