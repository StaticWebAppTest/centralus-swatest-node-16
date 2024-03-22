module.exports = async function (context, req) {
  const date = "2024-03-22T08:12:05.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

