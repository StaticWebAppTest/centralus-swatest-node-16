module.exports = async function (context, req) {
  const date = "2024-04-13T06:09:34.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

