module.exports = async function (context, req) {
  const date = "2024-05-05T09:10:41.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

