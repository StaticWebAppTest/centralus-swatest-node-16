module.exports = async function (context, req) {
  const date = "2024-05-31T05:12:29.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

