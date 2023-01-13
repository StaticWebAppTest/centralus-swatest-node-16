module.exports = async function (context, req) {
  const date = "2023-01-13T17:08:42.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

