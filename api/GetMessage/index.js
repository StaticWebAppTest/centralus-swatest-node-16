module.exports = async function (context, req) {
  const date = "2024-06-17T19:08:00.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

