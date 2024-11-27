module.exports = async function (context, req) {
  const date = "2024-11-27T10:13:38.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

