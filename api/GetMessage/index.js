module.exports = async function (context, req) {
  const date = "2024-01-01T07:09:17.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

