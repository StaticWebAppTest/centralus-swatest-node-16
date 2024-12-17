module.exports = async function (context, req) {
  const date = "2024-12-17T08:17:17.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

