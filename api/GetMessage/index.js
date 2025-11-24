module.exports = async function (context, req) {
  const date = "2025-11-24T22:12:30.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

