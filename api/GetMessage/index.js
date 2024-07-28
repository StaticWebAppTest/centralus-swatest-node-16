module.exports = async function (context, req) {
  const date = "2024-07-28T03:11:34.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

