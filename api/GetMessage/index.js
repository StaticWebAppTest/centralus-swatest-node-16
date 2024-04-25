module.exports = async function (context, req) {
  const date = "2024-04-25T17:10:43.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

