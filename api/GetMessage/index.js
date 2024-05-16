module.exports = async function (context, req) {
  const date = "2024-05-16T10:09:56.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

