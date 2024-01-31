module.exports = async function (context, req) {
  const date = "2024-01-31T19:07:32.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

