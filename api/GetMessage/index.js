module.exports = async function (context, req) {
  const date = "2024-04-09T22:08:19.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

