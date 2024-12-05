module.exports = async function (context, req) {
  const date = "2024-12-05T14:12:17.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

