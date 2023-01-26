module.exports = async function (context, req) {
  const date = "2023-01-26T03:10:31.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

