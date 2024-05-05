module.exports = async function (context, req) {
  const date = "2024-05-05T10:09:56.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

