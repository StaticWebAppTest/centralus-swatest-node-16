module.exports = async function (context, req) {
  const date = "2024-01-05T23:09:01.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

