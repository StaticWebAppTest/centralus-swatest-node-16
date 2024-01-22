module.exports = async function (context, req) {
  const date = "2024-01-22T23:09:26.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

