module.exports = async function (context, req) {
  const date = "2023-04-07T20:09:07.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

