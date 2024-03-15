module.exports = async function (context, req) {
  const date = "2024-03-15T16:11:56.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

