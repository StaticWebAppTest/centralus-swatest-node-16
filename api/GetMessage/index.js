module.exports = async function (context, req) {
  const date = "2024-07-26T15:11:05.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

