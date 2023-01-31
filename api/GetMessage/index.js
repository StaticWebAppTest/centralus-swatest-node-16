module.exports = async function (context, req) {
  const date = "2023-01-31T02:17:51.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

