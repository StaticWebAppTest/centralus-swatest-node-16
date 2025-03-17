module.exports = async function (context, req) {
  const date = "2025-03-17T12:25:05.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

