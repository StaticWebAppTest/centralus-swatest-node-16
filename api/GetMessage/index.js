module.exports = async function (context, req) {
  const date = "2024-02-17T15:08:28.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

