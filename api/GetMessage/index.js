module.exports = async function (context, req) {
  const date = "2024-03-13T10:09:46.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

