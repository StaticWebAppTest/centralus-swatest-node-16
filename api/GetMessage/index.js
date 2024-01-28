module.exports = async function (context, req) {
  const date = "2024-01-28T10:08:13.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

