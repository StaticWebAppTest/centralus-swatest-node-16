module.exports = async function (context, req) {
  const date = "2024-01-21T20:09:50.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

