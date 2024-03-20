module.exports = async function (context, req) {
  const date = "2024-03-20T20:10:13.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

