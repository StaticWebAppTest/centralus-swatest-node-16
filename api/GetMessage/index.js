module.exports = async function (context, req) {
  const date = "2024-01-13T19:07:03.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

