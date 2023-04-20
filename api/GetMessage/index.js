module.exports = async function (context, req) {
  const date = "2023-04-20T12:16:42.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

