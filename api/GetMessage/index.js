module.exports = async function (context, req) {
  const date = "2024-01-25T01:55:35.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

