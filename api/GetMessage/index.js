module.exports = async function (context, req) {
  const date = "2023-11-02T22:07:23.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

