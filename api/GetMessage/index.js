module.exports = async function (context, req) {
  const date = "2024-01-22T05:09:43.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

