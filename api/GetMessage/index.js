module.exports = async function (context, req) {
  const date = "2024-11-30T22:11:00.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

