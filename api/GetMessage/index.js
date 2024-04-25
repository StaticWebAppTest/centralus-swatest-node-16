module.exports = async function (context, req) {
  const date = "2024-04-25T02:20:27.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

