module.exports = async function (context, req) {
  const date = "2024-09-27T12:22:14.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

