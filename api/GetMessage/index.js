module.exports = async function (context, req) {
  const date = "2024-07-13T12:17:03.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

