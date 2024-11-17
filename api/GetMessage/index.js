module.exports = async function (context, req) {
  const date = "2024-11-17T10:11:33.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

