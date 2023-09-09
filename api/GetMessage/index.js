module.exports = async function (context, req) {
  const date = "2023-09-09T17:06:44.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

