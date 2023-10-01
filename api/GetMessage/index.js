module.exports = async function (context, req) {
  const date = "2023-10-01T02:22:22.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

