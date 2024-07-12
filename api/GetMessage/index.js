module.exports = async function (context, req) {
  const date = "2024-07-12T21:10:29.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

