module.exports = async function (context, req) {
  const date = "2024-08-15T14:09:49.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

