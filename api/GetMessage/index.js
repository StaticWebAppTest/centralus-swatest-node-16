module.exports = async function (context, req) {
  const date = "2024-01-20T09:08:29.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

