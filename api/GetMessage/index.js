module.exports = async function (context, req) {
  const date = "2025-01-17T21:10:02.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

