module.exports = async function (context, req) {
  const date = "2025-05-05T13:24:28.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

