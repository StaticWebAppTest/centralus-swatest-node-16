module.exports = async function (context, req) {
  const date = "2024-06-08T17:08:55.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

