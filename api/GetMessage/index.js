module.exports = async function (context, req) {
  const date = "2023-05-29T12:16:28.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

