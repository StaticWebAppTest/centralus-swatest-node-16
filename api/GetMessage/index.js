module.exports = async function (context, req) {
  const date = "2023-10-20T12:16:49.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

