module.exports = async function (context, req) {
  const date = "2024-03-17T03:09:17.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

