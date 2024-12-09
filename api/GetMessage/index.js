module.exports = async function (context, req) {
  const date = "2024-12-09T14:12:15.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

