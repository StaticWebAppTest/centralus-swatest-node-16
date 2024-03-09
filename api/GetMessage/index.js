module.exports = async function (context, req) {
  const date = "2024-03-09T19:06:34.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

