module.exports = async function (context, req) {
  const date = "2024-04-23T20:09:43.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

