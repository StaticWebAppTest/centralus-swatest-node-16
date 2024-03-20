module.exports = async function (context, req) {
  const date = "2024-03-20T10:09:31.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

