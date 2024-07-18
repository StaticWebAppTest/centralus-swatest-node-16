module.exports = async function (context, req) {
  const date = "2024-07-18T20:11:02.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

