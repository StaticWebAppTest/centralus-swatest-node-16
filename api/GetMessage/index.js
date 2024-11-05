module.exports = async function (context, req) {
  const date = "2024-11-05T03:15:31.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

