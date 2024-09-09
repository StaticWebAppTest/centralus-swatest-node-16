module.exports = async function (context, req) {
  const date = "2024-09-09T12:22:03.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

