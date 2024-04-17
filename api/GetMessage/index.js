module.exports = async function (context, req) {
  const date = "2024-04-17T15:11:00.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

