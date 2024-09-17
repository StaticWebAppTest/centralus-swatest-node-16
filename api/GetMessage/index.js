module.exports = async function (context, req) {
  const date = "2024-09-17T10:11:53.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

