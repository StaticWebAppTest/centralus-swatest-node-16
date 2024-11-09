module.exports = async function (context, req) {
  const date = "2024-11-09T16:12:15.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

