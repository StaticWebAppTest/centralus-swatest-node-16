module.exports = async function (context, req) {
  const date = "2024-02-13T16:11:51.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

