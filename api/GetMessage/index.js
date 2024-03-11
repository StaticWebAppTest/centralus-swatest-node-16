module.exports = async function (context, req) {
  const date = "2024-03-11T10:11:29.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

