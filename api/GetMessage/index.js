module.exports = async function (context, req) {
  const date = "2024-01-01T15:09:12.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

