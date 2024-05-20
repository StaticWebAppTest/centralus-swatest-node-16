module.exports = async function (context, req) {
  const date = "2024-05-20T03:11:42.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

