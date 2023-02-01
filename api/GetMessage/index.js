module.exports = async function (context, req) {
  const date = "2023-02-01T22:09:18.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

