module.exports = async function (context, req) {
  const date = "2025-02-06T22:11:03.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

