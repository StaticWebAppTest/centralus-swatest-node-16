module.exports = async function (context, req) {
  const date = "2024-04-01T15:09:30.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

