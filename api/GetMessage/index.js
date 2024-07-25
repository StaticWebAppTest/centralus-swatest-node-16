module.exports = async function (context, req) {
  const date = "2024-07-25T22:10:27.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

