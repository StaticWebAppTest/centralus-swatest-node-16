module.exports = async function (context, req) {
  const date = "2024-09-14T20:13:28.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

