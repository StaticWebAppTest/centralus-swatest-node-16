module.exports = async function (context, req) {
  const date = "2025-08-21T23:12:30.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

