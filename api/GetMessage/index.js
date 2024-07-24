module.exports = async function (context, req) {
  const date = "2024-07-24T22:10:24.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

