module.exports = async function (context, req) {
  const date = "2022-07-31T03:36:22.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

