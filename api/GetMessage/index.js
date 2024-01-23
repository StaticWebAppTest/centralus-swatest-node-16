module.exports = async function (context, req) {
  const date = "2024-01-23T12:17:43.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

