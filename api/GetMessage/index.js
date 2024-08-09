module.exports = async function (context, req) {
  const date = "2024-08-09T06:15:42.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

