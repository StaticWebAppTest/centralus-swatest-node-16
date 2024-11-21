module.exports = async function (context, req) {
  const date = "2024-11-21T00:59:03.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

