module.exports = async function (context, req) {
  const date = "2024-09-22T12:19:46.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

