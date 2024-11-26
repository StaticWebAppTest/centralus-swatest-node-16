module.exports = async function (context, req) {
  const date = "2024-11-26T02:53:56.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

