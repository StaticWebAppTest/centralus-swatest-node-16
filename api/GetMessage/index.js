module.exports = async function (context, req) {
  const date = "2024-02-27T22:09:48.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

