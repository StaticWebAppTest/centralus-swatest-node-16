module.exports = async function (context, req) {
  const date = "2024-08-24T03:11:23.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

