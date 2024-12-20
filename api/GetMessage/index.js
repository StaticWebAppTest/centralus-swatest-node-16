module.exports = async function (context, req) {
  const date = "2024-12-20T12:22:01.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

