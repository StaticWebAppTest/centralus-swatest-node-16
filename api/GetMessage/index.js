module.exports = async function (context, req) {
  const date = "2024-06-18T03:12:27.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

