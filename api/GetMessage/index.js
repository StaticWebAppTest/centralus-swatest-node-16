module.exports = async function (context, req) {
  const date = "2025-01-18T08:13:10.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

