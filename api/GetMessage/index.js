module.exports = async function (context, req) {
  const date = "2024-11-14T03:16:56.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

