module.exports = async function (context, req) {
  const date = "2024-02-02T17:09:38.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

