module.exports = async function (context, req) {
  const date = "2024-05-05T20:09:10.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

