module.exports = async function (context, req) {
  const date = "2025-01-17T02:09:00.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

