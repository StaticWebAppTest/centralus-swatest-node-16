module.exports = async function (context, req) {
  const date = "2025-03-23T22:12:07.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

