module.exports = async function (context, req) {
  const date = "2024-06-27T04:14:00.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

