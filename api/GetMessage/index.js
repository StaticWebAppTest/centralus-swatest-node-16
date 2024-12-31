module.exports = async function (context, req) {
  const date = "2024-12-31T13:17:14.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

