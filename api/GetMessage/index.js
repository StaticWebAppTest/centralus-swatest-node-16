module.exports = async function (context, req) {
  const date = "2023-02-09T22:09:55.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

