module.exports = async function (context, req) {
  const date = "2024-12-25T20:12:25.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

