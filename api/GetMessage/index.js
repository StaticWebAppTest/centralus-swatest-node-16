module.exports = async function (context, req) {
  const date = "2024-01-09T12:17:14.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

