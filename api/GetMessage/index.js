module.exports = async function (context, req) {
  const date = "2024-11-05T02:12:27.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

