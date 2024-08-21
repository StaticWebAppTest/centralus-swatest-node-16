module.exports = async function (context, req) {
  const date = "2024-08-21T02:01:28.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

