module.exports = async function (context, req) {
  const date = "2024-03-09T16:09:48.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

