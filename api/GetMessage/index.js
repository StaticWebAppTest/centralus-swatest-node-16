module.exports = async function (context, req) {
  const date = "2024-03-17T12:15:43.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

