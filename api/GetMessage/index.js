module.exports = async function (context, req) {
  const date = "2024-03-01T20:10:18.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

