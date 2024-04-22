module.exports = async function (context, req) {
  const date = "2024-04-22T17:07:44.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

