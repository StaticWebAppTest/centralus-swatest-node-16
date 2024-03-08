module.exports = async function (context, req) {
  const date = "2024-03-08T12:16:10.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

