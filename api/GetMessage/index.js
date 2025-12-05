module.exports = async function (context, req) {
  const date = "2025-12-05T09:15:27.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

